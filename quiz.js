
var QNo=document.getElementById("currentQnNo");
var TotalQn=document.getElementById("totalQn");
var Question=document.getElementById("q uestion");
var Option1=document.getElementById("option1");
var Option2=document.getElementById("option2");
var Option3=document.getElementById("option3");
var Option4=document.getElementById("option4");
var skip=document.getElementById("skipbtn");
var next=document.getElementById("nextbtn");
var submit=document.getElementById("submitbtn");
var start=document.getElementById("start_btn");
var details=document.getElementById("details");
var info=document.getElementById("info");
var container=document.getElementById("cont");
var score=document.getElementById("score1");



function startt(){
    start.classList.add("display1");
    details.classList.remove("student_details");
    
}
function continuee(){
    details.classList.add("student_details");
    start.classList.add("display1");
    info.classList.remove("info_box");

}
function quizStart(){
    start.classList.add("display1");
    info.classList.add("info_box");
    container.classList.remove("container");
    

}
function submitt(){
    start.classList.add("display1");
    container.classList.add("container");
    score.classList.remove("score");

    
}
function quitt(){
    score.classList.add("score");
    start.classList.remove("display1");


}