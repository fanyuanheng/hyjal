require 'capybara/cucumber'

Capybara.default_driver = :selenium
Capybara.default_selector = :css
Capybara.app = 'Hyjal'