import { Selector } from "testcafe";
import { LoginPage } from "../page-objects/login-page";
import { AccountPage } from "../page-objects/account-page";

const loginPage = new LoginPage();
const accountPage = new AccountPage();
const email = "aperdomobo@gmail.com";
const password = "WorkshopProtractor";

fixture`Hooks`
  .page`http://automationpractice.com/index.php?controller=authentication&back=my-account`
  .beforeEach(async () => {
      console.log("----> Before test execution");
      await loginPage.doLogin(email, password);
    }
  )
  .afterEach( () => {
    console.log("----> After test execution");
  }
);

test("Hooks Login", async testController => {
  await testController.expect(accountPage.isWelcomeLabelPresent()).ok();
});

test("Hooks Tshirts", async testController => {
  const tShirtNav = Selector("#block_top_menu > ul > li:nth-child(3) > a");
  await testController
  .navigateTo('http://automationpractice.com/index.php')
  .expect(tShirtNav.visible).ok();
});
