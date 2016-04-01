iPlayer Program Display
============
Web application the displays programs available to watch in a list format.
List will display title and image of programs and can be sorted according to
the first letter of the program. Results for a single letter will be
displayed over multiple pages to ease readability.

Installation Instructions
=========
##### Setup #####
1. Clone this repo to your local machine
2. Navigate to home folder and ensure node & bower are installed
3. Run "npm install" in your terminal
4. Run "open index.html"
5. Use site as desired

##### Testing #####

Karma
1. Navigate to the home directory
2. Run "karma start test/karma.conf.js" in your terminal

Protractor:

3 Separate Tabs in Terminal, make sure you're in the home directory

- Tab 1: Run "http-server"
- Tab 2: Run "webdriver-manager start"
- Tab 3: Run "protractor test/e2e/conf.js"


Technologies
========
- Angular
- Karma
- Protractor
- Jasmine
- HTML5
- CSS

Author
======
James Borrell [LinkedIn](https://www.linkedin.com/in/james-borrell-2281b1116)
