"use strict";

const entryForm = document.getElementById("entryForm");
const entriesSection = document.querySelector("#entries");
const entryTextbox = document.querySelector(".entry-textbox");
const entriesNav = document.querySelector(".entries-nav");
let count = 1;

function addEntryToDiary(event) {
  event.preventDefault();
  const entryDiv = document.createElement("div");
  entryDiv.className = "single-entry";
  entryDiv.innerText = entryTextbox.value;
  entryDiv.style.display = "none";
  entriesSection.appendChild(entryDiv);
  entryTextbox.value = "";

  const displayEntryBtn = document.createElement("button");
  displayEntryBtn.className = "display-entry-button";
  displayEntryBtn.innerText = count;
  entriesNav.appendChild(displayEntryBtn);

  displayEntryBtn.addEventListener("click", function () {
    const allEntries = document.querySelectorAll(".single-entry");
    for (let i = 0; i < allEntries.length; i++) {
      allEntries[i].style.display = "none";
    }
    entryDiv.style.display = "block";
  });

  count++;
}
entryForm.addEventListener("submit", addEntryToDiary);
