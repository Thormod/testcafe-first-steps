import { Selector } from "testcafe";

fixture`Getting Started`.page`http://automationpractice.com/index.php`;
test("My first test", async testController => {
  const tShirtNav = Selector("#block_top_menu > ul > li:nth-child(3) > a");
  await testController.expect(tShirtNav.visible).notOk();

  const tShirtNav2 = Selector("a").withText("T-SHIRTS");
  await testController.expect(tShirtNav2.visible).ok();

  const tShirtNav3 = Selector("a").parent("#block_top_menu");
  await testController.expect(tShirtNav3.visible).ok();
});
