const {app} = require('./chartAPI');
const request = require("supertest");

describe("Test to make sure word freq for telegram and RSS feeds is coming back non-empty", () => {

    // test("The body should not be empty", done => {
    //     request(app)
    //         .get("/analyzeBBC")
    //         .then(response => {
    //             // console.debug("-->"+response.body.data.length);
    //             expect(response.body).not.toBe('');
    //             // console.debug(response.json())
    //             expect(response.body).toEqual('[{"x":"بی‌بی‌سی","value":11},{"x":"۱۴۰۱","value":10},{"x":"قرار","value":8},{"x":"دلیل","value":7},{"x":"گذشته","value":7},{"x":"جهانی","value":7},{"x":"عنوان","value":7},{"x":"هفته","value":7},{"x":"رسمی","value":7},{"x":"فارسی","value":7},{"x":"سازمان","value":7},{"x":"داده","value":7},{"x":"بازداشت","value":6},{"x":"اعتراضات","value":6},{"x":"سالی","value":6},{"x":"کشته","value":6},{"x":"سینما","value":6},{"x":"عرصه","value":6},{"x":"موسیقی","value":6},{"x":"تنها","value":6},{"x":"برگزار","value":6},{"x":"شده‌اند","value":6},{"x":"اعتراض‌های","value":6},{"x":"حکومت","value":6},{"x":"حمله","value":5},{"x":"آزادی","value":5},{"x":"نیمه","value":5},{"x":"هنری","value":5},{"x":"مهسا","value":5},{"x":"امینی","value":5},{"x":"چهره‌های","value":5},{"x":"تئاتر","value":5},{"x":"جوان","value":5},{"x":"طالبان","value":5},{"x":"پایتخت","value":5},{"x":"اعتراضی","value":5},{"x":"برنامه","value":5},{"x":"شدند","value":5},{"x":"نمایش","value":5},{"x":"گروه","value":5},{"x":"حدود","value":5},{"x":"زندگی","value":5},{"x":"است؟","value":5},{"x":"انقلاب","value":5},{"x":"حجاب","value":4},{"x":"مردم","value":4},{"x":"داده‌اند","value":4},{"x":"گرفت","value":4},{"x":"بسیاری","value":4},{"x":"اعلام","value":4},{"x":"آثار","value":4},{"x":"جهان","value":4},{"x":"جدید","value":4},{"x":"اروپا","value":4},{"x":"کشور","value":4},{"x":"حقوق","value":4},{"x":"بین‌المللی","value":4},{"x":"می‌گوید","value":4},{"x":"گفته","value":4},{"x":"جریان","value":4},{"x":"آغاز","value":4},{"x":"دولت","value":4},{"x":"آخرین","value":4},{"x":"مورد","value":4},{"x":"علیه","value":4},{"x":"پیدا","value":4},{"x":"دیگری","value":4},{"x":"مهم‌ترین","value":4},{"x":"انتخاب","value":4},{"x":"انتشار","value":3},{"x":"مساله","value":3},{"x":"همزمان","value":3},{"x":"انتظار","value":3},{"x":"مخالفان","value":3},{"x":"فرهنگ","value":3}]');
    //             expect(response.statusCode).toBe(200);
    //             done();
    //         });
    //
    // },30000);
    test.each(
        [
            '/analyzeIranIntl',
            '/analyzeRadioFarda',
            '/analyzeBBC',
            '/analyzeVarzesh3',
            '/analyzeEtemad',
            '/analyzeFarsnews',
            '/analyzeShargh',
            '/analyzeTelegramChannel/VahidOnline'
        ])('Running API test for %s to make sure a result is returned',async key => {
        const res = await request(app).get(key);
        expect(res.statusCode).toBe(200);
        expect(res.body.freqs.length).toBe(res.body.size);
        expect(res.body.size).toBeGreaterThan(0);
        expect('x' in res.body.freqs[0]).toBe(true);
    },35000)

});