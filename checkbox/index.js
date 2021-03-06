'use strict'

const checkboxes = document.querySelectorAll('.inbox input[type="checkbox"]');
let lastChecked;

function handleCheck(e) {
  let inBetween = false;
  if (e.shiftKey && this.checked) {
    checkboxes.forEach(checkbox => {
      if (checkbox === this || checkbox === lastChecked) {
        // toggle inBetween
        inBetween = !inBetween;
      }
      if (inBetween){
        checkbox.checked = true;
      }
    })
  }
  lastChecked = this;
}

checkboxes.forEach((el, i) => {
  el.addEventListener('click', handleCheck);
});