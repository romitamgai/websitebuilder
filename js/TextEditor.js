function TextEditor(){
	var textEditor;
	var that = this;
	this.openTextEditor = function(targetElement){
		var parent = targetElement.parentElement.id;
		textEditor = new ElementSection();
		textEditor.createElementType('div');
		textEditor.addClass('textEditorBar');
		var mainParent = textEditor.getEleById(parent);
		textEditor.setElementAttribute(mainParent,'contentEditable','true');
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
		elementLineHeightSelect.addClass('lineHeightSelect');
		elementLineHeightSelect.addAttribute('data-for',parent);
		elementLineHeightSelect.createEvent('change','changeTextLineHeight');
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
		mainParent.addEventListener('mouseup',that.checkCondition);
		textEditor.appendTo(document.body);
	}
	this.closeTextEditor = function(ev){
		var parentId = textEditor.getElementAttribute(ev.target,'data-for');
		var parentEle = textEditor.getEleById(parentId);
		textEditor.setElementAttribute(parentEle,'contentEditable','false');
		var parentDiv = ev.target.parentElement;
		var parentTextEditor = parentDiv.parentElement;
		var parentMainElement = parentTextEditor.parentElement;
		textEditor.removeElementChild(parentTextEditor,parentMainElement);
	}
			
}