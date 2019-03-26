import firebase from 'firebase'

var config = {
    apiKey: "AIzaSyA2hdQfkY-WyCGPvJuiHuCC638W0kJreWo",
    authDomain: "acmesil.firebaseapp.com",
    databaseURL: "https://acmesil.firebaseio.com",
    projectId: "acmesil",
    storageBucket: "acmesil.appspot.com",
    messagingSenderId: "184315516758"
};

if (!firebase.apps.length) {
    firebase.initializeApp(config);
}

const auth = firebase.auth();
const db = firebase.database();
const storage = firebase.storage();

firebase.initializeApp(config);