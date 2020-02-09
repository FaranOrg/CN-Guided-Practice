const prompt = require('prompt');

schema = {
	properties: {
		username: {
			description: 'Enter your GitHub username',
			pattern: /^[a-zA-Z\s\-]+$/,
			message: 'Name must be only letters, spaces, or dashes',
			required: true,
		},
		password: {
			description: 'Enter your GitHub password',
			hidden: true,
			replace: '*',
			required: true
		}
	}
};

exports.authAnd = (function_to_execute) => {
	prompt.start();
	prompt.get(schema, function_to_execute);
}