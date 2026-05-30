const express = require('express');
const app = express();
const cors = require('cors');
const path = require('path');


app.use(express.static(path.join(__dirname)));


app.use(express.json());
app.use(cors());

app.get('/', (req,res) => {
    res.send('Server is working!');
})

app.post('/login', (req,res) => {
    const email = req.body.email;
    const password = req.body.password;

    if(email === 'itsmemurtaza27@gmail.com' && password === 'mj27'){
        res.json({ success: true, message: 'Login sucessful!'});
    } else {
        res.json({ success: false, message: 'Login failed, wrong email or password.'});
    }
})

app.get('/hello', (req,res) => {
    res.send('Hello my name is murtaza.');
})

app.listen(3000, () => {
    console.log('Server is running on port 3000.');
})

