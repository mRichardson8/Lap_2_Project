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
const rightArrow1 = document.getElementById('right-arrow-1');
const nextButton1 = document.getElementById('user-page-first-next-button');
const leftArrow1 = document.getElementById('left-arrow-1');
const userPageSections = [...document.querySelectorAll('.user-page-section')];
const userPageSelectContainers = [...document.querySelectorAll('.user-page-select-container')];
const nextButtons = [...document.querySelectorAll('.user-page-next-button')];

function nextSection() {
    let checkCounter = 0;

    for (let each of userPageSelectContainers) {
        each.style.display = 'none';
    }

    for (let each of habits1) {
        if (each.checked === true) {
            checkCounter += 1;
        }
    }
    if (checkCounter > 0) {
        for (let each of habits1) {
            if (each.checked === true) {
                let indexPosition = habits1.indexOf(each);
                userPageSelectContainers[indexPosition].style.display = 'flex';
            }
        }
        document.getElementById('user-page-first').style.display = 'none';
        document.getElementById('user-page-second').style.display = 'flex';
    } else {
        alert('Choose at least one habit to move to next section');
    }

}

function previousSection() {
    document.getElementById('user-page-second').style.display = 'none';
    document.getElementById('user-page-first').style.display = 'flex';
}


rightArrow1.addEventListener('click', () => {
    nextSection();
})

nextButton1.addEventListener('click', () => {
    nextSection();
})

leftArrow1.addEventListener('click', () => {
    previousSection();
})


