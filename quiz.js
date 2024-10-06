function checkAnswer (){
    const correctAnswer = "4";
    const userAnswer = document.querySelector('input[name ="quiz"]:checked').value;
    if (userAnswer === correctAnswer){
        document.querySelector('#feedback').textContent = "Correct! Well done.";
    }else {
        document.querySelector('#feedback').textContent = "That's incorrect. Try again!";
    }
}


const button = document.getElementById('submit-answer');
button.addEventListener('click', checkAnswer);