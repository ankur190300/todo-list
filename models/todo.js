
//require the mongoose library
const mongoose = require('mongoose');

//making the basic model of attributes for each entity in database
const constSchema = new mongoose.Schema({

    description:
    {
        type: String,
        required: true
    },
    date:
    {
        type: String
    },
    category:
    {
        type: String,
        required: true
    }
}
);

const T_list = mongoose.model('T_list', constSchema);

//export the model created by us to another file
module.exports = T_list;
