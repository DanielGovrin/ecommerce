import { Locator, Page } from 'playwright-chromium';
import { PantsData, HatsData, ShirtsData } from '../components/data';

export class CartDriver {
   private page: Page;
   private dataItems: string[];
   private sizes: string[];

   constructor(page: Page) {
      this.page = page;
      this.dataItems = ['HATS', 'PANTS', 'SHIRTS'];
      this.sizes = ['S', 'M', 'L', 'XL'];
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
}
