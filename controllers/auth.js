const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken")

const temporaryData = [
        {
        "name": "Revanth",
        "email": "balusurevanth5@gmail.com",
        "password": "12345"
    },
        {
        "name": "Karthik",
        "email": "bongukarthik@gmail.com",
        "password": "12345"
    },
        {
        "name": "Saketh",
        "email": "sakethpothula@gmail.com",
        "password": "12345"
    }
]

exports.signUp = (req, res) => {
    const {name, email, password} = req.body;

    const isValid = temporaryData.findIndex((ele) => (ele.email === email));

    if (isValid !== -1) {
        res.status(400).json({
            error: "User already exists"
        })
    }

    const token = jwt.sign(
        {
        email: email,
        },
        process.env.SECRET_KEY
    );

    bcrypt.hash(password, 10, (err, hash) =>{
        if (err) {
            res.status(500).json({
                error: "Internal server error"
            });
        }
        const user = {
            name,
            email,
            password: hash
        }
        temporaryData.push(user);

        console.log(temporaryData);

        res.status(200).json({
            message: "User added successfully to database",
            token: token
        });
    });

    // res.send("Everything is fine");
};

exports.signIn = (req, res) => {
    
};