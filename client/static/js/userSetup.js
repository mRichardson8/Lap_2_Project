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
  '<span class="material-symbols-outlined"> dark_mode </span>';
  settingsIcon2.setAttribute("class", "icons2");
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
    let target = document.createElement('p');
    target.innerText = "Target : " + data.required + " ml";
    target.setAttribute('class', 'habit-target');
    let current = document.createElement('p');
    current.innerText = "Water drank today: " + data.current + " ml"; 
    current.setAttribute('class', 'habit-current');
    current.setAttribute('id', 'water-current')
    let addBtn = document.createElement('button');
    addBtn.innerText = "+";
    addBtn.addEventListener('click', () => {
        let inputDiv = document.createElement('div');
        inputDiv.style.display = 'flex';
        inputDiv.style.flexDirection = 'column';
        let inputContainer = document.createElement('div');
        inputContainer.style.display = 'flex';
        let btnsContainer = document.createElement('div');
        btnsContainer.style.display = 'flex';
        let inputLabel = document.createElement('label');
        inputLabel.textContent = 'Water consumed:';
        let inputNumber = document.createElement('input');
        inputNumber.setAttribute('type', 'number');
        let inputSubmitBtn = document.createElement('button');
        inputSubmitBtn.textContent = "Add entry";
        inputSubmitBtn.addEventListener('click', () => {
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
  let target = document.createElement("p");
  target.innerText = "Target : " + data.required + " mins";
  target.setAttribute("class", "habit-target");
  let current = document.createElement("p");
  current.innerText = "Minutes exercised today: " + data.current + " mins";
  current.setAttribute("class", "habit-current");
  let addBtn = document.createElement("button");
  addBtn.innerText = "+";

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
  let target = document.createElement("p");
  target.innerText = "Target hours of sleep: " + data.required + " hrs";
  target.setAttribute("class", "habit-target");
  let current = document.createElement("p");
  current.innerText = "Hours slept last night: " + data.current + " hrs";
  current.setAttribute("class", "habit-current");
  let addBtn = document.createElement("button");
  addBtn.innerText = "+";

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
