function ElementSection(){
	var mainLayoutInstance = MainLayout.getInstance();
	var that = this;

	this.createElementType = function(type){
		that.element = document.createElement(type);
	}
	this.appendTo = function(parentElement) {
		parentElement.appendChild(that.element);
	}
	this.removeChildren = function(parentElement){
		parentElement.removeChild(that.element);
	}
	this.removeElementChild = function(element,parentElement){
		parentElement.removeChild(element);
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
	this.appendElementChild = function(element,child){
		element.appendChild(child);
	}
	this.addElementClass = function(element,className){
		element.classList.add(className);
	}
	this.removeElementClass = function(element,className){
		element.classList.remove(className);
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
	this.setStyle = function(property,style){
		that.element.style[property] = style;
	}
	this.setElementStyle = function(element,property,style){
		element.style[property] = style;
	}
	this.appendChildren = function(childElement){
		that.element.appendChild(childElement);
	}
	this.writeHtml = function(text){
		this.element.innerHTML = text;
	}
	this.getStyle = function(style,element){
		var elementName = window.getComputedStyle(element);
		var value = elementName.getPropertyValue(style);
		return value;
	}
	this.setElementAttribute = function(element,attributeName,value){
		element.setAttribute(attributeName,value);
	}
	this.getElementAttribute = function(element,attributeName){
		return element.getAttribute(attributeName);
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
		if(eventFunction == 'toggleDisplayContainer'){
			that.element.addEventListener(eventName, that.toggleDisplayContainer);
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
	this.mouseEnter = function(ev){
		if(ev.target.parentElement.className != 'componentContainer')
			ev.target.style.outline = '3px dotted #111111';
	}
	this.mouseLeave = function(ev){
		if(ev.target.parentElement.className != 'componentContainer')
			ev.target.style.outline = 'none';
	}
	this.mouseOut = function(ev){
		ev.target.style.outline ='none';
	}
	//Listeners
	this.toggleDisplayContainer = function(ev){
		var next = ev.target.parentElement.nextElementSibling;
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
			mainLayoutInstance.attributeContainer.toggleableDiv.element.style.display = 'none';
			mainLayoutInstance.attributeContainer.formContainer.element.style.display = 'none';
		}else{
			mainLayoutInstance.attributeContainer.toggleableDiv.element.style.display = 'block';
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
	this.addSelectClassComponents = function(elementClassName){
		var option = new ElementSection();
		option.createElementType('option');
		option.addAttribute('value',elementClassName);
		option.writeHtml(elementClassName);
		option.appendTo(mainLayoutInstance.attributeContainer.classInput.element);
	}
	this.createCompoundElements = function(elementType,elementClass){
		that.createElementType(elementType);
		that.addClass(elementClass);
		this.addId('myId'+mainLayoutInstance.count++);
		that.createEvent('mouseenter','mouseEnter');
		that.createEvent('mouseleave','mouseLeave');
		that.createEvent('mouseout','mouseOut');
		that.addSelectClassComponents(elementClass);
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
			document.execCommand('italic', '', null);
			ev.target.classList.add('crnt');
		}else{
			document.execCommand('italic', '', null);
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
}