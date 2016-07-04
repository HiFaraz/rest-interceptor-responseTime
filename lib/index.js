interceptor = require('rest/interceptor');
module.exports = interceptor({
	request: function (request, config, meta) {
		request.hrtime = process.hrtime();
		return request;
	},
	response: function (response, config, meta) {
		if (response.status) {
			var response_hrtime = process.hrtime(response.request.hrtime);
			response.time = response_hrtime[0] * 1e3 + response_hrtime[1] / 1e6; // milliseconds
		}
		delete response.request.hrtime;
		return response;
	}
});