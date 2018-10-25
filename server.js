//import express
var express = require('express');
var hbs = require('hbs');

//assign express to app
var app = express();
var port = 3001;

app.set('view engine', 'hbs');
app.use(express.static(__dirname + '/public'));

app.get('/friends', (req,res)=> {
    res.send(     [ {
            name: 'Newton',
            age: 22,
            location: 'Lagos'     
        },
        {
            name: 'Jane',  
            age: 24,
            location: 'Jos'        
        }
        ])

});

app.post('/add_friends', (req,res)=> {
    var foods = [
        {
        id: 1,
        name: jane
        }
    ]
    foods.save();
    req.send()
});


//port to listen on
app.listen(port, console.log(`This app is listening on port ${port}`));