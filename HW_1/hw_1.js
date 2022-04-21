//Function allows to check the type of value entered, makes numbers from strings if needed, and grants or permits access depending on user's age.

function checkAge(age) {
    age = Number(age);
    let age_2 = '18';
    let age_3 = 60;
    if (!isNaN(age)) {
        let new_age_2 = Number(age_2);
        let new_age_3 = Number(age_3);
        if (age < new_age_2) {
            alert("You'd better grow up");
        } else if ((age >= new_age_2) && (age < new_age_3)) {
            alert("Welcome!");
        } else if (age > new_age_3) {
            alert("Keep calm and look Culture channel");
        } else {
            alert("Technical work");
        }
    } else {
        alert("Error");
    }
}
 let agePrompt = prompt('Enter your age');
 checkAge(agePrompt);
