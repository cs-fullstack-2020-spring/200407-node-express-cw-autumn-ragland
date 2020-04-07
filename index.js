// 20-04-07 Node and Express CW

// import express using require
let express = require('express');
// create server
let app = express();
// define variable for port number
let portNumber = 8000;
// define array of student objects
let studentArray = [
    {
        name : "Jack", 
        confidence : "High"
    },
    {
        name : "Jill", 
        confidence : "Medium"
    },
    {
        name : "John", 
        confidence : "Low"
    }
]

// route for site root (localhost:8000)
app.get('/', (req,res) => {
    res.send("Welcome to my node + express server");
});

// simple route at localhost:8000/displayName
app.get('/displayName', (req,res) => {
    // variable for my name
    userName = "Autumn"
    // send my name to browser
    res.send(`The name is ${userName}`);
});

// route at localhost:8000/[NUMBER] using query params
app.get('/student/:id', (req, res) => {
    // iterate through array of student objects
    studentArray.forEach((student, index) => {
        // if the array item index matches the query param id
        if(index == req.params.id){
            // send formatted string with array item object properties to browser
            res.send(`Student Name : ${student.name} Student Confidence : ${student.confidence}` );
        }
    })
})

// route at localhost:8000/allStudents
app.get('/allStudents', (req, res) => {
    // string to build display string
    let displayStudentName = "";
    // iterate through array of student objects
    studentArray.forEach((student) => {
        // build display string
        displayStudentName = `${displayStudentName} ${student.name} ${student.confidence}`
    })
    // send completed display string to browser
    res.send(displayStudentName)
})

// allow server to listen at port number and display Listening Message in terminal
app.listen(portNumber, () => {
    console.log(`Listening on port ${portNumber}`);
});
