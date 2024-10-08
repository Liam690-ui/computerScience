const form = document.getElementById("userForm");
const usernameInput = document.getElementById("username");
const emailInput = document.getElementById("email");
const displayInfo = document.getElementById("displayInfo");
const clearStorageBtn = document.getElementById("clearStorage");

const saveDataToLocalStorage = (username, email) => {
  localStorage.setItem("username", username);
  localStorage.setItem("email", email);
};

const displayData = () => {
  const storedUsername = localStorage.getItem("username");
  const storedEmail = localStorage.getItem("email");
  if (username && email) {
    displayInfo.textContent = `Hello ${storedUsername}, your email is ${storedEmail}`;
  } else displayInfo.textContent = "";
};
const clearData = () => {
  localStorage.removeItem("username");
  localStorage.removeItem("email");
  displayInfo.textContent = "";
};

form.addEventListener("submit", (event) => {
  event.preventDefault();
  const username = usernameInput.value;
  const email = emailInput.value;
  saveDataToLocalStorage(username, email);
  displayData();
  usernameInput.value = "";
  emailInput.value = "";
});
clearStorageBtn.addEventListener("click", clearData);
console.log(localStorage);
// *********************************************************
// *********************************************************
// *********************************************************
// const userInput = document.getElementById("userInput");
// const enterBtn = document.getElementById("enterBtn");

// const userData = [];

// const handleUserInput = (e) => {
//   e.preventDefault();
//   if (userInput.value === "") return -1;
//   const input = userInput.value;
//   userData.push(input);
//   userInput.value = "";
//   logUserInput();
// };
// function logUserInput() {
//   console.log("this is user data", userData);
// }

// enterBtn.addEventListener("click", handleUserInput);
