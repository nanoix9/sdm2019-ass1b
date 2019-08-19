const { Given, When, Then } = require("cucumber");
const { expect, assert } = require("chai");

When("I send get request to {string}", function(path) {
  this.sendRequest(path);
});

Then("I should get {string}", async function(text) {
  const res_text = await this.res_json
  expect(res_text).to.eql(text)
});