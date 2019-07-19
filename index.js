const DRIVER="chromedriver"; //chromedriver
const BROWSER="chrome"; //chrome

var webdriver = require("selenium-webdriver");
require(DRIVER);

var builder = new webdriver.Builder();
builder.forBrowser(BROWSER);
var driver=builder.build();
driver.get("http://www.google.com.tw");

var qLocator = webdriver.By.name("q");
driver.wait(webdriver.until.elementLocated(qLocator),3000);
var qElement = driver.findElement(qLocator);
qElement.sendKeys("youtube");

var submitButtonLocator = webdriver.By.name("btnK");
driver.wait(webdriver.until.elementLocated(submitButtonLocator),3000);
var submitButton = driver.findElement(submitButtonLocator);
submitButton.click();

// var rcLocator = webdriver.By.className("rc");
// driver.wait(webdriver.until.elementLocated(rcLocator),10000);
// var rcElements = driver.findElement(rcLocator);
// for(let rcElement of rcElements)
// {
//     console.log(rcElement.getText());
// }
// driver.close();
