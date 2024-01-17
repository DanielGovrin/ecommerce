import { Page } from 'playwright-chromium';

export class NavigationDriver {
   constructor(private page: Page) {}

   SetPage(page: Page) {
      this.page = page;
   }

   // In NavigationDriver
   ClickOnLinkById(Id: string) {
      const link = this.page.locator(`[data-testid="${Id}"]`);
      return link.click();
   }
   GetPageUrl() {
      return this.page.url();
   }
}
