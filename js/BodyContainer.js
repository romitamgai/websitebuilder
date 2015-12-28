function BodyContainer(){
	this.bodyContainer;
	var that = this;


	this.init = function  () {
		that.bodyContainer = new ElementSection();
		
		that.bodyContainer.createElementType('div');
		that.bodyContainer.addClass('bodyContainer');
		that.bodyContainer.addClass('container');
		that.bodyContainer.addStyle('background-color:#ffffff;width:100%;min-height:800px;position:relative;');

		that.bodyContainer.createEvent("dragenter","dragEnter");
		that.bodyContainer.createEvent("drop","dragDrop");
		that.bodyContainer.createEvent("dragover","dragOver");
		that.bodyContainer.createEvent("mouseenter","mouseEnter");
		that.bodyContainer.createEvent("mouseleave","mouseLeave");
		that.bodyContainer.createEvent("mouseout","mouseOut");
		that.bodyContainer.createEvent("click","changeFormFields");
	}
	this.getBodyPortion = function(){
		return that.bodyContainer.element;
	}
}