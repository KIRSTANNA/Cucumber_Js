
@mobile
Feature: Main Site Navigation for mobile devices

  I want to be able to browse NinjaCasino by the mean of the
  hamburger menu.

@mobile
Scenario: Ninjacasino page open for mobile

  Given I open Ninjacasino page for mobile

@mobile
Scenario: Check all menu opentions upon tap on the burger icon show

  When the menu opens upon tap on the burger icon
  Then I check the all options show: Home, Casino, Live Casino, Sport Betting, Live Betting, Ninja Treasures, Promotions and Customer Support

@mobile
Scenario: Check redirection by few menu options

  When I tap on any of: Ninja Treasures, Promotions, Customer Support page
  Then I redirects to corresponded page

@mobile
Scenario: Check the game categories sub-menu for Casino

  When I tap on Casino
  Then The game categories sub-menu opens: Popular, New, Slots, Live Casino, Jackpots, Table Games, Megaways

  And If I tap on any of them I redirects it
