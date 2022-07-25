db.users.insertOne({
    name: "Matthew",
    username: "mattr",
    habits: ["water", "exercise"], 
    water: 2000,
    exercise : 30,
    streak: 1,
    data: [
        {
            date: "20/07/2022",
            met: ["water", "exercise"],
            water: 2500,
            exercise: 45
        },
        {
            date: "21/07/2022",
            met : ["water"],
            water: 2000,
        },
        {
            date: "22/07/2022",
            met : ["water, exercise"],
            water: 2600,
            exercise: 60
        }
    ]
})
