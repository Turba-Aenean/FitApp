import Amplify, {Storage} from 'aws-amplify';
import {AsyncStorage} from 'react-native';
const axios = require('axios');

Amplify.configure({
  Auth: require('./TOKENS.js').s3,
  Storage: {
  	bucket: 'fitpics',
  }
});


module.exports.getPhotosList = (id) => {
	return Storage.list(id + '/');
}

module.exports.upload = (timestamp, base64, user_id) => {
	return Storage.put(user_id + '/' + timestamp, base64, {level: 'public'}).then((result) => {
		console.log('successfully uploaded picture!', result);
		return result;
	}).catch((err) => {
		console.log('s3 bucket storage error: ', err);
	})
}

module.exports.delete = (user_id, key) => {
	Storage.remove(user_id + '/' +  key).then((result) => {
		console.log('successfully removed item from s3: ', result);
	}).catch((err) => {
		console.log('error removing from s3: ', err);
	});
}

module.exports.setProfilePicture = (base64, user_id) => {
	// upload base64 image to s3 bucket under key 'profilePicture'
	Storage.put(user_id + '/profilePicture', base64, {level: 'public'}).then((result) => {
		console.log('successfully uploaded profile picture!');
	}).catch((err) => {
		console.log('s3 profile picture set error: ', err);
	});
}