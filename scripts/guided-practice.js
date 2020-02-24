const prompt = require('prompt');
const git = require('simple-git')();

let main = () => {
	prompt.start();
	prompt.get([{
		name: 'branch',
		description: 'Which branch do you want to switch to?',
		required: true
	}], function(err, result) {
		git.silent(true).status((err, status) => {
			let hasChanges = [status.not_added,
				status.conflicted,
				status.created,
				status.deleted,
				status.modified,
				status.renamed
			].reduce((hasChanges, current) => {
				return hasChanges |= current.length != 0
			}, false);

			if (hasChanges) {
				console.log("Found uncommited changes. Saving them.")
				git.add('./*').commit("SAVEPOINT");
			}

			git.fetch("upstream", result.branch)
				.raw(["checkout",
					"-b",
					result.branch,
					`upstream/${result.branch}`,
				        "--no-track"
				]);
			console.log(`Click here for instructions: https://github.com/FaranOrg/CN-Guided-Practice/blob/${result.branch}/README.md`);
		});
	});
};

main();
