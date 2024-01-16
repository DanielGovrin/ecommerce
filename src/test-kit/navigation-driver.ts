import { Page } from 'playwright-chromium';

export class NavigationDriver {
    constructor(private page: Page) { }

    setPage(page: Page) {
        this.page = page;
    }

    // In NavigationDriver
    clickOnLinkById(Id: string) {
        const link = this.page.locator(`[data-testid="${Id}"]`);
        return link.click();
    }
    getPageUrl() {
        return this.page.url();
    }
}
