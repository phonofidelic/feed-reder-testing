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

        // Check that the 'allFeeds' array is defined and that it
        // has at least one object in it by checking that its
        // length is not 0.
        it('are defined', function() {
            expect(allFeeds).toBeDefined();
            expect(allFeeds.length).not.toBe(0);
        });

        // Check that all feeds are defined
        // and have valid URLs
        it('have valid URLs', function() {
           for (var i = 0; i < allFeeds.length; i ++) {
               expect(allFeeds[i].url.indexOf('://') > -1).toBe(true);
               expect(allFeeds[i].url).toBeDefined();
           }
        });

        // Check that each name item in allFeeds is defined
        // and is not an empty string
        it('have valid names', function() {
            for (var i = 0; i < allFeeds.length; i ++) {
                expect(allFeeds[i].name).toBeDefined();
                expect(allFeeds[i].name).not.toBe('');
            }
        });
    });

    // Test form menu functionality
    describe('The Menu', function() {

        // Check that the menu is hedden by checking for
        // the 'menu-hidden' class name
        it('should be hidden by defaut', function() {
            expect(document.body.className).toBe('menu-hidden');
        });

        // Check that the 'menu-hidden'class name toggles on/off
        // when the menu icon is clicked
        it('should appear when the menu icon is clicked', function() {

            // "Click" menu icon
            $('.menu-icon-link').click();

            expect(document.body.className).toBe('');
        });

        it('should hide when clicked again', function() {

            // "Click" again
            $('.menu-icon-link').click();

            expect(document.body.className).toBe('menu-hidden');
        });
    });

    describe('Initial Entries', function() {
        // var entries = $('.feed');

        // Delay test until loadFeed(0) is called
        beforeEach(function(done) {
            loadFeed(0, function(){
                done();
            });
        });

        // Check that at least one entry element has been loaded '.feed'
        it('should load with at least one .entry element', function() {
            expect($('.feed').find('.entry').length).toBeGreaterThan(0);
        });
    });

    describe('New Feed Selection', function() {

        var content1;

        // Set up asynchronus support
        beforeEach(function(done) {
            loadFeed(0, function() {

                // After loadFeed(0) is called, set conten1
                content1 = $('.feed').html();
                loadFeed(1, function() {
                    done();
                });
            });
        });

        it('should load new content', function(done) {

            // assign new content to content2 after loadFeed(1) is called
            var content2 = $('.feed').html();

            // compare content1 to content2
            expect(content1).not.toBe(content2);
            done();
        });
    });
}());
