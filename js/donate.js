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
 //check that have I enough money in my account 
 const accountBalance=parseFloat(document.getElementById('account-balance').innerText);
 if(accountBalance>donateAmountNumber){
   //reduce balance
   const reduceBalance=parseFloat(accountBalance-donateAmountNumber);
   document.getElementById('account-balance').innerText=reduceBalance
    // add to the donation account
  const donateBalance=parseFloat(document.getElementById('donate1').innerText);
  const updatedDonateBalance=parseFloat(donateAmountNumber+donateBalance);
  document.getElementById('donate1').innerText=updatedDonateBalance;
  // add the donation history to the history section
  const h2=document.createElement('h2');
  h2.innerText=`${donateAmountNumber} Taka is Donated for Flood at Noakhali, Bangladesh`;
  document.getElementById('history-section').appendChild(h2);
  const time= new Date();
  const p =document.createElement('p');
  document.getElementById('history-section').appendChild(p);
  p.innerText=time;
  const h4=document.createElement('h4');
  h4.innerText=`-----------------------------------------------------`
  document.getElementById('history-section').appendChild(h4);

  //show the modal
  my_modal_1.showModal()
  }
  else{
    alert(`You don't have sufficient balance . Please try again`);
  }}
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
    //check that have I enough money in my account
    const accountBalance=parseFloat(document.getElementById('account-balance').innerText);
    if(accountBalance>donateAmountNumber){
      //reduce balance
      const reduceBalance=parseFloat(accountBalance-donateAmountNumber);
      document.getElementById('account-balance').innerText=reduceBalance

      // add to the donation account
    const donateBalance=parseFloat(document.getElementById('donate2').innerText);
    const updatedDonateBalance=parseFloat(donateAmountNumber+donateBalance);
    document.getElementById('donate2').innerText=updatedDonateBalance;
      // add the donation history to the history section
  const h2=document.createElement('h2');
  h2.innerText=`${donateAmountNumber} Taka is  Donate for Flood Relief in Feni,Bangladesh`;
  document.getElementById('history-section').appendChild(h2);
  const time= new Date();
  const p =document.createElement('p');
  document.getElementById('history-section').appendChild(p);
  p.innerText=time;
  const h4=document.createElement('h4');
  h4.innerText=`-----------------------------------------------------`
  document.getElementById('history-section').appendChild(h4);

  //show the modal
    my_modal_2.showModal()
    }
    else{
      alert(`You don't have sufficient balance . Please try again`);
    }}
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
    //check that have I enough money in my account 
    const accountBalance=parseFloat(document.getElementById('account-balance').innerText);
    if(accountBalance>donateAmountNumber){
      //reduce balance
      const reduceBalance=parseFloat(accountBalance-donateAmountNumber);
      document.getElementById('account-balance').innerText=reduceBalance

      // add to the donation account
      const donateBalance=parseFloat(document.getElementById('donate3').innerText);
      const updatedDonateBalance=parseFloat(donateAmountNumber+donateBalance);
      document.getElementById('donate3').innerText=updatedDonateBalance;
      
       // add the donation history to the history section
    const h2=document.createElement('h2');
    h2.innerText=`${donateAmountNumber} Taka is Donated for Aid for Injured in the Quota Movement`;
    document.getElementById('history-section').appendChild(h2);
    const time= new Date();
    const p =document.createElement('p');
    document.getElementById('history-section').appendChild(p);
    p.innerText=time;
    const h4=document.createElement('h4');
    h4.innerText=`-----------------------------------------------------`
    document.getElementById('history-section').appendChild(h4);
  
    //show the modal
    my_modal_3.showModal()
    }
    else{
      alert(`You don't have sufficient balance . Please try again`);
    }
    }
    else{
      alert('Your amount is not valid .Please Try Again')
    }
})
