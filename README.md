### Feed Reader Testing
-----------------------
Download the zip file for the project directory. Open index.html in your browser and the Jasmine test suite will run in the botom half of the screen. A total of eight specs should run with zero failures.

## Tests include:
1. RSS Feeds
The first test is for the RSS feeds, checking that all items in the allFeeds array are defined, have valid URLs and names.

2. The menu
This test checks that the menue element is hidden by default and that it toggles on/off when the menu icon is clicked.

3. Initial Entries
This checks that at least one entry element has loaded.

4. New Feed Selection
The last test checks that new content is loaded when a new section is selected from the menu.