# Language: en
# Author: Luis Vanegas <xlavm>

Feature: Bill Payment And Logout

  I want to pay an bill

  Background: login in parabank app
    Given I open Parabank app
    And I enter the user "john" and pass "demo" 
  
  Scenario: pay the bill in parabank app
    When I clicked the Bill Pay menu and enter the bill data
    |firstname  |address |city           |state   |zipcode |phonenumber |accountnumber |verifyaccountnumber |amount |
    |Automation |London  |Greater London |London  |EY1 20I |0987654321  |12345         |12345               |13011  |
    |Automation2|London2 |Greater London2|London2 |EY1 20I2|09876543212 |123452        |123452              |130112 |
    Then I see "Bill Payment Complete" in the message
  
  Scenario: logout of parabank app
    When I clicked the Log Out menu
    Then I see the login form