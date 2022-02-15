# Cucumber_Js

### The repository contains the answer to the task:
Code Challenge
Frontend_Test_Automation_Engineer_Test (task.pdf)

Solution uses js, cypress and cypress-cucumber-preprocessor plugin.

The third part of it is done with changed acceptance criterias.

The reason is the application behaviour differs from described.
I based mostly on application behaviour to be able show script execution, with one error at the end only (Jackpots/jackpot). Otherwise test will always fail at start. Frame is done mostly for desctop devices on that moment (more details are in cypress\integration\myTask\Main_Site_Navigation\beforeEach.js)

I don''t take in mind also some other things like bug logging or configuration details but can add them later if it need.
It would be good in future execute testing whith different viewports sizes etc. 
### The steps to run from the root folder are:
- npm install
- npm run cypress:open or npm run test 
