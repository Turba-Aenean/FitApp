// use functions from this file to download photos associated with user from firebase
// and store them in asyncStorage.

import {AsyncStorage} from 'react-native';
import firebase from './firebase.js';
const imageStore = firebase.storage();
const database = firebase.database();
let pics = [];
const s3 = require('aws-sdk/clients/s3');

var params = {
	Bucket: "fitpics",
	Key: "3/profilePicture"
}

let downloadPic = function(url, name) {
	// console.log('downloading profile pic')
	// return new Promise(resolve => {
	//   var xhr = new XMLHttpRequest();
	//   xhr.responseType = "text";
	//   xhr.onload = event => {
	//   	console.log('xhr response: ', xhr.response);
	//     resolve([name, xhr.response]);
	//   };
	//   xhr.open("GET", url);
	//   // xhr.setRequestHeader('Authorization', 'AWS4-HMAC-SHA256');
	//   xhr.send();
	// });
	s3.getObject(params, function(err, data) {
   if (err) console.log(err, err.stack); // an error occurred
   else     console.log('success!: ', data);
 });
}

// async function getPhotos(){
// 	console.log('getting photos');
// 	AsyncStorage.getItem('@FitApp:UserInfo', (err, val) => {
// 		if ( err ) {
// 			console.log('error retrieving UserInfo from AsyncStorage.');
// 		}
// 	  else {
// 	    let id = JSON.parse(val).id.toString();
// 	    // use id to download photo files from firebase:
// 	    database.ref("imgURLs/" + id).once("value", (snapshot) => {
// 	    	console.log('snapshot: ', snapshot);
// 				// snapshot.val() is an object. iterate throgh object to get all the names of img files in imageStore:
// 				for (var fileName in snapshot.val()) {
// 					// download files from the imageStore and push into array.
// 					let url = imageStore.ref("images/" + id + "/" + fileName).getDownloadURL()
// 						.then(async function(url) {
// 					    let tuple = await downloadPic(url, fileName);
// 					    pics.push(tuple);
// 					    // once you have all the pics downloaded, set to AsyncStorage:
// 					    if ( pics.length === Object.keys(snapshot.val()).length ) {
// 					    	AsyncStorage.setItem('@FitApp:UserPhotos', JSON.stringify(pics)).then(() => {
// 					    		console.log('saved photos to async storage.');
// 					    	});
// 					    }
// 						});
// 				}
// 			});
// 		}
// 	});
// }

module.exports = {
	// getPhotos: getPhotos,
	downloadPic: downloadPic
}
