import { expect } from 'chai';
import { Page, Browser, BrowserContext } from 'playwright-chromium';
import { ViteDevServer } from 'vite';
import { serverSetup, serverTeardown } from '../test-kit/server-setup';

describe('My test', function () {
   let page: Page;
   let browser: Browser;
   let context: BrowserContext;
   let server: ViteDevServer;

   before(async () => {
      const {
         browser: newBrowser,
         context: newContext,
         server: newServer,
      } = await serverSetup();
      browser = newBrowser;
      context = newContext;
      server = newServer;
   });
   beforeEach(async () => {
      page = await context.newPage();
      await page.goto(`http://localhost:${8000}`);
      await page.waitForLoadState();
      //SELF IMPLEMENTED DRIVER
   });

   afterEach(async () => {
      await page.close();
   });

   after(async () => {
      await serverTeardown(context, browser, server);
   });
});
