Feature: Filters page

@J-1
Scenario: User can access Filters page via side menu
    Given I am logged in
    When I click "homePage.filtersButton"
    Then I should be on "Filters" page

@J-2    
Scenario: User can access Filters page via direct URL
    Given I am logged in
    When I open base url with "ui/#superadmin_personal/filters"
    Then I should be on "Filters" page