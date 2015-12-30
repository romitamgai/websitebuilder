function TextEditor(){
	var textEditor;
	var parentEle;
	var that = this;
	this.openTextEditor = function(targetElement){
		parentEle = targetElement.parentElement;
		parent = parentEle.id;
		textEditor = new ElementSection();
		textEditor.createElementType('div');
		textEditor.addClass('textEditorBar');
		textEditor.setElementAttribute(parentEle,'contentEditable','true');
		var initialHeight = textEditor.getStyle('height',targetElement.parentElement);
		textEditor.setStyle('top',initialHeight);
		textEditor.setStyle('left','40%');

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
		elementBold.element.addEventListener('click',that.makeTextBold);
		elementBold.appendTo(btnGrp.element);

		var elementItalic = new ElementSection();
		elementItalic.createElementType('a');
		elementItalic.addClass('btn');
		elementItalic.addAttribute('data-original-title','Italic');
		elementItalic.addId('italicBtn')
		elementItalic.element.addEventListener('click',that.makeTextItalic);
		elementItalic.appendTo(btnGrp.element);

		var elementStrikeThrough = new ElementSection();
		elementStrikeThrough.createElementType('a');
		elementStrikeThrough.addClass('btn');
		elementStrikeThrough.addAttribute('data-original-title','Strikethrough');
		elementStrikeThrough.addId('strikethroughBtn')
		elementStrikeThrough.element.addEventListener('click',that.makeTextStrikethrough);
		elementStrikeThrough.appendTo(btnGrp.element);

		var elementUnderLine = new ElementSection();
		elementUnderLine.createElementType('a');
		elementUnderLine.addClass('btn');
		elementUnderLine.addAttribute('data-original-title','Underline');
		elementUnderLine.addId('underLineBtn')
		elementUnderLine.element.addEventListener('click',that.makeTextUnderline);
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
		elementUOlist.element.addEventListener('click',that.makeUnorderedList);
		elementUOlist.appendTo(btnGrpIndentList.element);

		var elementOlist = new ElementSection();
		elementOlist.createElementType('a');
		elementOlist.addClass('btn');
		elementOlist.addAttribute('data-original-title','Number list');
		elementOlist.addId('olistBtn')
		elementOlist.element.addEventListener('click',that.makeOrderedList);
		elementOlist.appendTo(btnGrpIndentList.element);

		var elementIndent = new ElementSection();
		elementIndent.createElementType('a');
		elementIndent.addClass('btn');
		elementIndent.addAttribute('data-original-title','Indent');
		elementIndent.addId('indentBtn')
		elementIndent.element.addEventListener('click',that.makeIndent);
		elementIndent.appendTo(btnGrpIndentList.element);

		var elementOutdent = new ElementSection();
		elementOutdent.createElementType('a');
		elementOutdent.addClass('btn');
		elementOutdent.addAttribute('data-original-title','Reduce indent');
		elementOutdent.addId('outdentBtn')
		elementOutdent.element.addEventListener('click',that.makeOutdent);
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
		elementJustifyLeft.element.addEventListener('click',that.justifyLeft);
		elementJustifyLeft.appendTo(btnGrpJustify.element);

		var elementJustifyCenter = new ElementSection();
		elementJustifyCenter.createElementType('a');
		elementJustifyCenter.addClass('btn');
		elementJustifyCenter.addAttribute('data-original-title','Align Center');
		elementJustifyCenter.addId('jCenterBtn')
		elementJustifyCenter.element.addEventListener('click',that.justifyCenter);
		elementJustifyCenter.appendTo(btnGrpJustify.element);

		var elementJustifyRight = new ElementSection();
		elementJustifyRight.createElementType('a');
		elementJustifyRight.addClass('btn');
		elementJustifyRight.addAttribute('data-original-title','Align Right');
		elementJustifyRight.addId('jRightBtn')
		elementJustifyRight.element.addEventListener('click',that.justifyRight);
		elementJustifyRight.appendTo(btnGrpJustify.element);

		var elementJustifyFull = new ElementSection();
		elementJustifyFull.createElementType('a');
		elementJustifyFull.addClass('btn');
		elementJustifyFull.addAttribute('data-original-title','Justify');
		elementJustifyFull.addId('jFullBtn')
		elementJustifyFull.element.addEventListener('click',that.justifyFull);
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
		elementButtonIncrease.element.addEventListener('click',that.textFontIncrease);
		elementButtonIncrease.appendTo(btnGrpFontSize.element);

		var elementButtonDecrease = new ElementSection();
		elementButtonDecrease.createElementType('button');
		elementButtonDecrease.addClass('fontDown')
		elementButtonDecrease.element.addEventListener('click',that.textFontDecrease);
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
		elementLineHeightSelect.addClass('lineHeightSelect');
		elementLineHeightSelect.addAttribute('data-for',parent);
		elementLineHeightSelect.element.addEventListener('change',that.changeTextLineHeight);
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
		closeSpan.element.addEventListener('click',that.closeTextEditor);
		closeSpan.appendTo(elementsHolder.element);

		elementsHolder.appendTo(textEditor.element);
		parentEle.addEventListener('mouseup',that.checkCondition);
		textEditor.appendTo(document.body);
	}
	this.makeTextBold = function(ev){
		if(!that.selectionIsBold()){
			document.execCommand('bold', false, null);
			textEditor.addElementClass(ev.target,'crnt');
		}else{
			document.execCommand('bold', false, null);
			textEditor.removeElementClass(ev.target,'crnt');
		}
	}
	this.makeTextItalic = function(ev){
		if(!that.selectionIsItalic()){
			document.execCommand('italic', '', null);
			textEditor.addElementClass(ev.target,'crnt');
		}else{
			document.execCommand('italic', '', null);
			textEditor.removeElementClass(ev.target,'crnt');
		}
	}
	this.makeTextStrikethrough = function(ev){
		if(!that.selectionIsStrike()){
			document.execCommand('strikethrough', false, null);
			textEditor.addElementClass(ev.target,'crnt');
		}else{
			document.execCommand('strikethrough', false, null);
			textEditor.removeElementClass(ev.target,'crnt');
		}
	}
	this.makeTextUnderline = function(ev){
		if(!that.selectionIsUnderLine()){
			document.execCommand('underline', false, null);
			textEditor.addElementClass(ev.target,'crnt');
		}else{
			document.execCommand('underline', false, null);
			textEditor.removeElementClass(ev.target,'crnt');
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
			textEditor.setElementStyle(parentEle,'textAlign','left');
			textEditor.addElementClass(ev.target,'crnt');
		}else{
			textEditor.setElementStyle(parentEle,'textAlign','left');
			textEditor.removeElementClass(ev.target,'crnt');
		}
	}
	this.justifyCenter = function(ev){
		if(!that.selectionIsJCenter()){
			textEditor.setElementStyle(parentEle,'textAlign','center');
			textEditor.addElementClass(ev.target,'crnt');
		}else{
			textEditor.setElementStyle(parentEle,'textAlign','center');
			textEditor.removeElementClass(ev.target,'crnt');
		}
	}
	this.justifyRight = function(ev){
		if(!that.selectionIsJRight()){
			textEditor.setElementStyle(parentEle,'textAlign','right');
			textEditor.addElementClass(ev.target,'crnt');
		}else{
			textEditor.setElementStyle(parentEle,'textAlign','right');
			textEditor.removeElementClass(ev.target,'crnt');
		}
	}
	this.justifyFull = function(ev){
		if(!that.selectionIsJFull()){
			textEditor.setElementStyle(parentEle,'textAlign','justify');
			textEditor.addElementClass(ev.target,'crnt');
		}else{
			textEditor.setElementStyle(parentEle,'textAlign','justify');
			textEditor.removeElementClass(ev.target,'crnt');
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
    	text= textEditor.getStyle('text-align',parentEle);
    	if (text == 'left')
        	isJLeft = true;
    	return isJLeft;
	}
	this.selectionIsJRight = function() {
    	var isJRight = false;
    	text= textEditor.getStyle('text-align',parentEle);
    	if (text == 'right')
        	isJRight = true;
    	return isJRight;
	}
	this.selectionIsJCenter = function() {
    	var isJCenter = false;
    	text= textEditor.getStyle('text-align',parentEle);
    	if (text == 'center')
        	isJCenter = true;
    	return isJCenter;
	}
	this.selectionIsJFull = function() {
    	var isJFull = false;
    	text= textEditor.getStyle('text-align',parentEle);
    	if (text == 'justify')
        	isJFull = true;
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
		if(textEditor.getEleByClassName('textEditorBar')!=undefined){
			var isBold,isItalic,isStrike,isUnderline,isJFull,isJCenter,isJLeft,isJRight = false;
        	isBold = document.queryCommandState('bold');
        	isStrike = document.queryCommandState('strikethrough');
        	isItalic = document.queryCommandState('italic');
        	isUnderline = document.queryCommandState('underline');
        	isJCenter = that.selectionIsJCenter();
        	isJRight = that.selectionIsJRight();
        	isJLeft = that.selectionIsJLeft();
        	isJFull = that.selectionIsJFull();
	    	if(isBold){
	    		var boldButton = textEditor.getEleById('boldBtn');
	    		textEditor.addElementClass(boldButton,'crnt');
	    	}
	    	if(!isBold){
	    		var boldButton = textEditor.getEleById('boldBtn');
	    		textEditor.removeElementClass(boldButton,'crnt');
	    	}
	    	if(isItalic){
	    		var italicButton = textEditor.getEleById('italicBtn');
	    		textEditor.addElementClass(italicButton,'crnt');
	    	}
	    	if(!isItalic){
	    		var italicButton = textEditor.getEleById('italicBtn');
	    		textEditor.removeElementClass(italicButton,'crnt');
	    	}
	    	if(isStrike){
	    		var strikethroughButton = textEditor.getEleById('strikethroughBtn');
	    		textEditor.addElementClass(strikethroughButton,'crnt');
	    	}
	    	if(!isStrike){
	    		var strikethroughButton = textEditor.getEleById('strikethroughBtn');
	    		textEditor.removeElementClass(strikethroughButton,'crnt');
	    	}
	    	if(isUnderline){
	    		var underlineButton = textEditor.getEleById('underLineBtn');
	    		textEditor.addElementClass(underlineButton,'crnt');
	    	}
	    	if(!isUnderline){
	    		var underlineButton = textEditor.getEleById('underLineBtn');
	    		textEditor.removeElementClass(underlineButton,'crnt');
	    	}
	    	if(isJLeft){
	    		var jLeftBtn = textEditor.getEleById('jLeftBtn');
	    		textEditor.addElementClass(jLeftBtn,'crnt');
	    	}
	    	if(!isJLeft){
	    		var jLeftBtn = textEditor.getEleById('jLeftBtn');
	    		textEditor.removeElementClass(jLeftBtn,'crnt');
	    	}
	    	if(isJFull){
	    		var jFullBtn = textEditor.getEleById('jFullBtn');
	    		textEditor.addElementClass(jFullBtn,'crnt');
	    	}
	    	if(!isJFull){
	    		var jFullBtn = textEditor.getEleById('jFullBtn');
	    		textEditor.removeElementClass(jFullBtn,'crnt');
	    	}
	    	if(isJCenter){
	    		var jCenterBtn = textEditor.getEleById('jCenterBtn');
	    		textEditor.addElementClass(jCenterBtn,'crnt');
	    	}
	    	if(!isJCenter){
	    		var jCenterBtn = textEditor.getEleById('jCenterBtn');
	    		textEditor.removeElementClass(jCenterBtn,'crnt');
	    	}
	    	if(isJRight){
	    		var jRightBtn = textEditor.getEleById('jRightBtn');
	    		textEditor.addElementClass(jRightBtn,'crnt');
	    	}
	    	if(!isJRight){
	    		var jRightBtn = textEditor.getEleById('jRightBtn');
	    		textEditor.removeElementClass(jRightBtn,'crnt');
	    	}
    	}	
	}
	this.changeTextLineHeight = function(ev){
		textEditor.setElementStyle(parentEle,'lineHeight',ev.target.value+'px'); 
	}
	this.closeTextEditor = function(ev){
		textEditor.setElementAttribute(parentEle,'contentEditable','false');
		var parentDiv = ev.target.parentElement;
		var parentTextEditor = parentDiv.parentElement;
		var parentMainElement = parentTextEditor.parentElement;
		textEditor.removeElementChild(parentTextEditor,parentMainElement);
	}
			
}