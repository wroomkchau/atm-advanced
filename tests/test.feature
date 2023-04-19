Feature: Filters page

Scenario: User can access Filters page via side menu
    Given I am logged in
    When I click "homePage.filtersButton"
    # Then I should be on "Filters" page


# Scenario: User can access Filters page via direct URL
#     Given I am logged in
#     When I open base url with ""
#     Then I should be on "Filters" page