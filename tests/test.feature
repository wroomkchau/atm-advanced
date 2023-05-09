Feature: Filters page

@J-1
Scenario: User can access Filters page via side menu
    Given I am logged in
    When I click "homePage.filtersButton"
    Then I should be on "filters" page

@J-2    
Scenario Outline: User can access pages via direct URL
    Given I am logged in
    When I open base url with "ui/#superadmin_personal/<page>"
    Then I should be on "<page>" page

    Examples:
        | page |
        |dashboard|
        |launches|
        |filters|
        |settings|
        |members|