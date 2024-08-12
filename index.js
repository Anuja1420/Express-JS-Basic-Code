const express = require ('express');
const routes = require('./Routes/Students.js');

const app = express();

const PORT = 5005;

app.use('/students' , routes);

app.listen(PORT , ()=>{
    console.log(`Express Server is running on PORT: ${PORT}`);
})