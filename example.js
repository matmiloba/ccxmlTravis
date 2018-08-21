describe('Sample test suite', function() {

  before(function applyFixture() {
    var options = {
        uri: 'http://localhost:8000/sampleRoute',
        method: 'POST',
        headers: {'Content-Type': 'application/x-www-form-urlencoded'},
        form: {dataset: 'test_dataset'},
        resolveWithFullResponse: true
    };

    return rp(options)
        .then(function(response) {
            if (response.statusCode === 200) {
                console.log('ready for testing!');
            } else {
                throw new Error('failed to load');
            }
        });
});