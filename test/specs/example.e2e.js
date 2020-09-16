async function getWrapperAysnc(selector) {
    const el = await $(selector);
    // comment out this waitForExists line to prevent error
    await el.waitForExist();
    return el;
}

describe('My Login application', () => {
    it('should login with valid credentials', () => {
        browser.url(`https://shop.polymer-project.org/`);
        
        const wrapper = browser.call(async () => {
            const wrapperAsync = await getWrapperAysnc('shop-app');
            console.log('wrapperAsync: ', wrapperAsync);
            return wrapperAsync;
        });

        console.log('wrapper: ', wrapper);
        wrapper.waitForExist();

        // with `await el.waitForExist();` in getWrapperAsync, header is a
        // Promise instead of an Element. Without, it's an Element as expected
        const header = wrapper.shadow$('app-header');
        console.log('header: ', header);
        header.waitForExist();
    });
});

