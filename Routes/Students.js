const express = require('express');
const router = express.Router();

let students = [
    {
        id : "1",
        name : "Anuja",
        std : "10",
        div : "A"
    },
    {
        id : "2",
        name : "Aditya",
        std : "8",
        div : "B"
    },
    {
        id : "3",
        name : "Nikhil",
        std : "9",
        div : "C"
    },
    {
        id : "4",
        name : "Saurabh",
        std : "7",
        div : "D"
    },
    {
        id : "5",
        name : "Sample",
        std : "1",
        div : "B"
    }
]

//Get all Students
router.get('/', (req,res)=>{
    res.send(students);
})

//Get Students by ID
router.get('/id/:id',(req,res)=>{
    let id = req.params.id;
    let filteredStudents = students.filter((student) => student.id == id);
    res.send(filteredStudents);
})

//Get Students by Std
router.get('/std/:std', (req,res)=>{
    let std = req.params.std;
    let filteredStudents = students.filter((student) => student.std == std);
    res.send(filteredStudents);    
})

//Delete Student by Id
router.delete('/:id',(req,res)=>{
    let id = req.params.id;
    students = students.filter(student => student.id != id);
    res.send(`Student data with id ${id} has been deleted...`);
})

//Post New Student
router.post('/', (req,res)=>{
    students.push(
        {
            "id" : req.query.id,
            "name" : req.query.name,
            "std" : req.query.std,
            "div" : req.query.div
        }
    )
    res.send('New Student details has been added ');
})

//Update student
router.put('/:id', (req,res)=>{
    let id = req.params.id;
    let filteredStudents = students.filter(student => student.id == id);
    if(filteredStudents.length > 0){
        let filteredStudent = filteredStudents[0];
        let name = req.query.name;
        let std = req.query.std;
        let div = req.query.div;

        if(name){
            filteredStudent.name = name;
        }

        if(std){
            filteredStudent.std = std;
        }

        if(div){
            filteredStudent.div = div;
        }

        students = students.filter(student => student.id != id);
        students.push(filteredStudent);
        res.send('Student updated successfully');
    
    }
})
module.exports = router;