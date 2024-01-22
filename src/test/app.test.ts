import { expect } from 'chai';
import { Page, Browser, BrowserContext, Locator } from 'playwright-chromium';
import { ViteDevServer } from 'vite';
import { serverSetup, serverTeardown } from '../test-kit/server-setup';
import { NavigationDriver } from '../test-kit/navigation-driver';
import { CartDriver } from '../test-kit/cart-driver';
import { areNumbersClose } from '../utility';

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
   });

   beforeEach(async () => {
      page = await context.newPage();
      await page.goto(`http://localhost:${8000}`);
      await page.waitForLoadState();
      navigationDriver = new NavigationDriver(page);
      cartDriver = new CartDriver(page, navigationDriver);
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

      it('should navigate to home page', async () => {
         const id: string = 'PANTS';
         await navigationDriver.clickOnLinkById(id);
         const currentUrl: string = navigationDriver.getPageUrl();
         expect(currentUrl).to.equal(`http://localhost:${8000}/Pants`);
      });
   });
   describe('Cart tests', async () => {
      it('Verify that clicking the cart icon opens the modal and clicking outside the modal closes it.', async () => {
         await cartDriver.clickOnCart();
         expect(await page.getByTestId('bagModal').isVisible()).to.be.true;
         await cartDriver.clickOutsideCart();
         expect(await page.getByTestId('bagModal').isVisible()).to.be.false;
      });

      it('Verify proper error message when adding to cart without selecting size, and no message appears when size is selected.', async () => {
         const typeOfItemId: string = cartDriver.getRandomTypeOfItem();
         const itemId: string = cartDriver.getArbitraryItemFromData(typeOfItemId);
         await navigationDriver.clickOnLinkById(typeOfItemId);
         const cardLoacator: Locator = await cartDriver.getCard(itemId);
         const addToCartLocator: Locator = await cartDriver.getAddToCartButton(itemId);
         await addToCartLocator.click();
         expect(await cardLoacator.getByTestId('choose size').isVisible()).to.be.true;
         const size: string = cartDriver.getRandomSize();
         const sizeLocator: Locator = await cartDriver.getCardSizeButton(itemId, size);
         await sizeLocator.click();
         expect(await cardLoacator.locator('[data-testid="choose size"]').isVisible()).to.be.false;
      });

      it('Confirm that the total price shown in the modal matches the accurate price', async () => {
         const totalPrice: number = await cartDriver.addSomeItemsToCart(Math.random() * 30 + 1);
         await cartDriver.clickOnCart();
         const numberShownText: string | null = await page.getByTestId('total-price').textContent();
         const numberShown: number = numberShownText ? parseInt(numberShownText) : 0;
         expect(areNumbersClose(totalPrice, numberShown, 1)).to.be.true;
      });

      it('Ensures the total price in the modal updates with changes in product quantity.', async () => {
         await navigationDriver.clickOnLinkById('PANTS');
         const itemId: string = 'pants10';
         const firstPantsCardLocator: Locator = await cartDriver.getCard(itemId);
         await (await cartDriver.getCardSizeButton(itemId, 'L')).click();
         await (await cartDriver.getAddToCartButton(itemId)).click();
         const pantsPriceText: string | null = await firstPantsCardLocator
            .getByTestId('price')
            .textContent();
         const pantsPrice: number = pantsPriceText ? parseFloat(pantsPriceText) : 0;
         await cartDriver.clickOnCart();
         await page.getByTestId(`${itemId} select`).selectOption('2');
         const totalPriceText: string | null = await page.getByTestId('total-price').textContent();
         const totalPrice: number = totalPriceText ? parseFloat(totalPriceText) : 0;
         expect(pantsPrice * 2).to.equal(totalPrice);
      });

      it('Verifies that adjusting the quantity of items through the modal updates the item count in the cart accordingly', async () => {
         await navigationDriver.clickOnLinkById('SHIRTS');
         const itemId: string = 'shirts4';
         await (await cartDriver.getCardSizeButton(itemId, 'XL')).click();
         await (await cartDriver.getAddToCartButton(itemId)).click();
         await cartDriver.clickOnCart();
         await page.getByTestId(`${itemId} select`).selectOption('9');
         await cartDriver.clickOutsideCart();
         const numOfItemsInCartText: string | null = await page
            .getByTestId('number-of-items')
            .textContent();
         const numOfItemsInCart: number = numOfItemsInCartText
            ? parseFloat(numOfItemsInCartText)
            : 0;
         expect(numOfItemsInCart).to.equal(9);
      });

      it('Ensures the delete button in the modal actually delete the product from the list', async () => {
         await navigationDriver.clickOnLinkById('HATS');
         const itemId: string = 'hats8';
         await (await cartDriver.getCardSizeButton(itemId, 'M')).click();
         await (await cartDriver.getAddToCartButton(itemId)).click();
         await cartDriver.clickOnCart();
         await page.getByTestId(`${itemId} delete-button`).click();
         const totalPriceText: string | null = await page.getByTestId('total-price').textContent();
         const totalPrice: number = totalPriceText ? parseFloat(totalPriceText) : -1;
         expect(totalPrice).to.equal(0);
      });
   });
});
