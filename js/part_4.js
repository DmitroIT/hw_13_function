const nullInput = 'Вы отменили ввод'
const emptyInpur = 'Вы оставили поле ввода пустым'
const input1 = prompt("Введите какой-то текст");
if (input1 === null) {
    console.log(`${nullInput}`)
} else if (input1 === '') {
    console.log(`${emptyInpur}`)
} else {
    const input2 = prompt("Что убрать с этого текста?");
    if (input2 === null) {
        console.log(`${nullInput}`)
    } else if (input2 === '') {
        console.log(`${emptyInpur}`)
    } else {
        function removeChars(inputStr, delStr) {
            for (let i = 0; i < inputStr.length; i++) {
              if (delStr.includes(inputStr[i])) {
                inputStr = inputStr.slice(0, i) + inputStr.slice(i + 1);
                i--
              }
            }
            return inputStr;
          }
          const result = removeChars(input1, input2);
          console.log(result);
    }
}




