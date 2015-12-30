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
	this.setElementInnerHtml = function(element,text){
		element.innerHTML = text;
	}
	this.setElementAttribute = function(element,attributeName,value){
		element.setAttribute(attributeName,value);
	}
	this.getElementAttribute = function(element,attributeName){
		return element.getAttribute(attributeName);
	}
	this.getClassName = function(element){
		return element.className
	}
	this.getIdName = function(element){
		return element.id;
	}
	this.getEleById = function(id){
		return document.getElementById(id);
	}
	this.getEleByClassName = function(className){
		return document.getElementsByClassName(className)[0];
	}
	this.getInnerHtml = function(targetElement){
		return targetElement.innerHTML;
	}
	this.createEvent = function(eventName,eventFunction){
		if(eventFunction =='mouseEnter'){
			that.element.addEventListener(eventName,that.mouseEnter);
		}
		if(eventFunction =='downloadWebpage'){
			that.element.addEventListener(eventName,that.downloadWebpage);
		}
		if(eventFunction == 'mouseLeave'){
			that.element.addEventListener(eventName,that.mouseLeave);
		}
		if(eventFunction == 'mouseOut'){
			that.element.addEventListener(eventName,that.mouseOut);
		}
		if(eventFunction == 'toggleDisplayContainer'){
			that.element.addEventListener(eventName,that.toggleDisplayContainer);
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
	this.toggleDisplayContainer = function(ev){
		var nextElement = ev.target.parentElement.nextElementSibling;
		if(nextElement.style.display == 'none'){
			nextElement.style.display = 'block';
		}else{
			nextElement.style.display = 'none';
		}
	}
	this.createCompoundElements = function(elementType,elementClass){
		that.createElementType(elementType);
		that.addClass(elementClass);
		this.addId('myId'+mainLayoutInstance.count++);
		that.createEvent('mouseenter','mouseEnter');
		that.createEvent('mouseleave','mouseLeave');
		that.createEvent('mouseout','mouseOut');
	}
}