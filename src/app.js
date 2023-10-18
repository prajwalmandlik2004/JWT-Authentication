require('dotenv').config();
const express = require('express');
const path = require('path');
const app = express();
const hbs = require('hbs');
const { register } = require('module');
const staticPath = path.join(__dirname, "../public");
const templatePath = path.join(__dirname, "../templates/views");
const partialsPath = path.join(__dirname, "../templates/partials");
const port = process.env.PORT || 3000;
require('./database/connection');
const { json } = require('express');
const Register = require('./models/registers');
const bcrypt = require('bcryptjs');

app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(express.static(staticPath));
app.set("view engine", "hbs");
app.set("views", templatePath);
hbs.registerPartials(partialsPath);

// console.log(process.env.SECRET_KEY);

app.get('/', (req, res) => {
    res.render("index");
});

app.get('/register', (req, res) => {
    res.render("register");
});

app.get('/login', (req, res) => {
    res.render("login");
});


app.post('/register', async (req, res) => {
    try {
        const password = req.body.password;
        const cpassword = req.body.confirmpassword;

        if (password === cpassword) {
            const registerEmplyoee = new Register({
                firstname: req.body.firstname,
                lastname: req.body.lastname,
                email: req.body.email,
                phone: req.body.phone,
                age: req.body.age,
                gender: req.body.gender,
                password: req.body.password,
                confirmpassword: req.body.confirmpassword
            });

            console.log("The success part : " + registerEmplyoee);

            const token = await registerEmplyoee.genAuthToken();
            console.log("The token part : " + token);

            const saveData = await registerEmplyoee.save();
            console.log("The page part is : " + saveData);
            res.status(201).render("index");
        }
        else {
            res.send("Password is not matching");
        }
    } catch (error) {
        res.status(400).send(error);
    }
});


app.post('/login', async (req, res) => {
    try {

        const email = req.body.email;
        const password = req.body.password;

        const userEmail = await Register.findOne({ email: email });

        const isMatch = await bcrypt.compare(password, userEmail.password);

        const token = await userEmail.genAuthToken();
        console.log("The token is : " + token);

        // userEmail.password === password
        if (isMatch) {
            res.status(201).render("index");
        }
        else {
            res.send("Invalid Details");
        }

    } catch (error) {
        res.status(400).send(error);
    }
});




// Encryption and Decryption  : 
// prajwal -> iktcpte -> prajwal ( Not Secure )
// We can encrypt as well as decrypt this password using this 

// Hashing Algorithm ( Bcrypt : B : Blowfish , Crypt : Hashing function which uses unix password system)
// One way communication : we cannot decode any password
// prajwal -> iktcpte

// Salt : 4 rounds -> 159 days
// Salt : 12 rounds -> >3y

// const bcrypt = require('bcryptjs');

// const securePassword = async (password) => {
//     const passwordHash = await bcrypt.hash(password, 10);
//     console.log(passwordHash);
//     // Hashed Password : $2a$10$IwsFkkjTlAGTAq/9nhsxEua4Rvpn60Ar3R7ljqxUr82j.BWe5bcF6

//     const passwordMatch = await bcrypt.compare(password, passwordHash);
//     console.log(passwordMatch);

//     // Return true
// }

// securePassword("prajwal@123");




// JWT : Json Web Token ( Authentication )

// const jwt = require('jsonwebtoken');

// const createToken = async () => {
//     // Object : Unique and Secretkey : minimum 32 characters 
//     const token = await jwt.sign({ _id: "652d77ed53f0c37fc719cf2e" }, "ffhsdffgdfhfgdffbfdffsdfsdhffbdfsdjkffdsfh", { expiresIn: "2 seconds" });
//     console.log(token);

//     const userVerification = await jwt.verify(token, "ffhsdffgdfhfgdffbfdffsdfsdhffbdfsdjkffdsfh");
//     console.log(userVerification);
// }

// createToken();

app.listen(port, () => {
    console.log(`listening port number ${port}`);
});


