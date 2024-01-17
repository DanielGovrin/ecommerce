import { expect } from 'chai';
import { Page, Browser, BrowserContext, Locator } from 'playwright-chromium';
import { ViteDevServer } from 'vite';
import { serverSetup, serverTeardown } from '../test-kit/server-setup';
import { NavigationDriver } from '../test-kit/navigation-driver';
import { CartDriver } from '../test-kit/cart-driver';

describe('My tests', function () {
   let page: Page;
   let browser: Browser;
   let context: BrowserContext;
   let server: ViteDevServer;
   let navigationDriver: NavigationDriver;
   let cartDriver: CartDriver;

   before(async () => {
      const { browser: newBrowser, context: newContext, server: newServer } = await serverSetup();
      browser = newBrowser;
      context = newContext;
      server = newServer;
      page = await browser.newPage();
      navigationDriver = new NavigationDriver(page);
      cartDriver = new CartDriver(page);
   });

   beforeEach(async () => {
      page = await context.newPage();
      await page.goto(`http://localhost:${8000}`);
      await page.waitForLoadState();
      navigationDriver.SetPage(page);
      cartDriver.SetPage(page);
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
         await navigationDriver.ClickOnLinkById(id);
         const currentUrl = navigationDriver.GetPageUrl();
         expect(currentUrl).to.equal(`http://localhost:${8000}/Shirts`);
      });

      it('should navigate to home page', async () => {
         const id = 'HOME';
         await navigationDriver.ClickOnLinkById(id);
         const currentUrl = navigationDriver.GetPageUrl();
         expect(currentUrl).to.equal(`http://localhost:${8000}/`);
      });
   });
   describe('Cart tests', async () => {
      it('Verify that clicking the cart icon opens the modal and clicking outside the modal closes it.', async () => {
         await cartDriver.ClickOnCart();
         expect(await page.getByTestId('bagModal').isVisible()).to.be.true;
         await cartDriver.ClickOutsideCart();
         expect(await page.getByTestId('bagModal').isVisible()).to.be.false;
      });

      it('Ensure adding an item to the cart fails when size is not selected', async () => {
         const typeOfItemId = cartDriver.GetRandomTypeOfItem();
         await navigationDriver.ClickOnLinkById(typeOfItemId);
         const itemId: string = cartDriver.GetArbitraryItemFromData(typeOfItemId);
         const cardElement: Locator = await cartDriver.GetCard(itemId);
         const addToCartElement: Locator = await cartDriver.GetAddToCartButton(itemId);
      });
   });
});
