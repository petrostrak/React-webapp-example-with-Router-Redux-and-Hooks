import * as firebase from 'firebase';

const firebaseConfig = {
    apiKey: "AIzaSyD_4LUIG0k9NaVn32xYXpku9Zr7USi9E1w",
    authDomain: "react-project-no1.firebaseapp.com",
    databaseURL: "https://react-project-no1.firebaseio.com",
    projectId: "react-project-no1",
    storageBucket: "react-project-no1.appspot.com",
    messagingSenderId: "1049998446117",
    appId: "1:1049998446117:web:4b88fc7e68cd75a51739cc",
    measurementId: "G-JS4EVS1PVV"
};

firebase.initializeApp(firebaseConfig);

const database = firebase.database();

firebase.database().ref().set({
    name: 'petros trak',
    age: 34,
    isSingle: true,
    location:{
        city: 'Athens',
        country: 'Greece'
    }
}).then(()=>{
    console.log('data is saved')
}).catch((e)=>{
    console.log('This failed', e)
})

database.ref('attributes').set({'height':1.75, 'weight': 75 })
        .then(()=>{console.log('data saved')})
        .catch((e)=>{console.log('Failed to write data', e)})