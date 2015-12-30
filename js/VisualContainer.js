function VisualContainer(){
	this.visualContainer;
	var mainLayoutInstance = MainLayout.getInstance();
	var that = this;

	this.init = function  () {
		that.visualContainer = new ElementSection();
		that.visualContainer.createElementType('div');
	    that.visualContainer.addClass('visualContainer');
	    that.visualContainer.element.addEventListener('dragenter',that.dragEnter);
		that.visualContainer.element.addEventListener('drop',that.dragDrop);
		that.visualContainer.element.addEventListener('dragover',that.dragOver);
		that.visualContainer.element.addEventListener('dragleave',that.dragLeave);
		that.visualContainer.createEvent('mouseenter','mouseEnter');
		that.visualContainer.createEvent('mouseleave','mouseLeave');
		that.visualContainer.createEvent('mouseout','mouseOut');
		that.visualContainer.element.addEventListener('click',that.addOptionButtons,false);
		that.visualContainer.element.addEventListener('click',mainLayoutInstance.attributeContainer.changeFormFields);
	}
	this.getElement = function(){
		return that.visualContainer.element;
	}
	this.addOptionButtons = function(ev){
		ev.preventDefault();
		if((that.visualContainer.getEleByClassName('settingOption')!=undefined) || (that.visualContainer.getEleByClassName('delete')!=undefined) ){
			if((that.visualContainer.getEleByClassName('settingOption')!=undefined)){
				var parent = that.visualContainer.getEleByClassName('settingOption').parentElement;
				parent.removeChild(that.visualContainer.getEleByClassName('settingOption'));
			}
			if((that.visualContainer.getEleByClassName('deleteOption')!=undefined)){
				var parent = that.visualContainer.getEleByClassName('deleteOption').parentElement;
				parent.removeChild(that.visualContainer.getEleByClassName('deleteOption'));
			}
		}
		if(ev.target.nodeName != 'B' && ev.target.nodeName != 'FONT' && ev.target.nodeName != 'STYLE' && ev.target.nodeName != 'U' && ev.target.nodeName != 'I' && ev.target.nodeName != 'STRIKE' && that.visualContainer.getEleByClassName('textEditorBar')==undefined){
			var settingOption = new ElementSection();
			settingOption.createElementType('div');
			settingOption.addClass('settingOption');
			settingOption.writeHtml('Settings');
			var initialHeight = parseInt(settingOption.getStyle('height',ev.target));
			var initialWidth = parseInt(settingOption.getStyle('width',ev.target));
			settingOption.setStyle('top',initialHeight + 'px');
			settingOption.setStyle('left',initialWidth/2 + 100 + 'px');
			settingOption.element.addEventListener('click',that.settingsOption);
			settingOption.appendTo(ev.target);
		
			var deleteOption = new ElementSection();
			deleteOption.createElementType('div');
			deleteOption.addClass('deleteOption');
			deleteOption.writeHtml('Delete'); 
			deleteOption.setStyle('top',initialHeight + 'px');
			deleteOption.setStyle('left',initialWidth/2 + 200 + 'px');
			deleteOption.element.addEventListener('click',that.deleteOption);
			deleteOption.appendTo(ev.target);
		}
	}
	this.settingsOption = function(ev){
		var parent = ev.target.parentElement.id;
		if(ev.target.parentElement.nodeName == 'P' || ev.target.parentElement.nodeName == 'A' || ev.target.parentElement.nodeName == 'H1' || ev.target.parentElement.nodeName == 'H2'){
			var textEditor = new TextEditor();
			textEditor.openTextEditor(ev.target);
		}
		else if(ev.target.parentElement.nodeName == 'DIV' ||ev.target.parentElement.nodeName == 'NAV' || ev.target.parentElement.nodeName == 'se' ||ev.target.parentElement.nodeName == 'INPUT'){
			var modal = new Modal();
			modal.openModal(ev.target);
			modal.selectBackgroundProperties();
		}
		else if(ev.target.parentElement.nodeName == 'BUTTON'){
			var modal = new Modal();
			modal.openModal(ev.target);
			modal.selectButtonProperties();
		}
	}
	this.deleteOption = function(ev){
		var idName = ev.target.parentElement.id;
		if(idName == ''){
			idName = ev.target.parentElement.parentElement.id;
		}
		var selectedElementById = that.visualContainer.getEleById(idName);
		if(selectedElementById != null && (that.visualContainer.getEleByClassName('textEditorBar')==undefined)){
			var parent = selectedElementById.parentElement;
			if(parent.parentElement.className == 'visualContainer'){
				that.visualContainer.removeElementChild(parent,parent.parentElement);
			}
			else if(parent.className != 'elementContainer'){
				that.visualContainer.removeElementChild(selectedElementById,parent);
			}
		}
	}
  	this.dragEnter = function(ev){
		event.preventDefault();
	 	var dragContainer = ev.target;
	 	that.visualContainer.setElementStyle(dragContainer,'outline','none');
		return true;
	}
	this.dragOver = function(ev){
 		event.preventDefault();
 		var dragContainer = ev.target;
 		that.visualContainer.setElementStyle(dragContainer,'outline','3px dotted black');
	}
	this.dragLeave = function(ev){
		event.preventDefault();
		var dragContainer = ev.target;
		that.visualContainer.setElementStyle(dragContainer,'outline','none');
	}
	this.dragDrop = function(ev) {
 		var data = ev.dataTransfer.getData('Text');
 		var mainElement = that.visualContainer.getEleById(data);
 		if(mainElement != null){
 			var elementValue = mainElement.getAttribute('value');
 			that.visualContainer.setElementStyle(ev.target,'background','none');
 			mainLayoutInstance.elementContainer.createStaticComponents(elementValue,ev.target);
	 		ev.stopPropagation();
		}
		return false;
	}
}