const express = require('express')
const app = express()

//json middleware
app.use(express.json())
app.use(express.urlencoded({extended: false}))


//middleware
app.use('/api/users', require('./route/api/users'))

app.listen(3000, () => {
    console.log('server started on port 3000')
})