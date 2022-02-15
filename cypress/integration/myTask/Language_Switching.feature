@desctop
Feature: Language Switching

  I want to be able a switch language by the mean of the menu
dropdown
  
  @desctop
  Scenario: Switch language by the mean of the menu dropdown
    Given I open Ninjacasino page
    And I see language dropdown in the header
    When I click on the language dropdown
    Then language menu shows up
    When I click on FI
    Then application reloads in "Finnish"
    When I click on EE
    Then application reloads in "Estonian"
    When I click on RU
    Then application reloads in "Russian"
