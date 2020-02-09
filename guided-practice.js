const auth = require('./authentication.js');
const git = require('simple-git')();

// git commit -Am "WIP"
// git push origin
// git fetch
// get a list of recent branches
// let students select a branch
// switch to that branch

let main = () => {
	git.add('./*').commit("SAVEPOINT").push("origin").fetch("upstream");
	git.checkout({'branch': '3.4', '--track': 'upstream/3.4'});
	//git.branch({'--sort': 'committerdate', '--r': null}, (err, data) => console.log(data));
};

main();