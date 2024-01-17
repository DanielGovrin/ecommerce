import { Page } from "playwright-chromium";

export class CartDriver {
    constructor(private page: Page) { }

    setPage(page: Page) {
        this.page = page;
    }

    ClickOnCart() {
        return this.page.getByTestId('shoppingBagButton').click();
    }

    async ClickOutsideCart() {
        const boundingBox = await this.page.getByTestId('shoppingBagButton').boundingBox();
        if (boundingBox) {
            const coordinate = { x: boundingBox.x, y: boundingBox.y }
            await this.page.mouse.click(coordinate.x - 10, coordinate.y - 10)
        }
    }
}
