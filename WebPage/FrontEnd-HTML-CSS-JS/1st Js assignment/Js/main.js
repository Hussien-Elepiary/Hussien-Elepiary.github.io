// Question contoroler
do {
    var questionNumberForMoreContorol = Number(window.prompt('enter the question number?'));
} while (questionNumberForMoreContorol < 0 || questionNumberForMoreContorol > 20);
switch (questionNumberForMoreContorol) {
    case 1:
        question1();
        break;
    case 2:
        question2();
        break;
    case 3:
        question3();
        break;
    case 4:
        question4();
        break;
    case 5:
        question5();
        break;
    case 6:
        question6();
        break;
    case 7:
        question7();
        break;
    case 8:
        question8();
        break;
    case 9:
        question9();
        break;
    case 10:
        question10();
        break;
    case 11:
        question11();
        break;
    case 12:
        question12();
        break;
    case 13:
        question13();
        break;
    case 14:
        question14();
        break;
    case 15:
        question15();
        break;
    case 16:
        question16();
        break;
    case 17:
        question17();
        break;
    case 18:
        question18();
        break;
    case 19:
        question19();
        break;
    case 20:
        question20();
        break;
    default:
        break;
}

// 1st Q

function question1() {
    document.getElementById("Q1").innerHTML = window.prompt("Q1. enter a number");
}

// 2nd Q 

function question2() {
    var numberFor2ndQ = window.prompt("Q2. enter a number");
    var modulus4ForNumberFor2ndQ = numberFor2ndQ % 4;
    var modulus3ForNumberFor2ndQ = numberFor2ndQ % 3;
    if (modulus4ForNumberFor2ndQ == 0 && modulus3ForNumberFor2ndQ == 0) {
        document.getElementById("Q2").innerHTML = "True";
    } else {
        document.getElementById("Q2").innerHTML = "False";
    }
}

// 3rd Q

function question3() {
    var firstNumber3Q, secondNumber3Q;
    firstNumber3Q = window.prompt("Q3. enter a number");
    secondNumber3Q = window.prompt("Q3. enter a number");
    if (firstNumber3Q > secondNumber3Q) {
        document.getElementById("Q3").innerHTML = firstNumber3Q;
    } else if (secondNumber3Q > firstNumber3Q) {
        document.getElementById("Q3").innerHTML = secondNumber3Q;
    }
}

// 4th Q

function question4() {
    var number4Q = window.prompt("Q4. enter a number");
    if (number4Q > 0) {
        document.getElementById("Q4").innerHTML = 'positive';
    } else if (number4Q < 0) {
        document.getElementById("Q4").innerHTML = 'negative';
    } else if (number4Q == 0) {
        document.getElementById("Q4").innerHTML = 'Zero';
    }
}

// 5th Q

function question5() {

    var firstNumber5Q, secondNumber5Q, thirdNumber5Q;
    firstNumber5Q = window.prompt("Q5. enter a number");
    secondNumber5Q = window.prompt("Q5. enter a number");
    thirdNumber5Q = window.prompt("Q5. enter a number");
    var maxValQ5, minValQ5;
    if (secondNumber5Q > thirdNumber5Q && secondNumber5Q > firstNumber5Q) {
        maxValQ5 = secondNumber5Q;
        if (thirdNumber5Q < firstNumber5Q) {
            minValQ5 = thirdNumber5Q;
        }
        else if (thirdNumber5Q > firstNumber5Q) {
            minValQ5 = firstNumber5Q;
        }
    }
    else if (thirdNumber5Q > secondNumber5Q && thirdNumber5Q > firstNumber5Q) {
        maxValQ5 = thirdNumber5Q;
        if (secondNumber5Q < firstNumber5Q) {
            minValQ5 = secondNumber5Q;
        }
        else if (secondNumber5Q > firstNumber5Q) {
            minValQ5 = firstNumber5Q;
        }
    }
    else if (firstNumber5Q > secondNumber5Q && firstNumber5Q > thirdNumber5Q) {
        maxValQ5 = firstNumber5Q;
        if (secondNumber5Q < thirdNumber5Q) {
            minValQ5 = secondNumber5Q;
        }
        else if (secondNumber5Q > thirdNumber5Q) {
            minValQ5 = thirdNumber5Q;
        }
    }
    document.getElementById("Q5").innerHTML = 'Max ' + maxValQ5 + ' Min ' + minValQ5;
}

// 6th Q

function question6() {
    var number6Q = window.prompt('Q6. Number');
    if ((number6Q % 2) == 0) {
        document.getElementById("Q6").innerHTML = "Even";
    }
    else {
        document.getElementById("Q6").innerHTML = "ODD";
    }
}

// 7th Q 

function question7() {
    var character7Q = window.prompt('Q7. inter a Character ?');
    var a1, a2;
    if (character7Q == 'a' || character7Q == 'A' || character7Q == 'e' || character7Q == 'E' || character7Q == 'o' || character7Q == 'O' || character7Q == 'i' || character7Q == 'I' || character7Q == 'u' || character7Q == 'U') {
        a1 = " vowel";
    } else {
        a1 = " consonant";
    }
    var characterLower7Q = character7Q.toLowerCase();
    if (characterLower7Q == 'a' || character7Q == 'e' || character7Q == 'o' || character7Q == 'i' || character7Q == 'u') {
        a2 = " vowel";
    }
    else {
        a2 = " consonant";
    }
    document.getElementById("Q7").innerHTML = '1st method' + a1 + ' 2nd method ' + a2;
}

// 8th Q 

function question8() {
    var number8Q = window.prompt('Enter the final number');
    var numbers8QString = "";
    for (var index = 1; index <= number8Q; index++) {
        numbers8QString += index + ",";
    }
    document.getElementById("Q8").innerHTML = numbers8QString;
}

// 9th Q

function question9() {
    var number9Q = window.prompt('Enter a number to get the muti val to 12 for it');
    var result = 0;
    var resultsListOfMultis = "";
    for (var i = 1; i <= 12; i++) {
        result = number9Q * i;
        resultsListOfMultis += " " + result;
    }
    document.getElementById('Q9').innerHTML = resultsListOfMultis;
}

//10th Q

function question10() {
    var number10Q = window.prompt("Enter a number to get all the Even numbers to it");
    var evenNumberslist = " ";
    for (var i = 1; i < number10Q; i++) {

        if (i % 2 == 0) {
            evenNumberslist += " " + i;
        }

    }
    document.getElementById("Q10").innerHTML = evenNumberslist;
}

// 11thQ

function question11() {
    var number11Q = window.prompt("Enter the 1st Number");
    var number11Q2ndForThePowerValue = window.prompt("Enter the 2nd Number");
    var powerResult = 1;
    for (var i = 1; i <= number11Q2ndForThePowerValue; i++) {
        powerResult *= number11Q;
    }
    document.getElementById("Q11").innerHTML = powerResult;
}

// 12thQ

function getTotal(sup1, sup2, sup3, sup4, sup5) {
    var totalValue = Number(sup1) + Number(sup2) + Number(sup3) + Number(sup4) + Number(sup5);
    return totalValue;
}
function getAvg(total) {
    var avgValue = total / 5;
    return avgValue;
}

function question12() {

    do {
        var sup1 = window.prompt('enter a number 1');
    } while (sup1 > 100)
    do {
        var sup2 = window.prompt('enter a number 2');
    } while (sup2 > 100)
    do {
        var sup3 = window.prompt('enter a number 3');
    } while (sup3 > 100)
    do {
        var sup4 = window.prompt('enter a number 4');
    } while (sup4 > 100)
    do {
        var sup5 = window.prompt('enter a number 5');
    } while (sup5 > 100)
    var totalQ12 = getTotal(sup1, sup2, sup3, sup4, sup5);
    document.getElementById("Q12").innerHTML = "Total " + totalQ12 + " Avg " + getAvg(totalQ12) + " Percentage " + (getAvg(totalQ12) / 100) * 100;

}

// 13thQ

function question13() {

    do {

        var monthNumber = window.prompt('Enter Month Number From 1 to 12');

    } while (monthNumber > 12 || monthNumber < 1);

    if (monthNumber == 1 || monthNumber == 3 || monthNumber == 5 || monthNumber == 7 || monthNumber == 8 || monthNumber == 10 || monthNumber == 12) {

        document.getElementById('Q13').innerHTML = '31 Days in that month :' + monthNumber;

    } else if (monthNumber == 4 || monthNumber == 6 || monthNumber == 9 || monthNumber == 11) {

        document.getElementById('Q13').innerHTML = '30 Days in that month :' + monthNumber;


    } else if (monthNumber == 2) {

        document.getElementById('Q13').innerHTML = '28 OR 29 Days in that month :' + monthNumber;

    }

}

// 14thQ

function question14() {

    do {
        var sup1 = window.prompt('enter a mark for Physics');
    } while (sup1 > 100)
    do {
        var sup2 = window.prompt('enter a mark for Chemistry');
    } while (sup2 > 100)
    do {
        var sup3 = window.prompt('enter a mark for Biology');
    } while (sup3 > 100)
    do {
        var sup4 = window.prompt('enter a mark for Mathematics');
    } while (sup4 > 100)
    do {
        var sup5 = window.prompt('enter a mark for Computer');
    } while (sup5 > 100)

    var totalQ14 = getTotal(sup1, sup2, sup3, sup4, sup5)

    if (((getAvg(totalQ14) / 100) * 100) == 100) {
        document.getElementById('Q14').innerHTML = "Grade S";
    } else if (((getAvg(totalQ14) / 100) * 100) >= 90) {
        document.getElementById('Q14').innerHTML = "Grade A";
    } else if (((getAvg(totalQ14) / 100) * 100) >= 80) {
        document.getElementById('Q14').innerHTML = "Grade B";
    } else if (((getAvg(totalQ14) / 100) * 100) >= 70) {
        document.getElementById('Q14').innerHTML = "Grade C";
    } else if (((getAvg(totalQ14) / 100) * 100) >= 60) {
        document.getElementById('Q14').innerHTML = "Grade D";
    } else if (((getAvg(totalQ14) / 100) * 100) >= 50) {
        document.getElementById('Q14').innerHTML = "Grade E";
    } else if (((getAvg(totalQ14) / 100) * 100) < 50) {
        document.getElementById('Q14').innerHTML = "Grade F";
    }
}

// 15thQ

function question15() {

    do {

        var monthNumber = window.prompt('Enter Month Number From 1 to 12');

    } while (monthNumber > 12 || monthNumber < 1);

    switch (true) {
        case monthNumber == 1:
        case monthNumber == 3:
        case monthNumber == 5:
        case monthNumber == 7:
        case monthNumber == 8:
        case monthNumber == 10:
        case monthNumber == 12:
            document.getElementById('Q15').innerHTML = '31 Days in that month :' + monthNumber;

            break;

        case monthNumber == 4:
        case monthNumber == 6:
        case monthNumber == 9:
        case monthNumber == 11:
            document.getElementById('Q15').innerHTML = '30 Days in that month :' + monthNumber;

            break;

        case monthNumber == 2:

            document.getElementById('Q15').innerHTML = '28 OR 29 Days in that month :' + monthNumber;

            break
        default:

            document.getElementById('Q15').innerHTML = 'NaN Days in that month :';

            break;
    }

}
// 16thQ

function question16() {

    var character16Q = window.prompt('Q7. inter a Character ?');
    var awnser;

    switch (true) {
        case character16Q == 'a':
        case character16Q == 'A':
        case character16Q == 'e':
        case character16Q == 'E':
        case character16Q == 'o':
        case character16Q == 'O':
        case character16Q == 'i':
        case character16Q == 'I':
        case character16Q == 'u':
        case character16Q == 'U':
            awnser = " vowel";
            break;

        default:
            awnser = " consonant";
            break;
    }

    document.getElementById("Q7").innerHTML = 'That Character is A' + awnser;

}
// 17thQ

function question17() {

    var firstNumber17Q, secondNumber17Q;
    firstNumber17Q = window.prompt("Q17. enter a number");
    secondNumber17Q = window.prompt("Q17. enter a number");
    switch (true) {
        case firstNumber17Q > secondNumber17Q:
            document.getElementById("Q17").innerHTML = firstNumber3Q;
            break;
        case secondNumber17Q > firstNumber17Q:
            document.getElementById("Q17").innerHTML = secondNumber3Q;
        default:
            document.getElementById("Q17").innerHTML = "They are Equal";
            break;
    }

}

// 18thQ

function question18() {

    var number18Q = window.prompt('Q18. Number');
    switch (true) {
        case (number18Q % 2) == 0:
            document.getElementById("Q18").innerHTML = "Even";
            break;
        case (number18Q % 2) == 0:
            document.getElementById("Q18").innerHTML = "ODD";
            break;
        default:
            document.getElementById("Q18").innerHTML = "UnKnown";
            break;
    }

}
// 19thQ

function question19() {

    var number19Q = window.prompt("Q19. enter a number");

    switch (true) {
        case number19Q > 0:
            document.getElementById("Q19").innerHTML = 'positive';
            break;
        case number19Q < 0:
            document.getElementById("Q19").innerHTML = 'negative';
            break;
        case number19Q == 0:
            document.getElementById("Q19").innerHTML = 'Zero';
            break;
        default:
            document.getElementById("Q19").innerHTML = 'UnKnown';
            break;
    }

}

// 20thQ

function question20() {

    var firstNumberInTheEquation = Number(window.prompt("Q20. enter a number"));
    var secondNumberInTheEquation = Number(window.prompt("Q20. enter a number"));
    var equationChar = window.prompt("Q20. enter the equation Char (-  +  x  /)");

    switch (equationChar) {
        case "-":
            document.getElementById("Q20").innerHTML = firstNumberInTheEquation - secondNumberInTheEquation;
            break;

        case "+":
            document.getElementById("Q20").innerHTML = firstNumberInTheEquation + secondNumberInTheEquation;
            break;

        case "x":
        case "*":
        case "×":
            document.getElementById("Q20").innerHTML = firstNumberInTheEquation * secondNumberInTheEquation;
            break;

        case "/":
        case "÷":
            document.getElementById("Q20").innerHTML = firstNumberInTheEquation / secondNumberInTheEquation;
            break;

        default:
            document.getElementById("Q20").innerHTML = "Unknown char";
            break;
    }


}


