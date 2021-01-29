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
// function handelphoneChange(isIncrease) {
//   var numberOfphone = document.getElementById("numberOfphone");
//   var numberOfphoneint = parseInt(numberOfphone.value);
//   let phoneCount = numberOfphoneint;
//   if (isIncrease == true) {
//     phoneCount = numberOfphoneint + 1;
//   } else if (isIncrease == false && phoneCount > 0) {
//     phoneCount = numberOfphoneint - 1;
//   }
//   //  var phoneCount = numberOfphoneint + 1;
//   numberOfphone.value = phoneCount;
//   var newPhonePrice = phoneCount * 1289;
//   document.getElementById("phonePrice").innerText = newPhonePrice;
// }
// function handelProductChange(isIncrease) {
//   var caseCountValue = document.getElementById("case-count");
//   var caseCountInt = parseInt(caseCountValue.value);
//   // var newCount = caseCountInt - 1;
//   let newCount = caseCountInt;
//   if (isIncrease == false && caseCountInt > 0) {
//     newCount = caseCountInt - 1;
//   } else if (isIncrease == true) {
//     newCount = caseCountInt + 1;
//   }
//   caseCountValue.value = newCount;
//   var newPrice = 60 * newCount;
//   document.getElementById("casePrice").innerText = newPrice;
function handelChange(product, isIncrease) {
  var productCountValue = document.getElementById(product + "count");
  var productCountInt = parseInt(productCountValue.value);
  // var newCount = caseCountInt - 1;
  let newCount = productCountInt;
  if (isIncrease == false && productCountInt > 0) {
    newCount = productCountInt - 1;
  } else if (isIncrease == true) {
    newCount = productCountInt + 1;
  }
  productCountValue.value = newCount;
  let productTotal = 0;
  if (product == "phone") {
    productTotal = newCount * 1289;
  } else if (product == "case") {
    productTotal = newCount * 60;
  }
  // var newPrice = 60 * newCount;
  document.getElementById(product + "Price").innerText = productTotal;
  subTotal();
}
function subTotal() {
  const phoneMoney = document.getElementById("phonecount");
  const countPhone = parseInt(phoneMoney.value);
  const caseMoney = document.getElementById("casecount");
  const countCase = parseInt(caseMoney.value);
  const totalSub = countCase * 60 + countPhone * 1289;
  document.getElementById("sub-total").innerText = "$" + totalSub;
  const taxflot = totalSub * 0.15;
  const tax = Math.floor(taxflot);
  document.getElementById("tax").innerText = "$" + tax;
  const total = totalSub + tax;
  document.getElementById("total").innerText = "$" + total;
}
