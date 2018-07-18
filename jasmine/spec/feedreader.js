/* feedreader.js
 *
 * This is the spec file that Jasmine will read and contains
 * all of the tests that will be run against your application.
 */

/* We're placing all of our tests within the $() function,
 * since some of these tests may require DOM elements. We want
 * to ensure they don't run until the DOM is ready.
 */
$(function() {
    /* This is our first test suite - a test suite just contains
    * a related set of tests. This suite is all about the RSS
    * feeds definitions, the allFeeds variable in our application.
    */
    describe('RSS Feeds', function() {
        /* This is our first test - it tests to make sure that the
         * allFeeds variable has been defined and that it is not
         * empty. Experiment with this before you get started on
         * the rest of this project. What happens when you change
         * allFeeds in app.js to be an empty array and refresh the
         * page?
         */
        it('allFeeds are defined', function() {
            // checks to see that allFeeds are defined and is not empty.
            expect(allFeeds).toBeDefined();
            expect(allFeeds.length).not.toBe(0);
        });

        /* TODO: Write a test that loops through each feed
         * in the allFeeds object and ensures it has a URL defined
         * and that the URL is not empty.
         */
         it('URLS are defined', function() {
           // Checks to see if the URLs are defined and is not empty.
            for(let i = 0; i < allFeeds.length; i++) {
              expect(allFeeds[i].url).toBeDefined();
              expect(allFeeds[i].url).not.toBe(0);
            }
         });

        /* TODO: Write a test that loops through each feed
         * in the allFeeds object and ensures it has a name defined
         * and that the name is not empty.
         */
         it('Names are defined', function() {
           for(let i = 0; i < allFeeds.length; i++) {
             // Checks to see if the names are defined and is not empty.
             expect(allFeeds[i].name).toBeDefined();
             expect(allFeeds[i].name).not.toBe(0);
           }
         });
    });

    /* TODO: Write a new test suite named "The menu" */
    describe('The Menu', function() {
        /* TODO: Write a test that ensures the menu element is
         * hidden by default. You'll have to analyze the HTML and
         * the CSS to determine how we're performing the
         * hiding/showing of the menu element.
         */
          it('Menu is hidden by default', function() {
            // checks to see if the menu is hidden.
            expect($('body').hasClass('menu-hidden')).toBe(true);
          });

         /* TODO: Write a test that ensures the menu changes
          * visibility when the menu icon is clicked. This test
          * should have two expectations: does the menu display when
          * clicked and does it hide when clicked again.
          */
          it('Menus are visible', function() {
            // Uses the jqury .click() method. Checks to see if the menu displays when clicked and hides when clicked again.
            $('.icon-list').click();
            expect($('body').hasClass('menu-hidden')).toBe(false);

            $('.icon-list').click();
            expect($('body').hasClass('menu-hidden')).toBe(true);
          });
    });

    /* TODO: Write a new test suite named "Initial Entries" */
    describe('Initial Entries', function() {
        /* TODO: Write a test that ensures when the loadFeed
         * function is called and completes its work, there is at least
         * a single .entry element within the .feed container.
         * Remember, loadFeed() is asynchronous so this test will require
         * the use of Jasmine's beforeEach and asynchronous done() function.
         */
         beforeEach(function(done) {
           loadFeed(0, function() {
             done();
           });
         });

         it('Should be at least single element after the loadFeed function is called.', function(done) {
           // checks to see the .feed container has at least 1 children element.
           expect($('.feed').children().length).toBeGreaterThan(0);
           done();
         });
    });

    /* TODO: Write a new test suite named "New Feed Selection" */
    describe('New Feed Selection', function() {
        /* TODO: Write a test that ensures when a new feed is loaded
         * by the loadFeed function that the content actually changes.
         * Remember, loadFeed() is asynchronous.
         */

         let firstFeed, secondFeed;

         // grabs the html of the first feed and the second feed.
         beforeEach(function(done) {
           loadFeed(0, function() {
             firstFeed = $('.feed').html();
             done();
           });

           loadFeed(1,function() {
             secondFeed = $('.feed').html();
             done();
           })
         });

         it('Content changes when a new feed is loaded.', function(done) {
           // Compares the first feed and second feed to see if the content changes.
           expect(firstFeed).not.toBe(secondFeed);
           done();
         });
    });
}());
