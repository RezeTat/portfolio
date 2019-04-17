const fs = require('fs');
const webdriverio = require('webdriverio');
const options = require('../wdio.conf');
const client = webdriverio.multiremote(options);

jest.setTimeout(30000);

beforeAll(() => {
    return client.init().url('http://localhost:8080/admin#/login');
});

test("На странице есть кнопка “Авторизоваться", () => {
    return client
        .isExisting('.login__send-data')
        .then(browsers => {
            for (const browserName in browsers) {
                expect(browsers[browserName]).toBe(true);
            }
        })
        .screenshot()
        .then(browsers => {
            for (const browserName in browsers) {
                fs.writeFileSync(`./screenshots/login_${browserName}_has_open.png`, browsers[browserName].value, 'base64');
            }
        });
});

afterAll(() => {
    return client.end();
});
