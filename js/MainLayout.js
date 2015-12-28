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
		  	that.mainContainer = new ElementSection();
		    that.mainContainer.createElementType('div');
		    that.mainContainer.addClass('mainContainer');

		    that.visualPane = new ElementSection();
		    that.visualPane.createElementType('div');
		    that.visualPane.addClass('visualContainer');
		    that.visualPane.createEvent('dragenter','dragEnter');
			that.visualPane.createEvent('drop','dragDrop');
			that.visualPane.createEvent('dragover','dragOver');
			that.visualPane.createEvent('dragleave','dragLeave');
			that.visualPane.createEvent('mouseenter','mouseEnter');
			that.visualPane.createEvent('mouseleave','mouseLeave');
			that.visualPane.createEvent('mouseout','mouseOut');
			that.visualPane.createEvent('click','changeFormFields');

		    that.panelPane = new ElementSection();
		    that.panelPane.createElementType('div');
		    that.panelPane.addClass('panelContainer');

		    // //Adding header to the visual Pane
		    // var headerContainer = new HeaderContainer();
		    // headerContainer.init();
		    // var headerElement = headerContainer.getHeaderPortion();
		    // that.visualPane.appendChildren(headerElement);

		    // //Adding body to the visual pane
		    // var bodyContainer = new BodyContainer();
		    // bodyContainer.init();
		    // var bodyElement = bodyContainer.getBodyPortion();
		    // that.visualPane.appendChildren(bodyElement);

		    // //Adding footer to the visual pane
		    // var footerContainer = new FooterContainer();
		    // footerContainer.init();
		    // var footerElement = footerContainer.getFooterPortion();
		    // that.visualPane.appendChildren(footerElement);

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
var layout = MainLayout.getInstance();
layout.init();