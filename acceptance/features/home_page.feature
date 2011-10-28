Feature: As a customer, I want to visit the home page, so that I can start using the application

  Scenario: Menu bar and menu items are displayed correctly
    Given I am on home page
    Then the menu bar should contain:
      | name    | href     |
      | Home    | /        |
      | About   | /about   |
      | Contact | /contact |