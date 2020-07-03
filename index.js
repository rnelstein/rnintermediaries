require('dotenv').config();
const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const nodemailer = require('nodemailer');

const app = express();

app.use(bodyParser.json());
app.use(cors());

const transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
        user: process.env.NODEMAILER_EMAIL,
        pass: process.env.NODEMAILER_PASSWORD
    }
});

app.post('/api/mail', async (req, res, next) => {
    const {name, email, message} = req.body;

    let msg = {
        from: process.env.NODEMAILER_EMAIL,
        to: process.env.NODEMAILER_EMAIL,
        subject: 'ContactForm',
        html: `
        <!DOCTYPE html>
<html>
<head>
</head>
<body>


<p><h1>Message from:</h1> ${name}, ${email}</p>
<p>${message}</p>

</body>
</html>`

    };


    transporter.sendMail(msg, function (error, info) {
        if (error) {
            res.send(error)
        } else {
            res.send(info.response);
        }
    })
});

if (process.env.NODE_ENV === 'production') {
    app.use(express.static('client/build'));
    const path = require('path');

    app.get('*', (req, res) => {
        res.sendfile(path.resolve(__dirname, 'client', 'build', 'index.html'));
    })

}

const port = process.env.PORT || 5000;
app.listen(port, () => console.log(`Example app listening on port ${port}!`));