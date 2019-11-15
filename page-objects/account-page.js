import { Selector, t } from "testcafe";

export class AccountPage {
  constructor() {
    this.accountLabel = Selector(".info-account");
  }

  isWelcomeLabelPresent () {
    return this.accountLabel.visible;
  }
}