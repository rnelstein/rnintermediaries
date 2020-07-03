require('dotenv').config();
const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const sgMail = require('@sendgrid/mail')
sgMail.setApiKey(process.env.SENDGRID_API_KEY)

const app = express();

app.use(bodyParser.json());
app.use(cors());



app.post('/api/mail', async (req, res) => {
    const {name, email, message} = req.body;

    let msg = {
        from: email,
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


    try {
        await sgMail.send(msg)
        res.send("mail sendend")
    } catch (e) {
        res.send("email error")
    }
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