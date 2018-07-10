Feature: TMobile Testing
  As a user of TMobile
  I would like to check TMobile plans prices

  Scenario: Checking mobile plans
    Given The main page is open
    When I click on Plans link
    And I scroll down to the price slider
    And I drag the slider to the tick "one"
    Then I should see the new price
    And I should see that the price is "70"