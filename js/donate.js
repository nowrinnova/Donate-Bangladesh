const donateBtn=document.getElementById('donateBtn')
document.getElementById('donateBtn').addEventListener('click',()=>{
  activeFeature('donateBtn');
})
// add donation for card 1
const donateNow1=document.getElementById('donate-button1');
donateNow1.addEventListener('click',(event)=>{
  event.preventDefault();
  const donateAmountNumber =returnAmount('donate-amount1');
  document.getElementById('donate-amount1').value=" ";
  // validation is it a number or not
  if((!isNaN(donateAmountNumber)) && (donateAmountNumber>0)){
  const donateBalance=parseFloat(document.getElementById('donate1').innerText);
  const updatedDonateBalance=parseFloat(donateAmountNumber+donateBalance);
  document.getElementById('donate1').innerText=updatedDonateBalance;
  my_modal_1.showModal()
  }
  else{
    alert('Your amount is not valid .Please Try Again')
  }
})
// add donation for card 2
const donateNow2=document.getElementById('donate-button2');
donateNow2.addEventListener('click',(event)=>{
  event.preventDefault();
  const donateAmountNumber =returnAmount('donate-amount2');
  document.getElementById('donate-amount2').value=" ";
   // validation is it a number or not
  if((!isNaN(donateAmountNumber)) && (donateAmountNumber>0)){
    const donateBalance=parseFloat(document.getElementById('donate2').innerText);
    const updatedDonateBalance=parseFloat(donateAmountNumber+donateBalance);
    document.getElementById('donate2').innerText=updatedDonateBalance;
    my_modal_2.showModal()
    }
    else{
      alert('Your amount is not valid .Please Try Again')
    }
})
// add donation for card 3
const donateNow3=document.getElementById('donate-button3');
donateNow3.addEventListener('click',(event)=>{
  event.preventDefault();
  const donateAmountNumber =returnAmount('donate-amount3');
  document.getElementById('donate-amount3').value=" ";
   // validation is it a number or not
  if((!isNaN(donateAmountNumber)) && (donateAmountNumber>0)){
  const donateBalance=parseFloat(document.getElementById('donate3').innerText);
  const updatedDonateBalance=parseFloat(donateAmountNumber+donateBalance);
  document.getElementById('donate3').innerText=updatedDonateBalance;
    my_modal_3.showModal()
    }
    else{
      alert('Your amount is not valid .Please Try Again')
    }
})
