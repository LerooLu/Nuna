import mainPage from "../pages/main.page";

describe('Main page tests', function () {
  before(()=>{
    cy.visit('/')
    cy.fixture('testData').then((testData) => {
    this.testData = testData
    mainPage.selectSourseLng(testData.sourseLang)
    mainPage.selectTargetLng(testData.translateLang)
    mainPage.typeText(testData.text)
    })
  })
  it("Check translation is correct", ()=>{
    mainPage.selectors.resultText().
    should('have.text', this.testData.result)
  })

  it('Swap language works correct', ()=>{
    mainPage.swapLanguage()
    mainPage.selectors.inputText()
      .should('have.text', this.testData.result)
    mainPage.selectors.resultText()
      .should('have.text', this.testData.text)
  })

  it('Chech virtual keyboard using', ()=>{
    mainPage.clearInputField()
    mainPage.typeHiVirtualKeyboard()
    //check that input text is correct
    mainPage.selectors.inputText()
      .should('have.text', "Hi!")
  })
});