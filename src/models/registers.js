const mongoose = require('mongoose');
const validator = require('validator');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');

const employeeSchema = new mongoose.Schema({
    firstname: {
        type: String,
        required: true
    },
    lastname: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true,
        unique: true,
        validate(value) {
            if (!(validator.isEmail(value))) {
                throw new Error("Enter valid email");
            }
        }
    },
    gender: {
        type: String,
        required: true
    },
    phone: {
        type: Number,
        required: true,
        unique: true,
        min: 10
    },
    password: {
        type: String,
        required: true
    },
    confirmpassword: {
        type: String,
        required: true
    },
    age: {
        type: Number,
        required: true
    },
    tokens: [{
        token: {
            type: String,
            required: true
        }
    }]
});

// JWT : Authentication 
// Generating tokens : 

employeeSchema.methods.genAuthToken = async function () {
    try {
        console.log(this._id);
        const token = jwt.sign({ _id: this._id.toString()}, 'mynameisprajwalmandlikbakenddeveloper');
        this.tokens = this.tokens.concat({ token: token });
        await this.save();
        return token;

    } catch (error) {
        res.send(error);
        console.log(error);
    }
}


// Password Hashing : ( Middleware )
// Bycrypt Hashing Algorithm

employeeSchema.pre("save", async function (next) {

    if (this.isModified("password")) {
        console.log(`The current password is : ${this.password}`);
        this.password = await bcrypt.hash(this.password, 10);
        console.log(`The hashed password is : ${this.password}`);
        this.confirmpassword = await bcrypt.hash(this.password, 10);

        // Use to remove confirm password from database 
        // this.confirmpassword = undefined;

    }

    next();

});


const Register = new mongoose.model("Register", employeeSchema);

module.exports = Register;

