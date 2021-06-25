// -----------------------FOR TABLE-----------------------
// var submit = document.getElementById('submit');
// submit.addEventListener('click',displayDetails);
// var row=1;
function displayDetails3(){
  const table=document.getElementById('display3');
  const newRow = table.insertRow();
  var cell1=newRow.insertCell(0);
  var cell2=newRow.insertCell(1);
  var cell3=newRow.insertCell(2);
  var cell4=newRow.insertCell(3);
  var cell5=newRow.insertCell(4);
  var cell6=newRow.insertCell(5);
  var cell7=newRow.insertCell(6);
  var cell8=newRow.insertCell(7);
  cell1.innerHTML=TA3;
  cell2.innerHTML=TB3;
  cell3.innerHTML=TC3;
  cell4.innerHTML=TD3;
  if(TA3==1){
    if(TB3==1 && TC3==1 && TD3==1){
      cell5.innerHTML=25;
      cell6.innerHTML=25;
      cell7.innerHTML=25;
      cell8.innerHTML=25;}
    else if(TB3==1 && TC3==1 && TD3==2){
      cell5.innerHTML=0;
      cell6.innerHTML=0;
      cell7.innerHTML=0;
      cell8.innerHTML=75;}
    else if(TB3==1 && TC3==2 && TD3==1){
      cell5.innerHTML=0;
      cell6.innerHTML=0;
      cell7.innerHTML=75;
      cell8.innerHTML=0;}
    else if(TB3==1 && TC3==2 && TD3==2){
      cell5.innerHTML=-12.5;
      cell6.innerHTML=-12.5;
      cell7.innerHTML=50;
      cell8.innerHTML=50;}
    else if(TB3==2 && TC3==1 && TD3==1){
      cell5.innerHTML=0;
      cell6.innerHTML=75;
      cell7.innerHTML=0;
      cell8.innerHTML=0;}
    else if(TB3==2 && TC3==1 && TD3==2){
      cell5.innerHTML=-12.5;
      cell6.innerHTML=50;
      cell7.innerHTML=-12.5;
      cell8.innerHTML=50;}
    else if(TB3==2 && TC3==2 && TD3==1){
      cell5.innerHTML=-12.5;
      cell6.innerHTML=50;
      cell7.innerHTML=50;
      cell8.innerHTML=-12.5;}
    else if(TB3==2 && TC3==2 && TD3==2){
      cell5.innerHTML=-25;
      cell6.innerHTML=25;
      cell7.innerHTML=25;
      cell8.innerHTML=25;}
  }
  else if(TA3==2){
    if(TB3==1 && TC3==1 && TD3==1){
      cell5.innerHTML=75;
      cell6.innerHTML=0;
      cell7.innerHTML=0;
      cell8.innerHTML=0;}
    else if(TB3==1 && TC3==1 && TD3==2){
      cell5.innerHTML=50;
      cell6.innerHTML=-12.5;
      cell7.innerHTML=-12.5;
      cell8.innerHTML=50;}
    else if(TB3==1 && TC3==2 && TD3==1){
      cell5.innerHTML=50;
      cell6.innerHTML=-12.5;
      cell7.innerHTML=50;
      cell8.innerHTML=-12.5;}
    else if(TB3==1 && TC3==2 && TD3==2){
      cell5.innerHTML=25;
      cell6.innerHTML=-25;
      cell7.innerHTML=25;
      cell8.innerHTML=25;}
    else if(TB3==2 && TC3==1 && TD3==1){
      cell5.innerHTML=50;
      cell6.innerHTML=50;
      cell7.innerHTML=-12.5;
      cell8.innerHTML=-12.5;}
    else if(TB3==2 && TC3==1 && TD3==2){
      cell5.innerHTML=25;
      cell6.innerHTML=25;
      cell7.innerHTML=-25;
      cell8.innerHTML=25;}
    else if(TB3==2 && TC3==2 && TD3==1){
      cell5.innerHTML=25;
      cell6.innerHTML=25;
      cell7.innerHTML=25;
      cell8.innerHTML=-25;}
    else if(TB3==2 && TC3==2 && TD3==2){
      cell5.innerHTML=-25;
      cell6.innerHTML=-25;
      cell7.innerHTML=-25;
      cell8.innerHTML=-25;}
  }
}
