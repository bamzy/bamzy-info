const {parseStatsTable,app} = require('./codeAnalysis')

const request = require("supertest");


describe("Test the main path", () => {
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