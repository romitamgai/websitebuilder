function HeaderContainer(){
	this.headerContainer;
	var that = this;


	this.init = function  () {
		that.headerContainer = new ElementSection();
		
		that.headerContainer.createElementType('div');
		that.headerContainer.addClass('headerContainer');
		that.headerContainer.addClass('container');
		that.headerContainer.addStyle('background-color:#b7b5b5;width:100%;min-height:100px;');

		that.headerContainer.createEvent("dragenter","dragEnter");
		that.headerContainer.createEvent("drop","dragDrop");
		that.headerContainer.createEvent("dragover","dragOver");
		that.headerContainer.createEvent('dragleave',"dragLeave");
		that.headerContainer.createEvent("mouseenter","mouseEnter");
		that.headerContainer.createEvent("mouseleave","mouseLeave");
		that.headerContainer.createEvent("mouseout","mouseOut");
		that.headerContainer.createEvent("click","changeFormFields");
	}
	this.getHeaderPortion = function(){
		return that.headerContainer.element;
	}
}