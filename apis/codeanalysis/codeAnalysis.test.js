const {parseStatsTable,app} = require('./codeAnalysis')

const request = require("supertest");


describe("Test the code breakdown path", () => {
    test("The body should not be empty", done => {
        request(app)
            .get("/codestats")
            .then(async response => {
                console.debug("-->"+response.body);
                expect(response.body).not.toBe('');
                expect(response.statusCode).toBe(200);
                done();
            });
    });
});