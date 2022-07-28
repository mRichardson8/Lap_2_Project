const data = [
  {
    date: "Tue",
    met: ["water", "exercise"],
    habits: {
      water: { current: 2000, required: 2000, met: true, streak: 5 },
      exercise: { current: 60, required: 30, met: true, streak: 2 },
    },
  },
  {
    date: "Wed",
    met: ["water", "exercise"],
    habits: {
      water: { current: 2000, required: 2000, met: true, streak: 5 },
      exercise: { current: 60, required: 30, met: true, streak: 2 },
    },
  },
  {
    date: "Thu",
    met: ["water", "exercise"],
    habits: {
      water: { current: 2000, required: 2000, met: true, streak: 5 },
      exercise: { current: 60, required: 30, met: true, streak: 2 },
    },
  },
  {
    date: "Fri",
    met: ["water", "exercise"],
    habits: {
      water: { current: 2000, required: 2000, met: true, streak: 5 },
      exercise: { current: 60, required: 30, met: true, streak: 2 },
    },
  },
];

createChart(data);

async function getUserData() {
  let response = await fetch("https://viva-pal.herokuapp.com/api/habits", {
    method: "GET",
    headers: {
      Authorization: "Bearer " + localStorage.token,
    },
  });
  console.log(response);
  let data = await response.json();
  console.log(data);

  if (!data) {
    document.getElementById("user-page-create-habits-container").style.display =
      "flex";
  } else {
    console.log(data.habits);
    createUserDetails(data.name);
    createHabits(data.habits);
  }
}

async function sendHabits() {
  let habits = {};
  if (document.getElementById("exercise-check").checked) {
    habits.exercise = {
      required: document.getElementById("exercise-goal").value,
      streak: 0,
      current: 0,
      met: false,
    };
  }
  if (document.getElementById("water-check").checked) {
    habits.water = {
      required: document.getElementById("water-goal").value,
      streak: 0,
      current: 0,
      met: false,
    };
  }
  if (document.getElementById("sleep-check").checked) {
    habits.sleep = {
      required: document.getElementById("sleep-goal").value,
      streak: 0,
      current: 0,
      met: false,
    };
  }
  let habitObj = {
    name: localStorage.name,
    createdBy: localStorage.userId,
    habits: habits,
    data: [],
  };

  let response = await fetch("https://viva-pal.herokuapp.com/api/createhabit", {
    method: "POST",
    headers: {
      authorization: "Bearer " + localStorage.token,
      "Content-Type": "application/json",
    },
    body: JSON.stringify(habitObj),
  });

  console.log(response);

  if (response.status === 201) {
    let data = await response.json();
    console.log(data);
    createUserDetails(data.name);
    createHabits(data.habits);
    document.getElementById("user-page-create-habits-container").style.display =
      "none";
  }
}

async function updateHabits(habitParam) {
  let data = await fetch("https://viva-pal.herokuapp.com/api/updatehabit", {
    method: "PATCH",
    headers: {
      Authorization: "Bearer " + localStorage.token,
      "Content-Type": "application/json",
    },
    body: JSON.stringify(habitParam),
  });
  let response = await data.json();
  console.log(response.status);
}

let testHabits = {
  createdBy: "62dfcb97433fa6ec72a53fc6",
  data: [{}],
  habits: {
    exercise: { required: 30, streak: 5, met: false, current: 0 },
    water: { required: 2000, streak: 2, met: true, current: 1900 },
    sleep: { required: 8, streak: 0, met: false, current: 0 },
  },
  name: "Matthew Richardson",
};

createUserDetails(testHabits.name);
createHabits(testHabits.habits);
// getUserData();
// document.getElementById('user-page-create-habits-container').style.display = 'flex';

// This first block of code relates to the user being able to progress through the sign
// up process and also go back to previous sections.

const habits1 = [...document.querySelectorAll(".user-page-checkbox")];
const rightArrow1 = document.getElementById("right-arrow-1");
const nextButton1 = document.getElementById("user-page-first-next-button");
const leftArrow1 = document.getElementById("left-arrow-1");
const userPageSections = [...document.querySelectorAll(".user-page-section")];
const userPageSelectContainers = [
  ...document.querySelectorAll(".user-page-select-container"),
];
const nextButtons = [...document.querySelectorAll(".user-page-next-button")];
const userPageSubmitBtn = document.getElementById("user-page-submit-button");

function nextSection() {
  let checkCounter = 0;

  for (let each of userPageSelectContainers) {
    each.style.display = "none";
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
        userPageSelectContainers[indexPosition].style.display = "flex";
      }
    }
    document.getElementById("user-page-first").style.display = "none";
    document.getElementById("user-page-second").style.display = "flex";
  } else {
    alert("Choose at least one habit to move to next section");
  }
}

function previousSection() {
  document.getElementById("user-page-second").style.display = "none";
  document.getElementById("user-page-first").style.display = "flex";
}

rightArrow1.addEventListener("click", () => {
  nextSection();
});

nextButton1.addEventListener("click", () => {
  nextSection();
});

leftArrow1.addEventListener("click", () => {
  previousSection();
});

userPageSubmitBtn.addEventListener("click", () => {
  sendHabits();
});

const btn = document.getElementById('moon-button');




const everything = [...document.querySelectorAll("*")];

function darkMode() {
    everything.forEach(each => {
        if (window.getComputedStyle(each).getPropertyValue('color') === "rgb(61, 236, 221)") {
            each.style.color = '#1c059f';
        }
        if (window.getComputedStyle(each).getPropertyValue('background-color') === "rgb(61, 236, 221)") {
            each.style.backgroundColor = '#1c059f';
    
        }
        if (window.getComputedStyle(each).getPropertyValue('color') === "rgb(255, 255, 255)") {
            each.style.color = "#a3a2a2";
        }
        if (window.getComputedStyle(each).getPropertyValue('background-color') === "rgb(255, 255, 255)"){
            each.style.backgroundColor = '#a3a2a2';
        }
    })
}

function lightMode(){
  everything.forEach(each => {
    if (window.getComputedStyle(each).getPropertyValue('color') === 'rgb(28, 5, 159)') {
        each.style.color = "#3decdd";
    }
    if (window.getComputedStyle(each).getPropertyValue('background-color') === 'rgb(28, 5, 159)') {
        each.style.backgroundColor = "#3decdd";
    }
    if (window.getComputedStyle(each).getPropertyValue('color') === "rgb(163, 162, 162)") {
        each.style.color = "#ffffff"
    }
    if (window.getComputedStyle(each).getPropertyValue('background-color') === "rgb(163, 162, 162)") {
        each.style.backgroundColor = "#ffffff";
    }
})
}

btn.addEventListener('click', () => {
    if (window.getComputedStyle(document.querySelector('#user-page-dashboard h1')).getPropertyValue('background-color') == 'rgb(61, 236, 221)'){
      darkMode();
    } else{
      lightMode();
    }
    
    
}
)
  

const open = document.getElementById("open");
const modal_container = document.getElementById("modal-container");
const close = document.getElementById("close");

open.addEventListener("click", () => {
  modal_container.classList.add("show");
});

close.addEventListener("click", () => {
  modal_container.classList.remove("show");
});
