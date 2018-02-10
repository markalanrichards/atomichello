declare var describe: any, beforeAll: any, it: any, afterAll: any, expect:any;
import {Browser, launch} from 'puppeteer';
import server from '../server'
import {Server} from 'net'

describe("Hello World", () => {
    let browserPromise: Promise<Browser> = Promise.reject("");
    let serverPromise: Promise<Server> = Promise.reject("");
    beforeAll(() => {
        serverPromise = server(0);
        browserPromise = launch({args: ['--no-sandbox', '--disable-setuid-sandbox']});
        return Promise.all([browserPromise, serverPromise]);
    });
    afterAll(() => Promise.all([
            serverPromise.then(server => server.close()),
            browserPromise.then(browser => browser.close())
        ])
    );
    const resultsSelector = '.hello';
    it("includes hello", () => serverPromise.then(server =>
        browserPromise.then(browser =>
            browser.newPage()
                .then(page => page.goto(`http://127.0.0.1:${server.address().port}/hello`)
                            .then(() => page.waitForSelector(resultsSelector))
                            .then(() => page.content())
                            .then(text => expect(text).toEqual(expect.stringContaining("hello")))
                )
        )
    ))
})
