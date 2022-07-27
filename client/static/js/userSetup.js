function createUserDetails(user) {
  let dashboard = document.getElementById("user-page-dashboard");
  let userNav = document.createElement("div");
  userNav.setAttribute("class", "user-nav");
  let title = document.createElement("h1");
  title.textContent = "VivaPal";
  let settingsIcon = document.createElement("p");
  settingsIcon.innerHTML = '<i class="fa-solid fa-user-gear"></i>';
  settingsIcon.setAttribute("class", "icons");
  let settingsIcon2 = document.createElement("p");
  settingsIcon2.innerHTML =
  '<button><span class="material-symbols-outlined"> dark_mode </span></button>';
  settingsIcon2.setAttribute("class", "btn-toggle");
  let name = document.createElement("p");
  name.innerText = user;
  name.setAttribute("class", "userName");
  userNav.append(title, settingsIcon, settingsIcon2, name,);
  dashboard.prepend(userNav);
}


function createHabits(habits) {
  let habitsDiv = document.getElementById("habits-container");
  if (habits.water) {
    waterDiv = createWaterDiv(habits.water);
    habitsDiv.append(waterDiv);
  }
  if (habits.sleep) {
    sleepDiv = createSleepDiv(habits.sleep);
    habitsDiv.append(sleepDiv);
  }
  if (habits.exercise) {
    exerciseDiv = createExerciseDiv(habits.exercise);
    habitsDiv.append(exerciseDiv);
  }
}

function createWaterDiv(data){
    let div = document.createElement('div');
    div.setAttribute('id', 'water-container');
    div.setAttribute('class', 'habit-container');
    let title = document.createElement('h3');
    title.innerText = "Water Intake";
    let streak = document.createElement('p');
    streak.innerText = "Streak : " + data.streak;
    streak.setAttribute('class', 'habit-streak');
    streak.setAttribute('id', "water-streak");
    let target = document.createElement('p');
    target.innerText = "Target : " + data.required + " ml";
    target.setAttribute('class', 'habit-target');
    target.setAttribute('id', "water-target");
    let current = document.createElement('p');
    current.innerText = "Water drank today: " + data.current + " ml"; 
    current.setAttribute('class', 'habit-current');
    current.setAttribute('id', 'water-current')
    let addBtn = document.createElement('button');
    addBtn.setAttribute('id', 'habit-button');
    addBtn.innerText = "+";
    addBtn.addEventListener('click', (e) => {
        if (e.target === document.getElementById('water-current').nextSibling) {
            let inputDiv = document.createElement('div');
            inputDiv.style.display = 'flex';
            inputDiv.style.flexDirection = 'column';
            let inputContainer = document.createElement('div');
            inputContainer.style.display = 'flex';
            let btnsContainer = document.createElement('div');
            btnsContainer.style.display = 'flex';
            let inputLabel = document.createElement('label');
            inputLabel.textContent = 'Water consumed (ml):';
            let inputNumber = document.createElement('input');
            inputNumber.setAttribute('type', 'number');
            let inputSubmitBtn = document.createElement('button');
            inputSubmitBtn.textContent = "Add entry";
            inputSubmitBtn.addEventListener('click', () => {
                let waterStreak = parseInt(document.getElementById('water-streak')
                .innerText.split(" ")[2]);
                let waterTarget = parseInt(document.getElementById('water-target')
                .innerText.split(" ")[2]);
                let waterCurrent = parseInt(document.getElementById('water-current')
                .innerText.split(" ")[3]);
                let newEntry = parseInt(inputNumber.value);
                if (!newEntry || newEntry <= 0) {
                    alert("Please input a positive number to add an entry");
                } else {
                    let newSum = waterCurrent + newEntry;
                    if (waterCurrent < waterTarget && newSum >= waterTarget){
                      waterStreak += 1;
                      document.getElementById('water-streak').innerText = "Streak : " + waterStreak;
                    }
                    document.getElementById('water-current').textContent = 
                    "Water drank today: " + newSum + " ml";
                    inputDiv.remove();
    
                }
                inputDiv.remove();
            })
            let inputUndoBtn = document.createElement('button');
            inputUndoBtn.textContent = 'Undo';
            inputUndoBtn.addEventListener('click', () => {
                inputDiv.remove();
            })
            inputContainer.append(inputLabel, inputNumber);
            btnsContainer.append(inputUndoBtn, inputSubmitBtn);
            inputDiv.append(inputContainer, btnsContainer);
            document.getElementById('water-current').parentNode
            .insertBefore(inputDiv, document.getElementById('water-current').nextSibling);
        }
        
    })

  div.append(title, streak, target, current, addBtn);
  return div;
}

function createExerciseDiv(data) {
  let div = document.createElement("div");
  div.setAttribute("id", "exercise-container");
  div.setAttribute("class", "habit-container");
  let title = document.createElement("h3");
  title.innerText = "Exercise";
  let streak = document.createElement("p");
  streak.innerText = "Streak : " + data.streak;
  streak.setAttribute("class", "habit-streak");
  streak.setAttribute("id", "exercise-streak");
  let target = document.createElement("p");
  target.innerText = "Target : " + data.required + " minutes";
  target.setAttribute("class", "habit-target");
  target.setAttribute('id', 'exercise-target')
  let current = document.createElement("p");
  current.innerText = "Minutes exercised today: " + data.current + " mins";
  current.setAttribute("class", "habit-current");
  current.setAttribute("id", "exercise-current");
  let addBtn = document.createElement("button");
  addBtn.setAttribute('id', 'habit-button');
  addBtn.innerText = "+";
  addBtn.addEventListener('click', (e) => {
    if (e.target === document.getElementById('exercise-current').nextSibling) {
        let inputDiv = document.createElement('div');
        inputDiv.style.display = 'flex';
        inputDiv.style.flexDirection = 'column';
        let inputContainer = document.createElement('div');
        inputContainer.style.display = 'flex';
        let btnsContainer = document.createElement('div');
        btnsContainer.style.display = 'flex';
        let inputLabel = document.createElement('label');
        inputLabel.textContent = 'Minutes of Exercise:';
        let inputNumber = document.createElement('input');
        inputNumber.setAttribute('type', 'number');
        let inputSubmitBtn = document.createElement('button');
        inputSubmitBtn.textContent = "Add entry";
        inputSubmitBtn.addEventListener('click', () => {
            let exerciseStreak = parseInt(document.getElementById('exercise-streak')
            .innerText.split(" ")[2]);
            let exerciseTarget = parseInt(document.getElementById('exercise-target')
            .innerText.split(" ")[2]);
            let exerciseCurrent = parseInt(document.getElementById('exercise-current')
            .innerText.split(" ")[3]);
            let newEntry = parseInt(inputNumber.value);
            if (!newEntry || newEntry <= 0) {
                alert("Please input a positive number to add an entry");
            } else {
                let newSum = exerciseCurrent + newEntry;
                if (exerciseCurrent < exerciseTarget && newSum >= exerciseTarget){
                    exerciseStreak += 1;
                    document.getElementById('exercise-streak')
                    .innerText = "Streak : " + exerciseStreak;
                }
                document.getElementById('exercise-current').textContent = 
                "Minutes exercised today: " + newSum + " minutes";
                inputDiv.remove();

            }
            inputDiv.remove();
        })
        let inputUndoBtn = document.createElement('button');
        inputUndoBtn.textContent = 'Undo';
        inputUndoBtn.addEventListener('click', () => {
            inputDiv.remove();
        })
        inputContainer.append(inputLabel, inputNumber);
        btnsContainer.append(inputUndoBtn, inputSubmitBtn);
        inputDiv.append(inputContainer, btnsContainer);
        document.getElementById('exercise-current').parentNode
        .insertBefore(inputDiv, document.getElementById('exercise-current').nextSibling);
    }
    
})


  div.append(title, streak, target, current, addBtn);
  return div;
}

function createSleepDiv(data) {
  let div = document.createElement("div");
  div.setAttribute("id", "sleep-container");
  div.setAttribute("class", "habit-container");
  let title = document.createElement("h3");
  title.innerText = "Sleep";
  let streak = document.createElement("p");
  streak.innerText = "Streak : " + data.streak;
  streak.setAttribute("class", "habit-streak");
  streak.setAttribute("id", "sleep-streak");
  let target = document.createElement("p");
  target.innerText = "Target hours of sleep: " + data.required + " hours";
  target.setAttribute("class", "habit-target");
  target.setAttribute("id", "sleep-target");
  let current = document.createElement("p");
  current.innerText = "Hours slept: " + data.current + " hours";
  current.setAttribute("class", "habit-current");
  current.setAttribute("id", "sleep-current")
  let addBtn = document.createElement("button");
  addBtn.setAttribute('id', 'habit-button');
  addBtn.innerText = "+";
  addBtn.addEventListener('click', (e) => {
    if (e.target === document.getElementById('sleep-current').nextSibling) {
        let inputDiv = document.createElement('div');
        inputDiv.style.display = 'flex';
        inputDiv.style.flexDirection = 'column';
        let inputContainer = document.createElement('div');
        inputContainer.style.display = 'flex';
        let btnsContainer = document.createElement('div');
        btnsContainer.style.display = 'flex';
        let inputLabel = document.createElement('label');
        inputLabel.textContent = 'Hours of sleep:';
        let inputNumber = document.createElement('input');
        inputNumber.setAttribute('type', 'number');
        let inputSubmitBtn = document.createElement('button');
        inputSubmitBtn.textContent = "Add entry";
        inputSubmitBtn.addEventListener('click', () => {
            let sleepStreak = parseInt(document.getElementById('sleep-streak')
            .innerText.split(" ")[2]);
            let sleepTarget = parseInt(document.getElementById('sleep-target')
            .innerText.split(" ")[4]);
            let sleepCurrent = parseInt(document.getElementById('sleep-current')
            .innerText.split(" ")[2]);
            let newEntry = parseInt(inputNumber.value);
            if (!newEntry || newEntry <= 0) {
                alert("Please input a positive number to add an entry");
            } else {
                let newSum = sleepCurrent + newEntry;
                if (sleepCurrent < sleepTarget && newSum >= sleepTarget){
                    sleepStreak += 1;
                    document.getElementById('sleep-streak')
                    .innerText = "Streak : " + sleepStreak;
                }
                document.getElementById('sleep-current').textContent = 
                "Hours slept: " + newSum + " hours";
                inputDiv.remove();

            }
            inputDiv.remove();
        })
        let inputUndoBtn = document.createElement('button');
        inputUndoBtn.textContent = 'Undo';
        inputUndoBtn.addEventListener('click', () => {
            inputDiv.remove();
        })
        inputContainer.append(inputLabel, inputNumber);
        btnsContainer.append(inputUndoBtn, inputSubmitBtn);
        inputDiv.append(inputContainer, btnsContainer);
        document.getElementById('sleep-current').parentNode
        .insertBefore(inputDiv, document.getElementById('sleep-current').nextSibling);
    }
    
})
  div.append(title, streak, target, current, addBtn);
  return div;
}

const ctx = document.getElementById("myChart").getContext("2d");

function createChart(habitData) {
  // what goes on the x axis
  const labels = [];
  const data = {
    labels,
    datasets: [
      {
        label: 'Goals',
        backgroundColor: "red",
        borderColor: "rgb(255, 99, 132)",
        // points on the bar chart where we put the actual data we need
        data: habitData,
      },
      {
        label: "Accomplished",
        backgroundColor: "blue",
        borderColor: "rgb(255, 99, 132)",
        // points on the bar chart where we put the actual data we need,
        data: habitData,
      },
    ],
  };
  const config = {
    type: "bar",
    data: data,
    options: {
      responsive: true,
    },
  };
  const myChart = new Chart(ctx, config);
}
