
Feature: Game 

  I want to check a search engine in Ninjacasino page
  
  @desctop
  Scenario: Check a search engine in Ninjacasino page
    Given I open Ninjacasino page
    Then I see search input field
    When I enter ­"book of dead" to it
    Then Games matching with ­"book of dead­" show up