Feature: User tries to login to amazon.com with valid and invalid credentials

  @Login1
  Scenario Outline: Test user Login With invalid credentials
    Given Open chrome and navigate to loginPage
    When invalid "<email>" and "<password>" is entered
    Then user should not be logged in successfully

    Examples: 
      | email                   | password     |
      | shivanigarg123@gmail.com | 22002033 |

  @Login1
  Scenario Outline: Test user Login with mobile
    Given User Navigate to LoginPage
    When I Enter correct "<email>" and "<password>"is entered
    Then Login should be sucessful

    Examples: 
      | email         | password    |
      | +919050262954 | Shivi@12345 |
