// Get input elements
const dayInput = document.getElementById("day");
const monthInput = document.getElementById("month");
const yearInput = document.getElementById("year");

// Get output elements
const dayOutPut = document.getElementById("DD");
const monthOutPut = document.getElementById("MM");
const yearOutPut = document.getElementById("YYYY");

// Get submit button
const btn = document.getElementById("btn");

// Add click event listener to the button
btn.addEventListener('click', handleSubmit);

// Get current date
const date = new Date();
let day = date.getDate();
let month = 1 + date.getMonth();
let year = date.getFullYear();

// Number of days in each month (0-based index)
const months = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];

// Function to validate input fields
function validate() {
  const inputs = document.querySelectorAll("input");
  let validator = true;
  
  // Loop through each input field
  inputs.forEach((i) => {
    const parent = i.parentElement;
    
    if (!i.value) {
      // Handle empty input case
      i.style.borderColor = `hsl(0, 100%, 67%)`;
      parent.querySelector("p").innerHTML = "This field is required.";
      validator = false;
    } else {
      // Reset styles and error messages for valid input
      i.style.borderColor = `hsl(0, 0%, 8%)`;
      parent.querySelector("p").innerHTML = "";
    }
  });
  
  // Check if the month input is valid
  if (monthInput.value > 12) {
    monthInput.style.borderColor = `hsl(0, 100%, 67%)`;
    monthInput.parentElement.querySelector("p").innerHTML =
      "Must be a valid month.";
    validator = false;
  }
  
  // Check if the day input is valid
  if (dayInput.value > 31) {
    dayInput.style.borderColor = `hsl(0, 100%, 67%)`;
    dayInput.parentElement.querySelector("p").innerHTML =
      "Must be a valid day.";
    validator = false;
  }
  
  return validator;
}

// Function to handle form submission
function handleSubmit() {
  if (validate()) {
    // Adjust day if input day is greater than current day
    if (dayInput.value > day) {
      day += months[month - 2];
      month -= 1;
    }
    
    // Adjust month and year if input month is greater than current month
    if (monthInput.value > month) {
      month += 12;
      year -= 1;
    }

    // Calculate differences in days, months, and years
    const d = day - dayInput.value;
    const m = month - monthInput.value;
    const y = year - yearInput.value;

    // Display differences in the output elements
    dayOutPut.innerHTML = d;
    monthOutPut.innerHTML = m;
    yearOutPut.innerHTML = y;
  }
}
