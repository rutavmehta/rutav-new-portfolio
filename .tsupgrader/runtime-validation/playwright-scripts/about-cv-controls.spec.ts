import { test, expect } from '@playwright/test';

test.use({ channel: 'msedge' });

test('about-cv-controls', async ({ page }) => {
  await page.route("**/*", async route => {
    const requestUrl = new URL(route.request().url());
    if (requestUrl.origin === "http://127.0.0.1:5173") {
      await route.continue();
    } else {
      await route.abort("blockedbyclient");
    }
  });
  await page.goto('http://127.0.0.1:5173');
  await page.getByRole('link', { name: 'About' }).click();
  await page.getByRole('link', { name: 'View CV PDF in a new tab' }).click();
  await expect(page.getByText('Explore my academic')).toHaveText("Explore my academic background, technical skills, projects and professional experience.");
});
