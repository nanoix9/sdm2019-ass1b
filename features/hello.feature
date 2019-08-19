Feature: Hello world API

  Scenario: hello world
    When I send get request to "/hello"
    Then I should get "Hello World!"