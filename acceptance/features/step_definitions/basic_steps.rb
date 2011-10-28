Given /^I am on home page$/ do
  visit('http://localhost:8000')
end

Then /^the menu bar should contain:$/ do |table|
  menu_items = all('header nav a').map {|a| {:name => a.text, :href => a['href']}}
  table.hashes.each do |menu_item|
    menu_items.include? menu_item
  end
end