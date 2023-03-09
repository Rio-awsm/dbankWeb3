import { dbank } from "../../declarations/dbank";

window.addEventListener("load",async  function(){
  update();
});

document.querySelector("form").addEventListener("submit", async function(event){
  event.preventDefault();

const btn = event.target.querySelector("#submit-btn");

  const inputAmount =parseFloat (document.getElementById("input-amount").value);
  const outputAmount = parseFloat(document.getElementById("withdrawal-amount").value);
 
  btn.setAttribute("disabled",true);
 
if( document.getElementById("input-amount").value.length != 0){
  await dbank.topUp(inputAmount);
}
 
if(document.getElementById("withdrawal-amount").value.lentgth !=0){
  await dbank.withdrawl(outputAmount);
}
// await dbank.compund();
update();
  
document.getElementById("input-amount").value = "";
document.getElementById("withdrawal-amount").value ="";

  btn.removeAttribute("disabled");

});

async function update(){
  const currentAmount = await dbank.checkBalance();
  document.getElementById("value").innerText= Math.round (currentAmount*100)/100;

};