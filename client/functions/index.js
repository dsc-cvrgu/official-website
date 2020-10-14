const functions = require('firebase-functions')
const admin = require('firebase-admin')
const path = require('path')
const serviceAccount = path.resolve(__dirname, 'serviceAccount.json')
admin.initializeApp({
    credential: admin.credential.cert(serviceAccount),
    databaseURL: "https://dsc-cgu.firebaseio.com"
});
const express = require('express');
const cors = require('cors');
const app = express();
app.use(cors({ origin: true }));
const db = admin.firestore();

app.get('/api/event-details', (req, res) => {
    db.collection('Events').get().then(doc => {
        const event_arr = [];
        doc.forEach(item => {
            event_arr.push(item.data())
        })
        return res.send(event_arr)
    }).catch((err) => console.log(err));
});
exports.events = functions.https.onRequest(app);

exports.userOnCreate = functions.auth.user().onCreate((user) => {
    db.collection('User Data').doc(user.uid).set({
        Name: user.displayName,
        Email: user.email,
        CollegeName: "",
        Stream: ""
    }).then(() => console.log("User saved in Firestore")).catch(err => console.log(err));
})

