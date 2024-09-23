function activeFeature(id) {
  document.getElementById("donateBtn").classList.remove("btn-click");
  document.getElementById("historyBtn").classList.remove("btn-click");
  document.getElementById(id).classList.add("btn-click");
  console.log(id);
}
