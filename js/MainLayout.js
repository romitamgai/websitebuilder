var MainLayout = (function(){
	function MainLayout() {
		this.mainContainer;
		this.visualPane;
		this.panelPane;
		this.attributeContainer;
		this.elementContainer;
		this.count=0;
		var that = this;

		this.init = function(){

		    //Creating the required initial divisions
		  	that.mainContainer = new ElementSection();
		    that.mainContainer.createElementType('div');
		    that.mainContainer.addClass('mainContainer');
		    that.mainContainer.addStyle('width:99%;margin:5px;');

		    that.visualPane = new ElementSection();
		    that.visualPane.createElementType('div');
		    that.visualPane.addClass('visualContainer');
		    that.visualPane.addStyle('float:left;width:70%;');

		    that.panelPane = new ElementSection();
		    that.panelPane.createElementType('div');
		    that.panelPane.addClass('panelContainer');
		    that.panelPane.addStyle('width:30%;position:fixed;left:70%;height:100%');

		    //Adding header to the visual Pane
		    var headerContainer = new HeaderContainer();
		    headerContainer.init();
		    var headerElement = headerContainer.getHeaderPortion();
		    that.visualPane.appendChildren(headerElement);

		    //Adding body to the visual pane
		    var bodyContainer = new BodyContainer();
		    bodyContainer.init();
		    var bodyElement = bodyContainer.getBodyPortion();
		    that.visualPane.appendChildren(bodyElement);

		    //Adding footer to the visual pane
		    var footerContainer = new FooterContainer();
		    footerContainer.init();
		    var footerElement = footerContainer.getFooterPortion();
		    that.visualPane.appendChildren(footerElement);

		    //Adding Element container to panel pane
		    that.elementContainer = new ElementContainer();
		    that.elementContainer.init();
		    var elementContainerPortion = that.elementContainer.getElementContainerPortion();
		    that.panelPane.appendChildren(elementContainerPortion);

		    //Adding attribute Container to panel pane
		    that.attributeContainer = new AttributeContainer();
		    that.attributeContainer.init();
		    var attributeContainerPortion = that.attributeContainer.getAttributePortion();
		    that.panelPane.appendChildren(attributeContainerPortion);

		    that.panelPane.appendTo(that.mainContainer.element);
		  	that.visualPane.appendTo(that.mainContainer.element);
		    that.mainContainer.appendTo(document.body);
	    } 
  		// this.createHtmlFile = function(fileData){
 		//   var myHtmlFile = fileData.toString();
  		//   console.log(myHtmlFile);
	    //   var anchorTag = document.createElement('a');
	    //   anchorTag.setAttribute('href','data:text/plain;charset=utf-8,'+ encodeURIComponent(myHtmlFile));
	    //   anchorTag.setAttribute('download','index.txt');
	    //   document.body.appendChild(anchorTag);
	    //   anchorTag.click();
	    //   document.body.removeChild(anchorTag);
	    // }
	}
	var instance;
	return{
		getInstance: function(){
			if(instance == null){
				instance = new MainLayout();
				instance.constructor = null;
			}
			return instance;
		}
	}
}());