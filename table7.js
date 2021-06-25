function displayDetails7(){
  const table=document.getElementById('display7');
  const newRow = table.insertRow();
  var cell1=newRow.insertCell(0);
  var cell2=newRow.insertCell(1);
  var cell3=newRow.insertCell(2);
  var cell4=newRow.insertCell(3);
  var cell5=newRow.insertCell(4);
  var cell6=newRow.insertCell(5);
  var cell7=newRow.insertCell(6);
  var cell8=newRow.insertCell(7);
  cell1.innerHTML=TA7;
  cell2.innerHTML=TB7;
  cell3.innerHTML=TC7;
  cell4.innerHTML=TD7;
  if(TA7==1){
    if(TB7==1 && TC7==1 && TD7==1){
      cell5.innerHTML=250;
      cell6.innerHTML=250;
      cell7.innerHTML=250;
      cell8.innerHTML=250;}
    else if(TB7==1 && TC7==1 && TD7==2){
      cell5.innerHTML=0;
      cell6.innerHTML=0;
      cell7.innerHTML=0;
      cell8.innerHTML=750;}
    else if(TB7==1 && TC7==2 && TD7==1){
      cell5.innerHTML=0;
      cell6.innerHTML=0;
      cell7.innerHTML=750;
      cell8.innerHTML=0;}
    else if(TB7==1 && TC7==2 && TD7==2){
      cell5.innerHTML=-125;
      cell6.innerHTML=-125;
      cell7.innerHTML=500;
      cell8.innerHTML=500;}
    else if(TB7==2 && TC7==1 && TD7==1){
      cell5.innerHTML=0;
      cell6.innerHTML=750;
      cell7.innerHTML=0;
      cell8.innerHTML=0;}
    else if(TB7==2 && TC7==1 && TD7==2){
      cell5.innerHTML=-125;
      cell6.innerHTML=500;
      cell7.innerHTML=-125;
      cell8.innerHTML=500;}
    else if(TB7==2 && TC7==2 && TD7==1){
      cell5.innerHTML=-125;
      cell6.innerHTML=500;
      cell7.innerHTML=500;
      cell8.innerHTML=-125;}
    else if(TB7==2 && TC7==2 && TD7==2){
      cell5.innerHTML=-250;
      cell6.innerHTML=250;
      cell7.innerHTML=250;
      cell8.innerHTML=250;}
  }
  else if(TA7==2){
    if(TB7==1 && TC7==1 && TD7==1){
      cell5.innerHTML=750;
      cell6.innerHTML=0;
      cell7.innerHTML=0;
      cell8.innerHTML=0;}
    else if(TB7==1 && TC7==1 && TD7==2){
      cell5.innerHTML=500;
      cell6.innerHTML=-125;
      cell7.innerHTML=-125;
      cell8.innerHTML=500;}
    else if(TB7==1 && TC7==2 && TD7==1){
      cell5.innerHTML=500;
      cell6.innerHTML=-125;
      cell7.innerHTML=500;
      cell8.innerHTML=-125;}
    else if(TB7==1 && TC7==2 && TD7==2){
      cell5.innerHTML=250;
      cell6.innerHTML=-250;
      cell7.innerHTML=250;
      cell8.innerHTML=250;}
    else if(TB7==2 && TC7==1 && TD7==1){
      cell5.innerHTML=500;
      cell6.innerHTML=500;
      cell7.innerHTML=-125;
      cell8.innerHTML=-125;}
    else if(TB7==2 && TC7==1 && TD7==2){
      cell5.innerHTML=250;
      cell6.innerHTML=250;
      cell7.innerHTML=-250;
      cell8.innerHTML=250;}
    else if(TB7==2 && TC7==2 && TD7==1){
      cell5.innerHTML=250;
      cell6.innerHTML=250;
      cell7.innerHTML=250;
      cell8.innerHTML=-250;}
    else if(TB7==2 && TC7==2 && TD7==2){
      cell5.innerHTML=-250;
      cell6.innerHTML=-250;
      cell7.innerHTML=-250;
      cell8.innerHTML=-250;}
  }
}
