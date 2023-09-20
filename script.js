const pickerBtn = document.querySelector("#picker-btn");
const clearBtn = document.querySelector("#clear-btn");
const colorList = document.querySelector(".all-colors");
const exportBtn = document.querySelector("#export-btn");

let pickedColors = JSON.parse(localStorage.getItem("colors-list")) || [];

let currentPopup = null;

const copyToClipboard = async (text, element) => {
  try {
    await navigator.clipboard.writeText(text);
    element.innerText = "Copied!";
    // Resseting element text after 1 second
    setTimeout(() => {
      element.innerText = text;
    }, 1000);
  } catch (error) {
    alert("Filed to copy text!");
  }
};