import { Page } from 'playwright-chromium';

export class NavigationDriver {
   constructor(private page: Page) {}

   clickOnLinkById(Id: string) {
      const link = this.page.getByTestId(Id);
      return link.click();
   }
   getPageUrl(): string {
      return this.page.url();
   }
}
