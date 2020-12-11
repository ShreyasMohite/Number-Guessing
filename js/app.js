let guess;

const changeguess = () => {
    guess = parseInt(Math.random() * 100);
    let number = document.getElementById("answer");
    lower_guess = guess - 13;
    higher_guess = guess + 19;
    let display = `The number is in range between ${lower_guess} to ${higher_guess}`;
    number.innerHTML = display;
}

const guessing = () => {
    if (guess == undefined) {
        alert("Please Click on change Range");
    } else {
        let answer = document.getElementById("number").value;
        if (answer) {
            if (answer == guess) {
                alert("Correct");
                changeguess();
            } else {
                alert("Your Guess is wrong Please Try again")
            }

        } else {
            alert("Please Enter your answer");
        }



    }

}