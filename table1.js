// -----------------------FOR TABLE-----------------------
// var submit = document.getElementById('submit');
// submit.addEventListener('click',displayDetails);
// var row=1;
function displayDetails1(){
  // var R1,R12,R13,R14,R15,R16,R17,R18,R19,R110,R111,R112,R113,R114,R115,R116;
  const table=document.getElementById('display1');
  const newRow = table.insertRow();
  var cell1=newRow.insertCell(0);
  var cell2=newRow.insertCell(1);
  var cell3=newRow.insertCell(2);
  var cell4=newRow.insertCell(3);
  var cell5=newRow.insertCell(4);
  var cell6=newRow.insertCell(5);
  var cell7=newRow.insertCell(6);
  var cell8=newRow.insertCell(7);
  cell1.innerHTML=TA1;
  cell2.innerHTML=TB1;
  cell3.innerHTML=TC1;
  cell4.innerHTML=TD1;
  if(TA1==1){
    if(TB1==1 && TC1==1 && TD1==1){
      cell5.innerHTML=25;
      cell6.innerHTML=25;
      cell7.innerHTML=25;
      cell8.innerHTML=25;
      // function f11(){
      // R11=1;
      //   localStorage.setItem('P1',R11);
      //   window.location.href='Results.html';
      // }
  }

    else if(TB1==1 && TC1==1 && TD1==2){
      cell5.innerHTML=0;
      cell6.innerHTML=0;
      cell7.innerHTML=0;
      cell8.innerHTML=75;
      // function f12(){
      //   R12=2;
      //   localStorage.setItem('P1',R12);
      //   window.location.href='Results.html';}
      }
    else if(TB1==1 && TC1==2 && TD1==1){
      cell5.innerHTML=0;
      cell6.innerHTML=0;
      cell7.innerHTML=75;
      cell8.innerHTML=0;
      // function f13(){
      //   R13=3;
      //   localStorage.setItem('P1',R13);
      //   window.location.href='Results.html';}
      }
    else if(TB1==1 && TC1==2 && TD1==2){
      cell5.innerHTML=-12.5;
      cell6.innerHTML=-12.5;
      cell7.innerHTML=50;
      cell8.innerHTML=50;
      // function f14(){
      //   R14=4;
      //   localStorage.setItem('P1',R14);
      //   window.location.href='Results.html';}
    }
    else if(TB1==2 && TC1==1 && TD1==1){
      cell5.innerHTML=0;
      cell6.innerHTML=75;
      cell7.innerHTML=0;
      cell8.innerHTML=0;
      // function f15(){
      //   R15=5;
      //   localStorage.setItem('P1',R15);
      //   window.location.href='Results.html';}
      }
    else if(TB1==2 && TC1==1 && TD1==2){
      cell5.innerHTML=-12.5;
      cell6.innerHTML=50;
      cell7.innerHTML=-12.5;
      cell8.innerHTML=50;
      // function f16(){
      //   R16=6;
      //   localStorage.setItem('P1',R16);
      //   window.location.href='Results.html';}
      }
    else if(TB1==2 && TC1==2 && TD1==1){
      cell5.innerHTML=-12.5;
      cell6.innerHTML=50;
      cell7.innerHTML=50;
      cell8.innerHTML=-12.5;
      // function f17(){
      //   R17=7;
      //   localStorage.setItem('P1',R17);
      //   window.location.href='Results.html';}
      }
    else if(TB1==2 && TC1==2 && TD1==2){
      cell5.innerHTML=-25;
      cell6.innerHTML=25;
      cell7.innerHTML=25;
      cell8.innerHTML=25;
      // function f18(){
      //   R18=8;
      //   localStorage.setItem('P1',R18);
      //   window.location.href='Results.html';}
      }
  }
  else if(TA1==2){
    if(TB1==1 && TC1==1 && TD1==1){
      cell5.innerHTML=75;
      cell6.innerHTML=0;
      cell7.innerHTML=0;
      cell8.innerHTML=0;
      // function f19(){
      //   R19=9;
      //   localStorage.setItem('P1',R19);
      //   window.location.href='Results.html';}
      }
    else if(TB1==1 && TC1==1 && TD1==2){
      cell5.innerHTML=50;
      cell6.innerHTML=-12.5;
      cell7.innerHTML=-12.5;
      cell8.innerHTML=50;
      // function f110(){
      //   R110=10;
      //   localStorage.setItem('P1',R110);
      //   window.location.href='Results.html';}
      }
    else if(TB1==1 && TC1==2 && TD1==1){
      cell5.innerHTML=50;
      cell6.innerHTML=-12.5;
      cell7.innerHTML=50;
      cell8.innerHTML=-12.5;
      // function f11(){
      //   R111=11;
      //   localStorage.setItem('P1',R111);
      //   window.location.href='Results.html';}
      }
    else if(TB1==1 && TC1==2 && TD1==2){
      cell5.innerHTML=25;
      cell6.innerHTML=-25;
      cell7.innerHTML=25;
      cell8.innerHTML=25;
      // function f12(){
      //   R112=12;
      //   localStorage.setItem('P1',R112);
      //   window.location.href='Results.html';}
      }
    else if(TB1==2 && TC1==1 && TD1==1){
      cell5.innerHTML=50;
      cell6.innerHTML=50;
      cell7.innerHTML=-12.5;
      cell8.innerHTML=-12.5;
      // function f13(){
      //   R113=13;
      //   localStorage.setItem('P1',R113);
      //   window.location.href='Results.html';}
      }
    else if(TB1==2 && TC1==1 && TD1==2){
      cell5.innerHTML=25;
      cell6.innerHTML=25;
      cell7.innerHTML=-25;
      cell8.innerHTML=25;
      // function f14(){
      //   R114=14;
      //   localStorage.setItem('P1',R114);
      //   window.location.href='Results.html';}
      }
    else if(TB1==2 && TC1==2 && TD1==1){
      cell5.innerHTML=25;
      cell6.innerHTML=25;
      cell7.innerHTML=25;
      cell8.innerHTML=-25;
      // function f115(){
      //    R115=15;
      //   localStorage.setItem('P1',R115);
      //   window.location.href='Results.html';}
      }
    else if(TB1==2 && TC1==2 && TD1==2){
      cell5.innerHTML=-25;
      cell6.innerHTML=-25;
      cell7.innerHTML=-25;
      cell8.innerHTML=-25;
      // function f116(){
      //    R116=16;
      //   localStorage.setItem('P1',R116);
      //   window.location.href='Results.html';}
      }
  }
}
