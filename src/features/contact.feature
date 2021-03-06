Feature: Test if email validation works as expected

  Scenario: The email alert text is displayed
    Given I open 'demoqa.com'
    And I go to Contact page
    When I insert 'username'
    And I insert an invalid email
    And I press on send
    Then I see 'Email address seems invalid.' displayed below email field

  Scenario: Fields required texts are displayed
    Given I open 'demoqa.com'
    And I go to Contact page
    When I press on send
    Then I see 'Please fill the required field.' displayed below name field
    And I see 'Please fill the required field.' displayed below email field

