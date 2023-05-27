require('dotenv').config();
const { fork } = require('child_process');
const express = require('express');
const app = express();
/*const path = require('path');
const ngrok = require('ngrok');
const user = process.env.USER;
const password = process.env.PASSWORD;*/

const axios = require('axios');

const compute = fork('task.js');
app.use(express.json())
app.use(express.urlencoded({extended: true}))


app.get('/', (req, res) => {
    console.log("got get");
    console.log(req);
    res.send('This is the tunnel created by Ngrok with Http');
});

app.post('/', (req, res) => {
    console.log("got post");
    console.log(req.body);
    if(req.body.event == "message")
    sendMessage();  
    res.send('This is the tunnel created by Ngrok with Http');
});

//service_cloud_bot_custID.js sessionid viber, cust Id, viber token


const server = app.listen(process.env.PORT, () => {
    console.log('Express listening at ', server.address().port);
})
function sendMessage(){
    axios.post("https://chatapi.viber.com/pa/send_message",{
        receiver:"pLjDe1D1SRZ7irabsxeIoQ==",
        text:"Hello",
        type:"text",
        sender:{
            name:"reply"
        }
    },
    {
        headers: {
            'X-Viber-Auth-Token': '50ba54465c67dd67-eef5b878cef57be5-3230e457c4021d67',

        }
      }
      )
}