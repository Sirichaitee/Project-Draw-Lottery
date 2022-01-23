function calculate() {
  
    var manSalary = document.getElementById("manSalary").value;
    var womanSalary = document.getElementById("womanSalary").value;
    var manYears = document.getElementById("manYears").value;
    var womanYears = document.getElementById("womanYears").value;
    var education = document.getElementById("education").value;
    var location = document.querySelector('input[name="location"]:checked').value;
    var manFamWealth = document.querySelector('input[name="man-fam-wealth"]:checked').value;
    var womanFamWealth = document.querySelector('input[name="woman-fam-wealth"]:checked').value;
    var greed = document.getElementById("greedMultiplyer").value;
    
    // Calculate the average savings of both party from income and years of working
    var manSavings;
    var womanSavings;
    var savings;

    //Limit salary base to 100,000
    if ( manSalary >= 100000 ) {
        manSalary = 100000;
    }

    if ( womanSalary >= 100000 ) {
        womanSalary = 100000;
    }

    // Progressive saving rates

    if ( manYears >= 7 ) {
        manSavings = manSalary * 0.13 * 12 * manYears;
    } else if (  manYears >= 9  ) {
        manSavings = manSalary * 0.07 * 12 * manYears;
    } else if (  manYears >= 12  ) {
        manSavings = manSalary * 0.01 * 12 * 12;
    } else {
        manSavings = manSalary * 0.15 * 12 * manYears;
    }

    if ( womanYears >= 7 ) {
        womanSavings = womanSalary * 0.12 * 12 * womanYears;
    } else if (  womanYears >= 9  ) {
        womanSavings = womanSalary * 0.06* 12 * womanYears;
    } else if (  womanYears >= 12  ) {
        womanSavings = womanSalary * 0.01 * 12 * 12;
    } else {
        womanSavings = womanSalary * 0.14 * 12 * womanYears;
    }

    savings = (manSavings + womanSavings) / 2;
    
    // Add All multiplier except greed
    var rawNumber = Math.floor(savings * education * location * manFamWealth * womanFamWealth);

    // Replace last two digits with 0
    function roundUp(number) {
        if ( number > 10000 && number < 1000000 ) {
            number = number/100;
            number = Math.round(number)*100;
        } else if ( number > 1000000 ) {
            number = number/1000;
            number = Math.round(number)*1000;
        }

        // Set maximun number to 15,000,000
        if ( number > 15000000) {
            number = 15000000
        }

        return Math.round(number);
    }

    // Calculate with greed multiplier
    if (greed == 1) {
        var answer1 = 0;
        var answer2 = roundUp(rawNumber);
    } else if (greed == 2 ) {
        var answer1 = roundUp(rawNumber*0.9);
        var answer2 = roundUp(rawNumber*2);
    } else if (greed == 3 ) {
        var answer1 = roundUp(rawNumber*1.9);
        var answer2 = roundUp(rawNumber*3.2);
    } //else if (greed == 4 ) {
    //     var answer1 = rawNumber*3;
    //     var answer2 = rawNumber*5;
    // }

    // Output answers
    document.getElementById("answer1").innerHTML = answer1.toLocaleString();
    document.getElementById("answer2").innerHTML = answer2.toLocaleString();
}


function greedSlider() {
    var greedLevel = document.getElementById("greedMultiplyer").value;   

    var picLove = document.getElementById('imgLessGreed');
    var picMoney = document.getElementById('imgMoreGreed');

    document.getElementById("greedNumeber").innerHTML = greedLevel;

    if ( greedLevel == 3 ) {
        picLove.style.opacity = 0.15;
        picMoney.style.opacity = 1;
    } else if ( greedLevel == 2 ) {
        picLove.style.opacity = 0.5;
        picMoney.style.opacity = 0.5;
    } else if ( greedLevel == 1 ) {
        picLove.style.opacity = 1;
        picMoney.style.opacity = 0.15;
    }
}