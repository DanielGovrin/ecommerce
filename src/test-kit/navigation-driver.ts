import { Page } from 'playwright-chromium';

export class NavigationDriver {
   constructor(private page: Page) {}

   setPage(page: Page) {
      this.page = page;
   }
}
