function displayDetails4(){
  const table=document.getElementById('display4');
  const newRow = table.insertRow();
  var cell1=newRow.insertCell(0);
  var cell2=newRow.insertCell(1);
  var cell3=newRow.insertCell(2);
  var cell4=newRow.insertCell(3);
  var cell5=newRow.insertCell(4);
  var cell6=newRow.insertCell(5);
  var cell7=newRow.insertCell(6);
  var cell8=newRow.insertCell(7);
  cell1.innerHTML=TA4;
  cell2.innerHTML=TB4;
  cell3.innerHTML=TC4;
  cell4.innerHTML=TD4;
  if(TA4==1){
    if(TB4==1 && TC4==1 && TD4==1){
      cell5.innerHTML=25;
      cell6.innerHTML=25;
      cell7.innerHTML=25;
      cell8.innerHTML=25;}
    else if(TB4==1 && TC4==1 && TD4==2){
      cell5.innerHTML=0;
      cell6.innerHTML=0;
      cell7.innerHTML=0;
      cell8.innerHTML=75;}
    else if(TB4==1 && TC4==2 && TD4==1){
      cell5.innerHTML=0;
      cell6.innerHTML=0;
      cell7.innerHTML=75;
      cell8.innerHTML=0;}
    else if(TB4==1 && TC4==2 && TD4==2){
      cell5.innerHTML=-12.5;
      cell6.innerHTML=-12.5;
      cell7.innerHTML=50;
      cell8.innerHTML=50;}
    else if(TB4==2 && TC4==1 && TD4==1){
      cell5.innerHTML=0;
      cell6.innerHTML=75;
      cell7.innerHTML=0;
      cell8.innerHTML=0;}
    else if(TB4==2 && TC4==1 && TD4==2){
      cell5.innerHTML=-12.5;
      cell6.innerHTML=50;
      cell7.innerHTML=-12.5;
      cell8.innerHTML=50;}
    else if(TB4==2 && TC4==2 && TD4==1){
      cell5.innerHTML=-12.5;
      cell6.innerHTML=50;
      cell7.innerHTML=50;
      cell8.innerHTML=-12.5;}
    else if(TB4==2 && TC4==2 && TD4==2){
      cell5.innerHTML=-25;
      cell6.innerHTML=25;
      cell7.innerHTML=25;
      cell8.innerHTML=25;}
  }
  else if(TA4==2){
    if(TB4==1 && TC4==1 && TD4==1){
      cell5.innerHTML=75;
      cell6.innerHTML=0;
      cell7.innerHTML=0;
      cell8.innerHTML=0;}
    else if(TB4==1 && TC4==1 && TD4==2){
      cell5.innerHTML=50;
      cell6.innerHTML=-12.5;
      cell7.innerHTML=-12.5;
      cell8.innerHTML=50;}
    else if(TB4==1 && TC4==2 && TD4==1){
      cell5.innerHTML=50;
      cell6.innerHTML=-12.5;
      cell7.innerHTML=50;
      cell8.innerHTML=-12.5;}
    else if(TB4==1 && TC4==2 && TD4==2){
      cell5.innerHTML=25;
      cell6.innerHTML=-25;
      cell7.innerHTML=25;
      cell8.innerHTML=25;}
    else if(TB4==2 && TC4==1 && TD4==1){
      cell5.innerHTML=50;
      cell6.innerHTML=50;
      cell7.innerHTML=-12.5;
      cell8.innerHTML=-12.5;}
    else if(TB4==2 && TC4==1 && TD4==2){
      cell5.innerHTML=25;
      cell6.innerHTML=25;
      cell7.innerHTML=-25;
      cell8.innerHTML=25;}
    else if(TB4==2 && TC4==2 && TD4==1){
      cell5.innerHTML=25;
      cell6.innerHTML=25;
      cell7.innerHTML=25;
      cell8.innerHTML=-25;}
    else if(TB4==2 && TC4==2 && TD4==2){
      cell5.innerHTML=-25;
      cell6.innerHTML=-25;
      cell7.innerHTML=-25;
      cell8.innerHTML=-25;}
  }
}
