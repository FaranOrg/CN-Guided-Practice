const axios = require('axios');
const git = require('simple-git')();
const auth = require('./authentication.js');

let fork = (creds) => {
    axios.post('https://api.github.com/repos/FaranOrg/CN-Guided-Practice/forks', {}, {
        headers: { 'Authorization': `token ${creds.access_token}` },
    })
    .then((res) => {
        console.log(`Created fork: https://github.com/${creds.username}/CN-Guided-Practice.git`);
    })
    .catch((error) => {
        if (error.response.status === 401) {
            console.error("Invalid credentials. Try again.");
            process.exit(1);
        } else {
            // TODO(faranjessani): Log to a file
            console.error("Error forking");
        }
    });
};

let updateRemote = (name, url) => {
    git.getRemotes([], (err, data) => {
        if (data.map(remote => remote.name).includes(name)) {
            git.removeRemote(name);
        }
        git.addRemote(name, url);
    });
};

let updateRemotes = (creds) => {
    updateRemote('origin', `https://github.com/${creds.username}/CN-Guided-Practice.git`);
    updateRemote('upstream', `https://github.com/FaranOrg/CN-Guided-Practice.git`);
};

let main = () => {
    auth.authAnd((err, creds) => {
        if (err) {
            console.error('Error fetching credentials', err);
        } else {
            fork(creds);
            updateRemotes(creds);
        }
    });
};

main();