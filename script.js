const expenseName = document.querySelector(".expenseName");
const expenseDate = document.querySelector(".expenseDate");
const expensePrice = document.querySelector(".expensePrice");
const paymentMethod = document.querySelector(".paymentMethod");
const table = document.querySelector(".table");
const firstRow = document.querySelector(".expense");
const tableBody = document.querySelector(".tableBody");
const addExpense = document.querySelector(".addExpense");

const addNewExpense = function (e) {
  if (
    expenseName.value == "" ||
    expensePrice.value == "" ||
    expenseDate.value == ""
  ) {
    alert("Please enter a value in all required fields");
    return 1;
  }
  if (tableBody.lastElementChild === firstRow) {
    tableBody.removeChild(firstRow);
  }
  // append newRow
  const newRow = document.createElement("tr");
  table.appendChild(newRow);

  // create new element and append to row
  const tdName = document.createElement("td");
  tdName.innerHTML = expenseName.value;
  newRow.appendChild(tdName);

  // create new element and append to row
  const tdDate = document.createElement("td");
  tdDate.innerHTML = expenseDate.value;
  newRow.appendChild(tdDate);

  // create new element and append to row
  const tdPrice = document.createElement("td");
  tdPrice.innerHTML = expensePrice.value;
  newRow.appendChild(tdPrice);

  // create new element and append to row
  const tdpaymentMethod = document.createElement("td");
  tdpaymentMethod.innerHTML =
    paymentMethod.value + "&nbsp &nbsp &nbsp &nbsp &nbsp &nbsp &nbsp";
  newRow.appendChild(tdpaymentMethod);

  //create button and append to payment method
  const deleteBtn = document.createElement("button");
  deleteBtn.classList.add("deleteMe");
  deleteBtn.textContent = "X";
  tdpaymentMethod.appendChild(deleteBtn);

  deleteBtn.addEventListener("click", function () {
    table.removeChild(newRow);
  });
};
addExpense.addEventListener("click", addNewExpense);
document
  .querySelector(".container")
  .addEventListener("keydown", function (enter) {
    if (enter.key === "Enter") {
      document.querySelector(".addExpense").click();
    }
  });

const clearBtn = document.querySelector(".Clear");
clearBtn.addEventListener("click", function () {
  const deleteBtns = document.querySelectorAll(".deleteMe");
  for (let i = 0; i < deleteBtns.length; i++) {
    deleteBtns[i].click(), 20000;
  }
});
//     deleteBtns[i].addEventListener("click", function () {
//       table.removeChild(newRow);
//     });
//   }
