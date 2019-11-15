import { Selector } from "testcafe";

fixture`Getting Started`.page`http://automationpractice.com/index.php`;
test("Actions and assertions", async testController => {
  const tShirtNav = Selector("#block_top_menu > ul > li:nth-child(3) > a");
  const tShirtTitle = Selector(".cat-name");

  const emailInput = Selector("#email");
  const passwordInput = Selector("#passwd");
  const submitButton = Selector("#SubmitLogin > span");
  const accountLabel = Selector(".info-account");

  await testController
    .expect(tShirtNav.visible)
    .ok()
    .click(tShirtNav)
    .expect(tShirtTitle.textContent).contains('T-shirts');
  
  await testController
      .navigateTo('http://automationpractice.com/index.php?controller=authentication&back=my-account')
      .typeText(emailInput, 'aperdomobo@gmail.com')
      .typeText(passwordInput, 'WorkshopProtractor')
      .click(submitButton)
      .expect(accountLabel.visible).ok();
});
