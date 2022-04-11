/* This function check if the input in the Number of borrowed books and the Age is number, and display an alert if it's not.
and calculate the total price depending on the number of borrowed books and some other informations */

function calculate(){

    // This part display the alert message if the input is not number in the Number of borrowed books and the Age inputs.
    var flag = true;
    var input1 = document.getElementById("inp1").value;
    var input2 = document.getElementById("inp2").value;

    
      if (isNaN(input1)) {
            alert("The input must be a number in (Number of borrowed books).");
            flag = false

        }
        else if (isNaN(input2)){
            flag = false
            alert("The input must be a number in (Your Age).");
        }
 

  
 // take the inputs that entered by the user --> (number of borrowed books, age, if it is student, the days and the province)
    var numbooks = document.getElementById("inp1").value;
    var age = document.getElementById("inp2").value;

    var check1 = document.getElementById("inp3").checked;

    var option1 = document.getElementById("o1").selected;
    var option2 = document.getElementById("o2").selected;
    var option3 = document.getElementById("o3").selected;

    var option11 = document.getElementById("o11").selected;
    var option22 = document.getElementById("o22").selected;
    var option33 = document.getElementById("o33").selected;
    var option44 = document.getElementById("o44").selected;
    var option55 = document.getElementById("o55").selected;
    var option66 = document.getElementById("o66").selected;
    var option77 = document.getElementById("o77").selected;
    var option88 = document.getElementById("o88").selected;
    
    /*
    The Formula:
    Total amount = (number of books * amount) + the sipping amount + the addition amount if the borrowing days above than 4 days 
                    - 15% from the total amount (if the user is old) - 20% from the total amount (if the user is student)
    */

    //the fixed amount for each book borrowed in OR
    const amount = 1.2;

    // the general count for the total amount is (number of books * amount)
    numbooks = parseInt(numbooks);
    var totalAmount = amount * numbooks;

    // if the user borrow the book/s 5 days we will add 0.6 OR 
    if(option1){
    totalAmount += 0.6;}

    //if the user borrow the books 6 t0 10 days we will add 0.4 OR
    else if (option2) {
    totalAmount += 0.4;}

    //if the user borrow the books more than 10 days we will add 0.2 OR
    else if (option3){
        totalAmount += 0.2;}


    //if the user from muscat the shipping will be 0.5 OR
    if (option11){
        totalAmount += 0.5;}

    //if the user from Aldaakhilia or Alsharqia or AlBatinah the shipping will be 1 OR
    else if (option22 || option33 || option77 ){
        totalAmount += 1;}

    //if the user from Alzaahira or AlBuraimi or AlWustaa the shipping will be 2 OR
    else if (option44 || option55 || option66){
        totalAmount += 2;}

    //if the user from Musandam or Dhofar the shipping will be 3 OR
    else if (option44 || option55 || option66){
        totalAmount += 3;}
    
    // if the user is old we give 15% discount 
    age = parseInt(age);
    if (age>65){
       var discount1 = totalAmount * 0.15;
       totalAmount -= discount1;
    }

    // if the user is student we give 20% discount 
    if (check1){
       var discount2 = totalAmount * 0.2;
       totalAmount -= discount2;
    }
    // display the total amount for the user 
    
    if (!isNaN(totalAmount) && !isNaN(numbooks) && !isNaN(age)  ){
        totalAmount = parseFloat(totalAmount).toFixed(3);
        document.getElementById("g").innerHTML = totalAmount + " OR";}



    return flag;
   


  }

 // This function clear the previous result (total amount).
  function clear1(){
    document.getElementById("g").innerHTML = " ";
  }

 































/*
<!DOCTYPE html>
<html lang="en"><head>
    <link rel="stylesheet" href="plat.css">
    <script type="text/javascript" src="tab.js" ></script>
</head>
<body> 


    <form >
     Number of Rows  <input type="text" id="rows" />  
    <br/>
     Number of Columns <input type="text" id="cols" /> 
     <br/>
    <input type="button" value="Create Table" 
            onclick="createTable()"/>
    </form>
     <table id="myTable" border="2"></table>


    </body>
    
</html>
*/

//------------------------------------------------------------------------



/*
function createTable(){
    var i = parseInt( document.getElementById("rows").value);
    var j = parseInt( document.getElementById("cols").value);
    
    for(var e =0; e<i; e++){
        var row = document.createElement("tr");
        row.setAttribute("id","rw"+e);
        myTable.appendChild(row);

        for(var n =0; n<j; n++){
            var cell = document.createElement("td");
            "rw"+e.appendChild(cell);
            
        }

    }
}*/


/*
function createTable(){
      var rr=parseInt(document.getElementById("rows").value);
      var cc=parseInt(document.getElementById("cols").value);
      var t1=document.getElementById("myTable");
      t1.style.borderStyle= "dotted"; t1.style.borderWidth = "2px";
      var cap=t1.createCaption(); cap.innerText="rows "+rr+" and cols "+cc;
      var n= t1.rows.length; //get current number of rows
      for (var x=n-1; x>=0; x--) t1.deleteRow(x); //remove old rows if any
      for(var r=0;r<rr;r++){ //Adding new rows
          var tr= t1.insertRow(r);
          for(var c=0;c<cc;c++){ //adding new cols in a row
            var cell= tr.insertCell(c);
            cell.innerText = "r="+r+" c="+c;
            cell.style.borderStyle= "dotted"; cell.style.borderWidth = "2px";
       }}}
    */
    