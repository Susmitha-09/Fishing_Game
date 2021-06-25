// -----------------------FOR TABLE-----------------------
// var submit = document.getElementById('submit');
// submit.addEventListener('click',displayDetails);
// var row=1;

function displayDetails2(){
  // var R21,R22,R23,R24,R25,R26,R27,R28,R29,R210,R211,R212,R213,R214,R215,R216;
  const table=document.getElementById('display2');
  const newRow = table.insertRow();
  var cell1=newRow.insertCell(0);
  var cell2=newRow.insertCell(1);
  var cell3=newRow.insertCell(2);
  var cell4=newRow.insertCell(3);
  var cell5=newRow.insertCell(4);
  var cell6=newRow.insertCell(5);
  var cell7=newRow.insertCell(6);
  var cell8=newRow.insertCell(7);
  cell1.innerHTML=TA2;
  cell2.innerHTML=TB2;
  cell3.innerHTML=TC2;
  cell4.innerHTML=TD2;
  if(TA2==1){
    if(TB2==1 && TC2==1 && TD2==1){
      cell5.innerHTML=25;
      cell6.innerHTML=25;
      cell7.innerHTML=25;
      cell8.innerHTML=25;
      // function f21(){
      //   R21=1;
      //   localStorage.setItem('P2',R21);
      //   window.location.href='Results.html';
      // }
    }
    else if(TB2==1 && TC2==1 && TD2==2){
      cell5.innerHTML=0;
      cell6.innerHTML=0;
      cell7.innerHTML=0;
      cell8.innerHTML=75;
      // function f22(){
      //   R22=2;
      //   localStorage.setItem('P2',R22);
      //   window.location.href='Results.html';
      // }
      }
    else if(TB2==1 && TC2==2 && TD2==1){
      cell5.innerHTML=0;
      cell6.innerHTML=0;
      cell7.innerHTML=75;
      cell8.innerHTML=0;
      // function f23(){
      //   R23=3;
      //   localStorage.setItem('P2',R23);
      //   window.location.href='Results.html';
      //   }
      }
    else if(TB2==1 && TC2==2 && TD2==2){
      cell5.innerHTML=-12.5;
      cell6.innerHTML=-12.5;
      cell7.innerHTML=50;
      cell8.innerHTML=50;
      // function f24(){
      //     R24=4;
      //     localStorage.setItem('P2',R24);
      //     window.location.href='Results.html';
      //   }
      }
    else if(TB2==2 && TC2==1 && TD2==1){
      cell5.innerHTML=0;
      cell6.innerHTML=75;
      cell7.innerHTML=0;
      cell8.innerHTML=0;
      // function f25(){
      //    R25=5;
      //   localStorage.setItem('P2',R25);
      //   window.location.href='Results.html';
      // }
    }
    else if(TB2==2 && TC2==1 && TD2==2){
      cell5.innerHTML=-12.5;
      cell6.innerHTML=50;
      cell7.innerHTML=-12.5;
      cell8.innerHTML=50;
      // function f26(){
      //    R26=6;
      //   localStorage.setItem('P2',R26);
      //   window.location.href='Results.html';
      //   }
      }
    else if(TB2==2 && TC2==2 && TD2==1){
      cell5.innerHTML=-12.5;
      cell6.innerHTML=50;
      cell7.innerHTML=50;
      cell8.innerHTML=-12.5;
      // function f27(){
      //    R27=7;
      //   localStorage.setItem('P2',R27);
      //   window.location.href='Results.html';
      //   }
      }
    else if(TB2==2 && TC2==2 && TD2==2){
      cell5.innerHTML=-25;
      cell6.innerHTML=25;
      cell7.innerHTML=25;
      cell8.innerHTML=25;
      // function f28(){
      //      R28=8;
      //     localStorage.setItem('P2',R28);
      //     window.location.href='Results.html';
      //   }
      }
  }
  else if(TA2==2){
    if(TB2==1 && TC2==1 && TD2==1){
      cell5.innerHTML=75;
      cell6.innerHTML=0;
      cell7.innerHTML=0;
      cell8.innerHTML=0;
      // function f29(){
      //  R29=9;
      //   localStorage.setItem('P2',R29);
      //   window.location.href='Results.html';
      // }
    }
    else if(TB2==1 && TC2==1 && TD2==2){
      cell5.innerHTML=50;
      cell6.innerHTML=-12.5;
      cell7.innerHTML=-12.5;
      cell8.innerHTML=50;
      // function f210(){
      //    R210=10;
      //   localStorage.setItem('P2',R210);
      //   window.location.href='Results.html';
      // }
    }
    else if(TB2==1 && TC2==2 && TD2==1){
      cell5.innerHTML=50;
      cell6.innerHTML=-12.5;
      cell7.innerHTML=50;
      cell8.innerHTML=-12.5;
      // function f211(){
      //    R211=11;
      //   localStorage.setItem('P2',R211);
      //   window.location.href='Results.html';
      // }
    }
    else if(TB2==1 && TC2==2 && TD2==2){
      cell5.innerHTML=25;
      cell6.innerHTML=-25;
      cell7.innerHTML=25;
      cell8.innerHTML=25;
      // function f212(){
      //    R212=12;
      //   localStorage.setItem('P2',R212);
      //   window.location.href='Results.html';
      // }
    }
    else if(TB2==2 && TC2==1 && TD2==1){
      cell5.innerHTML=50;
      cell6.innerHTML=50;
      cell7.innerHTML=-12.5;
      cell8.innerHTML=-12.5;
      // // function f213(){
      // //    R213=13;
      // //   localStorage.setItem('P2',R213);
      // //   window.location.href='Results.html';
      // }
    }
    else if(TB2==2 && TC2==1 && TD2==2){
      cell5.innerHTML=25;
      cell6.innerHTML=25;
      cell7.innerHTML=-25;
      cell8.innerHTML=25;
      // // function f214(){
      // //    R214=14;
      // //   localStorage.setItem('P2',R214);
      // //   window.location.href='Results.html';
      // }
    }
    else if(TB2==2 && TC2==2 && TD2==1){
      cell5.innerHTML=25;
      cell6.innerHTML=25;
      cell7.innerHTML=25;
      cell8.innerHTML=-25;
      // // function f215(){
      // //   R215=15;
      // //   localStorage.setItem('P2',R215);
      // //   window.location.href='Results.html';
      // }
    }
    else if(TB2==2 && TC2==2 && TD2==2){
      cell5.innerHTML=-25;
      cell6.innerHTML=-25;
      cell7.innerHTML=-25;
      cell8.innerHTML=-25;
      // // function f216(){
      // //   R216=16;
      // //   localStorage.setItem('P2',R216);
      // //   window.location.href='Results.html';
      // }
    }
  }
}
