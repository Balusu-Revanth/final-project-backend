const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const client = require("../configs/db");

// const temporaryData = [
//         {
//         "name": "Revanth",
//         "email": "balusurevanth@gmail.com",
//         "password": "12345"
//     },
//         {
//         "name": "Karthik",
//         "email": "bongukarthik@gmail.com",
//         "password": "12345"
//     },
//         {
//         "name": "Saketh",
//         "email": "sakethpothula@gmail.com",
//         "password": "12345"
//     }
// ]

exports.signUp = (req, res) => {
    const {name, email, password} = req.body;
    // const isValid = temporaryData.findIndex((ele) => (ele.email === email));
    client
    .query(`SELECT * FROM users WHERE email = '${email}';`)
    .then((data) => {
        isValid = data.rows;
        if (isValid.length !== 0) {
            res.status(400).json({
                error: "User already exists"
            })
        } else {
            bcrypt.hash(password, 10, (err, hash) => {
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
                // temporaryData.push(user);
                client
                .query(`INSERT INTO users (name, email, password) VALUES ('${user.name}', '${user.email}', '${user.password}');`)
                .then((data) => {
                    const token = jwt.sign(
                        {
                        email: email,
                        },
                        process.env.SECRET_KEY
                    );
                    res.status(200).json({
                        message: "User added successfully to database",
                        token: token
                    });
                })
                .catch((err) => {
                    req.status(500).json({
                        error: "Database error occurred"
                    })
                })
            });
        }
    })
    .catch((err) => {
        req.status(500).json({
            error: "Database error occurred"
        })
    });
};

exports.signIn = (req, res) => {
    const {email, password} = req.body;
    // const isValid = temporaryData.findIndex((ele) => (ele.email === email));
    client
    .query(`SELECT * FROM users WHERE email = '${email}';`)
    .then((data) => {
        userData = data.rows;
        if (userData.length === 0) {
            res.status(400).json({
                error: "User doesn't exists, signup instead!"
            })
        } else {
            bcrypt.compare(password, userData[0].password, (err, result) => {
                if (err) {
                    res.status(500).json({
                        error: "Internal server error"
                    });
                } else if (result) {
                    const token = jwt.sign(
                        {
                        email: email,
                        },
                        process.env.SECRET_KEY
                    );
                    res.status(200).json({
                        message: "User signed in successfully",
                        token: token
                    });
                } else {
                    res.status(400).json({
                        error: "Invalid password"
                    })
                }
            });
        }
    })      
    .catch((err) => {
        req.status(500).json({
            error: "Database error occurred"
        })
    });
};