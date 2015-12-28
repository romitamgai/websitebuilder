function FooterContainer(attribContainer){
	this.footerContainer;
	var that = this;


	this.init = function  () {
		that.footerContainer = new ElementSection(attribContainer);
		
		that.footerContainer.createElementType('div');
		that.footerContainer.addClass('footerContainer');
		that.footerContainer.addClass('container');
		that.footerContainer.addStyle('background-color:#706c6c;width:100%;min-height:100px;');

		that.footerContainer.createEvent("dragenter","dragEnter");
		that.footerContainer.createEvent("drop","dragDrop");
		that.footerContainer.createEvent("dragover","dragOver");
		that.footerContainer.createEvent("mouseenter","mouseEnter");
		that.footerContainer.createEvent("mouseleave","mouseLeave");
		that.footerContainer.createEvent("mouseout","mouseOut");
		that.footerContainer.createEvent("click","changeFormFields");
	}
	this.getFooterPortion = function(){
		return that.footerContainer.element;
	}
}