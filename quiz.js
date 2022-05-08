
var QNo=document.getElementById("currentQnNo");
var TotalQn=document.getElementById("totalQn");
var Question=document.getElementById("question");
var Option1=document.getElementById("option1_txt");
var Option2=document.getElementById("option2_txt");
var Option3=document.getElementById("option3_txt");
var Option4=document.getElementById("option4_txt");
var prev=document.getElementById("prevbtn");
var next=document.getElementById("nextbtn");
var submit=document.getElementById("submitbtn");
// var start=$("#start_btn");
var start=document.getElementById("start_btn");
var details=document.getElementById("details");
var info=document.getElementById("info");
var container=document.getElementById("cont");
var score=document.getElementById("score1");
var auth=document.getElementById("authentication");
var yourscore=document.getElementById("yourscore")


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
    showQuetions(0); //calling showQestions function
   
    

}
function submitt(){
    start.classList.add("display1");
    container.classList.add("container");
    score.classList.remove("score");
    console.log(document.getElementById("answer1").value)
    if(document.getElementById('answer1').checked){
        userScore++;
    }
    if(document.getElementById('answer2').checked){
        userScore++;
    }
    if(document.getElementById('answer3').checked){
        userScore++;
    }
    if(document.getElementById('answer4').checked){
        userScore++;
    }
    if(document.getElementById('answer5').checked){
        userScore++;
    }
    if(document.getElementById('answer6').checked){
        userScore++;
    }
    if(document.getElementById('answer7').checked){
        userScore++;
    }
    if(document.getElementById('answer8').checked){
        userScore++;
    }
    if(document.getElementById('answer9').checked){
        userScore++;
    }
    if(document.getElementById('answer10').checked){
        userScore++;
    }
    yourscore.innerHTML=userScore;
    

    
}
function quitt(){
    score.classList.add("score");
    start.classList.remove("display1");
    userScore=0;


}


let que_count = 0;
let que_numb = 1;
let userScore = 0;

// getting questions and options from array
// function showQuetions(index){

//     const que_text = document.querySelector(".cont2");

//     //creating a new span and div tag for question and option and passing the value using array index
//     let curnt_qnNo= questions[index].numb;
//     let que_tag = '<span>'+ questions[index].numb + ". " + questions[index].question +'</span>';
//     let option1_tag = questions[index].options[0];
//     let option2_tag = questions[index].options[1];
//     let option3_tag = questions[index].options[2];
//     let option4_tag = questions[index].options[3];
    
//     que_text.innerHTML = que_tag; //adding new span tag inside que_tag
//     QNo.innerHTML=curnt_qnNo;
//     TotalQn.innerHTML=questions.length;
//     Option1.innerHTML = option1_tag; //adding new div tag inside option_tag
//    // Option1.value = option1_tag; //adding new div tag inside option_tag
//     //Option2.value = option2_tag; //adding new div tag inside option_tag
//     Option2.innerHTML = option2_tag; //adding new div tag inside option_tag
//     Option3.innerHTML = option3_tag; //adding new div tag inside option_tag
//     Option4.innerHTML = option4_tag; //adding new div tag inside option_tag
    
   
// }

// function nextt(){
//     if(que_count < questions.length - 1){ //if question count is less than total question length
//         que_count++; //increment the que_count value
//         que_numb++; //increment the que_numb value
//         showQuetions(que_count); //calling showQestions function
//         //queCounter(que_numb); //passing que_numb value to queCounter

       
//     }
//     const answer = getSelected()
//     if(answer) {
//        if(answer === questions[index].answer) {
//            userscore++
//        }}


// }
// function previous(){
//     if(que_count >=1){ //if question count is less than total question length
//         que_count--; //increment the que_count value
//         que_numb--; //increment the que_numb value
//         showQuetions(que_count); //calling showQestions function
//         //queCounter(que_numb); //passing que_numb value to queCounter
//     }
    
// }








// document.addEventListener("visibilitychange",function() {
//   document.title=document.visibilityState;
//     console.log(document.visibilityState);
// })


// function score(){
//     if(document.getElementById('answer1').checked){
//         userScore++;
//     }
//     if(document.getElementById('answer2').checked){
//         userScore++;
//     }
//     if(document.getElementById('answer3').checked){
//         userScore++;
//     }
//     if(document.getElementById('answer4').checked){
//         userScore++;
//     }
//     if(document.getElementById('answer5').checked){
//         userScore++;
//     }
//     if(document.getElementById('answer6').checked){
//         userScore++;
//     }
//     if(document.getElementById('answer7').checked){
//         userScore++;
//     }
//     if(document.getElementById('answer8').checked){
//         userScore++;
//     }
//     if(document.getElementById('answer9').checked){
//         userScore++;
//     }
//     if(document.getElementById('answer10').checked){
//         userScore++;
//     }
// }


function clearsection(){
    const radioBtns=document.querySelectorAll("input[type='radio']");
    radioBtns.forEach(radioBtn=>{
        if(radioBtn.checked==true){
            radioBtn.checked=false;
        }

    })

}



// const answerEls = document.querySelectorAll('.answer')

// function getSelected() {
//     let answer
//     answerEls.forEach(answerEl => {
//         if(answerEl.checked) {
//             answer = answerEl.id
//         }
//     })
//     return answer
// }

var nam=document.getElementById("name1");
nam.innerHTML=req.body.firstname;