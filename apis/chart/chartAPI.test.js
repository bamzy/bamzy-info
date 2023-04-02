const {app} = require('./chartAPI');
const request = require("supertest");

describe("Test to make sure word freq for telegram and RSS feeds is coming back non-empty", () => {


    test.each(
        [
            '/analyzeIranIntl',
            '/analyzeRadioFarda',
            '/analyzeBBC',
            '/analyzeVarzesh3',
            '/analyzeEtemad',
            '/analyzeFarsnews',
            '/analyzeShargh',
            // '/analyzeTelegramChannel/VahidOnline'
        ])('Running API test for %s to make sure a result is returned',async key => {
        const res = await request(app).get(key);
        expect(res.statusCode).toBe(200);
        expect(res.body.freqs.length).toBe(res.body.size);
        expect(res.body.size).toBeGreaterThan(0);
        expect('x' in res.body.freqs[0]).toBe(true);
    },35000)

});