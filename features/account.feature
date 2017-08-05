# account.feature

  Feature: Access Account

    As a system user
    I want to be able to access my account
    So that I can get a current valuation

    Scenario: Access account
      Given John has logged in with an id of JOHN0001
      When he gets his account details
      Then he should receive his account details with a valuation of 1000

    Scenario: Access account alternate user
      Given Jane has logged in with an id of JANE0002
      When she gets his account details
      Then she should receive her account details with a valuation of 2000
