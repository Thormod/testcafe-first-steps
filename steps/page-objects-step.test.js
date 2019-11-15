import { LoginPage } from "../page-objects/login-page";
import { AccountPage } from "../page-objects/account-page";

const loginPage = new LoginPage();
const accountPage = new AccountPage();
const email = "aperdomobo@gmail.com";
const password = "WorkshopProtractor";

fixture`Getting Started`
  .page`http://automationpractice.com/index.php?controller=authentication&back=my-account`;
test("Page Objects", async testController => {
  loginPage.doLogin(email, password);
  await testController.expect(accountPage.isWelcomeLabelPresent()).ok();
});
