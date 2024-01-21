import { Locator, Page } from 'playwright-chromium';
import { PantsData, HatsData, ShirtsData } from '../components/data';
import { NavigationDriver } from './navigation-driver';

export class CartDriver {
   private page: Page;
   private dataItems: string[];
   private sizes: string[];
   private navigationDriver: NavigationDriver;

   constructor(page: Page) {
      this.page = page;
      this.dataItems = ['HATS', 'PANTS', 'SHIRTS'];
      this.sizes = ['S', 'M', 'L', 'XL'];
      this.navigationDriver = new NavigationDriver(this.page);
   }

   setPage(page: Page): void {
      this.page = page;
   }

   getRandomNumber(min: number, max: number): string {
      return Math.floor(Math.random() * (max - min) + min).toString();
   }

   getRandomTypeOfItem(): string {
      const randomIndex = Math.floor(Math.random() * this.dataItems.length);
      return this.dataItems[randomIndex];
   }

   getRandomSize(): string {
      const randomIndex = Math.floor(Math.random() * this.sizes.length);
      return this.sizes[randomIndex];
   }

   async getCardSizeButton(itemId: string, size: string): Promise<Locator> {
      const sizeSelectorId = itemId + ' ' + size;
      return this.page.getByTestId(sizeSelectorId);
   }

   async getAddToCartButton(itemId: string): Promise<Locator> {
      const addToCartButtonId = itemId + ' add to cart button';
      return this.page.getByTestId(addToCartButtonId);
   }

   async getCard(itemId: string): Promise<Locator> {
      const cardId = itemId + ' card';
      return this.page.getByTestId(cardId);
   }

   clickOnCart(): Promise<void> {
      return this.page.getByTestId('shoppingBagButton').click();
   }

   async clickOutsideCart() {
      const boundingBox = await this.page.getByTestId('shoppingBagButton').boundingBox();
      if (boundingBox) {
         const coordinate = { x: boundingBox.x, y: boundingBox.y };
         await this.page.mouse.click(coordinate.x - 10, coordinate.y - 10);
      }
   }

   getArbitraryItemFromData(itemName: string): string {
      switch (itemName) {
         case 'HATS':
            return 'hats' + this.getRandomNumber(1, HatsData.length);
            break;
         case 'PANTS':
            return 'pants' + this.getRandomNumber(1, PantsData.length);
            break;
         case 'SHIRTS':
            return 'shirts' + this.getRandomNumber(1, ShirtsData.length);
            break;
         default:
            throw new Error(
               'Invalid input type. Make sure you pass a valid item with capital letters.'
            );
      }
   }

   async addSomeItemsToCart(numOfItems: number): Promise<number> {
      let totalPrice : number = 0;
      for (let i = 0; i < numOfItems; i++) {
         const typeOfItemId: string = this.getRandomTypeOfItem();
         const itemId: string = this.getArbitraryItemFromData(typeOfItemId);
         this.navigationDriver.clickOnLinkById(typeOfItemId);
         const cardLoacator: Locator = await this.getCard(itemId);
         const addToCartLocator: Locator = await this.getAddToCartButton(itemId);
         const sizeLocator: Locator = await this.getCardSizeButton(itemId, this.getRandomSize());
         sizeLocator.click();
         addToCartLocator.click();
         const priceElement = cardLoacator.getByTestId('price');
         const priceText = priceElement ? await priceElement.textContent() : null;
         
         if (priceText !== null) {
           totalPrice += parseInt(priceText, 10);
         } else {
           // Handle the case where priceText is null
           console.error("Price text is null. Unable to parse as an integer.");
         }      }
      return totalPrice;
   }
}
