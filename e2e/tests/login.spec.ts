import { ProductsAssertions } from '../assertions/products.assertions';
import { test } from '../fixtures/page.fixture';

test.describe('User login tests', () => {
  test('User can successfully login', async ({ page, loginPage, productsPage }) => {
    
    //ARRANGE
    const username = 'standard_user';
    const password = 'secret_sauce';
    const expectedPageTitle = 'Products'
    
    //ACT  
    await page.goto(process.env.BASE_URL!);
    await loginPage.login(username, password);
    
    //ASSERT
    let productsAssertions = new ProductsAssertions(productsPage);
    await productsAssertions.pageIsLoaded(expectedPageTitle);
  });

  test.afterEach(async ({ page }) => {
    await page.close();
  })
})


