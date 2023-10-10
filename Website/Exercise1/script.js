const kaka = document.querySelector(".Num1");
const duck = document.querySelector(".Num2");
const SubmitBTN = document.querySelector(".SubmitBTN");
const Result = document.querySelector(".Result");
SubmitBTN.addEventListener('click', () => {
  const Sum = parseInt(kaka.value) + parseInt(duck.value);
  Result.innerHTML = Sum;
  console.log(Sum);
  
});