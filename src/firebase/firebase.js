import * as firebase from 'firebase';

  // Initialize Firebase
const config = {
apiKey: process.env.FIREBASE_API_KEY,
authDomain: process.env.FIREBASE_AUTH_DOMAIN,
databaseURL: process.env.FIREBASE_DATABASE_URL,
projectId: process.env.FIREBASE_PROJECT_ID,
storageBucket: process.env.FIREBASE_STORAGE_BUCKET,
messagingSenderId: process.env.FIREBASE_MESSAGING_SENDER_ID
};
//console.log(config.databaseURL);
firebase.initializeApp(config);

const database = firebase.database();
const googleAuthProvider = new firebase.auth.GoogleAuthProvider();

export { firebase, googleAuthProvider, database as default };

// database.ref('expenses').on('child_removed', (snapshot) => {
//     console.log(snapshot.key, snapshot.val());
// });

// database.ref('expenses').on('child_changed', (snapshot) => {
//   console.log(snapshot.key, snapshot.val());
// });

// database.ref('expenses').on('child_added', (snapshot) => {
//   console.log(snapshot.key, snapshot.val());
// });

// database.ref('expenses')
//     .once('value')
//     .then((snapshot) => {
//         const expenses = [];

//         snapshot.forEach((childSnapshot) => {
//             expenses.push({
//                 id: childSnapshot.key,
//                 ...childSnapshot.val()
//             });
//         });

//         console.log(expenses);
//     });

// database.ref('expenses').on('value', (snapshot) => {
//     const expenses = [];

//     snapshot.forEach((childSnapshot) => {
//         expenses.push({
//             id: childSnapshot.key,
//             ...childSnapshot.val()
//         });
//     });

//     console.log(expenses);
// });

// database.ref('expenses').push({
//     description: 'rent',
//     note: '',
//     amount: 109500,
//     createdAt: 4325235
// });

// database.ref('notes/-LPmU9D2rF-ON5thTGCu').update({
//     body: 'Buy food'
// });

// database.ref('notes').push({
//     title: 'To Do',
//     body: 'Go for a run'
// });

// const firebaseNotes = {
//     notes: {

//     }
// }

// const notes = [{
//     id: '12',
//     title: 'first note',
//     body: 'this is my first note'
// }, {
//     id: '12asd',
//     title: 'second note',
//     body: 'this is my second note'
// }];

// ?database.ref('notes').set(notes);

// database.ref().on('value', (snapshot) => {
//     const val = snapshot.val();
//     console.log(`${val.name} is a ${val.job.title} at ${val.job.company}`);
// });

// const onValueChange = database.ref()
//     .on('value', (snapshot) => {
//         const val = snapshot.val();
//         console.log(val);
//     }, (e) => {
//         console.log('Error with data fetching', e);
//     });

// setTimeout(() => {
//     database.ref('age').set(34);
// }, 3500);

// setTimeout(() => {
//     database.ref().off('value', onValueChange);
// }, 7000);

// setTimeout(() => {
//     database.ref('age').set(32);
// }, 10500);

// database.ref()
//     .once('value')
//     .then((snapshot) => {
//         const val = snapshot.val();
//         console.log(val);
//     })
//     .catch((e) => {
//         console.log('Error fetching data', e);
//     });

// database.ref().set({
//     name: 'Tim',
//     age: 35,
//     stressLevel: 6,
//     job: {
//         title: 'Software developer',
//         company: 'Google'
//     },
//     isSingle: true,
//     location: {
//         city: 'Edmonton',
//         country: 'Canada'
//     }
// }).then(() => {
//     console.log('Data is saved');
// }).catch((e) => {
//     console.log('This failed.', e);
// });

//database.ref('isSingle').set(null);

// database.ref().update({
//     name: 'Mike',
//     age: 20,
//     job: 'Software developer',
//     isSingle: null
// });

// database.ref().update({
//     stressLevel: 9,
//     'job/company': 'Amazon',
//     'location/city': 'Seattle'
// });

// database.ref().remove().then(() => {
//     console.log('Data is removed');
// }).catch((e) => {
//     console.log('Remove failed.', e);
// })

// database.ref().set('This is my data');

// database.ref('age').set(27);
// database.ref('location/city').set('New York');

// database.ref('attributes').set({
//     height: 523,
//     weight: 324
// }).then(() => {
//     console.log('Data is saved');
// }).catch((e) => {
//     console.log('This failed.', e);
// });