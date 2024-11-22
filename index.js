const expenses = [];


const inputNode = document.querySelector('.js-exspense-input');
const btnNode = document.querySelector('.js-btn');
const historyNode = document.querySelector('.js-history');

btnNode.addEventListener('click', () => {
    //получаем значение из инпута
    if (inputNode.value === '') {
       return;
    }
  
const expense = parseInt(inputNode.value);

expenses.push(expense);


inputNode.value = '';

//Сохраняем трату в список



//выводим новый список трат
let expensesListHTML ='';


expenses.forEach(element => {
   
    expensesListHTML += `<li>${element}</li>`;
  
});



historyNode.innerHTML = `<ol>${expensesListHTML}</ol>`;
});


