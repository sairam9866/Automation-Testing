var HomePagePOFile = require("../PO/Homepage_PO.js");
var testdata = require("../test-data/testdata.js");
var data = testdata.Homepage.search;
var params = browser.params;

describe ("HomePage Scenario:", function() {
 
    var originalTimeout;

    beforeEach(function() {

        originalTimeout = jasmine.DEFAULT_TIMEOUT_INTERVAL;
        jasmine.DEFAULT_TIMEOUT_INTERVAL = 40000;
        
        browser.manage().window().maximize();
        browser.get(params.baseUrl);    

    });

    afterEach(function() {
        jasmine.DEFAULT_TIMEOUT_INTERVAL = originalTimeout;
    });

    it("verify All buttons in webpage", function() {

        HomePagePOFile.isModifyButtonAvaiable();
        browser.waitForAngular();

        HomePagePOFile.isAddButtonAvaiable();
        browser.waitForAngular();

        HomePagePOFile.isDeleteButtonAvaiable();
        browser.waitForAngular();

        HomePagePOFile.isExportCSVButtonAvaiable();
        browser.waitForAngular();

    });

    it("verify search button", function() {

        HomePagePOFile.isSearchTextBoxAvailable();
        HomePagePOFile.isSearchButtonAvailable();

    });

    it("verify search button after key search", function() {

        HomePagePOFile.isSearchTextBoxAvailable();
        browser.waitForAngular();

        HomePagePOFile.clickSearchTextBox();
        browser.waitForAngular();

        HomePagePOFile.sendSearchKeyword(data.network);
        browser.waitForAngular();

        HomePagePOFile.clearSearchTextBox();
        HomePagePOFile.sendSearchKeyword(data.zipcode);
        browser.waitForAngular();

        HomePagePOFile.clearSearchTextBox();
        HomePagePOFile.sendSearchKeyword(data.state);
        browser.waitForAngular();

        HomePagePOFile.clearSearchTextBox();
        HomePagePOFile.sendSearchKeyword(data.destination);
        browser.waitForAngular();
    });

    it("verify table headers", function() {

        HomePagePOFile.isNetworkHeaderAvailable();
        HomePagePOFile.isCountryCodeHeaderAvailable();
        HomePagePOFile.isPostalCodeHeaderAvailable();
        HomePagePOFile.isStateProvinceHeaderAvailable();
        HomePagePOFile.isDestinationHeaderAvailable();
        HomePagePOFile.isEffectiveDateHeaderAvailable();
        HomePagePOFile.isCreatedByHeaderAvailable();
        HomePagePOFile.isCreatedDateHeaderAvailable();
        HomePagePOFile.isProcessedHeaderAvailable();

    });

    it("verify ghost text in search bar", function() {

        HomePagePOFile.isGhostTextinSearchBarAvailable();
        browser.waitForAngular();

    });

    it("verify Zip to dest tabs", function() {

        HomePagePOFile.isZipToDestCurrentTabAvailable();
        HomePagePOFile.isZipToDestHistoryTabAvailable();
      
    });

    it("verify pagination in Home page", function() {

        HomePagePOFile.isPageListAvailable();
        HomePagePOFile.isPaginationListAvailable();

    });

    it("verify search button after key search different data", function() {

        HomePagePOFile.isSearchTextBoxAvailable();
        browser.waitForAngular();

        HomePagePOFile.clickSearchTextBox();
        browser.waitForAngular();

        HomePagePOFile.sendSearchKeyword(data.network1);
        browser.waitForAngular();

        HomePagePOFile.clearSearchTextBox();
        HomePagePOFile.sendSearchKeyword(data.zipcode1);
        browser.waitForAngular();

        HomePagePOFile.clearSearchTextBox();
        HomePagePOFile.sendSearchKeyword(data.zipcode2);
        browser.waitForAngular();

        HomePagePOFile.clearSearchTextBox();
        HomePagePOFile.sendSearchKeyword(data.zipcode3);
        browser.waitForAngular();
    });
  
});