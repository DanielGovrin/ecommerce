import { Page } from "playwright-chromium";

export class CartDriver {
    constructor(private page: Page) { }

    setPage(page: Page) {
        this.page = page;
    }


}