function AttributeContainer() {
	this.attributeContainer;
	this.formelement;
	this.titleDivision;
	this.formDivision;
	this.box;
	this.classInput;
	this.classList = [];
	this.heightInput;
	this.idInput;
	this.div1;
	this.clickWrapper;
	this.separationDiv;
	this.backgrAttachSelect;
	this.backgrColorInput;
	this.backgrImageFile;
	this.backgrImageButton;
	this.backgrImageInput;
	this.backgrPositionInput;
	this.backgrPositionSelect;
	this.colorInput;
	this.floatSelect;
	this.clearSelect;
	this.displayTypeSelect;
	this.listStyleImageInput;
	this.listStyleTypeSelect;
	this.listStylePositionSelect;
	this.fontFamilyInput;
	this.fontSizeInput;
	this.fontSizeSelect;
	this.fontStyleSelect;
	this.fontVariantSelect;
	this.fontWeightSelect;
	this.lineSpacingInput;
	this.lineHeightInput;
	this.textAlignSelect;
	this.textDecorationSelect;
	this.textIndentInput;
	this.textTransformSelect;
	this.verticalAlignInput;
	this.verticalAlignSelect;
	this.wordSpacingInput;
	var that = this;

	this.init = function  () {
		that.attributeContainer = new ElementSection();
		var boxModel = new BoxModel();

		that.attributeContainer.createElementType('div');
		that.attributeContainer.addClass('attributeContainer');
		that.titleDiv();
		that.formDiv();
		boxModel.createBox();
		//that.box = boxModel.getBox();
		//that.attributeContainer.appendChildren(that.box);
	}
	this.titleDiv = function(){
		that.titleDivision = new ElementSection();
		that.titleDivision.createElementType('div');
		that.titleDivision.addClass('attributeTitle');
		that.titleDivision.writeHtml('Element Attributes');
		that.titleDivision.appendTo(that.attributeContainer.element);
	}
	this.formDiv = function(){
		that.formDivision = new ElementSection();
		that.formDivision.createElementType('form');
		that.formDivision.addClass('attributeForm');
		
		that.toggleableWrapper('General Properties');
		that.formFieldContainer();
		that.generalFields();
		
		that.toggleableWrapper('Background and Color Properties');
		that.formFieldContainer();
		that.backgroundFields();

		that.toggleableWrapper('Classification Properties');
		that.formFieldContainer();
		that.classificationFields();

		that.toggleableWrapper('Font Properties');
		that.formFieldContainer();
		that.fontFields();

		that.toggleableWrapper('Text Properties');
		that.formFieldContainer();
		that.textFields();

		that.toggleableWrapper('Image Properties');
		that.formFieldContainer();
		that.imageFields();

		that.toggleableWrapper('Form Properties');
		that.formFieldContainer();
		that.formAttributeFields();
		
		that.formDivision.appendTo(that.attributeContainer.element);
	}
	this.toggleableWrapper = function(headerName){
		that.toggleableDiv = new ElementSection();
		that.toggleableDiv.createElementType('div');
		that.toggleableDiv.addClass('toggleableDiv');
		that.toggleableDiv.createEvent('click','toggleDisplayContainer');
		that.clickableHeadingTag(headerName);
		that.toggleableDiv.appendTo(that.formDivision.element);
	}
	this.clickableHeadingTag = function(headerName){
		var headingClickable = new ElementSection();
		headingClickable.createElementType('h2');
		headingClickable.addClass('clickableHeading');
		headingClickable.writeHtml(headerName);
		headingClickable.appendTo(that.toggleableDiv.element);
	}
	this.formFieldContainer = function(){
		that.formContainer = new ElementSection();
		that.formContainer.createElementType('div');
		that.formContainer.addClass('formFieldContainer');
		that.formContainer.addStyle('display:none;background-color:white;');
		that.formContainer.appendTo(that.formDivision.element);
	}
	this.generalFields = function(){
		that.classLabel = new ElementSection();
		that.classLabel.createElementType('label');
		that.classLabel.addStyle('color:black;padding-right:5px;');
		that.classLabel.writeHtml('Class Name: ');
		that.classLabel.appendTo(that.formContainer.element);

		that.classInput = new ElementSection(this);
		that.classInput.createElementType('input');
		that.classInput.addClass('classInput');
		that.classInput.addStyle('width:75%;')
		that.classInput.name = 'classInput';
		that.classInput.element.addEventListener('input',that.changeClassName);
		that.classInput.appendTo(that.formContainer.element);

		// that.selectClassLabel = new ElementSection();
		// that.selectClassLabel.createElementType('label');
		// that.selectClassLabel.addStyle('color:black;padding-right:10px;');
		// that.selectClassLabel.writeHtml('Select Class: ');
		// that.selectClassLabel.appendTo(that.formContainer.element);

		// that.classList = ['headerContainer clearfix','bodyContainer clearfix','footerContainer clearfix'];
		// that.allClassesSelect = new ElementSection(this);
		// that.allClassesSelect.createElementType('select');
		// that.allClassesSelect.addClass('floatSelect');
		// that.allClassesSelect.addStyle('width:75%;');
		// that.allClassesSelect.element.addEventListener('change','changeAllClassSelect');
		// for(var i = 0; i< that.classList.length;i++){
		// 	var option = new ElementSection();
		// 	option.createElementType('option');
		// 	option.addAttribute('value',that.classList[i]);
		// 	option.writeHtml(that.classList[i]);
		// 	option.appendTo(that.allClassesSelect.element);
		// }
		// that.allClassesSelect.appendTo(that.formContainer.element);

		that.idLabel = new ElementSection();
		that.idLabel.createElementType('label');
		that.idLabel.addStyle('color:black;padding-right:35px;');
		that.idLabel.writeHtml('IdName: ');
		that.idLabel.appendTo(that.formContainer.element);

		that.idInput = new ElementSection(this);
		that.idInput.createElementType('input');
		that.idInput.addClass('idInput');
		that.idInput.addStyle('width:75%;')
		that.idInput.name = 'idInput';
		that.idInput.element.addEventListener('input',that.changeId);
		that.idInput.appendTo(that.formContainer.element);

		that.heightLabel = new ElementSection();
		that.heightLabel.createElementType('label');
		that.heightLabel.addStyle('color:black;padding-right:45px;');
		that.heightLabel.writeHtml('Height: ');
		that.heightLabel.appendTo(that.formContainer.element);

		that.heightInput = new ElementSection(this);
		that.heightInput.createElementType('input');
		that.heightInput.addClass('heightInput');
		that.heightInput.addStyle('width:75%;');
		that.heightInput.name = 'heightInput';
		that.heightInput.element.addEventListener('input',that.changeHeight);
		that.heightInput.appendTo(that.formContainer.element);

		that.widthLabel = new ElementSection();
		that.widthLabel.createElementType('label');
		that.widthLabel.addStyle('color:black;padding-right:50px;');
		that.widthLabel.writeHtml('Width: ');
		that.widthLabel.appendTo(that.formContainer.element);

		that.widthInput = new ElementSection(this);
		that.widthInput.createElementType('input');
		that.widthInput.addClass('widthInput');
		that.widthInput.addStyle('width:75%;');
		that.widthInput.name = 'widthInput';
		that.widthInput.element.addEventListener('input',that.changeWidth);
		that.widthInput.appendTo(that.formContainer.element);

		that.marginLabel = new ElementSection();
		that.marginLabel.createElementType('label');
		that.marginLabel.addStyle('color:black;padding-right:50px;');
		that.marginLabel.writeHtml('Margin: ');
		that.marginLabel.appendTo(that.formContainer.element);

		that.marginInput = new ElementSection(this);
		that.marginInput.createElementType('input');
		that.marginInput.addClass('marginInput');
		that.marginInput.addStyle('width:75%;');
		that.marginInput.name = 'marginInput';
		that.marginInput.element.addEventListener('input',that.changeMargin);
		that.marginInput.appendTo(that.formContainer.element);

		that.paddingLabel = new ElementSection();
		that.paddingLabel.createElementType('label');
		that.paddingLabel.addStyle('color:black;padding-right:50px;');
		that.paddingLabel.writeHtml('Padding: ');
		that.paddingLabel.appendTo(that.formContainer.element);

		that.paddingInput = new ElementSection(this);
		that.paddingInput.createElementType('input');
		that.paddingInput.addClass('paddingInput');
		that.paddingInput.addStyle('width:75%;');
		that.paddingInput.name = 'paddingInput';
		that.paddingInput.element.addEventListener('input',that.changePadding);
		that.paddingInput.appendTo(that.formContainer.element);

		that.borderLabel = new ElementSection();
		that.borderLabel.createElementType('label');
		that.borderLabel.addStyle('color:black;padding-right:50px;');
		that.borderLabel.writeHtml('Border: ');
		that.borderLabel.appendTo(that.formContainer.element);

		that.borderInput = new ElementSection(this);
		that.borderInput.createElementType('input');
		that.borderInput.addClass('borderInput');
		that.borderInput.addStyle('width:75%;');
		that.borderInput.name = 'borderInput';
		that.borderInput.element.addEventListener('input',that.changeBorder);
		that.borderInput.appendTo(that.formContainer.element);

		that.floatLabel = new ElementSection();
		that.floatLabel.createElementType('label');
		that.floatLabel.addStyle('color:black;padding-right:55px;');
		that.floatLabel.writeHtml('Float: ');
		that.floatLabel.appendTo(that.formContainer.element);

		var floatArray = ['none','left','right'];
		that.floatSelect = new ElementSection(this);
		that.floatSelect.createElementType('select');
		that.floatSelect.addClass('floatSelect');
		that.floatSelect.addStyle('width:75%;');
		that.floatSelect.element.addEventListener('change',that.changeFloatType);
		for(var i = 0; i< floatArray.length;i++){
			var floatOption = new ElementSection();
			floatOption.createElementType('option');
			floatOption.addAttribute('value',floatArray[i]);
			floatOption.writeHtml(floatArray[i]);
			floatOption.appendTo(that.floatSelect.element);
		}
		that.floatSelect.appendTo(that.formContainer.element);

		that.clearLabel = new ElementSection();
		that.clearLabel.createElementType('label');
		that.clearLabel.addStyle('color:black;padding-right:55px;');
		that.clearLabel.writeHtml('Clear: ');
		that.clearLabel.appendTo(that.formContainer.element);

		var clearArray = ['none','left','right','both'];
		that.clearSelect = new ElementSection(this);
		that.clearSelect.createElementType('select');
		that.clearSelect.addClass('clearSelect');
		that.clearSelect.addStyle('width:55%;');
		that.clearSelect.element.addEventListener('change',that.changeClearType);
		for(var i = 0; i< clearArray.length;i++){
			var clearOption = new ElementSection();
			clearOption.createElementType('option');
			clearOption.addAttribute('value',clearArray[i]);
			clearOption.writeHtml(clearArray[i]);
			clearOption.appendTo(that.clearSelect.element);
		}
		that.clearSelect.appendTo(that.formContainer.element);

		that.removeDivisionButton = new ElementSection(this);
		that.removeDivisionButton.createElementType('button');
		that.removeDivisionButton.addClass('removeDivisionButton');
		that.removeDivisionButton.writeHtml('Remove Element');
		that.removeDivisionButton.element.addEventListener('click',that.removeElement);
		that.removeDivisionButton.appendTo(that.formContainer.element);
	}
	this.backgroundFields = function(){
		that.backgrColorLabel = new ElementSection();
		that.backgrColorLabel.createElementType('label');
		that.backgrColorLabel.addStyle('color:black;padding-right:10px;');
		that.backgrColorLabel.writeHtml('Background Color: ');
		that.backgrColorLabel.appendTo(that.formContainer.element);

		that.backgrColorInput = new ElementSection(this);
		that.backgrColorInput.createElementType('input');
		that.backgrColorInput.addClass('backgrColorInput');
		that.backgrColorInput.addStyle('width:50%;');
		that.backgrColorInput.name = 'backgrColorInput';
		that.backgrColorInput.element.addEventListener('input',that.changeBackgroundColor);
		that.backgrColorInput.appendTo(that.formContainer.element);

		that.backgrColorPallet = new ElementSection(this);
		that.backgrColorPallet.createElementType('input');
		that.backgrColorPallet.addClass('backgrColorPallet');
		that.backgrColorPallet.addAttribute('type','color');
		that.backgrColorPallet.addStyle('width:10%;');
		that.backgrColorPallet.element.addEventListener('input',that.changeBackgroundColor);
		that.backgrColorPallet.appendTo(that.formContainer.element);

		that.backgrAttachLabel = new ElementSection();
		that.backgrAttachLabel.createElementType('label');
		that.backgrAttachLabel.addStyle('color:black;padding-right:10px;');
		that.backgrAttachLabel.writeHtml('Background Attachment: ');
		that.backgrAttachLabel.appendTo(that.formContainer.element);

		var containArray = ['fixed','scroll'];
		that.backgrAttachSelect = new ElementSection(this);
		that.backgrAttachSelect.createElementType('select');
		that.backgrAttachSelect.addClass('backgrAttachSelect');
		that.backgrAttachSelect.addStyle('width:55%;');
		that.backgrAttachSelect.element.addEventListener('change',that.changeBgAttachSelect);
		for(var i = 0; i< containArray.length;i++){
			var option = new ElementSection();
			option.createElementType('option');
			option.addAttribute('value',containArray[i]);
			option.writeHtml(containArray[i]);
			option.appendTo(that.backgrAttachSelect.element);
		}
		that.backgrAttachSelect.appendTo(that.formContainer.element);

		that.backgrImageLabel = new ElementSection();
		that.backgrImageLabel.createElementType('label');
		that.backgrImageLabel.addStyle('color:black;padding-right:10px;');
		that.backgrImageLabel.writeHtml('Background Image: ');
		that.backgrImageLabel.appendTo(that.formContainer.element);

		that.backgrImageInput = new ElementSection();
		that.backgrImageInput.createElementType('input');
		that.backgrImageInput.addStyle('width:48%;');
		that.backgrImageInput.addClass('backgrImageInput');
		that.backgrImageInput.name ='backgrImageInput';
		that.backgrImageInput.element.addEventListener('input',that.changeBackgroundImage);
		that.backgrImageInput.appendTo(that.formContainer.element);

		that.backgrImageFile = new ElementSection(this);
		that.backgrImageFile.createElementType('input');
		that.backgrImageFile.addAttribute('type','file');
		that.backgrImageFile.addId('backgrImageFile');
		that.backgrImageFile.element.addEventListener('click',that.changeBackgroundImage);
		that.backgrImageFile.appendTo(that.formContainer.element);

		that.backgrPositionLabel = new ElementSection();
		that.backgrPositionLabel.createElementType('label');
		that.backgrPositionLabel.addStyle('color:black;padding-right:10px;');
		that.backgrPositionLabel.writeHtml('Background Position: ');
		that.backgrPositionLabel.appendTo(that.formContainer.element);

		that.backgrPositionInput = new ElementSection(this);
		that.backgrPositionInput.createElementType('input');
		that.backgrPositionInput.addStyle('width:30%;');
		that.backgrPositionInput.addClass('backgrPositionInput');
		that.backgrPositionInput.name ='backgrPositionInput';
		that.backgrPositionInput.element.addEventListener('input',that.changeBackgroundPosition);
		that.backgrPositionInput.appendTo(that.formContainer.element);

		var backgrPosition = ['top left','top center','top right','center left','center center','center right','bottom left','bottom center', 'bottom right','initial','inherit'];
		that.backgrPositionSelect = new ElementSection(this);
		that.backgrPositionSelect.createElementType('select');
		that.backgrPositionSelect.addClass('backgrPositionSelect');
		that.backgrPositionSelect.addStyle('width:25%;');
		that.backgrPositionSelect.element.addEventListener('change',that.changeBackgrPositionSelect);
		for(var i = 0; i< backgrPosition.length;i++){
			var posOption = new ElementSection();
			posOption.createElementType('option');
			posOption.addAttribute('value',backgrPosition[i]);
			posOption.writeHtml(backgrPosition[i]);
			posOption.appendTo(that.backgrPositionSelect.element);
		}
		that.backgrPositionSelect.appendTo(that.formContainer.element);

		that.backgrRepeatLabel = new ElementSection();
		that.backgrRepeatLabel.createElementType('label');
		that.backgrRepeatLabel.addStyle('color:black;padding-right:18px;');
		that.backgrRepeatLabel.writeHtml('Background Repeat: ');
		that.backgrRepeatLabel.appendTo(that.formContainer.element);

		var  backgrRepeat = ['repeat','repeat-x','repeat-y','no-repeat','initial','inherit'];
		that.backgrRepeatSelect = new ElementSection(this);
		that.backgrRepeatSelect.createElementType('select');
		that.backgrRepeatSelect.addClass('backgrRepeatSelect');
		that.backgrRepeatSelect.addStyle('width:62%;');
		that.backgrRepeatSelect.element.addEventListener('change',that.changeBackgrRepeatSelect);
		for(var i = 0; i< backgrRepeat.length;i++){
			var repeatOption = new ElementSection();
			repeatOption.createElementType('option');
			repeatOption.addAttribute('value',backgrRepeat[i]);
			repeatOption.writeHtml(backgrRepeat[i]);
			repeatOption.appendTo(that.backgrRepeatSelect.element);
		}
		that.backgrRepeatSelect.appendTo(that.formContainer.element);

		that.colorLabel = new ElementSection();
		that.colorLabel.createElementType('label');
		that.colorLabel.addStyle('color:black;padding-right:115px;');
		that.colorLabel.writeHtml('Color: ');
		that.colorLabel.appendTo(that.formContainer.element);

		that.colorInput = new ElementSection(this);
		that.colorInput.createElementType('input');
		that.colorInput.addStyle('width:50%;');
		that.colorInput.addClass('colorInput');
		that.colorInput.name ='colorInput';
		that.colorInput.element.addEventListener('input',that.changeColor);
		that.colorInput.appendTo(that.formContainer.element);
	}
	that.classificationFields = function(){
		that.displayTypeLabel = new ElementSection();
		that.displayTypeLabel.createElementType('label');
		that.displayTypeLabel.addStyle('color:black;padding-right:18px;');
		that.displayTypeLabel.writeHtml('Display: ');
		that.displayTypeLabel.appendTo(that.formContainer.element);

		var  displayType = ['block','inline','list-item','none'];
		that.displayTypeSelect = new ElementSection(this);
		that.displayTypeSelect.createElementType('select');
		that.displayTypeSelect.addClass('displayTypeSelect');
		that.displayTypeSelect.addStyle('width:82%;');
		that.displayTypeSelect.element.addEventListener('change',that.changeDisplayType);
		for(var i = 0; i< displayType.length;i++){
			var displayOption = new ElementSection();
			displayOption.createElementType('option');
			displayOption.addAttribute('value',displayType[i]);
			displayOption.writeHtml(displayType[i]);
			displayOption.appendTo(that.displayTypeSelect.element);
		}
		that.displayTypeSelect.appendTo(that.formContainer.element);

		that.listStyleImageLabel = new ElementSection();
		that.listStyleImageLabel.createElementType('label');
		that.listStyleImageLabel.addStyle('color:black;padding-right:10px;');
		that.listStyleImageLabel.writeHtml('List Style Image: ');
		that.listStyleImageLabel.appendTo(that.formContainer.element);

		that.listStyleImageInput = new ElementSection(this);
		that.listStyleImageInput.createElementType('input');
		that.listStyleImageInput.addStyle('width:61%;');
		that.listStyleImageInput.addClass('listStyleImageInput');
		that.listStyleImageInput.name ='listStyleImageInput';
		that.listStyleImageInput.element.addEventListener('input',that.changeListStyleImage);
		that.listStyleImageInput.appendTo(that.formContainer.element);

		that.listStyleImageButton = new ElementSection(this);
		that.listStyleImageButton.createElementType('input');
		that.listStyleImageButton.addAttribute('type','button');
		that.listStyleImageButton.addClass('listStyleImageButton');
		that.listStyleImageButton.addAttribute('value','Upload');
		//that.listStyleImageButton.addAttribute('onclick','that.attributeContainer.getEleById('backgrImageFile').click()');
		//that.listStyleImageButton.element.addEventListener('click','changeListStyleImage');
		that.listStyleImageButton.appendTo(that.formContainer.element);

		that.listStyleTypeLabel = new ElementSection();
		that.listStyleTypeLabel.createElementType('label');
		that.listStyleTypeLabel.addStyle('color:black;padding-right:18px;');
		that.listStyleTypeLabel.writeHtml('List Style Type: ');
		that.listStyleTypeLabel.appendTo(that.formContainer.element);

		var  listType = ['circle','disc','decimal','lower-alpha','lower-roman','none','square','upper-alpha','upper-roman'];
		that.listStyleTypeSelect = new ElementSection(this);
		that.listStyleTypeSelect.createElementType('select');
		that.listStyleTypeSelect.addClass('listStyleTypeSelect');
		that.listStyleTypeSelect.addStyle('width:72%;');
		that.listStyleTypeSelect.element.addEventListener('change',that.changeListStyleType);
		for(var i = 0; i< listType.length;i++){
			var listTypeOption = new ElementSection();
			listTypeOption.createElementType('option');
			listTypeOption.addAttribute('value',listType[i]);
			listTypeOption.writeHtml(listType[i]);
			listTypeOption.appendTo(that.listStyleTypeSelect.element);
		}
		that.listStyleTypeSelect.appendTo(that.formContainer.element);

		that.listStylePositionLabel = new ElementSection();
		that.listStylePositionLabel.createElementType('label');
		that.listStylePositionLabel.addStyle('color:black;padding-right:5px;');
		that.listStylePositionLabel.writeHtml('List Style Position: ');
		that.listStylePositionLabel.appendTo(that.formContainer.element);

		var  listPosition = ['inside','outside'];
		that.listStylePositionSelect = new ElementSection(this);
		that.listStylePositionSelect.createElementType('select');
		that.listStylePositionSelect.addClass('listStylePositionSelect');
		that.listStylePositionSelect.addStyle('width:72%;');
		that.listStylePositionSelect.element.addEventListener('change',that.changeListStylePosition);
		for(var i = 0; i< listPosition.length;i++){
			var listPositionOption = new ElementSection();
			listPositionOption.createElementType('option');
			listPositionOption.addAttribute('value',listPosition[i]);
			listPositionOption.writeHtml(listPosition[i]);
			listPositionOption.appendTo(that.listStylePositionSelect.element);
		}
		that.listStylePositionSelect.appendTo(that.formContainer.element);
	}
	this.fontFields = function(){
		that.fontFamilyLabel = new ElementSection();
		that.fontFamilyLabel.createElementType('label');
		that.fontFamilyLabel.addStyle('color:black;padding-right:10px;');
		that.fontFamilyLabel.writeHtml('Font Family: ');
		that.fontFamilyLabel.appendTo(that.formContainer.element);

		that.fontFamilyInput = new ElementSection(this);
		that.fontFamilyInput.createElementType('input');
		that.fontFamilyInput.addStyle('width:75%;');
		that.fontFamilyInput.addClass('fontFamilyInput');
		that.fontFamilyInput.name ='fontFamilyInput';
		that.fontFamilyInput.element.addEventListener('input',that.changeFontFamily);
		that.fontFamilyInput.appendTo(that.formContainer.element);

		that.fontSizeLabel = new ElementSection();
		that.fontSizeLabel.createElementType('label');
		that.fontSizeLabel.addStyle('color:black;padding-right:10px;');
		that.fontSizeLabel.writeHtml('Font Size: ');
		that.fontSizeLabel.appendTo(that.formContainer.element);

		that.fontSizeInput = new ElementSection(this);
		that.fontSizeInput.createElementType('input');
		that.fontSizeInput.addStyle('width:40%;');
		that.fontSizeInput.addClass('fontSizeInput');
		that.fontSizeInput.name ='fontSizeInput';
		that.fontSizeInput.element.addEventListener('input',that.changeFontSize);
		that.fontSizeInput.appendTo(that.formContainer.element);

		var fontSizes = ['xx-small','x-small','small','medium','large','x-large','xx-large','larger', 'smaller'];
		that.fontSizeSelect = new ElementSection(this);
		that.fontSizeSelect.createElementType('select');
		that.fontSizeSelect.addClass('fontSizeSelect');
		that.fontSizeSelect.addStyle('width:40%;');
		that.fontSizeSelect.element.addEventListener('change',that.changeFontSize);
		for(var i = 0; i< fontSizes.length;i++){
			var fontSizeOption = new ElementSection();
			fontSizeOption.createElementType('option');
			fontSizeOption.addAttribute('value',fontSizes[i]);
			fontSizeOption.writeHtml(fontSizes[i]);
			fontSizeOption.appendTo(that.fontSizeSelect.element);
		}
		that.fontSizeSelect.appendTo(that.formContainer.element);

		that.fontStyleLabel = new ElementSection();
		that.fontStyleLabel.createElementType('label');
		that.fontStyleLabel.addStyle('color:black;padding-right:10px;');
		that.fontStyleLabel.writeHtml('Font Style: ');
		that.fontStyleLabel.appendTo(that.formContainer.element);

		var fontStyles = ['normal','italic','oblique'];
		that.fontStyleSelect = new ElementSection(this);
		that.fontStyleSelect.createElementType('select');
		that.fontStyleSelect.addClass('fontStyleSelect');
		that.fontStyleSelect.addStyle('width:78%;');
		that.fontStyleSelect.element.addEventListener('change',that.changeFontStyle);
		for(var i = 0; i< fontStyles.length;i++){
			var fontStyleOption = new ElementSection();
			fontStyleOption.createElementType('option');
			fontStyleOption.addAttribute('value',fontStyles[i]);
			fontStyleOption.writeHtml(fontStyles[i]);
			fontStyleOption.appendTo(that.fontStyleSelect.element);
		}
		that.fontStyleSelect.appendTo(that.formContainer.element);

		that.fontVariantLabel = new ElementSection();
		that.fontVariantLabel.createElementType('label');
		that.fontVariantLabel.addStyle('color:black;padding-right:10px;');
		that.fontVariantLabel.writeHtml('Font Variant: ');
		that.fontVariantLabel.appendTo(that.formContainer.element);

		var fontVariants = ['normal','small-caps'];
		that.fontVariantSelect = new ElementSection(this);
		that.fontVariantSelect.createElementType('select');
		that.fontVariantSelect.addClass('fontVariantSelect');
		that.fontVariantSelect.addStyle('width:75%;');
		that.fontVariantSelect.element.addEventListener('change',that.changeFontVariant);
		for(var i = 0; i< fontVariants.length;i++){
			var fontVariantOption = new ElementSection();
			fontVariantOption.createElementType('option');
			fontVariantOption.addAttribute('value',fontVariants[i]);
			fontVariantOption.writeHtml(fontVariants[i]);
			fontVariantOption.appendTo(that.fontVariantSelect.element);
		}
		that.fontVariantSelect.appendTo(that.formContainer.element);

		that.fontWeightLabel = new ElementSection();
		that.fontWeightLabel.createElementType('label');
		that.fontWeightLabel.addStyle('color:black;padding-right:10px;');
		that.fontWeightLabel.writeHtml('Font Weight: ');
		that.fontWeightLabel.appendTo(that.formContainer.element);

		var fontWeights = ['normal','bold','bolder','lighter','100','200','300','400','500','600','700','800','900'];
		that.fontWeightSelect = new ElementSection(this);
		that.fontWeightSelect.createElementType('select');
		that.fontWeightSelect.addClass('fontWeightSelect');
		that.fontWeightSelect.addStyle('width:75%;');
		that.fontWeightSelect.element.addEventListener('change',that.changeFontWeight);
		for(var i = 0; i< fontWeights.length;i++){
			var fontWeightOption = new ElementSection();
			fontWeightOption.createElementType('option');
			fontWeightOption.addAttribute('value',fontWeights[i]);
			fontWeightOption.writeHtml(fontWeights[i]);
			fontWeightOption.appendTo(that.fontWeightSelect.element);
		}
		that.fontWeightSelect.appendTo(that.formContainer.element);
	}
	this.textFields = function(){
		that.lineSpacingLabel = new ElementSection();
		that.lineSpacingLabel.createElementType('label');
		that.lineSpacingLabel.addStyle('color:black;padding-right:10px;');
		that.lineSpacingLabel.writeHtml('Line Spacing: ');
		that.lineSpacingLabel.appendTo(that.formContainer.element);

		that.lineSpacingInput = new ElementSection();
		that.lineSpacingInput.createElementType('input');
		that.lineSpacingInput.addClass('lineSpacingInput');
		that.lineSpacingInput.addStyle('width:75%;');
		that.lineSpacingInput.name = 'lineSpacingInput';
		that.lineSpacingInput.element.addEventListener('input',that.changeLineSpacing);
		that.lineSpacingInput.appendTo(that.formContainer.element);

		that.lineHeightLabel = new ElementSection();
		that.lineHeightLabel.createElementType('label');
		that.lineHeightLabel.addStyle('color:black;padding-right:10px;');
		that.lineHeightLabel.writeHtml('Line Height: ');
		that.lineHeightLabel.appendTo(that.formContainer.element);

		that.lineHeightInput = new ElementSection();
		that.lineHeightInput.createElementType('input');
		that.lineHeightInput.addClass('lineHeightInput');
		that.lineHeightInput.addStyle('width:77%;');
		that.lineHeightInput.name = 'lineHeightInput';
		that.lineHeightInput.element.addEventListener('input',that.changeLineHeight);
		that.lineHeightInput.appendTo(that.formContainer.element);

		that.textAlignLabel = new ElementSection();
		that.textAlignLabel.createElementType('label');
		that.textAlignLabel.addStyle('color:black;padding-right:10px;');
		that.textAlignLabel.writeHtml('Text Align: ');
		that.textAlignLabel.appendTo(that.formContainer.element);

		var textAlignment = ['left','right','center','justify'];
		that.textAlignSelect = new ElementSection();
		that.textAlignSelect.createElementType('select');
		that.textAlignSelect.addClass('textAlignSelect');
		that.textAlignSelect.addStyle('width:78%;');
		that.textAlignSelect.element.addEventListener('change',that.changeTextAlign);
		for(var i = 0; i< textAlignment.length;i++){
			var textAlignmentOption = new ElementSection();
			textAlignmentOption.createElementType('option');
			textAlignmentOption.addAttribute('value',textAlignment[i]);
			textAlignmentOption.writeHtml(textAlignment[i]);
			textAlignmentOption.appendTo(that.textAlignSelect.element);
		}
		that.textAlignSelect.appendTo(that.formContainer.element);

		that.textDecorationLabel = new ElementSection();
		that.textDecorationLabel.createElementType('label');
		that.textDecorationLabel.addStyle('color:black;padding-right:10px;');
		that.textDecorationLabel.writeHtml('Text Decoration: ');
		that.textDecorationLabel.appendTo(that.formContainer.element);

		var textDecors = ['none','overline','underline','line-through','blink'];
		that.textDecorationSelect = new ElementSection();
		that.textDecorationSelect.createElementType('select');
		that.textDecorationSelect.addClass('textAlignSelect');
		that.textDecorationSelect.addStyle('width:72%;');
		that.textDecorationSelect.element.addEventListener('change',that.changeTextDecoration);
		for(var i = 0; i< textDecors.length;i++){
			var textDecorOption = new ElementSection();
			textDecorOption.createElementType('option');
			textDecorOption.addAttribute('value',textDecors[i]);
			textDecorOption.writeHtml(textDecors[i]);
			textDecorOption.appendTo(that.textDecorationSelect.element);
		}
		that.textDecorationSelect.appendTo(that.formContainer.element);

		that.textIndentLabel = new ElementSection();
		that.textIndentLabel.createElementType('label');
		that.textIndentLabel.addStyle('color:black;padding-right:10px;');
		that.textIndentLabel.writeHtml('Text Indent: ');
		that.textIndentLabel.appendTo(that.formContainer.element);

		that.textIndentInput = new ElementSection();
		that.textIndentInput.createElementType('input');
		that.textIndentInput.addClass('textIndentInput');
		that.textIndentInput.addStyle('width:77%;');
		that.textIndentInput.name = 'textIndentInput';
		that.textIndentInput.element.addEventListener('input',that.changeTextIndent);
		that.textIndentInput.appendTo(that.formContainer.element);

		that.textTransformLabel = new ElementSection();
		that.textTransformLabel.createElementType('label');
		that.textTransformLabel.addStyle('color:black;padding-right:10px;');
		that.textTransformLabel.writeHtml('Text Transform: ');
		that.textTransformLabel.appendTo(that.formContainer.element);

		var textTransforms = ['none','capitalize','uppercase','lowercase'];
		that.textTransformSelect = new ElementSection(this);
		that.textTransformSelect.createElementType('select');
		that.textTransformSelect.addClass('textTransformSelect');
		that.textTransformSelect.addStyle('width:72%;');
		that.textTransformSelect.element.addEventListener('change',that.changeTextTransform);
		for(var i = 0; i< textTransforms.length;i++){
			var textTransformsOption = new ElementSection();
			textTransformsOption.createElementType('option');
			textTransformsOption.addAttribute('value',textTransforms[i]);
			textTransformsOption.writeHtml(textTransforms[i]);
			textTransformsOption.appendTo(that.textTransformSelect.element);
		}
		that.textTransformSelect.appendTo(that.formContainer.element);

		that.verticalAlignLabel = new ElementSection();
		that.verticalAlignLabel.createElementType('label');
		that.verticalAlignLabel.addStyle('color:black;padding-right:10px;');
		that.verticalAlignLabel.writeHtml('vertical Align: ');
		that.verticalAlignLabel.appendTo(that.formContainer.element);

		that.verticalAlignInput = new ElementSection();
		that.verticalAlignInput.createElementType('input');
		that.verticalAlignInput.addStyle('width:35%;');
		that.verticalAlignInput.addClass('verticalAlignInput');
		that.verticalAlignInput.name ='verticalAlignInput';
		that.verticalAlignInput.element.addEventListener('input',that.changeVerticalAlign);
		that.verticalAlignInput.appendTo(that.formContainer.element);

		var verticalAligns = ['baseline','sub','super','top','middle','bottom','text-top','text-bottom']; 
		that.verticalAlignSelect = new ElementSection();
		that.verticalAlignSelect.createElementType('select');
		that.verticalAlignSelect.addClass('verticalAlignSelect');
		that.verticalAlignSelect.addStyle('width:38%;');
		that.verticalAlignSelect.element.addEventListener('change',that.changeVerticalAlign);
		for(var i = 0; i< verticalAligns.length;i++){
			var verticalAlignOption = new ElementSection();
			verticalAlignOption.createElementType('option');
			verticalAlignOption.addAttribute('value',verticalAligns[i]);
			verticalAlignOption.writeHtml(verticalAligns[i]);
			verticalAlignOption.appendTo(that.verticalAlignSelect.element);
		}
		that.verticalAlignSelect.appendTo(that.formContainer.element);

		that.wordSpacingLabel = new ElementSection();
		that.wordSpacingLabel.createElementType('label');
		that.wordSpacingLabel.addStyle('color:black;padding-right:10px;');
		that.wordSpacingLabel.writeHtml('Word Spacing: ');
		that.wordSpacingLabel.appendTo(that.formContainer.element);

		that.wordSpacingInput = new ElementSection();
		that.wordSpacingInput.createElementType('input');
		that.wordSpacingInput.addClass('wordSpacingInput');
		that.wordSpacingInput.addStyle('width:72%;');
		that.wordSpacingInput.name = 'wordSpacingInput';
		that.wordSpacingInput.element.addEventListener('input',that.changeWordSpacing);
		that.wordSpacingInput.appendTo(that.formContainer.element);

		that.innerHtmlLabel = new ElementSection();
		that.innerHtmlLabel.createElementType('label');
		that.innerHtmlLabel.addStyle('color:black;padding-right:10px;');
		that.innerHtmlLabel.writeHtml('Text: ');
		that.innerHtmlLabel.appendTo(that.formContainer.element);

		that.innerHtmlInput = new ElementSection();
		that.innerHtmlInput.createElementType('input');
		that.innerHtmlInput.addClass('innerHtmlInput');
		that.innerHtmlInput.addStyle('width:72%;');
		that.innerHtmlInput.name = 'innerHtmlInput';
		that.innerHtmlInput.element.addEventListener('input',that.changeInnerHtmlInput);
		that.innerHtmlInput.appendTo(that.formContainer.element);
	}
	this.imageFields = function(){
		that.imageAlignLabel = new ElementSection();
		that.imageAlignLabel.createElementType('label');
		that.imageAlignLabel.addStyle('color:black;padding-right:10px;');
		that.imageAlignLabel.writeHtml('Align: ');
		that.imageAlignLabel.appendTo(that.formContainer.element);

		var imageAligns = ['left','right','top','bottom','middle'];
		that.imageAlignSelect = new ElementSection();
		that.imageAlignSelect.createElementType('select');
		that.imageAlignSelect.addClass('imageAlignSelect');
		that.imageAlignSelect.addStyle('width:87%;');
		that.imageAlignSelect.element.addEventListener('change',that.changeImageAlign);
		for(var i = 0; i< imageAligns.length;i++){
			var imageAlignOption = new ElementSection();
			imageAlignOption.createElementType('option');
			imageAlignOption.addAttribute('value',imageAligns[i]);
			imageAlignOption.writeHtml(imageAligns[i]);
			imageAlignOption.appendTo(that.imageAlignSelect.element);
		}
		that.imageAlignSelect.appendTo(that.formContainer.element);

		that.imageAltLabel = new ElementSection();
		that.imageAltLabel.createElementType('label');
		that.imageAltLabel.addStyle('color:black;padding-right:10px;');
		that.imageAltLabel.writeHtml('Alt: ');
		that.imageAltLabel.appendTo(that.formContainer.element);

		that.imageAltInput = new ElementSection();
		that.imageAltInput.createElementType('input');
		that.imageAltInput.addClass('imageAltInput');
		that.imageAltInput.addStyle('width:88%;');
		that.imageAltInput.name = 'imageAltInput';
		that.imageAltInput.element.addEventListener('input',that.changeImageAltText);
		that.imageAltInput.appendTo(that.formContainer.element);

		that.imageSrcLabel = new ElementSection();
		that.imageSrcLabel.createElementType('label');
		that.imageSrcLabel.addStyle('color:black;padding-right:10px;');
		that.imageSrcLabel.writeHtml('Source: ');
		that.imageSrcLabel.appendTo(that.formContainer.element);

		that.imageSrcInput = new ElementSection();
		that.imageSrcInput.createElementType('input');
		that.imageSrcInput.addClass('imageSrcInput');
		that.imageSrcInput.addStyle('width:82%;');
		that.imageSrcInput.name = 'imageSrcInput';
		that.imageSrcInput.element.addEventListener('input',that.changeImageSrc);
		that.imageSrcInput.appendTo(that.formContainer.element);

		that.imageHeightLabel = new ElementSection();
		that.imageHeightLabel.createElementType('label');
		that.imageHeightLabel.addStyle('color:black;padding-right:10px;');
		that.imageHeightLabel.writeHtml('Image Height: ');
		that.imageHeightLabel.appendTo(that.formContainer.element);

		that.imageHeightInput = new ElementSection();
		that.imageHeightInput.createElementType('input');
		that.imageHeightInput.addClass('imageHeightInput');
		that.imageHeightInput.addStyle('width:75%;');
		that.imageHeightInput.name = 'imageHeightInput';
		that.imageHeightInput.element.addEventListener('input',that.changeImageHeight);
		that.imageHeightInput.appendTo(that.formContainer.element);

		that.imageWidthLabel = new ElementSection();
		that.imageWidthLabel.createElementType('label');
		that.imageWidthLabel.addStyle('color:black;padding-right:10px;');
		that.imageWidthLabel.writeHtml('Image Width: ');
		that.imageWidthLabel.appendTo(that.formContainer.element);

		that.imageWidthInput = new ElementSection();
		that.imageWidthInput.createElementType('input');
		that.imageWidthInput.addClass('imageWidthInput');
		that.imageWidthInput.addStyle('width:75%;');
		that.imageWidthInput.name = 'imageWidthInput';
		that.imageWidthInput.element.addEventListener('input',that.changeImageWidth);
		that.imageWidthInput.appendTo(that.formContainer.element);
	}
	this.formAttributeFields = function(){
		that.formActionLabel = new ElementSection();
		that.formActionLabel.createElementType('label');
		that.formActionLabel.addStyle('color:black;padding-right:10px;');
		that.formActionLabel.writeHtml('Action: ');
		that.formActionLabel.appendTo(that.formContainer.element);

		that.formActionInput = new ElementSection();
		that.formActionInput.createElementType('input');
		that.formActionInput.addClass('formActionInput');
		that.formActionInput.addStyle('width:88%;');
		that.formActionInput.name = 'formActionInput';
		that.formActionInput.element.addEventListener('input',that.changeFormAction);
		that.formActionInput.appendTo(that.formContainer.element);

		that.encTypeLabel = new ElementSection();
		that.encTypeLabel.createElementType('label');
		that.encTypeLabel.addStyle('color:black;padding-right:10px;');
		that.encTypeLabel.writeHtml('Enctype: ');
		that.encTypeLabel.appendTo(that.formContainer.element);

		var encTypes = ['application/x-www-form-urlencoded','multipart/form-data','text/plain'];
		that.encTypeSelect = new ElementSection();
		that.encTypeSelect.createElementType('select');
		that.encTypeSelect.addClass('encTypeSelect');
		that.encTypeSelect.addStyle('width:87%;');
		that.encTypeSelect.element.addEventListener('change',that.changeEncType);
		for(var i = 0; i< encTypes.length;i++){
			var encTypeOption = new ElementSection();
			encTypeOption.createElementType('option');
			encTypeOption.addAttribute('value',encTypes[i]);
			encTypeOption.writeHtml(encTypes[i]);
			encTypeOption.appendTo(that.encTypeSelect.element);
		}
		that.encTypeSelect.appendTo(that.formContainer.element);

		that.formMethodLabel = new ElementSection();
		that.formMethodLabel.createElementType('label');
		that.formMethodLabel.addStyle('color:black;padding-right:10px;');
		that.formMethodLabel.writeHtml('Method: ');
		that.formMethodLabel.appendTo(that.formContainer.element);

		var methods = ['get','post'];
		that.formMethodSelect = new ElementSection();
		that.formMethodSelect.createElementType('select');
		that.formMethodSelect.addClass('formMethodSelect');
		that.formMethodSelect.addStyle('width:87%;');
		that.formMethodSelect.element.addEventListener('change',that.changeFormMethod);
		for(var i = 0; i< methods.length;i++){
			var methodOption = new ElementSection();
			methodOption.createElementType('option');
			methodOption.addAttribute('value',methods[i]);
			methodOption.writeHtml(methods[i]);
			if(methodOption.element.innerHTML == ''){
				methodOption.removeChildren(that.formMethodSelect.element);
			}
			methodOption.appendTo(that.formMethodSelect.element);
		}
		that.formMethodSelect.appendTo(that.formContainer.element);
	}
	//Event Listeners
	this.changeClassName = function(ev){
		var inputValue = ev.target.value;
		var className = that.classInput.element.value;
		var idName = that.idInput.element.value;
		var selectedElementById = that.attributeContainer.getEleById(idName);
		var selectedElementByClassName = that.attributeContainer.getEleByClassName(className);
		if(selectedElementById != null){
			selectedElementById.className = inputValue;
		}
		else if (selectedElementByClassName != null){
			selectedElementByClassName.className = inputValue;
		}
	}
	this.changeId = function(ev){
		var inputValue = ev.target.value;
		var className = that.classInput.element.value;
		var idName = that.idInput.element.value;
		var selectedElementById = that.attributeContainer.getEleById(idName);
		var selectedElementByClassName = that.attributeContainer.getEleByClassName(className);
		if(selectedElementById != null){
			selectedElementById.id = inputValue;
		}
		else if (selectedElementByClassName != null){
			selectedElementByClassName.id = inputValue;
		}
	}
	this.changeAllClassSelect = function(ev){
		var inputValue = ev.target.value;
		var className = that.classInput.element.value;
		var idName = that.idInput.element.value;
		var selectedElementById = that.attributeContainer.getEleById(idName);
		var selectedElementByClassName = that.attributeContainer.getEleByClassName(className);
		if(selectedElementById != null){
			that.attributeContainer.setElementStyle(selectedElementById,'outline','1px solid red');
		}
		else if (selectedElementByClassName != null){
			that.attributeContainer.setElementStyle(selectedElementByClassName,'outline','1px solid red');
		}
	}
	this.changeHeight = function(ev){
		var inputValue = ev.target.value;
		var className = that.classInput.element.value;
		var idName = that.idInput.element.value;
		var selectedElementById = that.attributeContainer.getEleById(idName);
		var selectedElementByClassName = that.attributeContainer.getEleByClassName(className);
		if(selectedElementById != null){
			that.attributeContainer.setElementStyle(selectedElementById,'height',inputValue);
		}
		else if (selectedElementByClassName != null){
			that.attributeContainer.setElementStyle(selectedElementByClassName,'height',inputValue);
		}
	}
	this.changeWidth = function(ev){
		var inputValue = ev.target.value;
		var className = that.classInput.element.value;
		var idName = that.idInput.element.value;
		var selectedElementById = that.attributeContainer.getEleById(idName);
		var selectedElementByClassName = that.attributeContainer.getEleByClassName(className);
		if(selectedElementById != null){
			that.attributeContainer.setElementStyle(selectedElementById,'width',inputValue);
		}
		else if (selectedElementByClassName != null){
			that.attributeContainer.setElementStyle(selectedElementByClassName,'width',inputValue);
		}
	}
	this.changeMargin = function(ev){
		var inputValue = ev.target.value;
		var className = that.classInput.element.value;
		var idName = that.idInput.element.value;
		var selectedElementById = that.attributeContainer.getEleById(idName);
		var selectedElementByClassName = that.attributeContainer.getEleByClassName(className);
		if(selectedElementById != null){
			that.attributeContainer.setElementStyle(selectedElementById,'margin',inputValue);
		}
		else if (selectedElementByClassName != null){
			that.attributeContainer.setElementStyle(selectedElementByClassName,'margin',inputValue);
		}
	}
	this.changePadding = function(ev){
		var inputValue = ev.target.value;
		var className = that.classInput.element.value;
		var idName = that.idInput.element.value;
		var selectedElementById = that.attributeContainer.getEleById(idName);
		var selectedElementByClassName = that.attributeContainer.getEleByClassName(className);
		if(selectedElementById != null){
			that.attributeContainer.setElementStyle(selectedElementById,'padding',inputValue);
		}
		else if (selectedElementByClassName != null){
			that.attributeContainer.setElementStyle(selectedElementByClassName,'padding',inputValue);
		}
	}
	this.changeBorder = function(ev){
		var inputValue = ev.target.value;
		var className = that.classInput.element.value;
		var idName = that.idInput.element.value;
		var selectedElementById = that.attributeContainer.getEleById(idName);
		var selectedElementByClassName = that.attributeContainer.getEleByClassName(className);
		if(selectedElementById != null){
			that.attributeContainer.setElementStyle(selectedElementById,'border',inputValue);
		}
		else if (selectedElementByClassName != null){
			that.attributeContainer.setElementStyle(selectedElementByClassName,'border',inputValue);
		}
	}
	this.changeFloatType = function(ev){
		var inputValue = ev.target.value;
		var className = that.classInput.element.value;
		var idName = that.idInput.element.value;
		var selectedElementById = that.attributeContainer.getEleById(idName);
		var selectedElementByClassName = that.attributeContainer.getEleByClassName(className);
		if(selectedElementById != null){
			that.attributeContainer.setElementStyle(selectedElementById,'float',inputValue);
		}
		else if (selectedElementByClassName != null){
			that.attributeContainer.setElementStyle(selectedElementByClassName,'float',inputValue);
		}
	}
	this.changeClearType = function(ev){
		var inputValue = ev.target.value;
		var className = that.classInput.element.value;
		var idName = that.idInput.element.value;
		var selectedElementById = that.attributeContainer.getEleById(idName);
		var selectedElementByClassName = that.attributeContainer.getEleByClassName(className);
		if(selectedElementById != null){
			that.attributeContainer.setElementStyle(selectedElementById,'clear',inputValue);
		}
		else if (selectedElementByClassName != null){
			that.attributeContainer.setElementStyle(selectedElementByClassName,'clear',inputValue);
		}
	}
	this.removeElement = function(ev){
		ev.preventDefault();
		var inputValue = ev.target.value;
		var className = that.classInput.element.value;
		var idName = that.idInput.element.value;
		var selectedElementById = that.attributeContainer.getEleById(idName);
		var selectedElementByClassName = that.attributeContainer.getEleByClassName(className);
		if(selectedElementById != null){
			var parent = selectedElementById.parentElement;
			that.attributeContainer.removeElementChild(selectedElementById,parent);
		}
		else if(selectedElementByClassName != null && selectedElementByClassName.className!='visualContainer'){
			console.log(selectedElementByClassName);
			var parent = selectedElementByClassName.parentElement;
			that.attributeContainer.removeElementChild(selectedElementByClassName,parent);
		}
	}
	this.changeBgAttachSelect = function(ev){
		var inputValue = ev.target.value;
		var className = that.classInput.element.value;
		var idName = that.idInput.element.value;
		var selectedElementById = that.attributeContainer.getEleById(idName);
		var selectedElementByClassName = that.attributeContainer.getEleByClassName(className);
		if(selectedElementById != null){
			that.attributeContainer.setElementStyle(selectedElementById,'backgroundAttachment',inputValue);
		}
		else if (selectedElementByClassName != null){
			that.attributeContainer.setElementStyle(selectedElementByClassName,'backgroundAttachment',inputValue);
		}
	}
	this.changeBackgroundImage = function(ev){
		var inputValue = ev.target.value;
		var className = that.classInput.element.value;
		var idName = that.idInput.element.value;
		var selectedElementById = that.attributeContainer.getEleById(idName);
		var selectedElementByClassName = that.attributeContainer.getEleByClassName(className);
		if(selectedElementById != null){
			that.attributeContainer.setElementStyle(selectedElementById,'backgroundImage','url('+inputValue+')');
		}
		else if (selectedElementByClassName != null){
			that.attributeContainer.setElementStyle(selectedElementByClassName,backgroundImage,'url('+inputValue+')');
		}
		//document.getElementById('backgrImageFile').click();
	}
	this.changeBackgroundPosition = function(ev){
		var inputValue = ev.target.value;
		var className = that.classInput.element.value;
		var idName = that.idInput.element.value;
		var selectedElementById = that.attributeContainer.getEleById(idName);
		var selectedElementByClassName = that.attributeContainer.getEleByClassName(className);
		if(selectedElementById != null){
			that.attributeContainer.setElementStyle(selectedElementById,'backgroundPosition',inputValue);
		}
		else if (selectedElementByClassName != null){
			that.attributeContainer.setElementStyle(selectedElementByClassName,'backgroundPosition',inputValue);
		}
		//document.getElementById('backgrImageFile').click();
	}
	this.changeBackgroundColor = function(ev){
		var inputValue = ev.target.value;
		var className = that.classInput.element.value;
		var idName = that.idInput.element.value;
		var selectedElementById = that.attributeContainer.getEleById(idName);
		var selectedElementByClassName = that.attributeContainer.getEleByClassName(className);
		if(selectedElementById != null){
			that.attributeContainer.setElementStyle(selectedElementById,'backgroundColor',inputValue);
			that.backgrColorInput.element.value = inputValue;
			if(inputValue.length == 7)
				that.backgrColorPallet.element.value = inputValue;
		}
		else if (selectedElementByClassName != null){
			that.attributeContainer.setElementStyle(selectedElementByClassName,'backgroundColor',inputValue);
			that.backgrColorInput.element.value = inputValue;
			that.backgrColorPallet.element.value = inputValue;
		}
	}
	this.changeBackgrPositionSelect = function(ev){
		var inputValue = ev.target.value;
		var className = that.classInput.element.value;
		var idName = that.idInput.element.value;
		var selectedElementById = that.attributeContainer.getEleById(idName);
		var selectedElementByClassName = that.attributeContainer.getEleByClassName(className);
		if(selectedElementById != null){
			that.attributeContainer.setElementStyle(selectedElementById,'backgroundPosition',inputValue);
			that.backgrPositionInput.element.value = inputValue;
		}
		else if (selectedElementByClassName != null){
			that.attributeContainer.setElementStyle(selectedElementByClassName,'backgroundPosition',inputValue);
			that.backgrPositionInput.element.value = inputValue;
		}
	}
	this.changeBackgrRepeatSelect = function(ev){
		var inputValue = ev.target.value;
		var className = that.classInput.element.value;
		var idName = that.idInput.element.value;
		var selectedElementById = that.attributeContainer.getEleById(idName);
		var selectedElementByClassName = that.attributeContainer.getEleByClassName(className);
		if(selectedElementById != null){
			that.attributeContainer.setElementStyle(selectedElementById,'backgroundRepeat',inputValue);
		}
		else if (selectedElementByClassName != null){
			that.attributeContainer.setElementStyle(selectedElementByClassName,'backgroundRepeat',inputValue);
		}
	}
	this.changeColor = function(ev){
		var inputValue = ev.target.value;
		var className = that.classInput.element.value;
		var idName = that.idInput.element.value;
		var selectedElementById = that.attributeContainer.getEleById(idName);
		var selectedElementByClassName = that.attributeContainer.getEleByClassName(className);
		if(selectedElementById != null){
			that.attributeContainer.setElementStyle(selectedElementById,'color',inputValue);
		}
		else if (selectedElementByClassName != null){
			that.attributeContainer.setElementStyle(selectedElementByClassName,'color',inputValue);
		}
	}
	this.changeDisplayType = function(ev){
		var inputValue = ev.target.value;
		var className = that.classInput.element.value;
		var idName = that.idInput.element.value;
		var selectedElementById = that.attributeContainer.getEleById(idName);
		var selectedElementByClassName = that.attributeContainer.getEleByClassName(className);
		if(selectedElementById != null){
			that.attributeContainer.setElementStyle(selectedElementById,'display',inputValue);
		}
		else if (selectedElementByClassName != null){
			that.attributeContainer.setElementStyle(selectedElementByClassName,'display',inputValue);
		}
	}
	this.changeListStyleImage = function(){
		var inputValue = ev.target.value;
		var className = that.classInput.element.value;
		var idName = that.idInput.element.value;
		var selectedElementById = that.attributeContainer.getEleById(idName);
		var selectedElementByClassName = that.attributeContainer.getEleByClassName(className);
		if(selectedElementById != null){
			that.attributeContainer.setElementStyle(selectedElementById,'listStyleImage','url('+inputValue+')');
		}
		else if (selectedElementByClassName != null){
			that.attributeContainer.setElementStyle(selectedElementByClassName,'listStyleImage','url('+inputValue+')');
		}
	}
	this.changeListStyleType = function(ev){
		var inputValue = ev.target.value;
		var className = that.classInput.element.value;
		var idName = that.idInput.element.value;
		var selectedElementById = that.attributeContainer.getEleById(idName);
		var selectedElementByClassName = that.attributeContainer.getEleByClassName(className);
		if(selectedElementById != null){
			that.attributeContainer.setElementStyle(selectedElementById,'listStyleType',inputValue);
		}
		else if (selectedElementByClassName != null){
			that.attributeContainer.setElementStyle(selectedElementByClassName,'listStyleType',inputValue);
		}
	}
	this.changeListStylePosition = function(ev){
		var inputValue = ev.target.value;
		var className = that.classInput.element.value;
		var idName = that.idInput.element.value;
		var selectedElementById = that.attributeContainer.getEleById(idName);
		var selectedElementByClassName = that.attributeContainer.getEleByClassName(className);
		if(selectedElementById != null){
			that.attributeContainer.setElementStyle(selectedElementById,'listStylePosition',inputValue);
		}
		else if (selectedElementByClassName != null){
			that.attributeContainer.setElementStyle(selectedElementByClassName,'listStylePosition',inputValue);
		}
	}
	this.changeFontWeight = function(ev){
		var inputValue = ev.target.value;
		var className = that.classInput.element.value;
		var idName = that.idInput.element.value;
		var selectedElementById = that.attributeContainer.getEleById(idName);
		var selectedElementByClassName = that.attributeContainer.getEleByClassName(className);
		if(selectedElementById != null){
			that.attributeContainer.setElementStyle(selectedElementById,'fontWeight',inputValue);
		}
		else if (selectedElementByClassName != null){
			that.attributeContainer.setElementStyle(selectedElementByClassName,'fontWeight',inputValue);
		}
	}
	this.changeFontVariant = function(ev){
		var inputValue = ev.target.value;
		var className = that.classInput.element.value;
		var idName = that.idInput.element.value;
		var selectedElementById = that.attributeContainer.getEleById(idName);
		var selectedElementByClassName = that.attributeContainer.getEleByClassName(className);
		if(selectedElementById != null){
			that.attributeContainer.setElementStyle(selectedElementById,'fontVariant',inputValue);
		}
		else if (selectedElementByClassName != null){
			that.attributeContainer.setElementStyle(selectedElementByClassName,'fontVariant',inputValue);
		}
	}
	this.changeFontStyle = function(ev){
		var inputValue = ev.target.value;
		var className = that.classInput.element.value;
		var idName = that.idInput.element.value;
		var selectedElementById = that.attributeContainer.getEleById(idName);
		var selectedElementByClassName = that.attributeContainer.getEleByClassName(className);
		if(selectedElementById != null){
			that.attributeContainer.setElementStyle(selectedElementById,'fontStyle',inputValue);
		}
		else if (selectedElementByClassName != null){
			that.attributeContainer.setElementStyle(selectedElementByClassName,'fontStyle',inputValue);
		}
	}
	this.changeFontSize = function(ev){
		var inputValue = ev.target.value;
		var className = that.classInput.element.value;
		var idName = that.idInput.element.value;
		var selectedElementById = that.attributeContainer.getEleById(idName);
		var selectedElementByClassName = that.attributeContainer.getEleByClassName(className);
		if(selectedElementById != null){
			that.attributeContainer.setElementStyle(selectedElementById,'fontSize',inputValue);
			that.fontSizeSelect.element.value = inputValue;
			that.fontSizeInput.element.value = inputValue;
		}
		else if (selectedElementByClassName != null){
			that.attributeContainer.setElementStyle(selectedElementByClassName,'fontSize',inputValue);
			that.fontSizeSelect.element.value = inputValue;
			that.fontSizeInput.element.value = inputValue;
		}
	}
	this.changeFontFamily = function(ev){
		var inputValue = ev.target.value;
		var className = that.classInput.element.value;
		var idName = that.idInput.element.value;
		var selectedElementById = that.attributeContainer.getEleById(idName);
		var selectedElementByClassName = that.attributeContainer.getEleByClassName(className);
		if(selectedElementById != null){
			that.attributeContainer.setElementStyle(selectedElementById,'fontFamily',inputValue);
		}
		else if (selectedElementByClassName != null){
			that.attributeContainer.setElementStyle(selectedElementByClassName,'fontFamily',inputValue);
		}
	}
	this.changeWordSpacing = function(ev){
		var inputValue = ev.target.value;
		var className = that.classInput.element.value;
		var idName = that.idInput.element.value;
		var selectedElementById = that.attributeContainer.getEleById(idName);
		var selectedElementByClassName = that.attributeContainer.getEleByClassName(className);
		if(selectedElementById != null){
			that.attributeContainer.setElementStyle(selectedElementById,'wordSpacing',inputValue);
		}
		else if (selectedElementByClassName != null){
			that.attributeContainer.setElementStyle(selectedElementByClassName,'wordSpacing',inputValue);
		}
	}
	this.changeVerticalAlign = function(ev){
		var inputValue = ev.target.value;
		var className = that.classInput.element.value;
		var idName = that.idInput.element.value;
		var selectedElementById = that.attributeContainer.getEleById(idName);
		var selectedElementByClassName = that.attributeContainer.getEleByClassName(className);
		if(selectedElementById != null){
			that.attributeContainer.setElementStyle(selectedElementById,'verticalAlign',inputValue);
			that.verticalAlignSelect.element.value = inputValue;
			that.verticalAlignInput.element.value = inputValue;
		}
		else if (selectedElementByClassName != null){
			that.attributeContainer.setElementStyle(selectedElementByClassName,'verticalAlign',inputValue);
			that.verticalAlignSelect.element.value = inputValue;
			that.verticalAlignInput.element.value = inputValue;
		}
	}
	this.changeTextTransform = function(ev){
		var inputValue = ev.target.value;
		var className = that.classInput.element.value;
		var idName = that.idInput.element.value;
		var selectedElementById = that.attributeContainer.getEleById(idName);
		var selectedElementByClassName = that.attributeContainer.getEleByClassName(className);
		if(selectedElementById != null){
			that.attributeContainer.setElementStyle(selectedElementById,'textTransform',inputValue);
		}
		else if (selectedElementByClassName != null){
			that.attributeContainer.setElementStyle(selectedElementByClassName,'textTransform',inputValue);
		}
	}
	this.changeTextIndent = function(ev){
		var inputValue = ev.target.value;
		var className = that.classInput.element.value;
		var idName = that.idInput.element.value;
		var selectedElementById = that.attributeContainer.getEleById(idName);
		var selectedElementByClassName = that.attributeContainer.getEleByClassName(className);
		if(selectedElementById != null){
			that.attributeContainer.setElementStyle(selectedElementById,'textIndent',inputValue);
		}
		else if (selectedElementByClassName != null){
			that.attributeContainer.setElementStyle(selectedElementByClassName,'textIndent',inputValue);
		}
	}
	this.changeTextDecoration = function(ev){
		var inputValue = ev.target.value;
		var className = that.classInput.element.value;
		var idName = that.idInput.element.value;
		var selectedElementById = that.attributeContainer.getEleById(idName);
		var selectedElementByClassName = that.attributeContainer.getEleByClassName(className);
		if(selectedElementById != null){
			that.attributeContainer.setElementStyle(selectedElementById,'textDecoration',inputValue);
		}
		else if (selectedElementByClassName != null){
			that.attributeContainer.setElementStyle(selectedElementByClassName,'textDecoration',inputValue);
		}
	}
	this.changeTextAlign = function(ev){
		var inputValue = ev.target.value;
		var className = that.classInput.element.value;
		var idName = that.idInput.element.value;
		var selectedElementById = that.attributeContainer.getEleById(idName);
		var selectedElementByClassName = that.attributeContainer.getEleByClassName(className);
		if(selectedElementById != null){
			that.attributeContainer.setElementStyle(selectedElementById,'textAlign',inputValue);
		}
		else if (selectedElementByClassName != null){
			that.attributeContainer.setElementStyle(selectedElementByClassName,'textAlign',inputValue);
		}
	}
	this.changeLineHeight = function(ev){
		var inputValue = ev.target.value;
		var className = that.classInput.element.value;
		var idName = that.idInput.element.value;
		var selectedElementById = that.attributeContainer.getEleById(idName);
		var selectedElementByClassName = that.attributeContainer.getEleByClassName(className);
		if(selectedElementById != null){
			that.attributeContainer.setElementStyle(selectedElementById,'lineHeight',inputValue);
		}
		else if (selectedElementByClassName != null){
			that.attributeContainer.setElementStyle(selectedElementByClassName,'lineHeight',inputValue);
		}
	}
	this.changeLineSpacing = function(ev){
		var inputValue = ev.target.value;
		var className = that.classInput.element.value;
		var idName = that.idInput.element.value;
		var selectedElementById = that.attributeContainer.getEleById(idName);
		var selectedElementByClassName = that.attributeContainer.getEleByClassName(className);
		if(selectedElementById != null){
			that.attributeContainer.setElementStyle(selectedElementById,'letterSpacing',inputValue);
		}
		else if (selectedElementByClassName != null){
			that.attributeContainer.setElementStyle(selectedElementByClassName,'letterSpacing',inputValue);
		}
	}
	this.changeInnerHtmlInput = function(ev){
		var inputValue = ev.target.value;
		var className = that.classInput.element.value;
		var idName = that.idInput.element.value;
		var selectedElementById = that.attributeContainer.getEleById(idName);
		var selectedElementByClassName = that.attributeContainer.getEleByClassName(className);
		if(selectedElementById != null){
			that.attributContainer.setElementInnerHtml(selectedElementById,inputValue);
		}
		else if (selectedElementByClassName != null){
			that.attributContainer.setElementInnerHtml(selectedElementByClassName,inputValue);
		}
	}
	this.changeImageAlign = function(ev){
		var inputValue = ev.target.value;
		var className = that.classInput.element.value;
		var idName = that.idInput.element.value;
		var selectedElementById = that.attributeContainer.getEleById(idName);
		var selectedElementByClassName = that.attributeContainer.getEleByClassName(className);
		if(selectedElementById != null){
			that.attributeContainer.setElementAttribute(selectedElementById,'align',inputValue);
		}
		else if (selectedElementByClassName != null){
			that.attributeContainer.setElementAttribute(selectedElementByClassName,'align',inputValue);
		}
	}
	this.changeImageAltText = function(ev){
		var inputValue = ev.target.value;
		var className = that.classInput.element.value;
		var idName = that.idInput.element.value;
		var selectedElementById = that.attributeContainer.getEleById(idName);
		var selectedElementByClassName = that.attributeContainer.getEleByClassName(className);
		if(selectedElementById != null){
			that.attributeContainer.setElementAttribute(selectedElementById,'alt',inputValue);
		}
		else if (selectedElementByClassName != null){
			that.attributeContainer.setElementAttribute(selectedElementByClassName,'alt',inputValue);
		}
	}
	this.changeImageSrc = function(ev){
		var inputValue = ev.target.value;
		var className = that.classInput.element.value;
		var idName = that.idInput.element.value;
		var selectedElementById = that.attributeContainer.getEleById(idName);
		var selectedElementByClassName = that.attributeContainer.getEleByClassName(className);
		if(selectedElementById != null){
			that.attributeContainer.setElementAttribute(selectedElementById,'src',inputValue);
		}
		else if (selectedElementByClassName != null){
			that.attributeContainer.setElementAttribute(selectedElementByClassName,'src',inputValue);
		}
	}
	this.changeImageHeight = function(ev){
		var inputValue = ev.target.value;
		var className = that.classInput.element.value;
		var idName = that.idInput.element.value;
		var selectedElementById = that.attributeContainer.getEleById(idName);
		var selectedElementByClassName = that.attributeContainer.getEleByClassName(className);
		if(selectedElementById != null){
			that.attributeContainer.setElementAttribute(selectedElementById,'height',inputValue);
		}
		else if (selectedElementByClassName != null){
			that.attributeContainer.setElementAttribute(selectedElementByClassName,'height',inputValue);
		}
	}
	this.changeImageWidth = function(ev){
		var inputValue = ev.target.value;
		var className = that.classInput.element.value;
		var idName = that.idInput.element.value;
		var selectedElementById = that.attributeContainer.getEleById(idName);
		var selectedElementByClassName = that.attributeContainer.getEleByClassName(className);
		if(selectedElementById != null){
			that.attributeContainer.setElementAttribute(selectedElementById,'width',inputValue);
		}
		else if (selectedElementByClassName != null){
			that.attributeContainer.setElementAttribute(selectedElementByClassName,'width',inputValue);
		}
	}
	this.changeFormFields = function(ev){
		var eventElement = ev.target;
	    var elementClassName  = that.attributeContainer.getClassName(eventElement);
	    var elementIdName = that.attributeContainer.getIdName(eventElement);
	    var elementHeight = that.attributeContainer.getStyle('height',eventElement);
	    var elementWidth = that.attributeContainer.getStyle('width',eventElement);
	    var elementFloatType = that.attributeContainer.getStyle('float',eventElement);
	    var elementClearType = that.attributeContainer.getStyle('clear',eventElement);
	    var elementBackgroundColor = that.attributeContainer.getStyle('background-color',eventElement);
	    var elementBackgroundAttachment = that.attributeContainer.getStyle('background-attachment',eventElement);
	    var elementBackgroundImage = that.attributeContainer.getStyle('background-image',eventElement);
	    var elementBackgroundPosition = that.attributeContainer.getStyle('background-position',eventElement);
	    var elementBackgroundRepeat = that.attributeContainer.getStyle('background-repeat',eventElement);
	    var elementColor = that.attributeContainer.getStyle('color',eventElement);
	    var elementDisplayType = that.attributeContainer.getStyle('display',eventElement);
	    var elementListStyleImage = that.attributeContainer.getStyle('list-style-image',eventElement);
	    var elementListStyleType = that.attributeContainer.getStyle('list-style-type',eventElement);
	    var elementListStylePosition = that.attributeContainer.getStyle('list-style-position',eventElement);
	    var elementFontFamily = that.attributeContainer.getStyle('font-family',eventElement);
	    var elementFontSize = that.attributeContainer.getStyle('font-size',eventElement);
	    var elementFontStyle = that.attributeContainer.getStyle('font-style',eventElement);
	    var elementFontVariant = that.attributeContainer.getStyle('font-variant',eventElement);
	    var elementFontWeight = that.attributeContainer.getStyle('font-weight',eventElement);
	    var elementLetterSpace = that.attributeContainer.getStyle('letter-spacing',eventElement);
	    var elementLineHeight = that.attributeContainer.getStyle('line-height',eventElement);
	    var elementTextAlign = that.attributeContainer.getStyle('text-align',eventElement);
	    var elementTextDecoration = that.attributeContainer.getStyle('text-decoration',eventElement);
	    var elementTextIndent = that.attributeContainer.getStyle('text-indent',eventElement);
	    var elementTextTransform = that.attributeContainer.getStyle('text-transform',eventElement);
	    var elementVerticalAlign = that.attributeContainer.getStyle('vertical-align',eventElement);
	    var elementWordSpacing = that.attributeContainer.getStyle('word-spacing',eventElement);
	    var elementImageAlign = that.attributeContainer.getElementAttribute(eventElement,'align');
	    var elementImageAlt = that.attributeContainer.getElementAttribute(eventElement,'alt');
	    var elementImageSrc = that.attributeContainer.getElementAttribute(eventElement,'src');
	    var elementImageHeight = that.attributeContainer.getElementAttribute(eventElement,'height');
	    var elementImageWidth = that.attributeContainer.getElementAttribute(eventElement,'width');
	   	var elementinnerHtml = that.attributeContainer.getInnerHtml(eventElement);
	   	var elementMargin = that.attributeContainer.getStyle('margin',eventElement);
	   	var elementPadding = that.attributeContainer.getStyle('padding',eventElement);
	   	var elementBorder = that.attributeContainer.getStyle('border',eventElement);

	    elementBackgroundColor = that.convertRgbToHex(elementBackgroundColor);
	    elementColor = that.convertRgbToHex(elementColor);
	    elementBackgroundImage = that.filterText(elementBackgroundImage);
	    elementListStyleImage = that.filterText(elementListStyleImage);

	    that.classInput.element.value = elementClassName;
	    that.idInput.element.value = elementIdName;
	    that.widthInput.element.value = elementWidth;
	    that.heightInput.element.value = elementHeight;
	    that.marginInput.element.value = elementMargin;
	    that.paddingInput.element.value = elementPadding;
	    that.borderInput.element.value = elementBorder;
	    that.floatSelect.element.value = elementFloatType;
	    that.clearSelect.element.value = elementClearType;
	    //that.backgrColorPallet.element.value = elementBackgroundColor;
	    that.backgrColorInput.element.value = elementBackgroundColor;
	    that.backgrAttachSelect.element.value = elementBackgroundAttachment;
	    that.backgrImageInput.element.value = elementBackgroundImage;
	    that.backgrPositionInput.element.value = elementBackgroundPosition;
	    that.backgrRepeatSelect.element.value = elementBackgroundRepeat;
	    that.colorInput.element.value = elementColor;
	    that.displayTypeSelect.element.value = elementDisplayType;
	    that.listStyleImageInput.element.value = elementListStyleImage;
	    that.listStyleTypeSelect.element.value = elementListStyleType;
	    that.listStylePositionSelect.element.value = elementListStylePosition;
	    that.fontFamilyInput.element.value = elementFontFamily;
	    that.fontSizeInput.element.value = elementFontSize;
	    that.fontSizeSelect.element.value = elementFontSize;
	    that.fontStyleSelect.element.value = elementFontStyle;
	    that.fontVariantSelect.element.value = elementFontVariant;
	    that.fontWeightSelect.element.value = elementFontWeight;
	    that.lineSpacingInput.element.value = elementLetterSpace;
	    that.lineHeightInput.element.value = elementLineHeight;
	    that.textAlignSelect.element.value = elementTextAlign;
	    that.textDecorationSelect.element.value = elementTextDecoration;
	    that.textIndentInput.element.value = elementTextIndent;
	    that.textTransformSelect.element.value = elementTextTransform;
	    that.verticalAlignInput.element.value = elementVerticalAlign;
	    that.verticalAlignSelect.element.value = elementVerticalAlign;
	    that.wordSpacingInput.element.value = elementWordSpacing;
		that.innerHtmlInput.element.value = elementinnerHtml;
		if(eventElement.className != 'imgClass'){
			that.toggleableDiv.element.style.display = 'none';
			that.formContainer.element.style.display = 'none';
		}else{
			that.toggleableDiv.element.style.display = 'block';
			that.formContainer.element.style.display = 'block';
			
			that.imageAlignSelect.element.value = elementImageAlign;
			that.imageAltInput.element.value = elementImageAlt;
			that.imageSrcInput.element.value = elementImageSrc;
			that.imageHeightInput.element.value = elementImageHeight;
			that.imageWidthInput.element.value = elementImageWidth;
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
	this.getAttributePortion = function(){
		return this.attributeContainer.element;
	}
}
