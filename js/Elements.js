function Element(){
	this.elementName;
	var that= this;

	this.makeElement = function(elementType,elementClass){
		that.elementName = new ElementSection();
		that.elementName.createElementType(elementType);
		that.elementName.addClass(elementClass);
		that.elementName.createEvent("mouseenter","mouseEnter");
		that.elementName.createEvent("mouseleave","mouseLeave");
		that.elementName.createEvent("mouseout","mouseOut");
		that.elementName.createEvent("click","changeFormFields");
		that.elementName.addSelectClassComponents(elementClass);
	}
	this.getElement = function(){
		return that.elementName.element;
	}
}