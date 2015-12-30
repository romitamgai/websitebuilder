//Not Implemented
function BoxModel(){
	this.box;
	this.marginSpanTop;
	this.marginSpanBot;
	this.marginSpanLeft;
	this.marginSpanRight;
	this.borderDivision;
	this.borderSpanTop;
	this.borderSpanBottom;
	this.borderSpanLeft;
	this.borderSpanRight;
	this.paddingDivision;
	this.paddingSpanTop;
	this.paddingSpanBottom;
	this.paddingSpanLeft;
	this.paddingSpanRight;
	this.widthSpanned;
	this.heightSpanned;
	var boxModel;
	var that=this;
	this.createBox = function(){
		that.box = new ElementSection();
		that.box.createElementType('div');
		that.box.addClass('boxModel');
		that.box.addStyle('background:white;width:200px;min-height:200px;outline:1px dotted black;margin-top:0px;margin-bottom:0px;margin-left:auto;margin-right:auto;position:relative;');
		// that.box.setAttribute("onmouseenter","return changeBoxMarginColor(event);");
		// that.box.setAttribute("onmouseleave","return resetBoxMarginColor(event);");
		that.marginSpans();
		that.borderDiv();
		that.paddingDiv();
		that.widthSpan();
		that.heightSpan();
		that.box.appendChildren(that.marginSpanTop.element);
		that.box.appendChildren(that.marginSpanBot.element);
		that.box.appendChildren(that.marginSpanLeft.element);
		that.box.appendChildren(that.marginSpanRight.element);
		that.box.appendChildren(that.borderDivision.element);
		that.box.appendChildren(that.paddingDivision.element);
		that.box.appendChildren(that.widthSpanned.element);
		that.box.appendChildren(that.heightSpanned.element);
	}
	this.getBox = function(){
		return that.box.element;
	}
	this.marginSpans = function(){
		that.marginSpanTop = new ElementSection();
		that.marginSpanTop.createElementType('span');
		that.marginSpanTop.addClass('marginSpanTop');
		that.marginSpanTop.addStyle('background:white;display:block;outline:1px solid black; height:10px;min-width:30px;font-size:8px;text-align:center;position:absolute;top:5px;left:80px;margin-bottom:5px;');
		that.marginSpanTop.element.innerHTML = '-';
		that.marginSpanTop.addAttribute("contenteditable", "true");

		that.marginSpanBot = new ElementSection();
		that.marginSpanBot.createElementType('span');
		that.marginSpanBot.addClass('marginSpanBot');
		that.marginSpanBot.addStyle('background:white;display:block;outline:1px solid black; height:10px;min-width:30px;font-size:8px;text-align:center;position:absolute;bottom:5px;left:80px;margin-top:5px;');
		that.marginSpanBot.element.innerHTML = '-';
		that.marginSpanBot.addAttribute("contenteditable","true");

		that.marginSpanLeft = new ElementSection();
		that.marginSpanLeft.createElementType('span');
		that.marginSpanLeft.addClass('marginSpanLeft');
		that.marginSpanLeft.addStyle('background:white;display:block;outline:1px solid black; height:30px;min-width:10px;font-size:8px;text-align:center;position:absolute;top:80px;left:5px;line-height:30px;margin-right:5px;');
		that.marginSpanLeft.element.innerHTML = '-';
		that.marginSpanLeft.addAttribute("contenteditable","true");

		that.marginSpanRight = new ElementSection();
		that.marginSpanRight.createElementType('span');
		that.marginSpanRight.addClass('marginSpanRight');
		that.marginSpanRight.addStyle('background:white;display:block;outline:1px solid black; height:30px;min-width:10px;font-size:8px;text-align:center;position:absolute;top:80px;right:5px;line-height:30px;margin-left:5px;');
		that.marginSpanRight.element.innerHTML = '-';
		that.marginSpanRight.addAttribute("contenteditable","true");
	}
	this.borderDiv = function(){
		that.borderDivision = new ElementSection();
		that.borderDivision.createElementType('div');
		that.borderDivision.addClass('borderDivision');
		that.borderDivision.addStyle('background:white;border:1px solid black;width:160px;height:160px;margin:20px;position:absolute;');
		// that.borderDivision.setAttribute("onmouseenter","return changeBoxBorderColor(event);");
		// that.borderDivision.setAttribute("onmouseleave","return resetBoxBorderColor(event);");
		that.borderSpans();
		that.borderDivision.appendChildren(that.borderSpanTop.element);
		that.borderDivision.appendChildren(that.borderSpanBottom.element);
		that.borderDivision.appendChildren(that.borderSpanLeft.element);
		that.borderDivision.appendChildren(that.borderSpanRight.element);
	}
	this.borderSpans = function(){
		that.borderSpanTop = new ElementSection();
		that.borderSpanTop.createElementType('span');
		that.borderSpanTop.addClass('borderSpanTop');
		that.borderSpanTop.addStyle('background:white;display:block;outline:1px solid black;height:10px;min-width:30px;font-size:8px;text-align:center;position:absolute;top:5px;left:60px;margin-bottom:5px;');
		that.borderSpanTop.innerHTML = '-';
		that.borderSpanTop.addAttribute('contenteditable','true');

		that.borderSpanBottom = new ElementSection();
		that.borderSpanBottom.createElementType('span');
		that.borderSpanBottom.addClass('borderSpanBottom');
		that.borderSpanBottom.addStyle('background:white;display:block;outline:1px solid black;height:10px;min-width:30px;font-size:8px;text-align:center;position:absolute;bottom:5px;left:60px;margin-top:5px;');
		that.borderSpanBottom.element.innerHTML = '-';
		that.borderSpanBottom.addAttribute('contenteditable','true');

		that.borderSpanLeft = new ElementSection();
		that.borderSpanLeft.createElementType('span');
		that.borderSpanLeft.addClass('borderSpanLeft');
		that.borderSpanLeft.addStyle('background:white;display:block;outline:1px solid black;min-width:10px;height:30px;font-size:8px;text-align:center;line-height:30px;position:absolute;left:5px;top:60px;margin-right:5px;');
		that.borderSpanLeft.element.innerHTML = '-';
		that.borderSpanLeft.addAttribute('contenteditable','true');

		that.borderSpanRight = new ElementSection();
		that.borderSpanRight.createElementType('span');
		that.borderSpanRight.addClass('borderSpanRight');
		that.borderSpanRight.addStyle('background:white;display:block;outline:1px solid black;min-width:10px;height:30px;font-size:8px;text-align:center;line-height:30px;position:absolute;right:5px;top:60px;margin-left:5px;');
		that.borderSpanRight.element.innerHTML = '-';
		that.borderSpanRight.addAttribute('contenteditable','true');
	}
	this.paddingDiv = function(){
		that.paddingDivision = new ElementSection();
		that.paddingDivision.createElementType('div');
		that.paddingDivision.addClass('paddingDivision');
		that.paddingDivision.addStyle('background:white;border:1px solid black;width:120px;height:120px;margin:40px;position:absolute;');
		that.paddingSpans();
		that.paddingDivision.appendChildren(that.paddingSpanTop.element);
		that.paddingDivision.appendChildren(that.paddingSpanBottom.element);
		that.paddingDivision.appendChildren(that.paddingSpanLeft.element);
		that.paddingDivision.appendChildren(that.paddingSpanRight.element);
	}
	this.paddingSpans = function(){
		that.paddingSpanTop = new ElementSection();
		that.paddingSpanTop.createElementType('span');
		that.paddingSpanTop.addClass('paddingSpanTop');
		that.paddingSpanTop.addStyle('background:white;display:block;outline:1px solid black;height:10px;min-width:30px;font-size:8px;text-align:center;position:absolute;top:5px;left:40px;margin-bottom:5px;');
		that.paddingSpanTop.element.innerHTML = '-';
		that.paddingSpanTop.addAttribute('contenteditable','true');

		that.paddingSpanBottom = new ElementSection();
		that.paddingSpanBottom.createElementType('span');
		that.paddingSpanBottom.addClass('paddingSpanBottom');
		that.paddingSpanBottom.addStyle('background:white;display:block;outline:1px solid black;height:10px;min-width:30px;font-size:8px;text-align:center;position:absolute;bottom:5px;left:40px;margin-top:5px;');
		that.paddingSpanBottom.element.innerHTML = '-';
		that.paddingSpanBottom.addAttribute('contenteditable','true');

		that.paddingSpanLeft = new ElementSection();
		that.paddingSpanLeft.createElementType('span');
		that.paddingSpanLeft.addClass('paddingSpanLeft');
		that.paddingSpanLeft.addStyle('background:white;display:block;outline:1px solid black;min-width:10px;height:30px;font-size:8px;text-align:center;line-height:30px;position:absolute;left:5px;top:40px;margin-right:5px;');
		that.paddingSpanLeft.element.innerHTML = '-';
		that.paddingSpanLeft.addAttribute('contenteditable','true');

		that.paddingSpanRight = new ElementSection();
		that.paddingSpanRight.createElementType('span');
		that.paddingSpanRight.addClass('paddingSpanRight');
		that.paddingSpanRight.addStyle('background:white;display:block;outline:1px solid black;min-width:10px;height:30px;font-size:8px;text-align:center;line-height:30px;position:absolute;right:5px;top:40px;margin-left:5px;');
		that.paddingSpanRight.element.innerHTML = '-';
		that.paddingSpanRight.addAttribute('contenteditable','true');
	}
	this.widthSpan = function(){
		that.widthSpanned = new ElementSection();
		that.widthSpanned.createElementType('span');
		that.widthSpanned.addClass('widthSpanned');
		that.widthSpanned.addStyle('background:white;display:block;outline:1px solid black;height:20px;min-width:25px;font-size:8px;text-align:center;line-height:20px;position:absolute;top:90px;left:75px;');
		that.widthSpanned.addAttribute("contenteditable","true")
		that.widthSpanned.element.innerHTML ='-';
	}
	that.heightSpan = function(){
		that.heightSpanned = new ElementSection();
		that.heightSpanned.createElementType('span');
		that.heightSpanned.addClass('heightSpanned');
		that.heightSpanned.addStyle('background:white;display:block;outline:1px solid black;height:20px;min-width:25px;font-size:8px;text-align:center;line-height:20px;position:absolute;top:90px;left:100px;');
		that.heightSpanned.addAttribute("contenteditable","true")
		that.heightSpanned.element.innerHTML ='-';
	}
}