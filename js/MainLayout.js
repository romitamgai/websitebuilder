var MainLayout = (function(){
	function MainLayout() {
		this.mainContainer;
		this.panelPane;
		this.attributeContainer;
		this.elementContainer;
		this.visualContainerElement;
		this.count=0;
		var that = this;

		this.init = function(){
		  	that.mainContainer = new ElementSection();
		    that.mainContainer.createElementType('div');
		    that.mainContainer.addClass('mainContainer');

		    that.panelPane = new ElementSection();
		    that.panelPane.createElementType('div');
		    that.panelPane.addClass('panelContainer');

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

		    that.visualContainer = new VisualContainer();
		    that.visualContainer.init();
		    that.visualContainerElement = that.visualContainer.getElement();

		    that.mainContainer.appendChildren(that.panelPane.element);
		  	that.mainContainer.appendChildren(that.visualContainerElement);
		    that.mainContainer.appendTo(document.body);
	    } 
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