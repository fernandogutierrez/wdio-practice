Feature: Test if user is successfully registered

  Scenario: A user is register
    Given I open 'demoqa.com'
    And I go to Registration page
    When I insert 'Fernando' in first name field
    And I insert 'Gutierrez' in last name field
    And I set marital status as 'single'
    And I set the hobby as 'reading'
    And I set the country as 'Bolivia'
    And I set the date of birth as '5/6/1994'
    And I insert '4251020' in phone number field
    And I insert 'kronos1' in username field
    And I insert 'fgut2@email.com' in email field
    And I insert 'P@ssw0rd' in password field
    And I retype 'P@ssw0rd' in confirm password field
    And I click on submit button
    Then I see the confirmation dialog openned

