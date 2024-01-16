import { expect } from 'chai';
import { Page, Browser, BrowserContext } from 'playwright-chromium';
import { ViteDevServer } from 'vite';
import { serverSetup, serverTeardown } from '../test-kit/server-setup';
import { NavigationDriver } from '../test-kit/navigation-driver';

describe('My tests', function () {
   let page: Page;
   let browser: Browser;
   let context: BrowserContext;
   let server: ViteDevServer;
   let navigationDriver: NavigationDriver;

   before(async () => {
      const {
         browser: newBrowser,
         context: newContext,
         server: newServer,
      } = await serverSetup();
      browser = newBrowser;
      context = newContext;
      server = newServer;
      page = await context.newPage();
      navigationDriver = new NavigationDriver(page);
   });

   beforeEach(async () => {
      page = await context.newPage();
      await page.goto(`http://localhost:${8000}`);
      await page.waitForLoadState();
   });

   afterEach(async () => {
      await page.close();
   });

   after(async () => {
      await serverTeardown(context, browser, server);
   });
   describe('Sidebar Navigation', async () => {
      it('should navigate to shirts url', async () => {
         const id = 'SHIRTS';
         await navigationDriver.clickOnLinkById(id);
         const currentUrl = navigationDriver.getPageUrl();
         expect(currentUrl).to.equal(`http://localhost:${8000}/Shirts`);
      });
   });
});
