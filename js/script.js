// document.getElementById("case-plus").addEventListener("click", function () {
//   var caseCountValue = document.getElementById("case-count");
//   var caseCountInt = parseInt(caseCountValue.value);
//   var newCount = caseCountInt + 1;
//   caseCountValue.value = newCount;
//   var newPrice = 60 * newCount;
//   document.getElementById("casePrice").innerText = newPrice;
// });
// document.getElementById("case-minus").addEventListener("click", function () {
//   var caseCountValue = document.getElementById("case-count");
//   var caseCountInt = parseInt(caseCountValue.value);
//   var newCount = caseCountInt - 1;
//   caseCountValue.value = newCount;
//   var newPrice = 60 * newCount;
//   document.getElementById("casePrice").innerText = newPrice;
// });
function handelProductChange(isIncrease) {
  var caseCountValue = document.getElementById("case-count");
  var caseCountInt = parseInt(caseCountValue.value);
  // var newCount = caseCountInt - 1;
  let newCount = caseCountInt;
  if (isIncrease == false && caseCountInt > 0) {
    newCount = caseCountInt - 1;
  } else if (isIncrease == true) {
    newCount = caseCountInt + 1;
  }
  caseCountValue.value = newCount;
  var newPrice = 60 * newCount;
  document.getElementById("casePrice").innerText = newPrice;
}
// document.getElementById("phoneMinusBtn").addEventListener("click", function () {
//   handelphoneChange(false);
// var numberOfphone = document.getElementById("numberOfphone");
// var numberOfphoneint = parseInt(numberOfphone.value);
// var phoneCount = numberOfphoneint - 1;
// numberOfphone.value = phoneCount;
// var newPhonePrice = phoneCount * 1289;
// document.getElementById("phonePrice").innerText = newPhonePrice;
// });
// document.getElementById("phonePlusBtn").addEventListener("click", function () {
//   handelphoneChange(true);
// var numberOfphone = document.getElementById("numberOfphone");
// var numberOfphoneint = parseInt(numberOfphone.value);
// var phoneCount = numberOfphoneint + 1;
// numberOfphone.value = phoneCount;
// var newPhonePrice = phoneCount * 1289;
// document.getElementById("phonePrice").innerText = newPhonePrice;
// });
function handelphoneChange(isIncrease) {
  var numberOfphone = document.getElementById("numberOfphone");
  var numberOfphoneint = parseInt(numberOfphone.value);
  let phoneCount = numberOfphoneint;
  if (isIncrease == true) {
    phoneCount = numberOfphoneint + 1;
  } else if (isIncrease == false && phoneCount > 0) {
    phoneCount = numberOfphoneint - 1;
  }
  //  var phoneCount = numberOfphoneint + 1;
  numberOfphone.value = phoneCount;
  var newPhonePrice = phoneCount * 1289;
  document.getElementById("phonePrice").innerText = newPhonePrice;
}
