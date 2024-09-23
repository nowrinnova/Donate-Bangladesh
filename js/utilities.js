// activate the button
function activeFeature(id) {
  document.getElementById("donateBtn").classList.remove("btn-click");
  document.getElementById("historyBtn").classList.remove("btn-click");
  document.getElementById(id).classList.add("btn-click");
  console.log(id);
}

// show & hide the section
function showSectionById(id){
  document.getElementById('donation-section').classList.add('hidden');
  document.getElementById('history-section').classList.add('hidden');
  document.getElementById(id).classList.remove('hidden');
}

//input return value as a Number
function returnAmount(id) {
  const value = document.getElementById(id).value;
  const amountNumber = parseFloat(value);
  return amountNumber;
}
