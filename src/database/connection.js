const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost:27017/registration')
.then(() => console.log("Connect Successfully !!"))
.catch((error) => console.log(error));
