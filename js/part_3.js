function countProduct() {
  let inputQues = +prompt("Введите количество товара");
  let inputQuesArr = [inputQues];

  for (let i = 0; i < inputQues; i++) {
    inputQuesArr[i] = new Array();
    let nameProduct = prompt(`Введите товар № ${i + 1}`);
    

    let quantityProduct = +prompt(`Введите количество для товара "${nameProduct}"`);

    inputQuesArr[i][0] = nameProduct;
    inputQuesArr[i][1] = quantityProduct;
  }
  return inputQuesArr;
}
let myCountProduct = countProduct();
console.log(myCountProduct);
