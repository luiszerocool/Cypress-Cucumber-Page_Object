# Language: es
# Author: Luis Vanegas <xlavm>

Feature: Google Main Page

  I want to open a search engine
  
  @focus
  Scenario: Opening a search engine page
    Given I open Google page
    Then I see "Google" in the title