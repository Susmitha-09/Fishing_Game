function displayDetails8(){
  const table=document.getElementById('display8');
  const newRow = table.insertRow();
  var cell1=newRow.insertCell(0);
  var cell2=newRow.insertCell(1);
  var cell3=newRow.insertCell(2);
  var cell4=newRow.insertCell(3);
  var cell5=newRow.insertCell(4);
  var cell6=newRow.insertCell(5);
  var cell7=newRow.insertCell(6);
  var cell8=newRow.insertCell(7);
  cell1.innerHTML=TA8;
  cell2.innerHTML=TB8;
  cell3.innerHTML=TC8;
  cell4.innerHTML=TD8;
  if(TA8==1){
    if(TB8==1 && TC8==1 && TD8==1){
      cell5.innerHTML=250;
      cell6.innerHTML=250;
      cell7.innerHTML=250;
      cell8.innerHTML=250;}
    else if(TB8==1 && TC8==1 && TD8==2){
      cell5.innerHTML=0;
      cell6.innerHTML=0;
      cell7.innerHTML=0;
      cell8.innerHTML=750;}
    else if(TB8==1 && TC8==2 && TD8==1){
      cell5.innerHTML=0;
      cell6.innerHTML=0;
      cell7.innerHTML=750;
      cell8.innerHTML=0;}
    else if(TB8==1 && TC8==2 && TD8==2){
      cell5.innerHTML=-125;
      cell6.innerHTML=-125;
      cell7.innerHTML=500;
      cell8.innerHTML=500;}
    else if(TB8==2 && TC8==1 && TD8==1){
      cell5.innerHTML=0;
      cell6.innerHTML=750;
      cell7.innerHTML=0;
      cell8.innerHTML=0;}
    else if(TB8==2 && TC8==1 && TD8==2){
      cell5.innerHTML=-125;
      cell6.innerHTML=500;
      cell7.innerHTML=-125;
      cell8.innerHTML=500;}
    else if(TB8==2 && TC8==2 && TD8==1){
      cell5.innerHTML=-125;
      cell6.innerHTML=500;
      cell7.innerHTML=500;
      cell8.innerHTML=-12.5;}
    else if(TB8==2 && TC8==2 && TD8==2){
      cell5.innerHTML=-250;
      cell6.innerHTML=250;
      cell7.innerHTML=250;
      cell8.innerHTML=250;}
  }
  else if(TA8==2){
    if(TB8==1 && TC8==1 && TD8==1){
      cell5.innerHTML=750;
      cell6.innerHTML=0;
      cell7.innerHTML=0;
      cell8.innerHTML=0;}
    else if(TB8==1 && TC8==1 && TD8==2){
      cell5.innerHTML=500;
      cell6.innerHTML=-125;
      cell7.innerHTML=-125;
      cell8.innerHTML=500;}
    else if(TB8==1 && TC8==2 && TD8==1){
      cell5.innerHTML=500;
      cell6.innerHTML=-125;
      cell7.innerHTML=500;
      cell8.innerHTML=-125;}
    else if(TB8==1 && TC8==2 && TD8==2){
      cell5.innerHTML=250;
      cell6.innerHTML=-250;
      cell7.innerHTML=250;
      cell8.innerHTML=250;}
    else if(TB8==2 && TC8==1 && TD8==1){
      cell5.innerHTML=500;
      cell6.innerHTML=500;
      cell7.innerHTML=-125;
      cell8.innerHTML=-125;}
    else if(TB8==2 && TC8==1 && TD8==2){
      cell5.innerHTML=250;
      cell6.innerHTML=250;
      cell7.innerHTML=-250;
      cell8.innerHTML=250;}
    else if(TB8==2 && TC8==2 && TD8==1){
      cell5.innerHTML=250;
      cell6.innerHTML=250;
      cell7.innerHTML=250;
      cell8.innerHTML=-250;}
    else if(TB8==2 && TC8==2 && TD8==2){
      cell5.innerHTML=-250;
      cell6.innerHTML=-250;
      cell7.innerHTML=-250;
      cell8.innerHTML=-250;}
  }
}
