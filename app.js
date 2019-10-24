
//connecting to the express server
const express = require('express');
const app = express();

const path = require('path');

const port = 8000;

//setting express view directory and viewing engine 
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));

// setting up the middleware 
app.use(express.urlencoded());
app.use(express.static('assets'));

const db = require('./config/mongoose');
const T_list = require('./models/todo');

/*
//sample list for without using mongodb for our database
var list = [
    {
        description: 'slap anvi',
        date: '2020/08/02',
        category: 'personal'
    },
    {
        description: 'recieve gifts',
        date: '2000/07/02',
        category: 'word'
    }
];
*/


//creating an event to be added in the list

app.post('/create-event', function (req, res) {
    T_list.create({
        date: req.body.date,
        description: req.body.description,
        category: req.body.category
    }, function (err, newcontact) {

            if (err) {
                console.log('unable to add event into the database');
                return;
            }
            return res.redirect('back');
    }
    );

})

//deleting the completed(checked) task in the list from the database

app.get('/delete-task', function (req, res) {


    

    let id = req.query.id;

    T_list.findByIdAndDelete(id, function (err) {
        if (err) {
            console.log('there was an error in deleting the task');
            return;
        }
        return res.redirect('back');

    });
});

//rendering the homepage for our todo app

app.get('/', function(request, response){


    T_list.find({}, function (err, t_list) {

        if (err) { console.log("not able to see events in the database"); }





        return response.render('list', {
            title: "todo-list", t_list: t_list

        });
    });
});

//setting up the express server

app.listen(port, function (err) {

    if (err) {
        console.log('error in setting up serve ',err);
        return;
    }
    console.log(`the server is up and running on port: ${port}`);
})