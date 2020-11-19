Feature: Registration Feature

    As a visitor I can create a new account by the registration feature

Scenario: New User Registration E2E Scenario
Given I open the registration page
When I select the gender
And I enter First Name "Joe"
And I enter Last Name "Bloggs"
And I select Date of Birth "1"
And I select Month of Birth "May"
And I select Year of Birth "1980"
And I enter Email "joebloggs@test.com"
And I enter Password "ABC123"
And I enter Confirm Password "ABC123"
And I click register button
Then successful message is displayed
