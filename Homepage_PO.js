var HomePagePO = function () {

   var modifybutton = element(by.xpath("//*[@class='p-2']/button"));
   var addButton = element(by.xpath("//button[@class='btn btn-md btn-filters btn btn-info active']"));
   var deleteButton = element(by.xpath("//button[@class='btn btn-md btn-filters btn btn-danger active']"));
   var ExportCSVButton = element(by.xpath("//button[@class='btn btn-md btn-filters btn btn-secondary active']"));
   var searchTextBox = element(by.id("search"));
   var searchButton = element(by.xpath("//button[@type='submit']"));
   var Network = element(by.xpath("//*[contains(text(),'Network')]"));
   var countrycode = element(by.xpath("//*[contains(text(),'Country code')]"));
   var Postalcode = element(by.xpath("//*[contains(text(),'Zip / Postal Code')]"));
   var stateProvince = element(by.xpath("//*[contains(text(),'State / Province')]"));
   var destination = element(by.xpath("//*[contains(text(),'Destination')]"));
   var effectiveDate = element(by.xpath("//*[contains(text(),'Effective Date')]"));
   var CreatedBy = element(by.xpath("//*[contains(text(),'Created By')]"));
   var CreatedDate = element(by.xpath("//*[contains(text(),'Creation Date')]"));
   var Processed = element(by.xpath("//*[contains(text(),'Processed')]"));
   var ghostText = element(by.xpath("//*[@placeholder='Filter by Network, Country, Destination, Zip, State...']"));
   var ziptodestcurrent = element(by.xpath("//*[@id='ngb-tab-0']"));
   var ziptodestHistory = element(by.xpath("//*[@id='ngb-tab-1']"));
   var pagesList = element(by.xpath("//*[@ref='eSummaryPanel']"));
   var paginationList = element(by.xpath("//*[@class='ag-paging-page-summary-panel']"));
   
      this.clickModifyButton = function() {
        modifybutton.click();
      };
   
      this.clickAddButton = function() {
        addButton.click;
     };
   
     this.isModifyButtonAvaiable = function() {
      return modifybutton.isDisplayed();
     };
   
      this.isAddButtonAvaiable = function() {
       return addButton.isDisplayed();
      };
   
      this.isDeleteButtonAvaiable = function() {
       return deleteButton.isDisplayed();
      };
   
      this.isExportCSVButtonAvaiable = function() {
       return ExportCSVButton.isDisplayed();
      };
   
      this.isSearchTextBoxAvailable = function() {
       return searchTextBox.isDisplayed();
      };
   
      this.isSearchButtonAvailable = function() {
       return searchButton.isDisplayed();
      };
   
      this.clickSearchTextBox = function() {
         searchTextBox.click();
        };
   
      this.sendSearchKeyword = function(value) {
   
      searchTextBox.sendKeys(value);
      searchButton.click();
         
      };
   
      this.isNetworkHeaderAvailable = function() {
         return Network.isDisplayed();
      };
   
      this.isCountryCodeHeaderAvailable = function() {
         return countrycode.isDisplayed();
      };
   
      this.isPostalCodeHeaderAvailable = function() {
         return Postalcode.isDisplayed();
      };
   
      this.isStateProvinceHeaderAvailable = function() {
         return stateProvince.isDisplayed();
      };
   
      this.isDestinationHeaderAvailable = function() {
         return destination.isDisplayed();
      };
   
      this.isEffectiveDateHeaderAvailable = function() {
         return effectiveDate.isDisplayed();
      };
   
      this.isCreatedByHeaderAvailable = function() {
         return CreatedBy.isDisplayed();
      };
   
      this.isCreatedDateHeaderAvailable = function() {
         return CreatedDate.isDisplayed();
      };
   
      this.isProcessedHeaderAvailable = function() {
         return Processed.isDisplayed();
      };
   
      this.isGhostTextinSearchBarAvailable = function() {
         return ghostText.isDisplayed();
      };
   
      this.isZipToDestCurrentTabAvailable = function() {
         return ziptodestcurrent.isDisplayed();
      };
   
      this.isZipToDestHistoryTabAvailable = function() {
         return ziptodestHistory.isDisplayed();
      };
   
      this.isPageListAvailable = function() {
         return pagesList.isDisplayed();
      };
   
      this.isPaginationListAvailable = function() {
         return paginationList.isDisplayed();
      };
   
      this.clearSearchTextBox = function() {
         searchTextBox.clear();
      };

      
   
   };
   
   module.exports = new HomePagePO();