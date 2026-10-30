
// QuickEveryday - Calculator functionality

// Percentage Calculator
function calculatePercentage() {
  const percentage = Number(document.getElementById("percentage").value);
  const number = Number(document.getElementById("percentageNumber").value);
  const result = document.getElementById("percentageResult");

 if (
  document.getElementById("percentage").value === "" ||
  document.getElementById("percentageNumber").value === "" ||
  !validNumbers(percentage, number) ||
  percentage < 0 ||
  number < 0
) {
  result.textContent = "Please enter valid numbers greater than or equal to zero.";
  return;
}

result.textContent = `${percentage}% of ${number} = ${(percentage / 100 * number).toFixed(2)}`;
}
// 
function calculateDiscount() {
  const price = Number(document.getElementById("originalPrice").value);
  const discount = Number(document.getElementById("discountRate").value);
  const currency = document.getElementById("discountCurrency").value;
  const result = document.getElementById("discountResult");

  if (
    document.getElementById("originalPrice").value === "" ||
    document.getElementById("discountRate").value === "" ||
    !Number.isFinite(price) ||
    !Number.isFinite(discount) ||
    price < 0 ||
    discount < 0 ||
    discount > 100
  ) {
    result.textContent = "Please enter a valid price and a discount between 0 and 100%.";
    return;
  }

  const savings = price * (discount / 100);
  const finalPrice = price - savings;

  result.textContent =
    `You save ${currency}${savings.toFixed(2)}. ` +
    `Your final price is ${currency}${finalPrice.toFixed(2)}.`;
}


// Bill Splitter
function splitBill() {
  const total = Number(document.getElementById("billTotal").value);
  const people = Number(document.getElementById("billPeople").value);
  const currency = document.getElementById("billCurrency").value;
  const result = document.getElementById("billResult");

  if (
    document.getElementById("billTotal").value === "" ||
    document.getElementById("billPeople").value === "" ||
    !Number.isFinite(total) ||
    !Number.isFinite(people) ||
    total < 0 ||
    people < 1 ||
    !Number.isInteger(people)
  ) {
    result.textContent = "Enter a valid bill amount and whole number of people.";
    return;
  }

  const share = total / people;

  result.textContent = `Each person pays ${currency}${share.toFixed(2)}.`;
}


// Age Calculator
function calculateAge() {
  const birthDate = document.getElementById("birthDate").value;
  const result = document.getElementById("ageResult");

  if (!birthDate) {
    result.textContent = "Please select your date of birth.";
    return;
  }

  const birth = new Date(birthDate + "T00:00:00");
  const today = new Date();
  today.setHours(0, 0, 0, 0);

  if (birth > today) {
    result.textContent = "Date of birth cannot be in the future.";
    return;
  }

  let years = today.getFullYear() - birth.getFullYear();
  let months = today.getMonth() - birth.getMonth();
  let days = today.getDate() - birth.getDate();

  if (days < 0) {
    months--;
    days += new Date(today.getFullYear(), today.getMonth(), 0).getDate();
  }

  if (months < 0) {
    years--;
    months += 12;
  }

  result.textContent = `Your age is ${years} years, ${months} months and ${days} days.`;
}

// Date Calculator
function calculateDateDifference() {
  const start = document.getElementById("startDate").value;
  const end = document.getElementById("endDate").value;
  const result = document.getElementById("dateResult");

  if (!start || !end) {
    result.textContent = "Please select both dates.";
    return;
  }

  const first = new Date(start + "T00:00:00Z");
  const second = new Date(end + "T00:00:00Z");

  const difference = Math.abs(second - first);
  const days = Math.round(difference / (1000 * 60 * 60 * 24));

  result.textContent = `There are ${days} days between these dates.`;
}

// Shared validation helper
function validNumbers(...values) {
  return values.every(value => Number.isFinite(value));
}

// Show a message in the result area
function showResult(elementId, message) {
  const element = document.getElementById(elementId);
  if (element) element.textContent = message;
}

console.log("QuickEveryday JavaScript loaded successfully!");



async function copyDiscountResult() {
  const result = document.getElementById("discountResult");

  if (
    !result.textContent ||
    result.textContent === "Your answer will appear here."
  ) {
    alert("Please calculate your discount first.");
    return;
  }

  try {
    await navigator.clipboard.writeText(result.textContent);
    alert("Result copied successfully!");
  } catch (error) {
    alert("Unable to copy. Please try again.");
  }
}


async function copyBillResult() {
  const result = document.getElementById("billResult");

  if (
    !result.textContent ||
    result.textContent === "Your answer will appear here."
  ) {
    alert("Please split the bill first.");
    return;
  }

  try {
    await navigator.clipboard.writeText(result.textContent);
    alert("Result copied successfully!");
  } catch (error)   {
    alert("Unable to copy. Please try again.");
  }
}
