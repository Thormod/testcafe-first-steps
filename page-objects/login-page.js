import { Selector, t } from "testcafe";

export class LoginPage {
  constructor() {
    this.emailInput = Selector("#email");
    this.passwordInput = Selector("#passwd");
    this.submitButton = Selector("#SubmitLogin > span");
    this.accountLabel = Selector(".info-account");
  }

  async doLogin (email, passwd) {
    await t
        .typeText(this.emailInput, email)
        .typeText(this.passwordInput, passwd)
        .click(this.submitButton);
  }
}