import { Browser, BrowserContext, chromium } from 'playwright-chromium';
import { createServer, ViteDevServer } from 'vite';

export async function serverSetup() {
   const server = await startPreview();
   const browser = await chromium.launch({ headless: false });
   const context = await browser.newContext();
   return { browser, context, server };
}

export async function serverTeardown(
   context: BrowserContext,
   browser: Browser,
   server: ViteDevServer
) {
   await context.close();
   await browser.close();
   await server.close();
}

async function startPreview() {
   const server = await createServer({ server: { port: 8000 } });
   await server.listen();
   return server;
}
