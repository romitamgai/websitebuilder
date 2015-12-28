function ElementSection(){
	var mainLayoutInstance = MainLayout.getInstance();
	var that = this;
	var startX, startY, startWidth, startHeight;

	this.createElementType = function(type){
		that.element = document.createElement(type);
	}
	this.appendTo = function(parentElement) {
		parentElement.appendChild(that.element);
	}
	this.removeChildren = function(parentElement){
		parentElement.removeChild(that.element);
	}
	this.addAttribute = function(attributeName,value){
		that.element.setAttribute(attributeName,value);
	}
	this.addClass = function(className){
		if(that.element.className!= '')
			that.element.className += ' ' +  className;
		else 
			that.element.className += className;
	}
	this.removeClass = function(className){
		that.element.classList.remove(className);
	}
	this.addId = function(id){
		that.element.id =id;
	}
	this.addStyle = function(style){
		that.element.style.cssText = style;
	}
	this.appendChildren = function(childElement){
		that.element.appendChild(childElement);
	}
	this.writeHtml = function(text){
		this.element.innerHTML = text;
	}
	this.getStyle = function(){
		var style = window.getComputedStyle(that.element);
		var initial = style.getPropertyValue('');
		return initial;
	}
	this.getEleById = function(id){
		return document.getElementById(id);
	}
	this.getEleByClassName = function(className){
		return document.getElementsByClassName(className)[0];
	}
	this.getTargetClassName = function(targetElement){
		return targetElement.className;
	}
	this.getTargetIdName = function(targetElement){
		return targetElement.id;
	}
	this.getStyle = function(style){
		var elementName = window.getComputedStyle(that.element);
		var value = elementName.getPropertyValue(style);
		return value;
	}
	this.getTargetElementHeight = function(targetElement){
		return targetElement.style.height;
	}
	this.getTargetElementWidth = function(targetElement){
		return targetElement.style.width;
	}
	this.getTargetMargin = function(targetElement){
		return targetElement.style.margin;
	}
	this.getTargetPadding = function(targetElement){
		return targetElement.style.padding;
	}
	this.getTargetBorder = function(targetElement){
		return targetElement.style.border;
	}
	this.getTargetElementFloatType = function(targetElement){
		return targetElement.style.float;
	}
	this.getTargetElementClearType = function(targetElement){
		return targetElement.style.clear;
	}
	this.getTargetElementBgColor = function(targetElement){
		return targetElement.style.backgroundColor;
	}
	this.getTargetbgAttachment = function(targetElement){
		return targetElement.style.backgroundAttachment;
	}
	this.getTargetbgImage = function(targetElement){
		return targetElement.style.backgroundImage;
	}
	this.getTargetbgPosition = function(targetElement){
		return targetElement.style.backgroundPosition;
	}
	this.getTargetbgRepeat = function(targetElement){
		return targetElement.style.backgroundRepeat;
	}
	this.getTargetColor = function(targetElement){
		return targetElement.style.color;
	}
	this.getTargetDisplayType = function(targetElement){
		return targetElement.style.display;
	}
	this.getTargetListStyleImage = function(targetElement) {
		return targetElement.style.listStyleImage;
	}
	this.getTargetListStyleType = function(targetElement) {
		return targetElement.style.listStyleType;
	}
	this.getTargetListStylePosition = function(targetElement){
		return targetElement.style.listStylePosition;
	}
	this.getTargetFontFamily = function(targetElement){
		return targetElement.style.fontFamily;
	}
	this.getTargetFontSize = function(targetElement){
		return targetElement.style.fontSize;
	}
	this.getTargetFontStyle = function(targetElement){
		return targetElement.style.fontStyle;
	}
	this.getTargetFontVariant = function(targetElement){
		return targetElement.style.fontVariant;
	}
	this.getTargetFontWeight = function(targetElement){
		return targetElement.style.fontWeight;
	}
	this.getTargetLetterSpacing = function(targetElement){
		return targetElement.style.letterSpacing;
	}
	this.getTargetLineHeight = function(targetElement){
		return targetElement.style.lineHeight;
	}
	this.getTargetTextAlign = function(targetElement){
		return targetElement.style.textAlign;
	}
	this.getTargetTextDecoration = function(targetElement){
		return targetElement.style.textDecoration;
	}
	this.getTargetTextIndent = function(targetElement){
		return targetElement.style.textIndent;
	}
	this.getTargetTextTransform = function(targetElement){
		return targetElement.style.textTransform;
	}
	this.getTargetVerticalAlign = function(targetElement){
		return targetElement.style.verticalAlign;
	}
	this.getTargetWordSpacing = function(targetElement){
		return targetElement.style.wordSpacing;
	}
	this.getTargetInnerHtml = function(targetElement){
		return targetElement.innerHTML;
	}
	this.getTargetImageAlign = function(targetElement){
		return targetElement.getAttribute('align');
	}
	this.getTargetImageAlt = function(targetElement){
		return targetElement.getAttribute('alt');
	}
	this.getTargetImageSrc = function(targetElement){
		return targetElement.getAttribute('src');
	}
	this.getTargetImageHeight = function(targetElement){
		return targetElement.getAttribute('height');
	}
	this.getTargetImageWidth = function(targetElement){
		return targetElement.getAttribute('width');
	}
	this.getInputClassName = function(){
		return mainLayoutInstance.attributeContainer.classInput.element.value;
	}
	this.setInputClassName = function(inputName){
		mainLayoutInstance.attributeContainer.classInput.element.value = inputName;
	}
	this.getInputIdName = function(){
		return mainLayoutInstance.attributeContainer.idInput.element.value;
	}
	this.setInputIdName = function(inputName){
		mainLayoutInstance.attributeContainer.idInput.element.value = inputName;
	}
	this.createEvent = function(eventName,eventFunction){
		if(eventFunction=='dragStart'){
			that.element.addEventListener(eventName,that.dragStart);
		}
		if(eventFunction == 'dragEnter'){
			that.element.addEventListener(eventName,that.dragEnter);
		}
		if(eventFunction == 'dragOver'){
			that.element.addEventListener(eventName,that.dragOver);
		}
		if(eventFunction == 'dragLeave'){
			that.element.addEventListener(eventName,that.dragLeave);
		}
		if(eventFunction == 'dragDrop'){
			that.element.addEventListener(eventName,that.dragDrop);
		}
		if(eventFunction =='mouseEnter'){
			that.element.addEventListener(eventName,that.mouseEnter);
		}
		if(eventFunction == 'mouseLeave'){
			that.element.addEventListener(eventName,that.mouseLeave);
		}
		if(eventFunction == 'mouseOut'){
			that.element.addEventListener(eventName,that.mouseOut);
		}
		if(eventFunction == 'changeFormFields'){
			that.element.addEventListener(eventName,that.changeFormFields);
		}
		if(eventFunction == 'changeClassName'){
			that.element.addEventListener(eventName,that.changeClassName);
		}
		if(eventFunction == 'changeId'){
			that.element.addEventListener(eventName,that.changeId);
		}
		if(eventFunction == 'changeHeight'){
			that.element.addEventListener(eventName,that.changeHeight);
		}
		if(eventFunction == 'toggleContents'){
			that.element.addEventListener(eventName, that.toggleContents);
		}
		if(eventFunction == 'changeWidth'){
			that.element.addEventListener(eventName, that.changeWidth);
		}
		if(eventFunction == 'changeMargin'){
			that.element.addEventListener(eventName, that.changeMargin);
		}
		if(eventFunction == 'changePadding'){
			that.element.addEventListener(eventName, that.changePadding);
		}
		if(eventFunction == 'changeBorder'){
			that.element.addEventListener(eventName, that.changeBorder);
		}
		if(eventFunction == 'changeBackgroundColor'){
			that.element.addEventListener(eventName,that.changeBackgroundColor);
		}
		if(eventFunction == 'changeBgColor'){
			that.element.addEventListener(eventName,that.changeBgColor);
		}
		if(eventFunction == 'changeFloatType'){
			that.element.addEventListener(eventName,that.changeFloatType);
		}
		if(eventFunction == 'changeClearType'){
			that.element.addEventListener(eventName,that.changeClearType);
		}
		if(eventFunction == 'removeElement'){
			that.element.addEventListener(eventName,that.removeElement);
		}
		if (eventFunction == 'changeBgAttachSelect') {
			that.element.addEventListener(eventName,that.changeBgAttachSelect);
		}
		if (eventFunction == 'changeBackgroundImage') {
			that.element.addEventListener(eventName,that.changeBackgroundImage);
		}
		if(eventFunction == 'changeBackgroundPosition'){
			that.element.addEventListener(eventName,that.changeBackgroundPosition);
		}
		if(eventFunction == 'changeBackgrPositionSelect'){
			that.element.addEventListener(eventName,that.changeBackgrPositionSelect);
		}
		if(eventFunction == 'changeBackgrRepeatSelect'){
			that.element.addEventListener(eventName,that.changeBackgrRepeatSelect);
		}
		if(eventFunction == 'changeColor'){
			that.element.addEventListener(eventName,that.changeColor);
		}
		if(eventFunction == 'changeDisplayType'){
			that.element.addEventListener(eventName,that.changeDisplayType);
		}
		if(eventFunction == 'changeListStyleImage'){
			that.element.addEventListener(eventName,that.changeListStyleImage);
		}
		if(eventFunction == 'changeListStyleType'){
			that.element.addEventListener(eventName,that.changeListStyleType);
		}
		if(eventFunction == 'changeListStylePosition'){
			that.element.addEventListener(eventName,that.changeListStylePosition);
		}
		if(eventFunction == 'changeFontFamily'){
			that.element.addEventListener(eventName,that.changeFontFamily);
		}
		if(eventFunction == 'changeFontSize'){
			that.element.addEventListener(eventName,that.changeFontSize);
		}
		if(eventFunction == 'changeFontStyle'){
			that.element.addEventListener(eventName,that.changeFontStyle);
		}
		if(eventFunction == 'changeFontVariant'){
			that.element.addEventListener(eventName,that.changeFontVariant);
		}
		if(eventFunction == 'changeFontWeight'){
			that.element.addEventListener(eventName,that.changeFontWeight);
		}
		if(eventFunction == 'changeLineSpacing'){
			that.element.addEventListener(eventName,that.changeLineSpacing);
		}
		if(eventFunction == 'changeLineHeight'){
			that.element.addEventListener(eventName,that.changeLineHeight);
		}
		if(eventFunction == 'changeTextAlign'){
			that.element.addEventListener(eventName,that.changeTextAlign);
		}
		if(eventFunction == 'changeTextDecoration'){
			that.element.addEventListener(eventName,that.changeTextDecoration);
		}
		if(eventFunction == 'changeTextIndent'){
			that.element.addEventListener(eventName,that.changeTextIndent);
		}
		if(eventFunction == 'changeTextTransform'){
			that.element.addEventListener(eventName,that.changeTextTransform);
		}
		if(eventFunction == 'changeVerticalAlign'){
			that.element.addEventListener(eventName,that.changeVerticalAlign);
		}
		if(eventFunction == 'changeWordSpacing'){
			that.element.addEventListener(eventName,that.changeWordSpacing);
		}
		if(eventFunction == 'changeImageAlign'){
			that.element.addEventListener(eventName,that.changeImageAlign);
		}
		if(eventFunction == 'changeImageAltText'){
			that.element.addEventListener(eventName,that.changeImageAlign);
		}
		if(eventFunction == 'changeImageSrc'){
			that.element.addEventListener(eventName,that.changeImageSrc);
		}
		if(eventFunction == 'changeImageHeight'){
			that.element.addEventListener(eventName,that.changeImageHeight);
		}
		if(eventFunction == 'changeImageWidth'){
			that.element.addEventListener(eventName,that.changeImageWidth);
		}
		if(eventFunction == 'changeInnerHtmlInput'){
			that.element.addEventListener(eventName,that.changeInnerHtmlInput);
		}
		if (eventFunction == 'resizeElement') {
			that.element.addEventListener(eventName,that.resizeElement);
		}
		if(eventFunction == 'initDrag'){
			that.element.addEventListener(eventName,that.initDrag);
		}
		if(eventFunction == 'changeAllClassSelect'){
			that.element.addEventListener(eventName,that.changeAllClassSelect);
		}
		if(eventFunction == 'changeBackgroundImageBtn'){
			that.element.addEventListener(eventName,that.changeBackgroundImageBtn);
		}
		if(eventFunction == 'addOptionButton'){
			that.element.addEventListener(eventName,that.addOptionButton);
		}
		if(eventFunction == 'deleteOptionPanel'){
			that.element.addEventListener(eventName,that.deleteOptionPanel);
		}
		if(eventFunction == 'settingsOptionPanel'){
			that.element.addEventListener(eventName,that.settingsOptionPanel);
		}
		if(eventFunction == 'closeModal'){
			that.element.addEventListener(eventName,that.closeModal);
		}
		if(eventFunction == 'displayBgColorSelect'){
			that.element.addEventListener(eventName,that.displayBgColorSelect);
		}
		if(eventFunction == 'displayBgImageSelect'){
			that.element.addEventListener(eventName,that.displayBgImageSelect);
		}
		if(eventFunction == 'bgSelectedNone'){
			that.element.addEventListener(eventName,that.bgSelectedNone);
		}
		if(eventFunction == 'bgSelectedColor'){
			that.element.addEventListener(eventName,that.bgSelectedColor);
		}
		if(eventFunction == 'uploadBgImage'){
			that.element.addEventListener(eventName,that.uploadBgImage);
		}
		if(eventFunction == 'closeTextEditor'){
			that.element.addEventListener(eventName,that.closeTextEditor);
		}
		if(eventFunction == 'makeTextBold'){
			that.element.addEventListener(eventName,that.makeTextBold);
		}
		if(eventFunction == 'makeTextItalic'){
			that.element.addEventListener(eventName,that.makeTextItalic);
		}
		if(eventFunction == 'makeTextStrikethrough'){
			that.element.addEventListener(eventName,that.makeTextStrikethrough);
		}
		if(eventFunction == 'makeTextUnderline'){
			that.element.addEventListener(eventName,that.makeTextUnderline);
		}
		if(eventFunction == 'makeUnorderedList'){
			that.element.addEventListener(eventName,that.makeUnorderedList);
		}
		if(eventFunction == 'makeOrderedList'){
			that.element.addEventListener(eventName,that.makeOrderedList);
		}
		if(eventFunction == 'makeIndent'){
			that.element.addEventListener(eventName,that.makeIndent);
		}
		if(eventFunction == 'makeOutdent'){
			that.element.addEventListener(eventName,that.makeOutdent);
		}
		if(eventFunction == 'justifyLeft'){
			that.element.addEventListener(eventName,that.justifyLeft);
		}
		if(eventFunction == 'justifyCenter'){
			that.element.addEventListener(eventName,that.justifyCenter);
		}
		if(eventFunction == 'justifyRight'){
			that.element.addEventListener(eventName,that.justifyRight);
		}
		if(eventFunction == 'justifyFull'){
			that.element.addEventListener(eventName,that.justifyFull);
		}
		if(eventFunction == 'textFontIncrease'){
			that.element.addEventListener(eventName,that.textFontIncrease);
		}
		if(eventFunction == 'textFontDecrease'){
			that.element.addEventListener(eventName,that.textFontDecrease);
		}
		if(eventFunction == 'changeTextLineHeight'){
			that.element.addEventListener(eventName,that.changeTextLineHeight);
		}
	}
	this.resizeElement = function(){
		that.createEvent('mousedown','initDrag');
	}
	this.initDrag = function(e){
		startX = e.clientX;
		startY = e.clientY;
		startWidth = parseInt(document.defaultView.getComputedStyle(that.element).width, 10);
   		startHeight = parseInt(document.defaultView.getComputedStyle(that.element).height, 10);
   		document.documentElement.addEventListener('mousemove', that.doDrag, false);
  		 document.documentElement.addEventListener('mouseup', that.stopDrag, false);
	}
	this.doDrag = function(e) {
   			that.element.style.width = (startWidth + e.clientX - startX) + 'px';
   			that.element.style.height = (startHeight + e.clientY - startY) + 'px';
	}
 	this.stopDrag = function(e) {
    	document.documentElement.removeEventListener('mousemove', that.doDrag, false);   
    	document.documentElement.removeEventListener('mouseup', that.stopDrag, false);
	}
	this.dragStart = function(ev){

		ev.dataTransfer.effectAllowed='copy';
  		ev.dataTransfer.setData('Text', ev.target.getAttribute('id'));
   		ev.dataTransfer.setDragImage(ev.target,0,0);
   		return true;
	}
  	this.dragEnter = function(ev){
		event.preventDefault();
	 	dragContainer = ev.target;
	 	dragContainer.style.outline = 'none';
		return true;
	}
	this.dragOver = function(ev){
 		event.preventDefault();
 		dragContainer = ev.target;
	 	dragContainer.style.outline = '3px dotted black';
	}
	this.dragLeave = function(ev){
		event.preventDefault();
		dragContainer = ev.target;
		dragContainer.style.outline = 'none';
	}
	this.dragDrop = function(ev) {
 		var data = ev.dataTransfer.getData('Text');
 		var mainElement = document.getElementById(data);
 		if(mainElement != null){
 			var elementValue = mainElement.getAttribute('value');
 			mainLayoutInstance.elementContainer.makeNewElement(elementValue,ev.target);
	 		ev.stopPropagation();
		}
		return false;
	}
	// this.mouseEnter = function(ev){
	// 	container = ev.target;
	// 	container.style.outline = '3px dotted red';
	// 	// var spanWidthClass = document.getElementsByClassName('widthSpanned')[0];
	// 	// spanWidthClass.style.background = 'blue';
	// }
	this.mouseLeave = function(ev){
		ev.target.style.outline = 'none';
		// var spanWidthClass = document.getElementsByClassName('widthSpanned')[0];
		// spanWidthClass.style.background = 'white';
	}
	this.mouseOut = function(ev){
		ev.target.style.outline ='none';
	}
	this.toggleContents = function(ev){
		var next = that.element.nextElementSibling;
		if(next.style.display == 'none'){
			next.style.display = 'block';
		}else{
			next.style.display = 'none';
		}
	}
	this.changeFormFields = function(ev){
		var eventElement = ev.target;
	    var elementClassName  = that.getTargetClassName(eventElement);
	    var elementIdName = that.getTargetIdName(eventElement);
	    var elementHeight = that.getTargetElementHeight(eventElement);
	    var elementWidth = that.getTargetElementWidth(eventElement);
	    var elementFloatType = that.getTargetElementFloatType(eventElement);
	    var elementClearType = that.getTargetElementClearType(eventElement);
	    var elementBackgroundColor = that.getTargetElementBgColor(eventElement);
	    var elementBackgroundAttachment = that.getTargetbgAttachment(eventElement);
	    var elementBackgroundImage = that.getTargetbgImage(eventElement);
	    var elementBackgroundPosition = that.getTargetbgPosition(eventElement);
	    var elementBackgroundRepeat = that.getTargetbgRepeat(eventElement);
	    var elementColor = that.getTargetColor(eventElement);
	    var elementDisplayType = that.getTargetDisplayType(eventElement);
	    var elementListStyleImage = that.getTargetListStyleImage(eventElement);
	    var elementListStyleType = that.getTargetListStyleType(eventElement);
	    var elementListStylePosition = that.getTargetListStylePosition(eventElement);
	    var elementFontFamily = that.getTargetFontFamily(eventElement);
	    var elementFontSize = that.getTargetFontSize(eventElement);
	    var elementFontStyle = that.getTargetFontStyle(eventElement);
	    var elementFontVariant = that.getTargetFontVariant(eventElement);
	    var elementFontWeight = that.getTargetFontWeight(eventElement);
	    var elementLetterSpace = that.getTargetLetterSpacing(eventElement);
	    var elementLineHeight = that.getTargetLineHeight(eventElement);
	    var elementTextAlign = that.getTargetTextAlign(eventElement);
	    var elementTextDecoration = that.getTargetTextDecoration(eventElement);
	    var elementTextIndent = that.getTargetTextIndent(eventElement);
	    var elementTextTransform = that.getTargetTextTransform(eventElement);
	    var elementVerticalAlign = that.getTargetVerticalAlign(eventElement);
	    var elementWordSpacing = that.getTargetWordSpacing(eventElement);
	    var elementImageAlign = that.getTargetImageAlign(eventElement);
	    var elementImageAlt = that.getTargetImageAlt(eventElement);
	    var elementImageSrc = that.getTargetImageSrc(eventElement);
	    var elementImageHeight = that.getTargetImageHeight(eventElement);
	    var elementImageWidth = that.getTargetImageWidth(eventElement);
	   	var elementinnerHtml = that.getTargetInnerHtml(eventElement);
	   	var elementMargin = that.getTargetMargin(eventElement);
	   	var elementPadding = that.getTargetPadding(eventElement);
	   	var elementBorder = that.getTargetBorder(eventElement);

	    elementBackgroundColor = that.convertRgbToHex(elementBackgroundColor);
	    elementColor = that.convertRgbToHex(elementColor);
	    elementBackgroundImage = that.filterText(elementBackgroundImage);
	    elementListStyleImage = that.filterText(elementListStyleImage);

	    mainLayoutInstance.attributeContainer.classInput.element.value = elementClassName;
	    mainLayoutInstance.attributeContainer.allClassesSelect.element.value = elementClassName;
	    mainLayoutInstance.attributeContainer.idInput.element.value = elementIdName;
	    mainLayoutInstance.attributeContainer.widthInput.element.value = elementWidth;
	    mainLayoutInstance.attributeContainer.heightInput.element.value = elementHeight;
	    mainLayoutInstance.attributeContainer.marginInput.element.value = elementMargin;
	    mainLayoutInstance.attributeContainer.paddingInput.element.value = elementPadding;
	    mainLayoutInstance.attributeContainer.borderInput.element.value = elementBorder;
	    mainLayoutInstance.attributeContainer.floatSelect.element.value = elementFloatType;
	    mainLayoutInstance.attributeContainer.clearSelect.element.value = elementClearType;
	    //mainLayoutInstance.attributeContainer.backgrColorPallet.element.value = elementBackgroundColor;
	    mainLayoutInstance.attributeContainer.backgrColorInput.element.value = elementBackgroundColor;
	    mainLayoutInstance.attributeContainer.backgrAttachSelect.element.value = elementBackgroundAttachment;
	    mainLayoutInstance.attributeContainer.backgrImageInput.element.value = elementBackgroundImage;
	    mainLayoutInstance.attributeContainer.backgrPositionInput.element.value = elementBackgroundPosition;
	    mainLayoutInstance.attributeContainer.backgrRepeatSelect.element.value = elementBackgroundRepeat;
	    mainLayoutInstance.attributeContainer.colorInput.element.value = elementColor;
	    mainLayoutInstance.attributeContainer.displayTypeSelect.element.value = elementDisplayType;
	    mainLayoutInstance.attributeContainer.listStyleImageInput.element.value = elementListStyleImage;
	    mainLayoutInstance.attributeContainer.listStyleTypeSelect.element.value = elementListStyleType;
	    mainLayoutInstance.attributeContainer.listStylePositionSelect.element.value = elementListStylePosition;
	    mainLayoutInstance.attributeContainer.fontFamilyInput.element.value = elementFontFamily;
	    mainLayoutInstance.attributeContainer.fontSizeInput.element.value = elementFontSize;
	    mainLayoutInstance.attributeContainer.fontSizeSelect.element.value = elementFontSize;
	    mainLayoutInstance.attributeContainer.fontVariantSelect.element.value = elementFontVariant;
	    mainLayoutInstance.attributeContainer.fontWeightSelect.element.value = elementFontWeight;
	    mainLayoutInstance.attributeContainer.lineSpacingInput.element.value = elementLetterSpace;
	    mainLayoutInstance.attributeContainer.lineHeightInput.element.value = elementLineHeight;
	    mainLayoutInstance.attributeContainer.textAlignSelect.element.value = elementTextAlign;
	    mainLayoutInstance.attributeContainer.textDecorationSelect.element.value = elementTextDecoration;
	    mainLayoutInstance.attributeContainer.textIndentInput.element.value = elementTextIndent;
	    mainLayoutInstance.attributeContainer.textTransformSelect.element.value = elementTextTransform;
	    mainLayoutInstance.attributeContainer.verticalAlignInput.element.value = elementVerticalAlign;
	    mainLayoutInstance.attributeContainer.verticalAlignSelect.element.value = elementVerticalAlign;
	    mainLayoutInstance.attributeContainer.wordSpacingInput.element.value = elementWordSpacing;
		mainLayoutInstance.attributeContainer.innerHtmlInput.element.value = elementinnerHtml;
		if(eventElement.className != ' imgClass'){
			mainLayoutInstance.attributeContainer.clickWrapper.element.style.display = 'none';
			mainLayoutInstance.attributeContainer.formContainer.element.style.display = 'none';
		}else{
			mainLayoutInstance.attributeContainer.clickWrapper.element.style.display = 'block';
			mainLayoutInstance.attributeContainer.formContainer.element.style.display = 'block';
			
			mainLayoutInstance.attributeContainer.imageAlignSelect.element.value = elementImageAlign;
			mainLayoutInstance.attributeContainer.imageAltInput.element.value = elementImageAlt;
			mainLayoutInstance.attributeContainer.imageSrcInput.element.value = elementImageSrc;
			mainLayoutInstance.attributeContainer.imageHeightInput.element.value = elementImageHeight;
			mainLayoutInstance.attributeContainer.imageWidthInput.element.value = elementImageWidth;
		}
	}
	this.filterText =function(text){
		text = text.substring(5,text.length-2);
		return text;
	}
	this.convertRgbToHex = function(rgb){
		rgb = rgb.match(/^rgb?[\s+]?\([\s+]?(\d+)[\s+]?,[\s+]?(\d+)[\s+]?,[\s+]?(\d+)[\s+]?/i);
		return (rgb) ? '#' +
		  ('0' + parseInt(rgb[1],10).toString(16)).slice(-2) +
		  ('0' + parseInt(rgb[2],10).toString(16)).slice(-2) +
		  ('0' + parseInt(rgb[3],10).toString(16)).slice(-2) : '';
	}
	this.changeClassName = function(ev){
		var inputValue = ev.target.value;
		var className = that.getInputClassName();
		var idName = that.getInputIdName();
		var selectedElementById = document.getElementById(idName);
		var selectedElementByClassName = document.getElementsByClassName(className)[0];
		if(selectedElementById != null){
			selectedElementById.className = inputValue;
		}
		else if (selectedElementByClassName != null){
			selectedElementByClassName.className = inputValue;
		}
	}
	this.changeId = function(ev){
		var inputValue = ev.target.value;
		var className = that.getInputClassName();
		var idName = that.getInputIdName();
		var selectedElementById = document.getElementById(idName);
		var selectedElementByClassName = document.getElementsByClassName(className)[0];
		if(selectedElementById != null){
			selectedElementById.id = inputValue;
		}
		else if (selectedElementByClassName != null){
			selectedElementByClassName.id = inputValue;
		}
	}
	this.changeAllClassSelect = function(ev){
		var inputValue = ev.target.value;
		var className = that.getInputClassName();
		var idName = that.getInputIdName();
		var selectedElementById = document.getElementById(idName);
		var selectedElementByClassName = document.getElementsByClassName(className)[0];
		if(selectedElementById != null){
			selectedElementById.style.outline = '1px solid red';
		}
		else if (selectedElementByClassName != null){
			selectedElementByClassName.style.outline = '1px solid red';
		}
	}
	this.changeHeight = function(ev){
		var inputValue = ev.target.value;
		var className = that.getInputClassName();
		var idName = that.getInputIdName();
		var selectedElementById = document.getElementById(idName);
		var selectedElementByClassName = document.getElementsByClassName(className)[0];
		if(selectedElementById != null){
			selectedElementById.style.height = inputValue;
		}
		else if (selectedElementByClassName != null){
			selectedElementByClassName.style.height = inputValue;
		}
	}
	this.changeWidth = function(ev){
		var inputValue = that.element.value;
		var className = that.getInputClassName();
		var idName = that.getInputIdName();
		var selectedElementById = document.getElementById(idName);
		var selectedElementByClassName = document.getElementsByClassName(className)[0];
		if(selectedElementById != null){
			selectedElementById.style.width = inputValue;
		}
		else if (selectedElementByClassName != null){
			selectedElementByClassName.style.width = inputValue;
		}
	}
	this.changeMargin = function(){
		var inputValue = that.element.value;
		var className = that.getInputClassName();
		var idName = that.getInputIdName();
		var selectedElementById = document.getElementById(idName);
		var selectedElementByClassName = document.getElementsByClassName(className)[0];
		if(selectedElementById != null){
			selectedElementById.style.margin = inputValue;
		}
		else if (selectedElementByClassName != null){
			selectedElementByClassName.style.margin = inputValue;
		}
	}
	this.changePadding = function(){
		var inputValue = that.element.value;
		var className = that.getInputClassName();
		var idName = that.getInputIdName();
		var selectedElementById = document.getElementById(idName);
		var selectedElementByClassName = document.getElementsByClassName(className)[0];
		if(selectedElementById != null){
			selectedElementById.style.padding = inputValue;
		}
		else if (selectedElementByClassName != null){
			selectedElementByClassName.style.padding = inputValue;
		}
	}
	this.changeBorder = function(){
		var inputValue = that.element.value;
		var className = that.getInputClassName();
		var idName = that.getInputIdName();
		var selectedElementById = document.getElementById(idName);
		var selectedElementByClassName = document.getElementsByClassName(className)[0];
		if(selectedElementById != null){
			selectedElementById.style.border = inputValue;
		}
		else if (selectedElementByClassName != null){
			selectedElementByClassName.style.border = inputValue;
		}
	}
	this.changeFloatType = function(){
		var inputValue = that.element.value;
		var className = that.getInputClassName();
		var idName = that.getInputIdName();
		var selectedElementById = document.getElementById(idName);
		var selectedElementByClassName = document.getElementsByClassName(className)[0];
		if(selectedElementById != null){
			selectedElementById.style.float = inputValue;
		}
		else if (selectedElementByClassName != null){
			selectedElementByClassName.style.float = inputValue;
		}
	}
	this.changeClearType = function(){
		var inputValue = that.element.value;
		var className = that.getInputClassName();
		var idName = that.getInputIdName();
		var selectedElementById = document.getElementById(idName);
		var selectedElementByClassName = document.getElementsByClassName(className)[0];
		if(selectedElementById != null){
			selectedElementById.style.clear = inputValue;
		}
		else if (selectedElementByClassName != null){
			selectedElementByClassName.style.clear = inputValue;
		}
	}
	this.removeElement = function(ev){
		ev.preventDefault();
		var abc = that.getSelectedText();
		console.log(abc);
		var inputValue = that.element.value;
		var className = that.getInputClassName();
		var idName = that.getInputIdName();
		var selectedElementById = document.getElementById(idName);
		var selectedElementByClassName = document.getElementsByClassName(className)[0];
		if(selectedElementById != null){
			var parent = selectedElementById.parentElement;
			if(parent.className != ' elementContainer'){
				parent.removeChild(selectedElementById);
			}
		}
		if(selectedElementByClassName != null){
			var parent = selectedElementByClassName.parentElement;
			if(parent.className != ' elementContainer'){
				parent.removeChild(selectedElementByClassName);
			}
		}
	}
	this.changeBgColor = function(ev){
		var styleElementIdName = ev.target.getAttribute('data-for');
		var styleElement = document.getElementById(styleElementIdName);
		styleElement.style.backgroundColor = ev.target.value;
	}
	this.changeBgAttachSelect = function(){
		var inputValue = that.element.value;
		var className = that.getInputClassName();
		var idName = that.getInputIdName();
		var selectedElementById = document.getElementById(idName);
		var selectedElementByClassName = document.getElementsByClassName(className)[0];
		if(selectedElementById != null){
			selectedElementById.style.backgroundAttachment = inputValue;
		}
		else if (selectedElementByClassName != null){
			selectedElementByClassName.style.backgroundAttachment = inputValue;
		}
	}
	this.changeBackgroundImage = function(ev){
		var inputValue = that.element.value;
		var className = that.getInputClassName();
		var idName = that.getInputIdName();
		var selectedElementById = document.getElementById(idName);
		var selectedElementByClassName = document.getElementsByClassName(className)[0];
		if(selectedElementById != null){
			selectedElementById.style.backgroundImage = 'url('+inputValue+')';
		}
		else if (selectedElementByClassName != null){
			selectedElementByClassName.style.backgroundImage = 'url('+inputValue+')';
		}
		//document.getElementById('backgrImageFile').click();
	}
	this.changeBackgroundPosition = function(){
		var inputValue = that.element.value;
		var className = that.getInputClassName();
		var idName = that.getInputIdName();
		var selectedElementById = document.getElementById(idName);
		var selectedElementByClassName = document.getElementsByClassName(className)[0];
		if(selectedElementById != null){
			selectedElementById.style.backgroundPosition = inputValue;
		}
		else if (selectedElementByClassName != null){
			selectedElementByClassName.style.backgroundPosition = inputValue;
		}
		//document.getElementById('backgrImageFile').click();
	}
	this.changeBackgroundColor = function(ev){
		var inputValue = ev.target.value;
		var className = that.getInputClassName();
		var idName = that.getInputIdName();
		var selectedElementById = document.getElementById(idName);
		var selectedElementByClassName = document.getElementsByClassName(className)[0];
		if(selectedElementById != null){
			console.log('ayo');
			selectedElementById.style.backgroundColor = inputValue;
			mainLayoutInstance.attributeContainer.backgrColorInput.element.value = inputValue;
			if(inputValue.length == 7)
				mainLayoutInstance.attributeContainer.backgrColorPallet.element.value = inputValue;
		}
		else if (selectedElementByClassName != null){
			selectedElementByClassName.style.backgroundColor = inputValue;
			mainLayoutInstance.attributeContainer.backgrColorInput.element.value = inputValue;
			mainLayoutInstance.attributeContainer.backgrColorPallet.element.value = inputValue;
		}
	}
	this.changeBackgrPositionSelect = function(){
		var inputValue = that.element.value;
		var className = that.getInputClassName();
		var idName = that.getInputIdName();
		var selectedElementById = document.getElementById(idName);
		var selectedElementByClassName = document.getElementsByClassName(className)[0];
		if(selectedElementById != null){
			selectedElementById.style.backgroundPosition = inputValue;
			mainLayoutInstance.attributeContainer.backgrPositionInput.element.value = inputValue;
		}
		else if (selectedElementByClassName != null){
			selectedElementByClassName.style.backgroundPosition = inputValue;
			mainLayoutInstance.attributeContainer.backgrPositionInput.element.value = inputValue;
		}
	}
	this.changeBackgrRepeatSelect = function(){
		var inputValue = that.element.value;
		var className = that.getInputClassName();
		var idName = that.getInputIdName();
		var selectedElementById = document.getElementById(idName);
		var selectedElementByClassName = document.getElementsByClassName(className)[0];
		if(selectedElementById != null){
			selectedElementById.style.backgroundRepeat = inputValue;
		}
		else if (selectedElementByClassName != null){
			selectedElementByClassName.style.backgroundRepeat = inputValue;
		}
	}
	this.changeColor = function(ev){
		var inputValue = that.element.value;
		var className = that.getInputClassName();
		var idName = that.getInputIdName();
		var selectedElementById = document.getElementById(idName);
		var selectedElementByClassName = document.getElementsByClassName(className)[0];
		if(selectedElementById != null){
			selectedElementById.style.color = inputValue;
		}
		else if (selectedElementByClassName != null){
			selectedElementByClassName.style.color = inputValue;
		}
	}
	this.changeDisplayType = function(){
		var inputValue = that.element.value;
		var className = that.getInputClassName();
		var idName = that.getInputIdName();
		var selectedElementById = document.getElementById(idName);
		var selectedElementByClassName = document.getElementsByClassName(className)[0];
		if(selectedElementById != null){
			selectedElementById.style.display = inputValue;
		}
		else if (selectedElementByClassName != null){
			selectedElementByClassName.style.display = inputValue;
		}
	}
	this.changeListStyleImage = function(){
		var inputValue = that.element.value;
		var className = that.getInputClassName();
		var idName = that.getInputIdName();
		var selectedElementById = document.getElementById(idName);
		var selectedElementByClassName = document.getElementsByClassName(className)[0];
		if(selectedElementById != null){
			selectedElementById.style.listStyleImage = 'url('+inputValue+')';
		}
		else if (selectedElementByClassName != null){
			selectedElementByClassName.style.listStyleImage = 'url('+inputValue+')';
		}
	}
	this.changeListStyleType = function(){
		var inputValue = that.element.value;
		var className = that.getInputClassName();
		var idName = that.getInputIdName();
		var selectedElementById = document.getElementById(idName);
		var selectedElementByClassName = document.getElementsByClassName(className)[0];
		if(selectedElementById != null){
			selectedElementById.style.listStyleType = inputValue;
		}
		else if (selectedElementByClassName != null){
			selectedElementByClassName.style.listStyleType = inputValue;
		}
	}
	this.changeListStylePosition = function(){
		var inputValue = that.element.value;
		var className = that.getInputClassName();
		var idName = that.getInputIdName();
		var selectedElementById = document.getElementById(idName);
		var selectedElementByClassName = document.getElementsByClassName(className)[0];
		if(selectedElementById != null){
			selectedElementById.style.listStylePosition = inputValue;
		}
		else if (selectedElementByClassName != null){
			selectedElementByClassName.style.listStylePosition = inputValue;
		}
	}
	this.changeFontWeight = function(){
		var inputValue = that.element.value;
		var className = that.getInputClassName();
		var idName = that.getInputIdName();
		var selectedElementById = document.getElementById(idName);
		var selectedElementByClassName = document.getElementsByClassName(className)[0];
		if(selectedElementById != null){
			selectedElementById.style.fontWeight = inputValue;
		}
		else if (selectedElementByClassName != null){
			selectedElementByClassName.style.fontWeight = inputValue;
		}
	}
	this.changeFontVariant = function(){
		var inputValue = that.element.value;
		var className = that.getInputClassName();
		var idName = that.getInputIdName();
		var selectedElementById = document.getElementById(idName);
		var selectedElementByClassName = document.getElementsByClassName(className)[0];
		if(selectedElementById != null){
			selectedElementById.style.fontVariant = inputValue;
		}
		else if (selectedElementByClassName != null){
			selectedElementByClassName.style.fontVariant = inputValue;
		}
	}
	this.changeFontStyle = function(){
		var inputValue = that.element.value;
		var className = that.getInputClassName();
		var idName = that.getInputIdName();
		var selectedElementById = document.getElementById(idName);
		var selectedElementByClassName = document.getElementsByClassName(className)[0];
		if(selectedElementById != null){
			selectedElementById.style.fontStyle = inputValue;
		}
		else if (selectedElementByClassName != null){
			selectedElementByClassName.style.fontStyle = inputValue;
		}
	}
	this.changeFontSize = function(){
		var inputValue = that.element.value;
		var className = that.getInputClassName();
		var idName = that.getInputIdName();
		var selectedElementById = document.getElementById(idName);
		var selectedElementByClassName = document.getElementsByClassName(className)[0];
		if(selectedElementById != null){
			selectedElementById.style.fontSize = inputValue;
			mainLayoutInstance.attributeContainer.fontSizeSelect.element.value = inputValue;
			mainLayoutInstance.attributeContainer.fontSizeInput.element.value = inputValue;
		}
		else if (selectedElementByClassName != null){
			selectedElementByClassName.style.fontSize = inputValue;
			mainLayoutInstance.attributeContainer.fontSizeSelect.element.value = inputValue;
			mainLayoutInstance.attributeContainer.fontSizeInput.element.value = inputValue;
		}
	}
	this.changeFontFamily = function(){
		var inputValue = that.element.value;
		var className = that.getInputClassName();
		var idName = that.getInputIdName();
		var selectedElementById = document.getElementById(idName);
		var selectedElementByClassName = document.getElementsByClassName(className)[0];
		if(selectedElementById != null){
			selectedElementById.style.fontFamily = inputValue;
		}
		else if (selectedElementByClassName != null){
			selectedElementByClassName.style.fontFamily = inputValue;
		}
	}
	this.changeWordSpacing = function(){
		var inputValue = that.element.value;
		var className = that.getInputClassName();
		var idName = that.getInputIdName();
		var selectedElementById = document.getElementById(idName);
		var selectedElementByClassName = document.getElementsByClassName(className)[0];
		if(selectedElementById != null){
			selectedElementById.style.wordSpacing = inputValue;
		}
		else if (selectedElementByClassName != null){
			selectedElementByClassName.style.wordSpacing = inputValue;
		}
	}
	this.changeVerticalAlign = function(){
		var inputValue = that.element.value;
		var className = that.getInputClassName();
		var idName = that.getInputIdName();
		var selectedElementById = document.getElementById(idName);
		var selectedElementByClassName = document.getElementsByClassName(className)[0];
		if(selectedElementById != null){
			selectedElementById.style.verticalAlign = inputValue;
			mainLayoutInstance.attributeContainer.verticalAlignSelect.element.value = inputValue;
			mainLayoutInstance.attributeContainer.verticalAlignInput.element.value = inputValue;
		}
		else if (selectedElementByClassName != null){
			selectedElementByClassName.style.verticalAlign = inputValue;
			mainLayoutInstance.attributeContainer.verticalAlignSelect.element.value = inputValue;
			mainLayoutInstance.attributeContainer.verticalAlignInput.element.value = inputValue;
		}
	}
	this.changeTextTransform = function(){
		var inputValue = that.element.value;
		var className = that.getInputClassName();
		var idName = that.getInputIdName();
		var selectedElementById = document.getElementById(idName);
		var selectedElementByClassName = document.getElementsByClassName(className)[0];
		if(selectedElementById != null){
			selectedElementById.style.textTransform = inputValue;
		}
		else if (selectedElementByClassName != null){
			selectedElementByClassName.style.textTransform = inputValue;
		}
	}
	this.changeTextIndent = function(){
		var inputValue = that.element.value;
		var className = that.getInputClassName();
		var idName = that.getInputIdName();
		var selectedElementById = document.getElementById(idName);
		var selectedElementByClassName = document.getElementsByClassName(className)[0];
		if(selectedElementById != null){
			selectedElementById.style.textIndent = inputValue;
		}
		else if (selectedElementByClassName != null){
			selectedElementByClassName.style.textIndent = inputValue;
		}
	}
	this.changeTextDecoration = function(){
		var inputValue = that.element.value;
		var className = that.getInputClassName();
		var idName = that.getInputIdName();
		var selectedElementById = document.getElementById(idName);
		var selectedElementByClassName = document.getElementsByClassName(className)[0];
		if(selectedElementById != null){
			selectedElementById.style.textDecoration = inputValue;
		}
		else if (selectedElementByClassName != null){
			selectedElementByClassName.style.textDecoration = inputValue;
		}
	}
	this.changeTextAlign = function(){
		var inputValue = that.element.value;
		var className = that.getInputClassName();
		var idName = that.getInputIdName();
		var selectedElementById = document.getElementById(idName);
		var selectedElementByClassName = document.getElementsByClassName(className)[0];
		if(selectedElementById != null){
			selectedElementById.style.textAlign = inputValue;
		}
		else if (selectedElementByClassName != null){
			selectedElementByClassName.style.textAlign = inputValue;
		}
	}
	this.changeLineHeight = function(){
		var inputValue = that.element.value;
		var className = that.getInputClassName();
		var idName = that.getInputIdName();
		var selectedElementById = document.getElementById(idName);
		var selectedElementByClassName = document.getElementsByClassName(className)[0];
		if(selectedElementById != null){
			selectedElementById.style.lineHeight = inputValue;
		}
		else if (selectedElementByClassName != null){
			selectedElementByClassName.style.lineHeight = inputValue;
		}
	}
	this.changeLineSpacing = function(){
		var inputValue = that.element.value;
		var className = that.getInputClassName();
		var idName = that.getInputIdName();
		var selectedElementById = document.getElementById(idName);
		var selectedElementByClassName = document.getElementsByClassName(className)[0];
		if(selectedElementById != null){
			selectedElementById.style.letterSpacing = inputValue;
		}
		else if (selectedElementByClassName != null){
			selectedElementByClassName.style.letterSpacing = inputValue;
		}
	}
	this.changeInnerHtmlInput = function(){
		var inputValue = that.element.value;
		var className = that.getInputClassName();
		var idName = that.getInputIdName();
		var selectedElementById = document.getElementById(idName);
		var selectedElementByClassName = document.getElementsByClassName(className)[0];
		if(selectedElementById != null){
			selectedElementById.innerHTML = inputValue;
		}
		else if (selectedElementByClassName != null){
			selectedElementByClassName.innerHTML = inputValue;
		}
	}
	this.changeImageAlign = function(){
		var inputValue = that.element.value;
		var className = that.getInputClassName();
		var idName = that.getInputIdName();
		var selectedElementById = that.getEleById(idName);
		var selectedElementByClassName = that.getEleByClassName(className);
		if(selectedElementById != null){
			selectedElementById.setAttribute('align',inputValue);
		}
		else if (selectedElementByClassName != null){
			selectedElementByClassName.setAttribute('align',inputValue);
		}
	}
	this.changeImageAltText = function(){
		var inputValue = that.element.value;
		var className = that.getInputClassName();
		var idName = that.getInputIdName();
		var selectedElementById = that.getEleById(idName);
		var selectedElementByClassName = that.getEleByClassName(className);
		if(selectedElementById != null){
			selectedElementById.setAttribute('alt',inputValue);
		}
		else if (selectedElementByClassName != null){
			selectedElementByClassName.setAttribute('alt',inputValue);
		}
	}
	this.changeImageSrc = function(){
		var inputValue = that.element.value;
		var className = that.getInputClassName();
		var idName = that.getInputIdName();
		var selectedElementById = that.getEleById(idName);
		var selectedElementByClassName = that.getEleByClassName(className);
		if(selectedElementById != null){
			selectedElementById.setAttribute('src',inputValue);
		}
		else if (selectedElementByClassName != null){
			selectedElementByClassName.setAttribute('src',inputValue);
		}
	}
	this.changeImageHeight = function(){
		var inputValue = that.element.value;
		var className = that.getInputClassName();
		var idName = that.getInputIdName();
		var selectedElementById = that.getEleById(idName);
		var selectedElementByClassName = that.getEleByClassName(className);
		if(selectedElementById != null){
			selectedElementById.setAttribute('height',inputValue);
		}
		else if (selectedElementByClassName != null){
			selectedElementByClassName.setAttribute('height',inputValue);
		}
	}
	this.changeImageWidth = function(){
		var inputValue = that.element.value;
		var className = that.getInputClassName();
		var idName = that.getInputIdName();
		var selectedElementById = that.getEleById(idName);
		var selectedElementByClassName = that.getEleByClassName(className);
		if(selectedElementById != null){
			selectedElementById.setAttribute('width',inputValue);
		}
		else if (selectedElementByClassName != null){
			selectedElementByClassName.setAttribute('width',inputValue);
		}
	}
	this.displayBgColorSelect = function(ev){
		var colorContainer = document.getElementsByClassName('controls colorControl')[0];
		var imageButton;
		if(document.getElementsByClassName('btn btnBgImage active')[0]!=undefined){
			imageButton = document.getElementsByClassName('btn btnBgImage active')[0];
		}
		else{
			imageButton = document.getElementsByClassName('btn btnBgImage')[0];
		}
		var imageContainer = document.getElementsByClassName('controls imageControl')[0];
		imageButton.classList.remove('active');
		colorContainer.style.display = 'block';
		imageContainer.style.display = 'none';
		ev.target.classList.add('active');
	}

	this.displayBgImageSelect = function(ev){
		var colorContainer = document.getElementsByClassName('controls colorControl')[0];
		var bgColorButton;
		if(document.getElementsByClassName('btn btnBgColor active')[0]!=undefined){
			bgColorButton = document.getElementsByClassName('btn btnBgColor active')[0];
		}else{
			bgColorButton = document.getElementsByClassName('btn btnBgColor')[0];
		}
		var imageContainer = document.getElementsByClassName('controls imageControl')[0];
		var upload = document.getElementsByClassName('imageUpload')[0];
		bgColorButton.classList.remove('active');
		imageContainer.style.display = 'block';
		console.log(imageContainer.style.display);
		imageContainer.appendChild(upload);
		colorContainer.style.display = 'none';
		ev.target.classList.add('active');
	}
	this.addSelectClassComponents = function(elementClassName){
		var option = new ElementSection();
		option.createElementType('option');
		option.addAttribute('value',elementClassName);
		option.writeHtml(elementClassName);
		option.appendTo(mainLayoutInstance.attributeContainer.allClassesSelect.element);
	}
	this.createCompoundElements = function(elementType,elementClass){
		that.createElementType(elementType);
		that.addClass(elementClass);
		this.addId('myId'+mainLayoutInstance.count++);
		that.createEvent('mouseenter','mouseEnter');
		that.createEvent('mouseleave','mouseLeave');
		that.createEvent('mouseout','mouseOut');
		that.createEvent('click','addOptionButton');
		that.addSelectClassComponents(elementClass);
	}
	this.addOptionButton = function(ev){
		if((document.getElementsByClassName('settingOption')[0]!=undefined) || (document.getElementsByClassName('delete')[0]!=undefined) ){
			if((document.getElementsByClassName('settingOption')[0]!=undefined)){
				var parent = document.getElementsByClassName('settingOption')[0].parentElement;
				parent.removeChild(document.getElementsByClassName('settingOption')[0]);
			}
			if((document.getElementsByClassName('deleteOption')[0]!=undefined)){
				var parent = document.getElementsByClassName('deleteOption')[0].parentElement;
				parent.removeChild(document.getElementsByClassName('deleteOption')[0]);
			}
		}
		if(ev.target.nodeName != 'B' && ev.target.nodeName != 'FONT' && ev.target.nodeName != 'STYLE' && ev.target.nodeName != 'U' && ev.target.nodeName != 'I' && ev.target.nodeName != 'STRIKE' && document.getElementsByClassName('textEditorBar')[0]==undefined){
			var settingOption = new ElementSection();
			settingOption.createElementType('div');
			settingOption.addClass('settingOption');
			settingOption.writeHtml('Settings');
			var style = window.getComputedStyle(ev.target);
			var initialHeight = parseInt(style.getPropertyValue('height'));
			var initialWidth = parseInt(style.getPropertyValue('width'));
			settingOption.element.style.top = initialHeight + 'px';
			settingOption.element.style.left = initialWidth/2 + 'px';
			settingOption.createEvent('click','settingsOptionPanel');
			settingOption.appendTo(ev.target);
		
			var deleteOption = new ElementSection();
			deleteOption.createElementType('div');
			deleteOption.addClass('deleteOption');
			deleteOption.writeHtml('Delete'); 
			deleteOption.element.style.top = initialHeight + 'px';
			deleteOption.element.style.left = initialWidth/2 + 100 + 'px';
			deleteOption.createEvent('click','deleteOptionPanel');
			deleteOption.appendTo(ev.target);
		}
	}
	this.makeTextBold = function(ev){
		if(!that.selectionIsBold()){
			document.execCommand('bold', false, null);
			ev.target.classList.add('crnt');
		}else{
			document.execCommand('bold', false, null);
			ev.target.classList.remove('crnt');
		}
	}
	this.makeTextItalic = function(ev){
		if(!that.selectionIsItalic()){
			document.execCommand('italic', "", null);
			ev.target.classList.add('crnt');
		}else{
			document.execCommand('italic', "", null);
			ev.target.classList.remove('crnt');
		}
	}
	this.makeTextStrikethrough = function(ev){
		if(!that.selectionIsStrike()){
			document.execCommand('strikethrough', false, null);
			ev.target.classList.add('crnt');
		}else{
			document.execCommand('strikethrough', false, null);
			ev.target.classList.remove('crnt');
		}
	}
	this.makeTextUnderline = function(ev){
		if(!that.selectionIsUnderLine()){
			document.execCommand('underline', false, null);
			ev.target.classList.add('crnt');
		}else{
			document.execCommand('underline', false, null);
			ev.target.classList.remove('crnt');
		}
	}
	this.makeUnorderedList = function(ev){
		document.execCommand('insertunorderedlist', false, null);
	}
	this.makeOrderedList = function(ev){
		document.execCommand('insertorderedlist', false, null);
	}
	this.makeIndent = function(ev){
		document.execCommand('indent', false, null);	
	}
	this.makeOutdent = function(ev){
		document.execCommand('outdent', false, null);
	}
	this.justifyLeft = function(ev){
		if(!that.selectionIsJLeft()){
			document.execCommand('justifyleft', false, null);
			ev.target.classList.add('crnt');
		}else{
			document.execCommand('justifyleft', false, null);
			ev.target.classList.remove('crnt');
		}
	}
	this.justifyCenter = function(ev){
		if(!that.selectionIsJCenter()){
			document.execCommand('justifycenter', false, null);
			ev.target.classList.add('crnt');
		}else{
			document.execCommand('justifycenter', false, null);
			ev.target.classList.remove('crnt');
		}
	}
	this.justifyRight = function(ev){
		if(!that.selectionIsJRight()){
			document.execCommand('justifyright', false, null);
			ev.target.classList.add('crnt');
		}else{
			document.execCommand('justifyright', false, null);
			ev.target.classList.remove('crnt');
		}
	}
	this.justifyFull = function(ev){
		if(!that.selectionIsJFull()){
			document.execCommand('justifyfull', false, null);
			ev.target.classList.add('crnt');
		}else{
			document.execCommand('justifyfull', false, null);
			ev.target.classList.remove('crnt');
		}
	}
	this.selectionIsBold = function() {
    	var isBold = false;
    	if (document.queryCommandState) {
        	isBold = document.queryCommandState('bold');
    	}
    	return isBold;
	}
	this.selectionIsItalic = function() {
    	var isItalic = false;
    	if (document.queryCommandState) {
        	isItalic = document.queryCommandState('italic');
    	}
    	return isItalic;
	}
	this.selectionIsStrike = function() {
    	var isStrike = false;
    	if (document.queryCommandState) {
        	isStrike = document.queryCommandState('strikethrough');
    	}
    	return isStrike;
	}
	this.selectionIsUnderLine = function() {
    	var isUnderline = false;
    	if (document.queryCommandState) {
        	isUnderline = document.queryCommandState('underline');
    	}
    	return isUnderline;
	}
	this.selectionIsJLeft = function() {
    	var isJLeft = false;
    	if (document.queryCommandState) {
        	isJLeft = document.queryCommandState('justifyleft');
    	}
    	return isJLeft;
	}
	this.selectionIsJRight = function() {
    	var isJRight = false;
    	if (document.queryCommandState) {
        	isJRight = document.queryCommandState('justifyright');
    	}
    	return isJRight;
	}
	this.selectionIsJCenter = function() {
    	var isJCenter = false;
    	if (document.queryCommandState) {
        	isJCenter = document.queryCommandState('justifycenter');
    	}
    	return isJCenter;
	}
	this.selectionIsJFull = function() {
    	var isJFull = false;
    	if (document.queryCommandState) {
        	isJFull = document.queryCommandState('justifyfull');
    	}
    	return isJFull;
	}
	this.textFontDecrease = function(){
		var fontSize = 3;
		if(fontSize >= 1)
			fontSize--;
		document.execCommand('fontSize',false,fontSize);
	}
	this.textFontIncrease = function(){
		var fontSize = 3;
		if(fontSize <= 7)
			fontSize++;
		document.execCommand('fontSize',false,fontSize);
	}
	this.bgSelectedNone = function(ev){
		var styleElementIdName = ev.target.getAttribute('data-for');
		var styleElement = document.getElementById(styleElementIdName);
		styleElement.style.background = 'none';
		if((document.getElementsByClassName('bgColorPallet')[0]!=undefined)){
			document.getElementsByClassName('bgColorPallet')[0].style.display = 'none';
			}
	}
	this.bgSelectedColor = function(ev){
		var styleElementIdName = ev.target.getAttribute('data-for');
		var styleElement = document.getElementById(styleElementIdName);
		var pallet = document.getElementsByClassName('bgColorPallet')[0];
		pallet.setAttribute('data-for',styleElementIdName)
		pallet.style.display = 'block';
		ev.target.parentElement.appendChild(pallet);
	}
	this.uploadBgImage = function(ev){
		var imageFile = document.getElementsByClassName('imageUpload')[0];
		var cleanFileName = imageFile.value.substring(12,imageFile.length);
		var imageName = 'images/' + cleanFileName;
		var styleToId = ev.target.getAttribute('data-for');
		var styleToElement = document.getElementById(styleToId);
		console.log(styleToElement);
		styleToElement.style.backgroundImage = 'url('+imageName+')';
	}
	this.getSelectedText = function(){
		var selection = window.getSelection();
		if(selection.getRangeAt){
			range = selection.getRangeAt(0);
			var selectedText = String(range);
			return selectedText;
		}
	}
	this.checkCondition = function(ev){
		if(document.getElementsByClassName('textEditorBar')[0]!=undefined){
			var isBold,isItalic,isStrike,isUnderline,isJFull,isJCenter,isJLeft,isJRight = false;
	    	if (document.queryCommandState) {
	        	isBold = document.queryCommandState('bold');
	        	isStrike = document.queryCommandState('strikethrough');
	        	isItalic = document.queryCommandState('italic');
	        	isUnderline = document.queryCommandState('underline');
	        	isJCenter = document.queryCommandState('justifycenter');
	        	isJRight = document.queryCommandState('justifyright');
	        	isJLeft = document.queryCommandState('justifyleft');
	        	isJFull = document.queryCommandState('justifyfull');
	    	}
	    	if(isBold){
	    		var boldButton = document.getElementById('boldBtn');
	    		boldButton.classList.add('crnt');
	    	}
	    	if(!isBold){
	    		var boldButton = document.getElementById('boldBtn');
	    		boldButton.classList.remove('crnt');
	    	}
	    	if(isItalic){
	    		var italicButton = document.getElementById('italicBtn');
	    		italicButton.classList.add('crnt');
	    	}
	    	if(!isItalic){
	    		var italicButton = document.getElementById('italicBtn');
	    		italicButton.classList.remove('crnt');
	    	}
	    	if(isStrike){
	    		var strikethroughButton = document.getElementById('strikethroughBtn');
	    		strikethroughButton.classList.add('crnt');
	    	}
	    	if(!isStrike){
	    		var strikethroughButton = document.getElementById('strikethroughBtn');
	    		strikethroughButton.classList.remove('crnt');
	    	}
	    	if(isUnderline){
	    		var underlineButton = document.getElementById('underLineBtn');
	    		underlineButton.classList.add('crnt');
	    	}
	    	if(!isUnderline){
	    		var underlineButton = document.getElementById('underLineBtn');
	    		underlineButton.classList.remove('crnt');
	    	}
	    	if(isJLeft){
	    		var jLeftBtn = document.getElementById('jLeftBtn');
	    		jLeftBtn.classList.add('crnt');
	    	}
	    	if(!isJLeft){
	    		var jLeftBtn = document.getElementById('jLeftBtn');
	    		jLeftBtn.classList.remove('crnt');
	    	}
	    	if(isJFull){
	    		var jFullBtn = document.getElementById('jFullBtn');
	    		jFullBtn.classList.add('crnt');
	    	}
	    	if(!isJFull){
	    		var jFullBtn = document.getElementById('jFullBtn');
	    		jFullBtn.classList.remove('crnt');
	    	}
	    	if(isJCenter){
	    		var jCenterBtn = document.getElementById('jCenterBtn');
	    		jCenterBtn.classList.add('crnt');
	    	}
	    	if(!isJCenter){
	    		var jCenterBtn = document.getElementById('jCenterBtn');
	    		jCenterBtn.classList.remove('crnt');
	    	}
	    	if(isJRight){
	    		var jRightBtn = document.getElementById('jRightBtn');
	    		jRightBtn.classList.add('crnt');
	    	}
	    	if(!isJRight){
	    		var jRightBtn = document.getElementById('jRightBtn');
	    		jRightBtn.classList.remove('crnt');
	    	}
	    	var selectedElement = window.getSelection().focusNode.parentNode;
	    	var lineHeight = selectedElement.style.lineHeight;
	    	var lineHeightSelect = document.getElementsByClassName('lineHeightSelect')[0];
	    	lineHeightSelect.value = lineHeight;
    	}	
	}
	this.changeTextLineHeight = function(ev){
		selectedElement = window.getSelection().focusNode.parentNode;
		if(selectedElement == document.getElementById(ev.target.getAttribute('data-for')))
			selectedElement.style.lineHeight=ev.target.value+'px'; 
	}
	this.settingsOptionPanel = function(ev){
		var parent = ev.target.parentElement.id;
		if(ev.target.parentElement.nodeName == 'P' || ev.target.parentElement.nodeName == 'A' || ev.target.parentElement.nodeName == 'H1' || ev.target.parentElement.nodeName == 'H2'){
			var textEditor = new ElementSection();
			textEditor.createElementType('div');
			textEditor.addClass('textEditorBar');
			var mainParent = document.getElementById(parent);
			mainParent.setAttribute('contentEditable','true');
			var style = window.getComputedStyle(ev.target.parentElement);
			var initialHeight = parseInt(style.getPropertyValue('height'));
			var initialWidth = parseInt(style.getPropertyValue('width'));
			textEditor.element.style.top = initialHeight + 'px';
			textEditor.element.style.left = '40%';

			var elementsHolder = new ElementSection();
			elementsHolder.createElementType('div');

			var btnGrp = new ElementSection();
			btnGrp.createElementType('div');
			btnGrp.addClass('btn-grp borderR borderB');

			var elementBold = new ElementSection();
			elementBold.createElementType('a');
			elementBold.addClass('btn');
			elementBold.addAttribute('data-original-title','Bold');
			elementBold.addId('boldBtn')
			elementBold.createEvent('click','makeTextBold');
			elementBold.appendTo(btnGrp.element);

			var elementItalic = new ElementSection();
			elementItalic.createElementType('a');
			elementItalic.addClass('btn');
			elementItalic.addAttribute('data-original-title','Italic');
			elementItalic.addId('italicBtn')
			elementItalic.createEvent('click','makeTextItalic');
			elementItalic.appendTo(btnGrp.element);

			var elementStrikeThrough = new ElementSection();
			elementStrikeThrough.createElementType('a');
			elementStrikeThrough.addClass('btn');
			elementStrikeThrough.addAttribute('data-original-title','Strikethrough');
			elementStrikeThrough.addId('strikethroughBtn')
			elementStrikeThrough.createEvent('click','makeTextStrikethrough');
			elementStrikeThrough.appendTo(btnGrp.element);

			var elementUnderLine = new ElementSection();
			elementUnderLine.createElementType('a');
			elementUnderLine.addClass('btn');
			elementUnderLine.addAttribute('data-original-title','Underline');
			elementUnderLine.addId('underLineBtn')
			elementUnderLine.createEvent('click','makeTextUnderline');
			elementUnderLine.appendTo(btnGrp.element);

			btnGrp.appendTo(elementsHolder.element);

			var btnGrpIndentList = new ElementSection();
			btnGrpIndentList.createElementType('div');
			btnGrpIndentList.addClass('btn-grp borderR borderL borderB');

			var elementUOlist = new ElementSection();
			elementUOlist.createElementType('a');
			elementUOlist.addClass('btn');
			elementUOlist.addAttribute('data-original-title','Bullet list');
			elementUOlist.addId('ulistBtn')
			elementUOlist.createEvent('click','makeUnorderedList');
			elementUOlist.appendTo(btnGrpIndentList.element);

			var elementOlist = new ElementSection();
			elementOlist.createElementType('a');
			elementOlist.addClass('btn');
			elementOlist.addAttribute('data-original-title','Number list');
			elementOlist.addId('olistBtn')
			elementOlist.createEvent('click','makeOrderedList');
			elementOlist.appendTo(btnGrpIndentList.element);

			var elementIndent = new ElementSection();
			elementIndent.createElementType('a');
			elementIndent.addClass('btn');
			elementIndent.addAttribute('data-original-title','Indent');
			elementIndent.addId('indentBtn')
			elementIndent.createEvent('click','makeIndent');
			elementIndent.appendTo(btnGrpIndentList.element);

			var elementOutdent = new ElementSection();
			elementOutdent.createElementType('a');
			elementOutdent.addClass('btn');
			elementOutdent.addAttribute('data-original-title','Reduce indent');
			elementOutdent.addId('outdentBtn')
			elementOutdent.createEvent('click','makeOutdent');
			elementOutdent.appendTo(btnGrpIndentList.element);

			btnGrpIndentList.appendTo(elementsHolder.element);

			var btnGrpJustify = new ElementSection();
			btnGrpJustify.createElementType('div');
			btnGrpJustify.addClass('btn-grp borderR borderL borderB');

			var elementJustifyLeft = new ElementSection();
			elementJustifyLeft.createElementType('a');
			elementJustifyLeft.addClass('btn');
			elementJustifyLeft.addAttribute('data-original-title','Align Left');
			elementJustifyLeft.addId('jLeftBtn')
			elementJustifyLeft.createEvent('click','justifyLeft');
			elementJustifyLeft.appendTo(btnGrpJustify.element);

			var elementJustifyCenter = new ElementSection();
			elementJustifyCenter.createElementType('a');
			elementJustifyCenter.addClass('btn');
			elementJustifyCenter.addAttribute('data-original-title','Align Center');
			elementJustifyCenter.addId('jCenterBtn')
			elementJustifyCenter.createEvent('click','justifyCenter');
			elementJustifyCenter.appendTo(btnGrpJustify.element);

			var elementJustifyRight = new ElementSection();
			elementJustifyRight.createElementType('a');
			elementJustifyRight.addClass('btn');
			elementJustifyRight.addAttribute('data-original-title','Align Right');
			elementJustifyRight.addId('jRightBtn')
			elementJustifyRight.createEvent('click','justifyRight');
			elementJustifyRight.appendTo(btnGrpJustify.element);

			var elementJustifyFull = new ElementSection();
			elementJustifyFull.createElementType('a');
			elementJustifyFull.addClass('btn');
			elementJustifyFull.addAttribute('data-original-title','Justify');
			elementJustifyFull.addId('jFullBtn')
			elementJustifyFull.createEvent('click','justifyFull');
			elementJustifyFull.appendTo(btnGrpJustify.element);

			btnGrpJustify.appendTo(elementsHolder.element);

			var btnGrpFontSize = new ElementSection();
			btnGrpFontSize.createElementType('div');
			btnGrpFontSize.addClass('btn-grp btm borderR borderT');

			var elementP = new ElementSection();
			elementP.createElementType('p');
			elementP.writeHtml('Font Size')
			elementP.appendTo(btnGrpFontSize.element);

			var elementButtonIncrease = new ElementSection();
			elementButtonIncrease.createElementType('button');
			elementButtonIncrease.addClass('fontUp')
			elementButtonIncrease.createEvent('click','textFontIncrease');
			elementButtonIncrease.appendTo(btnGrpFontSize.element);

			var elementButtonDecrease = new ElementSection();
			elementButtonDecrease.createElementType('button');
			elementButtonDecrease.addClass('fontDown')
			elementButtonDecrease.createEvent('click','textFontDecrease');
			elementButtonDecrease.appendTo(btnGrpFontSize.element);

			btnGrpFontSize.appendTo(elementsHolder.element);

			var btnGrpLineHeight = new ElementSection();
			btnGrpLineHeight.createElementType('div');
			btnGrpLineHeight.addClass('btn-grp btm borderR borderL borderT');

			var elementPLine= new ElementSection();
			elementPLine.createElementType('p');
			elementPLine.writeHtml('Line Height')
			elementPLine.appendTo(btnGrpLineHeight.element);

			var lineHeights = ['12','14','18','24','32','48'];
			var elementLineHeightSelect = new ElementSection();
			elementLineHeightSelect.createElementType('select');
			elementLineHeightSelect.addClass("lineHeightSelect");
			elementLineHeightSelect.addAttribute('data-for',parent);
			elementLineHeightSelect.createEvent("change","changeTextLineHeight");
			for(var i = 0; i< lineHeights.length;i++){
				var lineHeight = new ElementSection();
				lineHeight.createElementType('option');
				lineHeight.addAttribute('value',lineHeights[i]);
				lineHeight.writeHtml(lineHeights[i]);
				lineHeight.appendTo(elementLineHeightSelect.element);
			}
			elementLineHeightSelect.appendTo(btnGrpLineHeight.element);

			btnGrpLineHeight.appendTo(elementsHolder.element);

			var btnGrpHyperlink = new ElementSection();
			btnGrpHyperlink.createElementType('div');
			btnGrpHyperlink.addClass('btn-grp btm borderL borderT');

			var elementARemove = new ElementSection();
			elementARemove.createElementType('a');
			elementARemove.addClass('btn-grp btn');
			elementARemove.appendTo(btnGrpHyperlink.element);

			btnGrpHyperlink.appendTo(elementsHolder.element);

			var closeSpan = new ElementSection();
			closeSpan.createElementType('span');
			closeSpan.addClass('button-close');
			closeSpan.addAttribute('data-for',parent)
			closeSpan.createEvent('click','closeTextEditor');
			closeSpan.appendTo(elementsHolder.element);

			elementsHolder.appendTo(textEditor.element);
			mainParent.addEventListener('mouseup',that.checkCondition);
			textEditor.appendTo(document.body);
		}
		if(ev.target.parentElement.nodeName == 'DIV' ||ev.target.parentElement.nodeName == 'NAV' || ev.target.parentElement.nodeName == 'section'){
			var overlay = new ElementSection();
			overlay.createElementType('div');
			overlay.addClass('overlay');
			
			var modalContent = new ElementSection();
			modalContent.createElementType('div');
			modalContent.addClass('modal-content');
			
			var closeSpan = new ElementSection();
			closeSpan.createElementType('span');
			closeSpan.addClass('button-close');
			closeSpan.createEvent('click','closeModal');
			closeSpan.appendTo(modalContent.element);

			var h3Element = new ElementSection();
			h3Element.createElementType('h3');
			h3Element.writeHtml('Style Editor');
			h3Element.element.style.textAlign = 'center';
			h3Element.appendTo(modalContent.element)

			var pElement = new ElementSection();
			pElement.createElementType('p');
			pElement.writeHtml('Background');
			pElement.appendTo(modalContent.element);

			var divBgControl = new ElementSection();
			divBgControl.createElementType('div');
			divBgControl.addClass('control-group');
			divBgControl.addStyle('margin-top:6px');

			var divButtonGrp = new ElementSection();
			divButtonGrp.createElementType('div');
			divButtonGrp.addClass('btn-group');

			var bgColorButton = new ElementSection();
			bgColorButton.createElementType('button');
			bgColorButton.addClass('btn btnBgColor active');
			bgColorButton.writeHtml('Background Color');
			bgColorButton.createEvent('click','displayBgColorSelect')
			bgColorButton.appendTo(divButtonGrp.element);

			var bgImageButton = new ElementSection();
			bgImageButton.createElementType('button');
			bgImageButton.addClass('btn btnBgImage');
			bgImageButton.writeHtml('Background Image');
			bgImageButton.createEvent('click','displayBgImageSelect');
			bgImageButton.appendTo(divButtonGrp.element);

			divButtonGrp.appendTo(divBgControl.element);

			var divColorControl = new ElementSection();
			divColorControl.createElementType('div');
			divColorControl.addClass('controls colorControl');

			var divChooseColor = new ElementSection();
			divChooseColor.createElementType('div');
			divChooseColor.addId('chooseColorRadio');

			var labelNone = new ElementSection();
			labelNone.createElementType('label');
			labelNone.addClass('radio');
			
			var inputRadioNone = new ElementSection();
			inputRadioNone.createElementType('input');
			inputRadioNone.addAttribute('id','radioNone');
			inputRadioNone.addAttribute('name','bgColor');
			inputRadioNone.addAttribute('type','radio');
			inputRadioNone.addAttribute('data-for',parent)
			inputRadioNone.createEvent('click','bgSelectedNone');
			labelNone.writeHtml('None');
			inputRadioNone.appendTo(labelNone.element);

			labelNone.appendTo(divChooseColor.element);

			var labelColor = new ElementSection();
			labelColor.createElementType('label');
			labelColor.addClass('radio');
			
			var inputRadioColor = new ElementSection();
			inputRadioColor.createElementType('input');
			inputRadioColor.addAttribute('id','radioColor');
			inputRadioColor.addAttribute('name','bgColor');
			inputRadioColor.addAttribute('data-for',parent);
			inputRadioColor.createEvent('click','bgSelectedColor')
			inputRadioColor.addAttribute('type','radio');
			labelColor.writeHtml('Color');
			inputRadioColor.appendTo(labelColor.element);

			var backgrColorPallet = new ElementSection(this);
			backgrColorPallet.createElementType('input');
			backgrColorPallet.addClass('bgColorPallet');
			backgrColorPallet.addAttribute('type','color');
			backgrColorPallet.element.style.display = 'none';
			backgrColorPallet.createEvent('input','changeBgColor');
			backgrColorPallet.appendTo(labelColor.element);

			labelNone.appendTo(divChooseColor.element);
			labelColor.appendTo(divChooseColor.element);

			divChooseColor.appendTo(divColorControl.element);
			divColorControl.appendTo(divBgControl.element);

			//For selecting the background Image
			var divImageControl = new ElementSection();
			divImageControl.createElementType('div');
			divImageControl.addClass('controls imageControl');
			divImageControl.element.style.display = 'none';

			var backgrImageFile = new ElementSection();
			backgrImageFile.createElementType('input');
			backgrImageFile.addClass('imageUpload');
			backgrImageFile.addAttribute('type','file');
			backgrImageFile.addId('bgImageFile');
			backgrImageFile.createEvent('click','changeBackgroundImage');
			backgrImageFile.appendTo(divImageControl.element);

			var backgrImageUpload = new ElementSection();
			backgrImageUpload.createElementType('button');
			backgrImageUpload.addClass('btn-sm btn-primary btnUpload');
			backgrImageUpload.writeHtml('Upload');
			backgrImageUpload.addAttribute('data-for',parent);
			backgrImageUpload.createEvent('click','uploadBgImage');
			backgrImageUpload.appendTo(divImageControl.element);

			divImageControl.appendTo(divBgControl.element);

			var applyButton = new ElementSection();
			applyButton.createElementType('button');
			applyButton.addClass('btn-md btn-success')
			applyButton.addId('btnApply');
			applyButton.writeHtml('Apply');
			applyButton.createEvent('click','closeModal');

			divBgControl.appendTo(modalContent.element);
			applyButton.appendTo(modalContent.element);		
			modalContent.appendTo(overlay.element);
			overlay.appendTo(document.body);
		}
	}
	this.deleteOptionPanel = function(ev){
		var idName = ev.target.parentElement.id;
		if(idName == ''){
			idName = ev.target.parentElement.parentElement.id;
		}
		var selectedElementById = document.getElementById(idName);
		if(selectedElementById != null && (document.getElementsByClassName('textEditorBar')[0]==undefined)){
			var parent = selectedElementById.parentElement;
			if(parent.parentElement.className == 'bodyContainer container'){
				parent.parentElement.removeChild(parent);
			}
			else if(parent.className != 'elementContainer'){
				parent.removeChild(selectedElementById);
			}
		}
	}
	this.closeModal = function(ev){
		var parentModal = ev.target.parentElement;
		var parentOverlay = parentModal.parentElement;
		document.body.removeChild(parentOverlay);
	}
	this.closeTextEditor = function(ev){
		var parent = document.getElementById(ev.target.getAttribute('data-for'));
		parent.setAttribute('contentEditable','false');
		var parentDiv = ev.target.parentElement;
		var parentTextEditor = parentDiv.parentElement;
		var parentMainElement = parentTextEditor.parentElement;
		parentMainElement.removeChild(parentTextEditor);
	}
	// this.changeBackgroundImageBtn = function(ev){
	// 	var imageFIle = document.getElementById('backgrImageFile').files[0];
	// 	var url = window.URl || window.webkitURL;
	// 	var src = url.createObjectURL(imageFIle);
	// }
}