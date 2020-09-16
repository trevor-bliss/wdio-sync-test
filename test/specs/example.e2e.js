async function getWrapperAysnc(selector) {
    const wrapper = await $(selector);
    // comment out this waitForExists line to prevent error
    await wrapper.waitForExist();
    return wrapper;
}

describe('My Login application', () => {
    it('should login with valid credentials', () => {
        browser.url(`https://shop.polymer-project.org/`);
        
        let wrapper;
        browser.call(async () => {
            wrapper = await getWrapperAysnc('shop-app');
        });

        console.log('wrapper: ', wrapper);
        wrapper.waitForExist();

        // with `await wrapper.waitForExist();` header is an Promise instead of an Element
        // without, it's an Element as expected
        const header = wrapper.shadow$('app-header');
        console.log('header: ', header);
        header.waitForExist();
    });
});

