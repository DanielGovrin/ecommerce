import { Page } from 'playwright-chromium';

export class NavigationDriver {
    constructor(private page: Page) {}

    async clickOnLinkByName(linkName: string) {
        const link = await this.page.getByRole('link', { name: linkName });
        return link.click();
    }

}
