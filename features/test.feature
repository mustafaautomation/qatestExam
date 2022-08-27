Feature: Task List

  Scenario Outline: As a user i login and create user
    Given I launch the application
    And I login with "mmustafahameed1997@gmail.com" and "candidate123"
    When I can add following user with name "<usernames>" with email of "<emails>" and role as "<roles>"
    Then I can validate that user is added with following details name: "<usernames>", email: "<emails>" and role:"<roles>"
    And delete the user afterwards with follow email: "<emails>"

    Examples: 
      | usernames        | emails                       | roles            |
      | ali Osama        | aliosama37@gmail.com         | Attorney         |
      | Muhammad Mustafa | mmustafahameed1997@gmail.com | Lawyer           |
      | Muhammad Usama   | muhammad.usama@gmail.com     | Jury             |
      | Adil Aslam       | adil.aslam@gmail.com         | Defency Attorney |
      | Riaz Hussan      | riaz.hussain@gmail.com       | Public Defence   |
