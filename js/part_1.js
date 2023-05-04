let ques = prompt("Введите что-то через запятую", "цифры, буквы, слова");
if (ques === null) {
  console.log("Пустая строка, введите данные");
} else if (ques === '') {
  console.log("Вы отменили");
}
 else {
  function aver() {
    let arr = ques.split(",");

    let numArr = [];

    for (let i = 0; i < arr.length; i++) {
      let curentNum = Number(arr[i]);
      if (typeof curentNum[i] === "number" || !isNaN(curentNum)) {
        numArr.push(curentNum);
      }
    }
    let leng = numArr.length;

    let sum = numArr.reduce((acc, item) => acc + item, 0);

    let result = sum / leng;
    return result;
  }
  let resultAver = aver();
  console.log(`Среднеарифметическое: ${resultAver}`);
}
