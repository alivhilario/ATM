const ameleUser = {
  name: "eiffel",
  balance: 80,
};

let getBalance = () => {
  const balance = ameleUser.balance;
  document.querySelector(
    "#resultDiv"
  ).innerHTML = `Your balance is $${balance}`;
};
let getDeposit = () => {
  let amount = Number(prompt("enter amount:"));
  let currentBalance = ameleUser.balance;
  var attempt1 = amount + currentBalance;

  if (currentBalance < 990 && attempt1 <= 990) {
    let newAmount = currentBalance + amount;

    document.querySelector(
      "#resultDiv"
    ).innerHTML = `You add $${amount}. Your Balance is $${newAmount}`;

    ameleUser.balance = newAmount;
  } else if (currentBalance >= 990) {
    alert("You have reached the maximun to add, you can not add more⚠️");

    document.querySelector("#resultDiv").innerHTML =
      "You have reached the maximun.";
  } else if (attempt1 > 990) {
    var maxAmount = 990 - currentBalance;
    alert(`The maximum amount to add now is ${maxAmount}. try again`);
    document.querySelector("#depositDiv").innerHTML = "enter a smaller amount";
  }
};

let getWithdrawal = () => {
  let withdraw = Number(prompt("enter amount:"));
  let currentBalance = ameleUser.balance;
  var attempt2 = currentBalance - withdraw;

  if (currentBalance > 10 && attempt2 >= 10) {
    let newAmount = currentBalance - withdraw;

    document.querySelector(
      "#resultDiv"
    ).innerHTML = `You get out $${withdraw}. Your Balance is $${newAmount}`;

    ameleUser.balance = newAmount;
  } else if (currentBalance <= 10) {
    alert("You already have the minimum amount. You can not withdraw more⚠️");

    document.querySelector("#resultDiv").innerHTML =
      "You already have the minimum amount.";
  } else if ((attempt2 = 10)) {
    var maxWithdraw = currentBalance - 10;
    alert(`The maximum amount to withdraw now is ${maxWithdraw}. try again`);
    document.querySelector("#depositDiv").innerHTML =
      "get out a smaller amount";
  }
};
