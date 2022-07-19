
class MainPage {

  selectors = {
    sourseLanguageBtn: () => cy.get('[aria-label="More source languages"]:visible'),
    targetLanguageBtn: () => cy.get('[aria-label="More target languages"]:visible'),
    swapBtn: () => cy.get('[aria-label="Swap languages (Ctrl+Shift+S)"]:visible'),

    languageName: () => cy.get('.Llmcnf:visible'),
    inputField: () => cy.get('[aria-label="Source text"]'),
    inputText: () => cy.get('[class="D5aOJc vJwDU"]'),
    resultText: () => cy.get('.Q4iAWc'),

    selectInputToolBtn: () => cy.get('[class*="ita-kd-right"]'),
    inputTool: () => cy.get('[class*="inputtool-name"]')
  }

  selectSourseLng(language) {
    this.selectors.sourseLanguageBtn().click().wait(300)
    cy.fixture('testData')
    this.selectors.languageName().contains(language).click().wait(300)
  }

  selectTargetLng(language) {
    this.selectors.targetLanguageBtn().click().wait(300)
    this.selectors.languageName().contains(language).click().wait(300)
  }

  swapLanguage() {
    this.selectors.swapBtn().click().wait(300)
  }

  typeText(text) {
    this.selectors.inputField().type(text)
  }

  clearInputField() {
    this.selectors.inputField().clear()
  }

  typeHiVirtualKeyboard(){
    this.selectors.selectInputToolBtn().click()
    this.selectors.inputTool().contains("US International").click()
    cy.get('[id="K16"]').first().click()
    cy.get('[id="K72"]').click()
    cy.get('[id="K73"]').click()
    cy.get('[id="K16"]').first().click()
    cy.get('[id="K49"]').click()
  }
}


export default new MainPage()