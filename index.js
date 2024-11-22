const LIMIT = 10000;

const expenses = [];

const inputNode = document.querySelector(".js-exspense-input");
const btnNode = document.querySelector(".js-btn");
const historyNode = document.querySelector(".js-history");
const sumNode = document.querySelector(".js-sum");
const limitNode = document.querySelector(".js-limit");  
const statusNode = document.querySelector(".js-status");

limitNode.innerText = LIMIT;

btnNode.addEventListener("click", () => {
  //получаем значение из инпута
  if (inputNode.value === "") {
    return;
  }

  const expense = parseInt(inputNode.value);

  expenses.push(expense);

  inputNode.value = "";

  //Сохраняем трату в список

  //выводим новый список трат
  let expensesListHTML = "";

  expenses.forEach((element) => {
    expensesListHTML += `<li>${element} руб.</li> `;
  });

  historyNode.innerHTML = `<ol>${expensesListHTML}</ol>`;

  // Получаем общую сумму трат

  let sum = 0;

  expenses.forEach((element) => {
    sum += element;
  });

  sumNode.innerText = sum;

  // Проверяем лимит

  if (sum <= LIMIT) {
    statusNode.innerText = "все хорошо";
  } else {
    statusNode.innerText = "все плохо";
  }     


});
