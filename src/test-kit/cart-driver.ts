import { Locator, Page } from 'playwright-chromium';
import { PantsData, HatsData, ShirtsData } from '../components/data';

export class CartDriver {
   private page: Page;
   private dataItems: string[];

   constructor(page: Page) {
      this.page = page;
      this.dataItems = ['HATS', 'PANTS', 'SHIRTS'];
   }

   SetPage(page: Page) {
      this.page = page;
   }

   GetRandomArbitrary(min: number, max: number): string {
      return Math.floor(Math.random() * (max - min) + min).toString();
   }

   GetRandomTypeOfItem(): string {
      const randomIndex = Math.floor(Math.random() * this.dataItems.length);
      return this.dataItems[randomIndex];
   }

   async GetAddToCartButton(itemId: string): Promise<Locator> {
      const addToCartButtonId = itemId + ' add to cart button';
      return this.page.getByTestId(addToCartButtonId);
   }

   async GetCard(itemId: string): Promise<Locator> {
      const cardId = itemId + ' card';
      return this.page.getByTestId(cardId);
   }

   ClickOnCart() {
      return this.page.getByTestId('shoppingBagButton').click();
   }

   async ClickOutsideCart() {
      const boundingBox = await this.page.getByTestId('shoppingBagButton').boundingBox();
      if (boundingBox) {
         const coordinate = { x: boundingBox.x, y: boundingBox.y };
         await this.page.mouse.click(coordinate.x - 10, coordinate.y - 10);
      }
   }

   GetArbitraryItemFromData(itemName: string): string {
      switch (itemName) {
         case 'HATS':
            return 'hats' + this.GetRandomArbitrary(1, HatsData.length);
            break;
         case 'PANTS':
            return 'pants' + this.GetRandomArbitrary(1, PantsData.length);
            break;
         case 'SHIRTS':
            return 'pants' + this.GetRandomArbitrary(1, ShirtsData.length);
            break;
         default:
            throw new Error(
               'Invalid input type. Make sure you pass a valid item with capital letters.'
            );
      }
   }
}
