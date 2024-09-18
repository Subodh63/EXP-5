const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost:27017/EXP?retryWrites=true&w=majority&appName=mern').then(() => {
    console.log('Connected to MongoDB');
}).catch(err => {
    console.error('Error connecting to MongoDB:', err);
});