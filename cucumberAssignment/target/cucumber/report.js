$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("src/test/java/Features/Login.feature");
formatter.feature({
  "line": 1,
  "name": "User tries to login to amazon.com with valid and invalid credentials",
  "description": "",
  "id": "user-tries-to-login-to-amazon.com-with-valid-and-invalid-credentials",
  "keyword": "Feature"
});
formatter.scenarioOutline({
  "line": 4,
  "name": "Test user Login With invalid credentials",
  "description": "",
  "id": "user-tries-to-login-to-amazon.com-with-valid-and-invalid-credentials;test-user-login-with-invalid-credentials",
  "type": "scenario_outline",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 3,
      "name": "@Login1"
    }
  ]
});
formatter.step({
  "line": 5,
  "name": "Open chrome and navigate to loginPage",
  "keyword": "Given "
});
formatter.step({
  "line": 6,
  "name": "invalid \"\u003cemail\u003e\" and \"\u003cpassword\u003e\" is entered",
  "keyword": "When "
});
formatter.step({
  "line": 7,
  "name": "user should not be logged in successfully",
  "keyword": "Then "
});
formatter.examples({
  "line": 9,
  "name": "",
  "description": "",
  "id": "user-tries-to-login-to-amazon.com-with-valid-and-invalid-credentials;test-user-login-with-invalid-credentials;",
  "rows": [
    {
      "cells": [
        "email",
        "password"
      ],
      "line": 10,
      "id": "user-tries-to-login-to-amazon.com-with-valid-and-invalid-credentials;test-user-login-with-invalid-credentials;;1"
    },
    {
      "cells": [
        "shivanigarg123@gmail.com",
        "22002033"
      ],
      "line": 11,
      "id": "user-tries-to-login-to-amazon.com-with-valid-and-invalid-credentials;test-user-login-with-invalid-credentials;;2"
    }
  ],
  "keyword": "Examples"
});
formatter.scenario({
  "line": 11,
  "name": "Test user Login With invalid credentials",
  "description": "",
  "id": "user-tries-to-login-to-amazon.com-with-valid-and-invalid-credentials;test-user-login-with-invalid-credentials;;2",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 3,
      "name": "@Login1"
    }
  ]
});
formatter.step({
  "line": 5,
  "name": "Open chrome and navigate to loginPage",
  "keyword": "Given "
});
formatter.step({
  "line": 6,
  "name": "invalid \"shivanigarg123@gmail.com\" and \"22002033\" is entered",
  "matchedColumns": [
    0,
    1
  ],
  "keyword": "When "
});
formatter.step({
  "line": 7,
  "name": "user should not be logged in successfully",
  "keyword": "Then "
});
formatter.match({
  "location": "LoginStep.open_chrome_and_navigate_to_loginPage()"
});
formatter.result({
  "duration": 5914621200,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "shivanigarg123@gmail.com",
      "offset": 9
    },
    {
      "val": "22002033",
      "offset": 40
    }
  ],
  "location": "LoginStep.invalid_and_is_entered(String,String)"
});
formatter.result({
  "duration": 5252700,
  "error_message": "java.lang.NullPointerException\r\n\tat org.openqa.selenium.support.pagefactory.DefaultElementLocator.findElement(DefaultElementLocator.java:70)\r\n\tat org.openqa.selenium.support.pagefactory.internal.LocatingElementHandler.invoke(LocatingElementHandler.java:39)\r\n\tat com.sun.proxy.$Proxy25.sendKeys(Unknown Source)\r\n\tat com.cucumberAssignment.page.LoginPage.enterEmailAddress(LoginPage.java:36)\r\n\tat StepDefinitions.LoginStep.invalid_and_is_entered(LoginStep.java:27)\r\n\tat ✽.When invalid \"shivanigarg123@gmail.com\" and \"22002033\" is entered(src/test/java/Features/Login.feature:6)\r\n",
  "status": "failed"
});
formatter.match({
  "location": "LoginStep.user_should_not_be_logged_in_successfully()"
});
formatter.result({
  "status": "skipped"
});
formatter.scenarioOutline({
  "line": 14,
  "name": "Test user Login with mobile",
  "description": "",
  "id": "user-tries-to-login-to-amazon.com-with-valid-and-invalid-credentials;test-user-login-with-mobile",
  "type": "scenario_outline",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 13,
      "name": "@Login1"
    }
  ]
});
formatter.step({
  "line": 15,
  "name": "User Navigate to LoginPage",
  "keyword": "Given "
});
formatter.step({
  "line": 16,
  "name": "I Enter correct \"\u003cemail\u003e\" and \"\u003cpassword\u003e\"is entered",
  "keyword": "When "
});
formatter.step({
  "line": 17,
  "name": "Login should be sucessful",
  "keyword": "Then "
});
formatter.examples({
  "line": 19,
  "name": "",
  "description": "",
  "id": "user-tries-to-login-to-amazon.com-with-valid-and-invalid-credentials;test-user-login-with-mobile;",
  "rows": [
    {
      "cells": [
        "email",
        "password"
      ],
      "line": 20,
      "id": "user-tries-to-login-to-amazon.com-with-valid-and-invalid-credentials;test-user-login-with-mobile;;1"
    },
    {
      "cells": [
        "+919050262954",
        "Shivi@12345"
      ],
      "line": 21,
      "id": "user-tries-to-login-to-amazon.com-with-valid-and-invalid-credentials;test-user-login-with-mobile;;2"
    }
  ],
  "keyword": "Examples"
});
formatter.scenario({
  "line": 21,
  "name": "Test user Login with mobile",
  "description": "",
  "id": "user-tries-to-login-to-amazon.com-with-valid-and-invalid-credentials;test-user-login-with-mobile;;2",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 13,
      "name": "@Login1"
    }
  ]
});
formatter.step({
  "line": 15,
  "name": "User Navigate to LoginPage",
  "keyword": "Given "
});
formatter.step({
  "line": 16,
  "name": "I Enter correct \"+919050262954\" and \"Shivi@12345\"is entered",
  "matchedColumns": [
    0,
    1
  ],
  "keyword": "When "
});
formatter.step({
  "line": 17,
  "name": "Login should be sucessful",
  "keyword": "Then "
});
formatter.match({
  "location": "LoginStep.user_Navigate_to_LoginPage()"
});
formatter.result({
  "duration": 4115358200,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "+919050262954",
      "offset": 17
    },
    {
      "val": "Shivi@12345",
      "offset": 37
    }
  ],
  "location": "LoginStep.i_Enter_correct_and_is_entered(String,String)"
});
formatter.result({
  "duration": 1323604800,
  "status": "passed"
});
formatter.match({
  "location": "LoginStep.login_should_be_sucessful()"
});
formatter.result({
  "duration": 4778660200,
  "status": "passed"
});
formatter.uri("src/test/java/Features/Search.feature");
formatter.feature({
  "line": 1,
  "name": "User tries to Search different items",
  "description": "",
  "id": "user-tries-to-search-different-items",
  "keyword": "Feature"
});
formatter.scenarioOutline({
  "line": 4,
  "name": "Test user search oneplus mobile",
  "description": "",
  "id": "user-tries-to-search-different-items;test-user-search-oneplus-mobile",
  "type": "scenario_outline",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 3,
      "name": "@Test1"
    }
  ]
});
formatter.step({
  "line": 5,
  "name": "User Navigate to search bar",
  "keyword": "Given "
});
formatter.step({
  "line": 6,
  "name": "I Enter correct \"\u003ckeyword\u003e\" in search bar",
  "keyword": "When "
});
formatter.step({
  "line": 7,
  "name": "Item Show sucessful",
  "keyword": "Then "
});
formatter.examples({
  "line": 9,
  "name": "",
  "description": "",
  "id": "user-tries-to-search-different-items;test-user-search-oneplus-mobile;",
  "rows": [
    {
      "cells": [
        "keyword"
      ],
      "line": 10,
      "id": "user-tries-to-search-different-items;test-user-search-oneplus-mobile;;1"
    },
    {
      "cells": [
        "iphone13 pro mobile phone"
      ],
      "line": 11,
      "id": "user-tries-to-search-different-items;test-user-search-oneplus-mobile;;2"
    }
  ],
  "keyword": "Examples"
});
formatter.scenario({
  "line": 11,
  "name": "Test user search oneplus mobile",
  "description": "",
  "id": "user-tries-to-search-different-items;test-user-search-oneplus-mobile;;2",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 3,
      "name": "@Test1"
    }
  ]
});
formatter.step({
  "line": 5,
  "name": "User Navigate to search bar",
  "keyword": "Given "
});
formatter.step({
  "line": 6,
  "name": "I Enter correct \"iphone13 pro mobile phone\" in search bar",
  "matchedColumns": [
    0
  ],
  "keyword": "When "
});
formatter.step({
  "line": 7,
  "name": "Item Show sucessful",
  "keyword": "Then "
});
formatter.match({
  "location": "SearchStep.user_Navigate_to_search_bar()"
});
formatter.result({
  "duration": 3160787600,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "iphone13 pro mobile phone",
      "offset": 17
    }
  ],
  "location": "SearchStep.i_Enter_correct_in_search_bar(String)"
});
formatter.result({
  "duration": 15653800,
  "error_message": "org.openqa.selenium.NoSuchSessionException: Session ID is null. Using WebDriver after calling quit()?\nBuild info: version: \u00274.1.2\u0027, revision: \u00279a5a329c5a\u0027\nSystem info: host: \u0027IN-18VK1J3\u0027, ip: \u0027192.168.29.7\u0027, os.name: \u0027Windows 10\u0027, os.arch: \u0027amd64\u0027, os.version: \u002710.0\u0027, java.version: \u002711.0.1\u0027\nDriver info: org.openqa.selenium.chrome.ChromeDriver\nCommand: [null, findElement {using\u003did, value\u003dtwotabsearchtextbox}]\nCapabilities {acceptInsecureCerts: false, browserName: chrome, browserVersion: 100.0.4896.88, chrome: {chromedriverVersion: 99.0.4844.51 (d537ec02474b5..., userDataDir: C:\\Users\\SHIVAN~1\\AppData\\L...}, goog:chromeOptions: {debuggerAddress: localhost:51780}, javascriptEnabled: true, networkConnectionEnabled: false, pageLoadStrategy: normal, platform: WINDOWS, platformName: WINDOWS, proxy: Proxy(), se:cdp: ws://localhost:51780/devtoo..., se:cdpVersion: 100.0.4896.88, setWindowRect: true, strictFileInteractability: false, timeouts: {implicit: 0, pageLoad: 300000, script: 30000}, unhandledPromptBehavior: dismiss and notify, webauthn:extension:credBlob: true, webauthn:extension:largeBlob: true, webauthn:virtualAuthenticators: true}\r\n\tat org.openqa.selenium.remote.HttpCommandExecutor.execute(HttpCommandExecutor.java:145)\r\n\tat org.openqa.selenium.remote.service.DriverCommandExecutor.invokeExecute(DriverCommandExecutor.java:167)\r\n\tat org.openqa.selenium.remote.service.DriverCommandExecutor.execute(DriverCommandExecutor.java:142)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:558)\r\n\tat org.openqa.selenium.remote.ElementLocation$ElementFinder$2.findElement(ElementLocation.java:162)\r\n\tat org.openqa.selenium.remote.ElementLocation.findElement(ElementLocation.java:60)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElement(RemoteWebDriver.java:382)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElement(RemoteWebDriver.java:374)\r\n\tat org.openqa.selenium.support.pagefactory.DefaultElementLocator.findElement(DefaultElementLocator.java:70)\r\n\tat org.openqa.selenium.support.pagefactory.internal.LocatingElementHandler.invoke(LocatingElementHandler.java:39)\r\n\tat com.sun.proxy.$Proxy25.sendKeys(Unknown Source)\r\n\tat com.cucumberAssignment.page.SearchPage.typeBox(SearchPage.java:25)\r\n\tat StepDefinitions.SearchStep.i_Enter_correct_in_search_bar(SearchStep.java:22)\r\n\tat ✽.When I Enter correct \"iphone13 pro mobile phone\" in search bar(src/test/java/Features/Search.feature:6)\r\n",
  "status": "failed"
});
formatter.match({
  "location": "SearchStep.item_Show_sucessful()"
});
formatter.result({
  "status": "skipped"
});
formatter.scenarioOutline({
  "line": 14,
  "name": "Test user search electronics item",
  "description": "",
  "id": "user-tries-to-search-different-items;test-user-search-electronics-item",
  "type": "scenario_outline",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 13,
      "name": "@Test1"
    }
  ]
});
formatter.step({
  "line": 15,
  "name": "User Navigate to search bar",
  "keyword": "Given "
});
formatter.step({
  "line": 16,
  "name": "I Enter correct \"\u003ckeyword\u003e\" in search bar",
  "keyword": "When "
});
formatter.step({
  "line": 17,
  "name": "Item Show sucessful",
  "keyword": "Then "
});
formatter.examples({
  "line": 19,
  "name": "",
  "description": "",
  "id": "user-tries-to-search-different-items;test-user-search-electronics-item;",
  "rows": [
    {
      "cells": [
        "keyword"
      ],
      "line": 20,
      "id": "user-tries-to-search-different-items;test-user-search-electronics-item;;1"
    },
    {
      "cells": [
        "AC 1.5 ton 5star"
      ],
      "line": 21,
      "id": "user-tries-to-search-different-items;test-user-search-electronics-item;;2"
    }
  ],
  "keyword": "Examples"
});
formatter.scenario({
  "line": 21,
  "name": "Test user search electronics item",
  "description": "",
  "id": "user-tries-to-search-different-items;test-user-search-electronics-item;;2",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 13,
      "name": "@Test1"
    }
  ]
});
formatter.step({
  "line": 15,
  "name": "User Navigate to search bar",
  "keyword": "Given "
});
formatter.step({
  "line": 16,
  "name": "I Enter correct \"AC 1.5 ton 5star\" in search bar",
  "matchedColumns": [
    0
  ],
  "keyword": "When "
});
formatter.step({
  "line": 17,
  "name": "Item Show sucessful",
  "keyword": "Then "
});
formatter.match({
  "location": "SearchStep.user_Navigate_to_search_bar()"
});
formatter.result({
  "duration": 3402361200,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "AC 1.5 ton 5star",
      "offset": 17
    }
  ],
  "location": "SearchStep.i_Enter_correct_in_search_bar(String)"
});
formatter.result({
  "duration": 3556924300,
  "status": "passed"
});
formatter.match({
  "location": "SearchStep.item_Show_sucessful()"
});
formatter.result({
  "duration": 979444700,
  "status": "passed"
});
});