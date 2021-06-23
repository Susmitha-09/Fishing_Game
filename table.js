// -----------------------FOR TABLE-----------------------
// var submit = document.getElementById('submit');
// submit.addEventListener('click',displayDetails);
var row=1;
function displayDetails(){

  var table=document.getElementById('display');
  // var TA=document.getElementById('A');
  // var TeamA=A.options(TA.selectedIndex).text;
  // var TB=document.getElementById('B');
  // var TeamB=B.options(TB.selectedIndex).text;
  // var TC=document.getElementById('C');
  // var TeamC=C.options(TC.selectedIndex).text;
  // var TD=document.getElementById('D');
  // var TeamD=D.options(TD.selectedIndex).text;
  // if(!TeamA || !TeamB || !TeamC || !TeamD){
  //   alert("Please fill all the boxes");
  //   return;
  // }
  var newRow = table.insertRow(row);
  var cell1=newRow.insertCell();
  var cell2=newRow.insertCell();
  var cell3=newRow.insertCell();
  var cell4=newRow.insertCell();
  var cell5=newRow.insertCell();
  var cell6=newRow.insertCell();
  var cell7=newRow.insertCell();
  var cell8=newRow.insertCell();
  // TA = document.getElementById('A').value;
  // TB = document.getElementById('B').value;
  // TC = document.getElementById('C').value;
  // TD = document.getElementById('D').value;
  cell1.innerHTML=TA;
  cell2.innerHTML=TB;
  cell3.innerHTML=TC;
  cell4.innerHTML=TD;
  if(TA==1){
    if(TB==1 && TC==1 && TD==1){
      cell5.innerHTML=25;
      cell6.innerHTML=25;
      cell7.innerHTML=25;
      cell8.innerHTML=25;}
    else if(TB==1 && TC==1 && TD==2){
      cell5.innerHTML=0;
      cell6.innerHTML=0;
      cell7.innerHTML=0;
      cell8.innerHTML=75;}
    else if(TB==1 && TC==2 && TD==1){
      cell5.innerHTML=0;
      cell6.innerHTML=0;
      cell7.innerHTML=75;
      cell8.innerHTML=0;}
    else if(TB==1 && TC==2 && TD==2){
      cell5.innerHTML=-12.5;
      cell6.innerHTML=-12.5;
      cell7.innerHTML=50;
      cell8.innerHTML=50;}
    else if(TB==2 && TC==1 && TD==1){
      cell5.innerHTML=0;
      cell6.innerHTML=75;
      cell7.innerHTML=0;
      cell8.innerHTML=0;}
    else if(TB==2 && TC==1 && TD==2){
      cell5.innerHTML=-12.5;
      cell6.innerHTML=50;
      cell7.innerHTML=-12.5;
      cell8.innerHTML=50;}
    else if(TB==2 && TC==2 && TD==1){
      cell5.innerHTML=-12.5;
      cell6.innerHTML=50;
      cell7.innerHTML=50;
      cell8.innerHTML=-12.5;}
    else if(TB==2 && TC==2 && TD==2){
      cell5.innerHTML=-25;
      cell6.innerHTML=25;
      cell7.innerHTML=25;
      cell8.innerHTML=25;}
  }


  else if(TA==2){
    if(TB==1 && TC==1 && TD==1){
      cell5.innerHTML=75;
      cell6.innerHTML=0;
      cell7.innerHTML=0;
      cell8.innerHTML=0;}
    else if(TB==1 && TC==1 && TD==2){
      cell5.innerHTML=50;
      cell6.innerHTML=-12.5;
      cell7.innerHTML=-12.5;
      cell8.innerHTML=50;}
    else if(TB==1 && TC==2 && TD==1){
      cell5.innerHTML=50;
      cell6.innerHTML=-12.5;
      cell7.innerHTML=50;
      cell8.innerHTML=-12.5;}
    else if(TB==1 && TC==2 && TD==2){
      cell5.innerHTML=25;
      cell6.innerHTML=-25;
      cell7.innerHTML=25;
      cell8.innerHTML=25;}
    else if(TB==2 && TC==1 && TD==1){
      cell5.innerHTML=50;
      cell6.innerHTML=50;
      cell7.innerHTML=-12.5;
      cell8.innerHTML=-12.5;}
    else if(TB==2 && TC==1 && TD==2){
      cell5.innerHTML=25;
      cell6.innerHTML=25;
      cell7.innerHTML=-25;
      cell8.innerHTML=25;}
    else if(TB==2 && TC==2 && TD==1){
      cell5.innerHTML=25;
      cell6.innerHTML=25;
      cell7.innerHTML=25;
      cell8.innerHTML=-25;}
    else if(TB==2 && TC==2 && TD==2){
      cell5.innerHTML=-25;
      cell6.innerHTML=-25;
      cell7.innerHTML=-25;
      cell8.innerHTML=-25;}

  }

  row++;
}
