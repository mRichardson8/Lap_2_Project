async function getUserData() {

    let data = await fetch('https://viva-pal.herokuapp.com/api/habits', {
        method: "GET",
        headers: {
             "Authorization": "Bearer " + localStorage.token,
        }
    })
    let response = await data.json();
    if (!response.habit) {
        document.getElementById('user-page-create-habits-container').style.display = 'flex';
    }else{
        createHabits(response.habits);
    }
}

function createHabits(habits) {
    let habitsDiv = document.getElementById('habits-container');
    if(habits.water){
        waterDiv = createWaterDiv(habits.water);
        habitsDiv.append(waterDiv);
    }
    if (habits.sleep){
        sleepDiv = createSleepDiv(habits.sleep);
        habitsDiv.append(sleepDiv);
    }
    if (habits.exercise){
        exerciseDiv = createExerciseDiv(habits.exercise);
        habitsDiv.append(exerciseDiv);
    }

}
getUserData();

// This first block of code relates to the user being able to progress through the sign
// up process and also go back to previous sections.


const habits1 = [...document.querySelectorAll('.user-page-checkbox')];
const signUpSections = [...document.querySelectorAll('.user-page-section')];
const rightArrows = [...document.querySelectorAll('.fa-arrow-right')];
const leftArrows = [...document.querySelectorAll('.fa-arrow-left')];
const nextButtons = [...document.querySelectorAll('.user-page-next-button')];

function next1Arrow(e) {
    let checkCounter = 0;
    for (let each of habits1) {
        if (each.checked === true) {
            checkCounter += 1;
        }
    }
    if (checkCounter > 0) {
        let indexPosition = rightArrows.indexOf(e.target);
        signUpSections[indexPosition].style.display = 'none';
        signUpSections[indexPosition + 1].style.display = 'block';
    } else {
        alert('Choose at least one habit to move to next section');
    }

}

function prev1Arrow(e) {
    let indexPosition = leftArrows.indexOf(e.target);
    signUpSections[indexPosition].style.display = 'none';
    signUpSections[indexPosition - 1].style.display = 'block';
}

function next1Btn(e) {
    let checkCounter = 0;
    for (let each of habits1) {
        if (each.checked === true) {
            checkCounter += 1;
        }
    }
    if (checkCounter > 0) {
        let indexPosition = nextButtons.indexOf(e.target);
        signUpSections[indexPosition].style.display = 'none';
        signUpSections[indexPosition + 1].style.display = 'block';
    } else {
        alert('Choose at least one habit to move to next section');
    }
}


leftArrows.forEach(each => {
    each.addEventListener('click', (e) => {
        prev1Arrow(e);
    })
})

rightArrows.forEach(each => {
    each.addEventListener('click', (e) => {
        next1Arrow(e);
    })
})

nextButtons.forEach(each => {
    each.addEventListener('click', (e) => {
        next1Btn(e);
    })
})
