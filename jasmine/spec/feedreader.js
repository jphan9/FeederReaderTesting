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
    describe('RSS Feeds', function() {
        // Checks to make sure that the allFeeds variable has been defined and is not empty.
        it('allFeeds are defined', function() {
            expect(allFeeds).toBeDefined();
            expect(allFeeds.length).not.toBe(0);
        });

        // Checks each feed in allFeeds and sees if each URL is defined and is not empty.
        it('URLS are defined', function() {
          for(let i = 0; i < allFeeds.length; i++) {
            expect(allFeeds[i].url).toBeDefined();
            expect(allFeeds[i].url.length).toBeGreaterThan(0);
          }
        });

        // Checks each feed in allFeeds and sees if each name is defined and is not empty.
        it('Names are defined', function() {
         for(let i = 0; i < allFeeds.length; i++) {
           expect(allFeeds[i].name).toBeDefined();
           expect(allFeeds[i].name.length).toBeGreaterThan(0);
         }
        });
    });

    describe('The Menu', function() {
        // Checks to see if the menu is hidden by dfeault.
        it('Menu is hidden by default', function() {
          expect($('body').hasClass('menu-hidden')).toBe(true);
        });

        // Checks to see if the menu displays when clicked and hides when clicked again.
        it('Menus are visible', function() {
          // Uses the jqury .click() method.
          $('.icon-list').click();
          expect($('body').hasClass('menu-hidden')).toBe(false);

          $('.icon-list').click();
          expect($('body').hasClass('menu-hidden')).toBe(true);
        });
    });

    describe('Initial Entries', function() {
         // Calls loadFeed() before the tests are preformed.
         beforeEach(function(done) {
           loadFeed(0, function() {
             done();
           });
         });

         // Checks to see if the .feed container has at least 1 child .entry element.
         it('Should be at least single element after the loadFeed function is called', function(done) {
           expect($('.feed .entry').length).toBeGreaterThan(0);
           done();
         });
    });

    describe('New Feed Selection', function() {
         let firstFeed, secondFeed;

         // Grabs the html of the first feed and the second feed before the test is preformed.
         beforeEach(function(done) {
           loadFeed(0, function() {
             firstFeed = $('.feed').html();
             loadFeed(1,function() {
               secondFeed = $('.feed').html();
               done();
             });
           });
         });

         // Compares the first feed and second feed to see if the content changes.
         it('Content changes when a new feed is loaded', function(done) {
           expect(firstFeed).not.toBe(secondFeed);
           done();
         });
    });
}());
