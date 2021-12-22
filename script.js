function Calculate() {
const N = document.querySelector(".people").value;
 const factorialize = (num) => {
   if (num === 0n) return 1n;
   return num * factorialize(num - 1n);
 };
 const prob = document.querySelector(".prob");
 prob.innerHTML = "";

 const A = parseFloat(((1-(String((factorialize(BigInt(365))/(factorialize(BigInt(365-N)))))/(Math.pow(365,N))))*100).toFixed(4));
   
console.log(A+' %');
prob.innerHTML ="Probability: " +A+ "%";
}
function myFunction() {
   var element = document.body;
   element.classList.toggle("dark-mode");
}
