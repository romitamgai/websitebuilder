function AttributeContainer() {
	this.attributeContainer;
	this.formelement;
	this.titleDivision;
	this.formDivision;
	this.box;
	this.classInput;
	this.classList = [];
	this.heightInput;
	this.idLabel;
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
		that.attributeContainer.addStyle('background:#c8c3c3;width:100%;height:60%;overflow-y:scroll;');
		that.titleDiv();
		that.formDiv();
		boxModel.createBox();
		that.box = boxModel.getBox();
		that.attributeContainer.appendChildren(that.box);
	}
	this.titleDiv = function(){
		that.titleDivision = new ElementSection();
		that.titleDivision.createElementType('div');
		that.titleDivision.addClass('attributeTitle');
		that.titleDivision.addStyle('background:black;width:100%;height:30px;color:white;line-height:30px;font-size:16px;');
		that.titleDivision.element.innerHTML = 'Element Attribute';
		that.titleDivision.appendTo(that.attributeContainer.element);
	}
	this.formDiv = function(){
		that.formDivision = new ElementSection();
		that.formDivision.createElementType('form');
		that.formDivision.addClass('attributeForm');
		
		that.clickableWrapper("General Properties");
		that.formFieldContainer();
		that.generalFields();
		
		that.clickableWrapper("Background and Color Properties");
		that.formFieldContainer();
		that.backgroundFields();

		that.clickableWrapper("Classification Properties");
		that.formFieldContainer();
		that.classificationFields();

		that.clickableWrapper("Font Properties");
		that.formFieldContainer();
		that.FontFields();

		that.clickableWrapper("Text Properties");
		that.formFieldContainer();
		that.textFields();

		that.clickableWrapper("Image Properties");
		that.formFieldContainer();
		that.imageFields();

		that.clickableWrapper("Form Properties");
		that.formFieldContainer();
		that.formAttributeFields();
		
		that.formDivision.appendTo(that.attributeContainer.element);
	}
	this.clickableWrapper = function(headerName){
		that.clickWrapper = new ElementSection();
		that.clickWrapper.createElementType('div');
		that.clickWrapper.addClass('clickWrapper');
		that.clickWrapper.addStyle('height:30px;width:100%;background-color:#b7b5b5;margin-bottom:2px;');
		that.clickWrapper.createEvent("click","toggleContents");
		that.clickableHeadingGeneral(headerName);
		that.clickWrapper.appendTo(that.formDivision.element);
	}
	this.clickableHeadingGeneral = function(headerName){
		that.generalClickable = new ElementSection();
		that.generalClickable.createElementType('h2');
		that.generalClickable.addClass('clickableHeading');
		that.generalClickable.addStyle('font-size:24px;font-weight:bold;color:black;cursor:pointer;line-height:30px;');
		that.generalClickable.writeHtml(headerName);
		that.generalClickable.appendTo(that.clickWrapper.element);
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
		that.classLabel.writeHtml("Class Name: ");
		that.classLabel.appendTo(that.formContainer.element);

		that.classInput = new ElementSection(this);
		that.classInput.createElementType('input');
		that.classInput.addClass('classInput');
		that.classInput.addStyle('width:75%;')
		that.classInput.name = 'classInput';
		that.classInput.createEvent("input","changeClassName");
		that.classInput.appendTo(that.formContainer.element);

		that.selectClassLabel = new ElementSection();
		that.selectClassLabel.createElementType('label');
		that.selectClassLabel.addStyle('color:black;padding-right:10px;');
		that.selectClassLabel.writeHtml("Select Class: ");
		that.selectClassLabel.appendTo(that.formContainer.element);

		that.classList = ['headerContainer clearfix','bodyContainer clearfix','footerContainer clearfix'];
		that.allClassesSelect = new ElementSection(this);
		that.allClassesSelect.createElementType('select');
		that.allClassesSelect.addClass("floatSelect");
		that.allClassesSelect.addStyle('width:75%;');
		that.allClassesSelect.createEvent("change","changeAllClassSelect");
		for(var i = 0; i< that.classList.length;i++){
			var option = new ElementSection();
			option.createElementType('option');
			option.addAttribute('value',that.classList[i]);
			option.writeHtml(that.classList[i]);
			option.appendTo(that.allClassesSelect.element);
		}
		that.allClassesSelect.appendTo(that.formContainer.element);

		that.idLabel = new ElementSection();
		that.idLabel.createElementType('label');
		that.idLabel.addStyle('color:black;padding-right:35px;');
		that.idLabel.writeHtml("IdName: ");
		that.idLabel.appendTo(that.formContainer.element);

		that.idInput = new ElementSection(this);
		that.idInput.createElementType('input');
		that.idInput.addClass("idInput");
		that.idInput.addStyle('width:75%;')
		that.idInput.name = "idInput";
		that.idInput.createEvent("input","changeId");
		that.idInput.appendTo(that.formContainer.element);

		that.heightLabel = new ElementSection();
		that.heightLabel.createElementType('label');
		that.heightLabel.addStyle('color:black;padding-right:45px;');
		that.heightLabel.writeHtml("Height: ");
		that.heightLabel.appendTo(that.formContainer.element);

		that.heightInput = new ElementSection(this);
		that.heightInput.createElementType('input');
		that.heightInput.addClass("heightInput");
		that.heightInput.addStyle('width:75%;');
		that.heightInput.name = "heightInput";
		that.heightInput.createEvent("input","changeHeight");
		that.heightInput.appendTo(that.formContainer.element);

		that.widthLabel = new ElementSection();
		that.widthLabel.createElementType('label');
		that.widthLabel.addStyle('color:black;padding-right:50px;');
		that.widthLabel.writeHtml("Width: ");
		that.widthLabel.appendTo(that.formContainer.element);

		that.widthInput = new ElementSection(this);
		that.widthInput.createElementType('input');
		that.widthInput.addClass("widthInput");
		that.widthInput.addStyle('width:75%;');
		that.widthInput.name = "widthInput";
		that.widthInput.createEvent("input","changeWidth");
		that.widthInput.appendTo(that.formContainer.element);

		that.marginLabel = new ElementSection();
		that.marginLabel.createElementType('label');
		that.marginLabel.addStyle('color:black;padding-right:50px;');
		that.marginLabel.writeHtml("Margin: ");
		that.marginLabel.appendTo(that.formContainer.element);

		that.marginInput = new ElementSection(this);
		that.marginInput.createElementType('input');
		that.marginInput.addClass("marginInput");
		that.marginInput.addStyle('width:75%;');
		that.marginInput.name = "marginInput";
		that.marginInput.createEvent("input","changeMargin");
		that.marginInput.appendTo(that.formContainer.element);

		that.paddingLabel = new ElementSection();
		that.paddingLabel.createElementType('label');
		that.paddingLabel.addStyle('color:black;padding-right:50px;');
		that.paddingLabel.writeHtml("Padding: ");
		that.paddingLabel.appendTo(that.formContainer.element);

		that.paddingInput = new ElementSection(this);
		that.paddingInput.createElementType('input');
		that.paddingInput.addClass("paddingInput");
		that.paddingInput.addStyle('width:75%;');
		that.paddingInput.name = "paddingInput";
		that.paddingInput.createEvent("input","changePadding");
		that.paddingInput.appendTo(that.formContainer.element);

		that.borderLabel = new ElementSection();
		that.borderLabel.createElementType('label');
		that.borderLabel.addStyle('color:black;padding-right:50px;');
		that.borderLabel.writeHtml("Border: ");
		that.borderLabel.appendTo(that.formContainer.element);

		that.borderInput = new ElementSection(this);
		that.borderInput.createElementType('input');
		that.borderInput.addClass("borderInput");
		that.borderInput.addStyle('width:75%;');
		that.borderInput.name = "borderInput";
		that.borderInput.createEvent("input","changeBorder");
		that.borderInput.appendTo(that.formContainer.element);

		that.floatLabel = new ElementSection();
		that.floatLabel.createElementType('label');
		that.floatLabel.addStyle('color:black;padding-right:55px;');
		that.floatLabel.writeHtml("Float: ");
		that.floatLabel.appendTo(that.formContainer.element);

		var floatArray = ['none','left','right'];
		that.floatSelect = new ElementSection(this);
		that.floatSelect.createElementType('select');
		that.floatSelect.addClass("floatSelect");
		that.floatSelect.addStyle('width:75%;');
		that.floatSelect.createEvent("change","changeFloatType");
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
		that.clearLabel.writeHtml("Clear: ");
		that.clearLabel.appendTo(that.formContainer.element);

		var clearArray = ['none','left','right','both'];
		that.clearSelect = new ElementSection(this);
		that.clearSelect.createElementType('select');
		that.clearSelect.addClass("clearSelect");
		that.clearSelect.addStyle('width:55%;');
		that.clearSelect.createEvent("change","changeClearType");
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
		that.removeDivisionButton.addClass("removeDivisionButton");
		that.removeDivisionButton.writeHtml("Remove Element");
		that.removeDivisionButton.createEvent("click","removeElement");
		that.removeDivisionButton.appendTo(that.formContainer.element);
	}
	this.backgroundFields = function(){
		that.backgrColorLabel = new ElementSection();
		that.backgrColorLabel.createElementType('label');
		that.backgrColorLabel.addStyle('color:black;padding-right:10px;');
		that.backgrColorLabel.writeHtml("Background Color: ");
		that.backgrColorLabel.appendTo(that.formContainer.element);

		that.backgrColorInput = new ElementSection(this);
		that.backgrColorInput.createElementType('input');
		that.backgrColorInput.addClass("backgrColorInput");
		that.backgrColorInput.addStyle('width:50%;');
		that.backgrColorInput.name = "backgrColorInput";
		that.backgrColorInput.createEvent("input","changeBackgroundColor");
		that.backgrColorInput.appendTo(that.formContainer.element);

		that.backgrColorPallet = new ElementSection(this);
		that.backgrColorPallet.createElementType('input');
		that.backgrColorPallet.addClass("backgrColorPallet");
		that.backgrColorPallet.addAttribute('type','color');
		that.backgrColorPallet.addStyle('width:10%;');
		that.backgrColorPallet.createEvent("input","changeBackgroundColor");
		that.backgrColorPallet.appendTo(that.formContainer.element);

		that.backgrAttachLabel = new ElementSection();
		that.backgrAttachLabel.createElementType('label');
		that.backgrAttachLabel.addStyle('color:black;padding-right:10px;');
		that.backgrAttachLabel.writeHtml("Background Attachment: ");
		that.backgrAttachLabel.appendTo(that.formContainer.element);

		var containArray = ['fixed','scroll'];
		that.backgrAttachSelect = new ElementSection(this);
		that.backgrAttachSelect.createElementType('select');
		that.backgrAttachSelect.addClass("backgrAttachSelect");
		that.backgrAttachSelect.addStyle('width:55%;');
		that.backgrAttachSelect.createEvent("change","changeBgAttachSelect");
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
		that.backgrImageLabel.writeHtml("Background Image: ");
		that.backgrImageLabel.appendTo(that.formContainer.element);

		that.backgrImageInput = new ElementSection();
		that.backgrImageInput.createElementType('input');
		that.backgrImageInput.addStyle('width:48%;');
		that.backgrImageInput.addClass('backgrImageInput');
		that.backgrImageInput.name ="backgrImageInput";
		that.backgrImageInput.createEvent("input","changeBackgroundImage");
		that.backgrImageInput.appendTo(that.formContainer.element);

		that.backgrImageFile = new ElementSection(this);
		that.backgrImageFile.createElementType('input');
		that.backgrImageFile.addAttribute('type','file');
		that.backgrImageFile.addId("backgrImageFile");
		that.backgrImageFile.createEvent("click","changeBackgroundImage");
		that.backgrImageFile.appendTo(that.formContainer.element);

		that.backgrPositionLabel = new ElementSection();
		that.backgrPositionLabel.createElementType('label');
		that.backgrPositionLabel.addStyle('color:black;padding-right:10px;');
		that.backgrPositionLabel.writeHtml("Background Position: ");
		that.backgrPositionLabel.appendTo(that.formContainer.element);

		that.backgrPositionInput = new ElementSection(this);
		that.backgrPositionInput.createElementType('input');
		that.backgrPositionInput.addStyle('width:30%;');
		that.backgrPositionInput.addClass('backgrPositionInput');
		that.backgrPositionInput.name ="backgrPositionInput";
		that.backgrPositionInput.createEvent("input","changeBackgroundPosition");
		that.backgrPositionInput.appendTo(that.formContainer.element);

		var backgrPosition = ['top left','top center','top right','center left','center center','center right','bottom left','bottom center', 'bottom right','initial','inherit'];
		that.backgrPositionSelect = new ElementSection(this);
		that.backgrPositionSelect.createElementType('select');
		that.backgrPositionSelect.addClass("backgrPositionSelect");
		that.backgrPositionSelect.addStyle('width:25%;');
		that.backgrPositionSelect.createEvent("change","changeBackgrPositionSelect");
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
		that.backgrRepeatLabel.writeHtml("Background Repeat: ");
		that.backgrRepeatLabel.appendTo(that.formContainer.element);

		var  backgrRepeat = ['repeat','repeat-x','repeat-y','no-repeat','initial','inherit'];
		that.backgrRepeatSelect = new ElementSection(this);
		that.backgrRepeatSelect.createElementType('select');
		that.backgrRepeatSelect.addClass("backgrRepeatSelect");
		that.backgrRepeatSelect.addStyle('width:62%;');
		that.backgrRepeatSelect.createEvent("change","changeBackgrRepeatSelect");
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
		that.colorLabel.writeHtml("Color: ");
		that.colorLabel.appendTo(that.formContainer.element);

		that.colorInput = new ElementSection(this);
		that.colorInput.createElementType('input');
		that.colorInput.addStyle('width:50%;');
		that.colorInput.addClass('colorInput');
		that.colorInput.name ="colorInput";
		that.colorInput.createEvent("input","changeColor");
		that.colorInput.appendTo(that.formContainer.element);
	}
	that.classificationFields = function(){
		that.displayTypeLabel = new ElementSection();
		that.displayTypeLabel.createElementType('label');
		that.displayTypeLabel.addStyle('color:black;padding-right:18px;');
		that.displayTypeLabel.writeHtml("Display: ");
		that.displayTypeLabel.appendTo(that.formContainer.element);

		var  displayType = ['block','inline','list-item','none'];
		that.displayTypeSelect = new ElementSection(this);
		that.displayTypeSelect.createElementType('select');
		that.displayTypeSelect.addClass("displayTypeSelect");
		that.displayTypeSelect.addStyle('width:82%;');
		that.displayTypeSelect.createEvent("change","changeDisplayType");
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
		that.listStyleImageLabel.writeHtml("List Style Image: ");
		that.listStyleImageLabel.appendTo(that.formContainer.element);

		that.listStyleImageInput = new ElementSection(this);
		that.listStyleImageInput.createElementType('input');
		that.listStyleImageInput.addStyle('width:61%;');
		that.listStyleImageInput.addClass('listStyleImageInput');
		that.listStyleImageInput.name ="listStyleImageInput";
		that.listStyleImageInput.createEvent("input","changeListStyleImage");
		that.listStyleImageInput.appendTo(that.formContainer.element);

		that.listStyleImageButton = new ElementSection(this);
		that.listStyleImageButton.createElementType('input');
		that.listStyleImageButton.addAttribute('type','button');
		that.listStyleImageButton.addClass("listStyleImageButton");
		that.listStyleImageButton.addAttribute('value','Upload');
		//that.listStyleImageButton.addAttribute("onclick","document.getElementById('backgrImageFile').click()");
		//that.listStyleImageButton.createEvent("click","changeListStyleImage");
		that.listStyleImageButton.appendTo(that.formContainer.element);

		that.listStyleTypeLabel = new ElementSection();
		that.listStyleTypeLabel.createElementType('label');
		that.listStyleTypeLabel.addStyle('color:black;padding-right:18px;');
		that.listStyleTypeLabel.writeHtml("List Style Type: ");
		that.listStyleTypeLabel.appendTo(that.formContainer.element);

		var  listType = ['circle','disc','decimal','lower-alpha','lower-roman','none','square','upper-alpha','upper-roman'];
		that.listStyleTypeSelect = new ElementSection(this);
		that.listStyleTypeSelect.createElementType('select');
		that.listStyleTypeSelect.addClass("listStyleTypeSelect");
		that.listStyleTypeSelect.addStyle('width:72%;');
		that.listStyleTypeSelect.createEvent("change","changeListStyleType");
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
		that.listStylePositionLabel.writeHtml("List Style Position: ");
		that.listStylePositionLabel.appendTo(that.formContainer.element);

		var  listPosition = ['inside','outside'];
		that.listStylePositionSelect = new ElementSection(this);
		that.listStylePositionSelect.createElementType('select');
		that.listStylePositionSelect.addClass("listStylePositionSelect");
		that.listStylePositionSelect.addStyle('width:72%;');
		that.listStylePositionSelect.createEvent("change","changeListStylePosition");
		for(var i = 0; i< listPosition.length;i++){
			var listPositionOption = new ElementSection();
			listPositionOption.createElementType('option');
			listPositionOption.addAttribute('value',listPosition[i]);
			listPositionOption.writeHtml(listPosition[i]);
			listPositionOption.appendTo(that.listStylePositionSelect.element);
		}
		that.listStylePositionSelect.appendTo(that.formContainer.element);
	}
	this.FontFields = function(){
		that.fontFamilyLabel = new ElementSection();
		that.fontFamilyLabel.createElementType('label');
		that.fontFamilyLabel.addStyle('color:black;padding-right:10px;');
		that.fontFamilyLabel.writeHtml("Font Family: ");
		that.fontFamilyLabel.appendTo(that.formContainer.element);

		that.fontFamilyInput = new ElementSection(this);
		that.fontFamilyInput.createElementType('input');
		that.fontFamilyInput.addStyle('width:75%;');
		that.fontFamilyInput.addClass('fontFamilyInput');
		that.fontFamilyInput.name ="fontFamilyInput";
		that.fontFamilyInput.createEvent("input","changeFontFamily");
		that.fontFamilyInput.appendTo(that.formContainer.element);

		that.fontSizeLabel = new ElementSection();
		that.fontSizeLabel.createElementType('label');
		that.fontSizeLabel.addStyle('color:black;padding-right:10px;');
		that.fontSizeLabel.writeHtml("Font Size: ");
		that.fontSizeLabel.appendTo(that.formContainer.element);

		that.fontSizeInput = new ElementSection(this);
		that.fontSizeInput.createElementType('input');
		that.fontSizeInput.addStyle('width:40%;');
		that.fontSizeInput.addClass('fontSizeInput');
		that.fontSizeInput.name ="fontSizeInput";
		that.fontSizeInput.createEvent("input","changeFontSize");
		that.fontSizeInput.appendTo(that.formContainer.element);

		var fontSizes = ['xx-small','x-small','small','medium','large','x-large','xx-large','larger', 'smaller'];
		that.fontSizeSelect = new ElementSection(this);
		that.fontSizeSelect.createElementType('select');
		that.fontSizeSelect.addClass("fontSizeSelect");
		that.fontSizeSelect.addStyle('width:40%;');
		that.fontSizeSelect.createEvent("change","changeFontSize");
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
		that.fontStyleLabel.writeHtml("Font Style: ");
		that.fontStyleLabel.appendTo(that.formContainer.element);

		var fontStyles = ['normal','italic','oblique'];
		that.fontStyleSelect = new ElementSection(this);
		that.fontStyleSelect.createElementType('select');
		that.fontStyleSelect.addClass("fontStyleSelect");
		that.fontStyleSelect.addStyle('width:78%;');
		that.fontStyleSelect.createEvent("change","changeFontStyle");
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
		that.fontVariantLabel.writeHtml("Font Variant: ");
		that.fontVariantLabel.appendTo(that.formContainer.element);

		var fontVariants = ['normal','small-caps'];
		that.fontVariantSelect = new ElementSection(this);
		that.fontVariantSelect.createElementType('select');
		that.fontVariantSelect.addClass("fontVariantSelect");
		that.fontVariantSelect.addStyle('width:75%;');
		that.fontVariantSelect.createEvent("change","changeFontVariant");
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
		that.fontWeightLabel.writeHtml("Font Weight: ");
		that.fontWeightLabel.appendTo(that.formContainer.element);

		var fontWeights = ['normal','bold','bolder','lighter','100','200','300','400','500','600','700','800','900'];
		that.fontWeightSelect = new ElementSection(this);
		that.fontWeightSelect.createElementType('select');
		that.fontWeightSelect.addClass("fontWeightSelect");
		that.fontWeightSelect.addStyle('width:75%;');
		that.fontWeightSelect.createEvent("change","changeFontWeight");
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
		that.lineSpacingLabel.writeHtml("Line Spacing: ");
		that.lineSpacingLabel.appendTo(that.formContainer.element);

		that.lineSpacingInput = new ElementSection();
		that.lineSpacingInput.createElementType('input');
		that.lineSpacingInput.addClass("lineSpacingInput");
		that.lineSpacingInput.addStyle('width:75%;');
		that.lineSpacingInput.name = "lineSpacingInput";
		that.lineSpacingInput.createEvent("input","changeLineSpacing");
		that.lineSpacingInput.appendTo(that.formContainer.element);

		that.lineHeightLabel = new ElementSection();
		that.lineHeightLabel.createElementType('label');
		that.lineHeightLabel.addStyle('color:black;padding-right:10px;');
		that.lineHeightLabel.writeHtml("Line Height: ");
		that.lineHeightLabel.appendTo(that.formContainer.element);

		that.lineHeightInput = new ElementSection();
		that.lineHeightInput.createElementType('input');
		that.lineHeightInput.addClass("lineHeightInput");
		that.lineHeightInput.addStyle('width:77%;');
		that.lineHeightInput.name = "lineHeightInput";
		that.lineHeightInput.createEvent("input","changeLineHeight");
		that.lineHeightInput.appendTo(that.formContainer.element);

		that.textAlignLabel = new ElementSection();
		that.textAlignLabel.createElementType('label');
		that.textAlignLabel.addStyle('color:black;padding-right:10px;');
		that.textAlignLabel.writeHtml("Text Align: ");
		that.textAlignLabel.appendTo(that.formContainer.element);

		var textAlignment = ['left','right','center','justify'];
		that.textAlignSelect = new ElementSection();
		that.textAlignSelect.createElementType('select');
		that.textAlignSelect.addClass("textAlignSelect");
		that.textAlignSelect.addStyle('width:78%;');
		that.textAlignSelect.createEvent("change","changeTextAlign");
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
		that.textDecorationLabel.writeHtml("Text Decoration: ");
		that.textDecorationLabel.appendTo(that.formContainer.element);

		var textDecors = ['none','overline','underline','line-through','blink'];
		that.textDecorationSelect = new ElementSection();
		that.textDecorationSelect.createElementType('select');
		that.textDecorationSelect.addClass("textAlignSelect");
		that.textDecorationSelect.addStyle('width:72%;');
		that.textDecorationSelect.createEvent("change","changeTextDecoration");
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
		that.textIndentLabel.writeHtml("Text Indent: ");
		that.textIndentLabel.appendTo(that.formContainer.element);

		that.textIndentInput = new ElementSection();
		that.textIndentInput.createElementType('input');
		that.textIndentInput.addClass("textIndentInput");
		that.textIndentInput.addStyle('width:77%;');
		that.textIndentInput.name = "textIndentInput";
		that.textIndentInput.createEvent("input","changeTextIndent");
		that.textIndentInput.appendTo(that.formContainer.element);

		that.textTransformLabel = new ElementSection();
		that.textTransformLabel.createElementType('label');
		that.textTransformLabel.addStyle('color:black;padding-right:10px;');
		that.textTransformLabel.writeHtml("Text Transform: ");
		that.textTransformLabel.appendTo(that.formContainer.element);

		var textTransforms = ['none','capitalize','uppercase','lowercase'];
		that.textTransformSelect = new ElementSection(this);
		that.textTransformSelect.createElementType('select');
		that.textTransformSelect.addClass("textTransformSelect");
		that.textTransformSelect.addStyle('width:72%;');
		that.textTransformSelect.createEvent("change","changeTextTransform");
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
		that.verticalAlignLabel.writeHtml("vertical Align: ");
		that.verticalAlignLabel.appendTo(that.formContainer.element);

		that.verticalAlignInput = new ElementSection();
		that.verticalAlignInput.createElementType('input');
		that.verticalAlignInput.addStyle('width:35%;');
		that.verticalAlignInput.addClass('verticalAlignInput');
		that.verticalAlignInput.name ="verticalAlignInput";
		that.verticalAlignInput.createEvent("input","changeVerticalAlign");
		that.verticalAlignInput.appendTo(that.formContainer.element);

		var verticalAligns = ['baseline','sub','super','top','middle','bottom','text-top','text-bottom']; 
		that.verticalAlignSelect = new ElementSection();
		that.verticalAlignSelect.createElementType('select');
		that.verticalAlignSelect.addClass("verticalAlignSelect");
		that.verticalAlignSelect.addStyle('width:38%;');
		that.verticalAlignSelect.createEvent("change","changeVerticalAlign");
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
		that.wordSpacingLabel.writeHtml("Word Spacing: ");
		that.wordSpacingLabel.appendTo(that.formContainer.element);

		that.wordSpacingInput = new ElementSection();
		that.wordSpacingInput.createElementType('input');
		that.wordSpacingInput.addClass("wordSpacingInput");
		that.wordSpacingInput.addStyle('width:72%;');
		that.wordSpacingInput.name = "wordSpacingInput";
		that.wordSpacingInput.createEvent("input","changeWordSpacing");
		that.wordSpacingInput.appendTo(that.formContainer.element);

		that.innerHtmlLabel = new ElementSection();
		that.innerHtmlLabel.createElementType('label');
		that.innerHtmlLabel.addStyle('color:black;padding-right:10px;');
		that.innerHtmlLabel.writeHtml("Text: ");
		that.innerHtmlLabel.appendTo(that.formContainer.element);

		that.innerHtmlInput = new ElementSection();
		that.innerHtmlInput.createElementType('input');
		that.innerHtmlInput.addClass("innerHtmlInput");
		that.innerHtmlInput.addStyle('width:72%;');
		that.innerHtmlInput.name = "innerHtmlInput";
		that.innerHtmlInput.createEvent("input","changeInnerHtmlInput");
		that.innerHtmlInput.appendTo(that.formContainer.element);
	}
	this.imageFields = function(){
		that.imageAlignLabel = new ElementSection();
		that.imageAlignLabel.createElementType('label');
		that.imageAlignLabel.addStyle('color:black;padding-right:10px;');
		that.imageAlignLabel.writeHtml("Align: ");
		that.imageAlignLabel.appendTo(that.formContainer.element);

		var imageAligns = ['left','right','top','bottom','middle'];
		that.imageAlignSelect = new ElementSection();
		that.imageAlignSelect.createElementType('select');
		that.imageAlignSelect.addClass("imageAlignSelect");
		that.imageAlignSelect.addStyle('width:87%;');
		that.imageAlignSelect.createEvent("change","changeImageAlign");
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
		that.imageAltLabel.writeHtml("Alt: ");
		that.imageAltLabel.appendTo(that.formContainer.element);

		that.imageAltInput = new ElementSection();
		that.imageAltInput.createElementType('input');
		that.imageAltInput.addClass("imageAltInput");
		that.imageAltInput.addStyle('width:88%;');
		that.imageAltInput.name = "imageAltInput";
		that.imageAltInput.createEvent("input","changeImageAltText");
		that.imageAltInput.appendTo(that.formContainer.element);

		that.imageSrcLabel = new ElementSection();
		that.imageSrcLabel.createElementType('label');
		that.imageSrcLabel.addStyle('color:black;padding-right:10px;');
		that.imageSrcLabel.writeHtml("Source: ");
		that.imageSrcLabel.appendTo(that.formContainer.element);

		that.imageSrcInput = new ElementSection();
		that.imageSrcInput.createElementType('input');
		that.imageSrcInput.addClass("imageSrcInput");
		that.imageSrcInput.addStyle('width:82%;');
		that.imageSrcInput.name = "imageSrcInput";
		that.imageSrcInput.createEvent("input","changeImageSrc");
		that.imageSrcInput.appendTo(that.formContainer.element);

		that.imageHeightLabel = new ElementSection();
		that.imageHeightLabel.createElementType('label');
		that.imageHeightLabel.addStyle('color:black;padding-right:10px;');
		that.imageHeightLabel.writeHtml("Image Height: ");
		that.imageHeightLabel.appendTo(that.formContainer.element);

		that.imageHeightInput = new ElementSection();
		that.imageHeightInput.createElementType('input');
		that.imageHeightInput.addClass("imageHeightInput");
		that.imageHeightInput.addStyle('width:75%;');
		that.imageHeightInput.name = "imageHeightInput";
		that.imageHeightInput.createEvent("input","changeImageHeight");
		that.imageHeightInput.appendTo(that.formContainer.element);

		that.imageWidthLabel = new ElementSection();
		that.imageWidthLabel.createElementType('label');
		that.imageWidthLabel.addStyle('color:black;padding-right:10px;');
		that.imageWidthLabel.writeHtml("Image Width: ");
		that.imageWidthLabel.appendTo(that.formContainer.element);

		that.imageWidthInput = new ElementSection();
		that.imageWidthInput.createElementType('input');
		that.imageWidthInput.addClass("imageWidthInput");
		that.imageWidthInput.addStyle('width:75%;');
		that.imageWidthInput.name = "imageWidthInput";
		that.imageWidthInput.createEvent("input","changeImageWidth");
		that.imageWidthInput.appendTo(that.formContainer.element);
	}
	this.formAttributeFields = function(){
		that.formActionLabel = new ElementSection();
		that.formActionLabel.createElementType('label');
		that.formActionLabel.addStyle('color:black;padding-right:10px;');
		that.formActionLabel.writeHtml("Action: ");
		that.formActionLabel.appendTo(that.formContainer.element);

		that.formActionInput = new ElementSection();
		that.formActionInput.createElementType('input');
		that.formActionInput.addClass("formActionInput");
		that.formActionInput.addStyle('width:88%;');
		that.formActionInput.name = "formActionInput";
		that.formActionInput.createEvent("input","changeFormAction");
		that.formActionInput.appendTo(that.formContainer.element);

		that.encTypeLabel = new ElementSection();
		that.encTypeLabel.createElementType('label');
		that.encTypeLabel.addStyle('color:black;padding-right:10px;');
		that.encTypeLabel.writeHtml("Enctype: ");
		that.encTypeLabel.appendTo(that.formContainer.element);

		var encTypes = ['application/x-www-form-urlencoded','multipart/form-data','text/plain'];
		that.encTypeSelect = new ElementSection();
		that.encTypeSelect.createElementType('select');
		that.encTypeSelect.addClass("encTypeSelect");
		that.encTypeSelect.addStyle('width:87%;');
		that.encTypeSelect.createEvent("change","changeEncType");
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
		that.formMethodLabel.writeHtml("Method: ");
		that.formMethodLabel.appendTo(that.formContainer.element);

		var methods = ['get','post'];
		that.formMethodSelect = new ElementSection();
		that.formMethodSelect.createElementType('select');
		that.formMethodSelect.addClass("formMethodSelect");
		that.formMethodSelect.addStyle('width:87%;');
		that.formMethodSelect.createEvent("change","changeFormMethod");
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
	this.getAttributePortion = function(){
		return this.attributeContainer.element;
	}
}
