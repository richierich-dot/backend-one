const express = require('express');

const app = express()

app.use(express.json())

app.get('/todos', (req, res)=>{
    return res.json([{id: 1, title: 'test-1'}, {id: 2, title: 'test-2'}, {id: 3, title: 'test-3'}])
})

app.get('/calculate', (req, res)=>{
    return res.json({
        amt: 50000,
        pi: 6,
        tenure: 5
    })
})

app.listen(3001, ()=>console.log(`App is listening at 3001`))