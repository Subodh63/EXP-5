const mongoose = require('mongoose');


const connectSchema = new mongoose.Schema({
    name: {
        type: String,
    },
    Course: {
        type: String
    },
    Address: {
        type: String,
    },
    Country: {
        type: String
    },
    State: {
        type: String
    },
    Religion: {
        type: String
    }

})
const Student = mongoose.model('student', connectSchema);
module.exports = Student;