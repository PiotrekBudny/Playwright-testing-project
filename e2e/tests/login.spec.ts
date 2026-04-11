import { LoginAssertions } from '../assertions/login.assertions';
import { ProductsAssertions } from '../assertions/products.assertions copy';
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

  test('User can not login when invalid password used', async ({ page, loginPage }) => {
    
    //ARRANGE
    const username = 'standard_user';
    const invalidPassword = 'invalidPassword';
    const expectedErrorMessage = 'Epic sadface: Username and password do not match any user in this service'
    
    //ACT  
    await page.goto(process.env.BASE_URL!);
    await loginPage.login(username, invalidPassword);
    
    //ASSERT
    let loginAssertions = new LoginAssertions(loginPage);
    await loginAssertions.verifyErrorMessageDisplayed(expectedErrorMessage);
  });
})


