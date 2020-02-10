const axios = require('axios');
const http = require('http');
const url = require('url');

const getUsername = (access_token, function_to_execute) => {
	axios.get('https://api.github.com/user', {
		headers: {
			'Authorization': `token ${access_token}`
		},
	}).then((response) => {
		if ('login' in response.data) {
			function_to_execute(null, {
				username: response.data.login,
				access_token: access_token,
			});
		} else {
			console.error('Missing username in response');
			function_to_execute('Missing username', null);
		}
	}).catch((error) => {
		console.error('Error getting username:', error);
		function_to_execute(error, null);
	});
}

const getOAuthToken = (code, function_to_execute) => {
	axios.post('https://github.com/login/oauth/access_token', {
		client_id: 'bd6a342322ba0ce2601a',
		client_secret: '924289e6a0bc824f5239c990c3dcb8606ba2e7ba',
		code: code,
	}, {
		headers: {
			'Accept': 'application/json'
		},
	}).then((response) => {
		if ('access_token' in response.data) {
			getUsername(response.data['access_token'], function_to_execute);
		} else {
			console.error('Missing OAuth token in response');
			function_to_execute('Missing OAuth token', null);
		}
	}).catch((error) => {
		console.error('Error getting OAuth token:', error);
		function_to_execute(error, null);
	});
};

exports.authAnd = (function_to_execute) => {
	const server = http.createServer((request, response) => {
		request.on('error', (error) => {
			server.close();
			console.error('Error getting callback', error);
			function_to_execute(error, null);
		}).on('data', (chunk) => {}).on('end', () => {
			response.on('error', (error) => {
				server.close();
				console.error('Error getting callback', error);
				function_to_execute(error, null);
			});
			response.writeHead(200, {
				'Content-Type': 'text/html'
			})
			const parsedUrl = url.parse(request.url, true);
			if (parsedUrl.pathname === '/authorizationcallback' &&
				'code' in parsedUrl.query) {
				response.end('Success! Close this tab and return to your terminal.');
				server.close();
				getOAuthToken(parsedUrl.query['code'], function_to_execute);
			} else {
				response.end('Failed. Revisit your terminal and try again.');
				server.close();
			}
		});
	}).listen(4343);

	console.log('Open the following URL in a brower:');
	console.log(
		'https://github.com/login/oauth/authorize?client_id=bd6a342322ba0ce2601a&scope=public_repo');
	console.log('Waiting for callback...');
}