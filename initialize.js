const axios = require('axios');
const git = require('simple-git')();
const auth = require('./authentication.js');

let fork = (creds) => {
	axios.post('https://api.github.com/repos/FaranOrg/CN-Guided-Practice/forks', {}, {
			auth: {
				username: creds.username,
				password: creds.password
			}
		})
		.then((res) => {
			console.log(`statusCode: ${res.statusCode}`)
			// TODO(faranjessani): Log to a file
		})
		.catch((error) => {
			if(error.response.status === 401) {
				console.error("Invalid credentials. Try again.");
				process.exit(1);
			}
			else {
				// TODO(faranjessani): Log to a file
				console.error("Error forking");
			}
		});
};

let updateRemotes = (creds) => {
	git.removeRemote('origin');
	git.addRemote('origin', `https://github.com/${creds.username}/CN-Guided-Practice.git`);

	git.removeRemote('upstream');
	git.addRemote('upstream', `https://github.com/FaranOrg/CN-Guided-Practice.git`);
};

let main = () => {
	auth.authAnd((err, creds) => {
		if(err) {
			console.log("Please enter your credentials")
		}
		else {
			fork(creds);
			// ensure this doesn't run if fork fails
			updateRemotes(creds);
		}
	});
};

main();