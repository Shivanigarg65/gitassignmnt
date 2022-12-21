Feature: User tries to Search different items

  @Test1
  Scenario Outline: Test user search oneplus mobile
    Given User Navigate to search bar
    When I Enter correct "<keyword>" in search bar
    Then Item Show sucessful

    Examples: 
      | keyword                  |
      | iphone13 pro mobile phone |

  @Test1
  Scenario Outline: Test user search electronics item
    Given User Navigate to search bar
    When I Enter correct "<keyword>" in search bar
    Then Item Show sucessful

    Examples: 
      | keyword           |
      | AC 1.5 ton 5star |
