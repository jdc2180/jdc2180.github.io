var number = 13;

var myNumber = prompt("Can you guess the right number?");

var myNum = Number(myNumber);

if (myNum === number) {

    alert("whooooooo!!!! You are correct");
}

else if (myNum < number) {

    alert("Go Higher");
    }

    else {

        alert("Try Lower");
    }
