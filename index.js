const express = require('express');
require('dotenv').config();
const bodyParser = require('body-parser');
const cors = require('cors');
const sgMail = require('@sendgrid/mail');
//sgMail.setApiKey(process.env.SENDGRID_API_KEY);

const app = express();

app.use(bodyParser.json());
app.use(cors());

app.post('/api/mail', async (req, res) => {
console.log(req.body)
    const {name, email, message} = req.body;

   /*

    try {

        let message = {
            from: name,
            to: "info@rnintermediaries.com",
            subject: `Contactform`,
            html: req.body
        };


        await sgMail.send(message);
        res.send({response: 'Mail sended'})
    } catch (e) {
        res.status(422).send(e)
    }

    */
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