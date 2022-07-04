player1name= localStorage.getItem("player1_name")
player2name= localStorage.getItem("player2_name")
console.log(player1name)
console.log(player2name)
player1score = 0
player2score = 0
document.getElementById("player1score").innerHTML = player1score
document.getElementById("player2score").innerHTML = player2score
document.getElementById("player1name").innerHTML = player1name
document.getElementById("player2name").innerHTML = player2name
function send(){
    number1 = document.getElementById("number1").value
    number2 = document.getElementById("number2").value
    answer = number1*number2
   questionword = "<h4 id='word_display'> Q. "+number1 +"X"+ number2+"</h4>";
   inputbox = "<br>answer;<input id='inputcheckbox'>" 
   checkbutton = "<br><br><button onclick='check()'>check</button>"
   row = questionword+inputbox+checkbutton
   document.getElementById("output").innerHTML = row
}