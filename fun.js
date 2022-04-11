/* Sorting game*/

/* This function get the id of one element (in fun page --> the name of the Writer),
 and set the type which text and the elemen that we want to be dragged in setData method */
function ToDrag(event) {
    id1 = event.target.id;
    event.dataTransfer.setData("Text", id1); 
  }
  
  /* This function  determine when we can drop the element and allow us to drop the element
   in other element by preventing the default. */
  function allowDrop1(event) {
    event.preventDefault();
  }
  
  /* This function drop the element and append it to the element which were dropped, 
  also transform the border color to green if it's dropped in the right place and to red if it's not.  */
  function drop1(event) {
    event.preventDefault();
    var data = event.dataTransfer.getData("Text");
    event.target.appendChild(document.getElementById(data));
    id2 = event.target.id;
    if ("e"+ id2  == "" + id1) {
       document.getElementById(id2).style.border = "1px solid green";
    }
    else {
        document.getElementById(id2).style.border = "1px solid red";


    }
  }

  /* This function check if the final result is correct or not */
  function check1() {
    //the result will be correct only if all borders are green
    if (document.getElementById("11").style.border == "1px solid green"
        && document.getElementById("22").style.border == "1px solid green"
        && document.getElementById("33").style.border == "1px solid green"
        && document.getElementById("44").style.border == "1px solid green"
        && document.getElementById("55").style.border == "1px solid green")
         {
     //display the result 
        document.getElementById("che1").innerHTML = "Correct";
        //change the color of result to green
        document.getElementById("che1").style.backgroundColor= "green";
    }

    // the result will be wrong if not all borders green
    else {
       //display the result 
        document.getElementById("che1").innerHTML = "wrong";
        //change the color of result to red
        document.getElementById("che1").style.backgroundColor = "red";
    }
}


/* Puzzle game */

/* This function  determine when we can drop the element and allow us to drop the element
in other element by preventing the default. */
function allowDrop(event) {
    event.preventDefault();
}

// to get the id of the element which is dragged by the user
function StartDrag(event) {
    id = event.target.id;
}

/* This function drop the element and append it to the element which were dropped, 
  also transform the border color to green if it's dropped in the right place and to red if it's not.  */
function drop(event) {
    id2 = event.target.id;
    event.target.append(document.getElementById(id)); 
    if (id2 + "" == "a" + id) {
       document.getElementById(id2).style.border = "1px solid green";
    }
    else {
        document.getElementById(id2).style.border = "1px solid red";


    }
    
    
}
/* This function check if the final result is correct or not when the user submit his work */
function check() {
    //the result will be correct only if all borders are green
    if (document.getElementById("a1").style.border == "1px solid green"
        && document.getElementById("a2").style.border == "1px solid green"
        && document.getElementById("a3").style.border == "1px solid green"
        && document.getElementById("a4").style.border == "1px solid green"
        && document.getElementById("a5").style.border == "1px solid green"
        && document.getElementById("a6").style.border == "1px solid green"
        && document.getElementById("a7").style.border == "1px solid green"
        && document.getElementById("a8").style.border == "1px solid green"
        && document.getElementById("a9").style.border == "1px solid green"
    ) {

     // Display the result
        document.getElementById("che").innerHTML = "Correct";
        //change the colour of result to green
        document.getElementById("che").style.backgroundColor= "green";
    }
    
       // the result will be wrong if not all borders green
    else {
        // Display the result
        document.getElementById("che").innerHTML = "wrong";
        //change the colour of result to red
        document.getElementById("che").style.backgroundColor = "red";
    }
}


