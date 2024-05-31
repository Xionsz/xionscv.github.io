alert("KALKULATOR BUATAN SENDIRI")

const display = document.getElementById("display");

function p(input){
    display.value += input;
}

function hapussemua(){
  display.value ="";
}


function samadengan(){
 try{ 
  display.value = eval(display.value);
  }
  catch(error){
  display.value = "ERROR";
  }
}