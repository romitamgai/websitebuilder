function Modal(){
	var modal;
	var parentEle;
	var that= this;
	this.openModal = function(targetElement){
		parentEle = targetElement.parentElement;
		var parent = targetElement.parentElement.id;
		var overlay = new ElementSection();
		overlay.createElementType('div');
		overlay.addClass('overlay');
		
		modal = new ElementSection();
		modal.createElementType('div');
		modal.addClass('modal-content');
		
		var closeSpan = new ElementSection();
		closeSpan.createElementType('span');
		closeSpan.addClass('button-close');
		closeSpan.element.addEventListener('click',that.closeModal);
		closeSpan.appendTo(modal.element);

		var h3Element = new ElementSection();
		h3Element.createElementType('h3');
		h3Element.writeHtml('Style Editor');
		h3Element.setStyle('textAlign','center');
		h3Element.appendTo(modal.element)
		modal.appendTo(overlay.element);
		overlay.appendTo(document.body);
	}
	this.selectBackgroundProperties = function(){
		var pElement = new ElementSection();
		pElement.createElementType('p');
		pElement.writeHtml('Background');
		pElement.appendTo(modal.element);

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
		bgColorButton.element.addEventListener('click',that.displayBgColorSelect);
		bgColorButton.appendTo(divButtonGrp.element);

		var bgImageButton = new ElementSection();
		bgImageButton.createElementType('button');
		bgImageButton.addClass('btn btnBgImage');
		bgImageButton.writeHtml('Background Image');
		bgImageButton.element.addEventListener('click',that.displayBgImageSelect);
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
		inputRadioNone.element.addEventListener('click',that.bgSelectedNone);
		labelNone.writeHtml('Default');
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
		inputRadioColor.element.addEventListener('click',that.bgSelectedColor);
		inputRadioColor.addAttribute('type','radio');
		labelColor.writeHtml('Color');
		inputRadioColor.appendTo(labelColor.element);

		var backgrColorPallet = new ElementSection(this);
		backgrColorPallet.createElementType('input');
		backgrColorPallet.addClass('bgColorPallet');
		backgrColorPallet.addAttribute('type','color');
		backgrColorPallet.setStyle('display','none');
		backgrColorPallet.element.addEventListener('input',that.changeBgColor);
		backgrColorPallet.appendTo(labelColor.element);

		labelNone.appendTo(divChooseColor.element);
		labelColor.appendTo(divChooseColor.element);

		divChooseColor.appendTo(divColorControl.element);
		divColorControl.appendTo(divBgControl.element);

		//For selecting the background Image
		var divImageControl = new ElementSection();
		divImageControl.createElementType('div');
		divImageControl.addClass('controls imageControl');
		divImageControl.setStyle('display','none');

		var backgrImageFile = new ElementSection();
		backgrImageFile.createElementType('input');
		backgrImageFile.addClass('imageUpload');
		backgrImageFile.addAttribute('type','file');
		backgrImageFile.addId('bgImageFile');
		backgrImageFile.appendTo(divImageControl.element);

		var backgrImageUpload = new ElementSection();
		backgrImageUpload.createElementType('button');
		backgrImageUpload.addClass('btn-sm btn-primary btnUpload');
		backgrImageUpload.writeHtml('Upload');
		backgrImageUpload.addAttribute('data-for',parent);
		backgrImageUpload.element.addEventListener('click',that.uploadBgImage);
		backgrImageUpload.appendTo(divImageControl.element);

		divImageControl.appendTo(divBgControl.element);

		var applyButton = new ElementSection();
		applyButton.createElementType('button');
		applyButton.addClass('btn-md btn-success')
		applyButton.addId('btnApply');
		applyButton.writeHtml('Apply');
		applyButton.element.addEventListener('click',that.closeModal);

		divBgControl.appendTo(modal.element);
		applyButton.appendTo(modal.element);	
	}
	this.selectButtonProperties = function(ev){
		var pElement = new ElementSection();
		pElement.createElementType('p');
		pElement.addStyle('font-size:20px;font-weight:bold;')
		pElement.writeHtml('Button');
		pElement.appendTo(modal.element);

		var divBgControl = new ElementSection();
		divBgControl.createElementType('div');
		divBgControl.addClass('control-group');
		divBgControl.addStyle('margin-top:6px;font-size:20px;');

		var buttonNameLabel = new ElementSection();
		buttonNameLabel.createElementType('label');
		buttonNameLabel.writeHtml('Button Name');
		buttonNameLabel.addClass('buttonEditorLabel');
		buttonNameLabel.appendTo(divBgControl.element);

		var buttonNameInput = new ElementSection();
		buttonNameInput.createElementType('input');
		buttonNameInput.addAttribute('type','text');
		buttonNameInput.addStyle('width:40%;height:30px;')
		buttonNameInput.addClass('form-control');
		buttonNameInput.element.addEventListener('input',that.addButtonName);
		buttonNameInput.appendTo(divBgControl.element);

		var buttonSizeLabel = new ElementSection();
		buttonSizeLabel.createElementType('label');
		buttonSizeLabel.writeHtml('Button Size');
		buttonSizeLabel.addClass('buttonEditorLabelInner');
		buttonSizeLabel.appendTo(divBgControl.element);

		var buttonSizeExSmall = new ElementSection();
		buttonSizeExSmall.createElementType('button');
		buttonSizeExSmall.addStyle('clear:both;margin-right:5px;float:left;');
		buttonSizeExSmall.writeHtml('Mini');
		buttonSizeExSmall.addClass('btn btn-xs');
		buttonSizeExSmall.element.addEventListener('click',that.addButtonSize);
		buttonSizeExSmall.appendTo(divBgControl.element);

		var buttonSizeSmall = new ElementSection();
		buttonSizeSmall.createElementType('button');
		buttonSizeSmall.addStyle('margin-right:5px;float:left;');
		buttonSizeSmall.writeHtml('Small');
		buttonSizeSmall.addClass('btn btn-sm');
		buttonSizeSmall.element.addEventListener('click',that.addButtonSize);
		buttonSizeSmall.appendTo(divBgControl.element);

		var buttonSizeDefault = new ElementSection();
		buttonSizeDefault.createElementType('button');
		buttonSizeDefault.addStyle('margin-right:5px;float:left;');
		buttonSizeDefault.writeHtml('Default');
		buttonSizeDefault.addClass('btn btn-md');
		buttonSizeDefault.element.addEventListener('click',that.addButtonSize);
		buttonSizeDefault.appendTo(divBgControl.element);

		var buttonSizeLarge = new ElementSection();
		buttonSizeLarge.createElementType('button');
		buttonSizeLarge.addStyle('margin-right:5px;float:left;');
		buttonSizeLarge.writeHtml('Large');
		buttonSizeLarge.addClass('btn btn-lg');
		buttonSizeLarge.element.addEventListener('click',that.addButtonSize);
		buttonSizeLarge.appendTo(divBgControl.element);

		var buttonColorLabel = new ElementSection();
		buttonColorLabel.createElementType('label');
		buttonColorLabel.writeHtml('Button Color');
		buttonColorLabel.addClass('buttonEditorLabelInner');
		buttonColorLabel.appendTo(divBgControl.element);

		var divChooseColor = new ElementSection();
		divChooseColor.createElementType('div');
		divChooseColor.addId('chooseColorRadio');

		var buttonColorDefaultLabel = new ElementSection();
		buttonColorDefaultLabel.createElementType('label');
		buttonColorDefaultLabel.addClass('radio');
		buttonColorDefaultLabel.addStyle('float:none;')
		buttonColorDefaultLabel.addClass('buttonEditorLabelInner');
		
		var buttonColorRadioDefault = new ElementSection();
		buttonColorRadioDefault.createElementType('input');
		buttonColorRadioDefault.addAttribute('id','radioNone');
		buttonColorRadioDefault.addAttribute('name','buttonColor');
		buttonColorRadioDefault.addStyle('clear:both;margin-right:5px;float:left;');
		buttonColorRadioDefault.addAttribute('type','radio');
		buttonColorRadioDefault.element.addEventListener('click',that.addButtonColor);
		buttonColorDefaultLabel.writeHtml('Default');
		buttonColorRadioDefault.appendTo(buttonColorDefaultLabel.element);

		buttonColorDefaultLabel.appendTo(divChooseColor.element);

		var buttonColorCustom = new ElementSection();
		buttonColorCustom.createElementType('label');
		buttonColorCustom.addClass('radio');
		buttonColorCustom.addClass('buttonEditorLabel');
		
		var buttonColorRadioCustom = new ElementSection();
		buttonColorRadioCustom.createElementType('input');
		buttonColorRadioCustom.addAttribute('id','radioColor');
		buttonColorRadioCustom.addAttribute('name','buttonColor');
		buttonColorRadioCustom.addStyle('margin-right:5px;float:left;margin-left:30px;');
		buttonColorRadioCustom.element.addEventListener('click',that.changePalletToggle);
		buttonColorRadioCustom.addAttribute('type','radio');
		buttonColorCustom.writeHtml('Color');
		buttonColorRadioCustom.appendTo(buttonColorCustom.element);

		buttonColorCustom.appendTo(divChooseColor.element);
		divChooseColor.appendTo(divBgControl.element);

		that.buttonColorPallet = new ElementSection(this);
		that.buttonColorPallet.createElementType('input');
		that.buttonColorPallet.addClass('bgColorPallet');
		that.buttonColorPallet.addAttribute('type','color');
		that.buttonColorPallet.addStyle('display:none;float:left;clear:both;margin-left:120px;');
		that.buttonColorPallet.element.addEventListener('input',that.changeButtonColor);
		that.buttonColorPallet.appendTo(divBgControl.element);

		var buttonTxtColorLabel = new ElementSection();
		buttonTxtColorLabel.createElementType('label');
		buttonTxtColorLabel.writeHtml('Button Color');
		buttonTxtColorLabel.addClass('buttonEditorLabelInner');
		buttonTxtColorLabel.appendTo(divBgControl.element);

		var divTxtChooseColor = new ElementSection();
		divTxtChooseColor.createElementType('div');
		divTxtChooseColor.addId('chooseColorRadio');

		var buttonTxtColorDefaultLabel = new ElementSection();
		buttonTxtColorDefaultLabel.createElementType('label');
		buttonTxtColorDefaultLabel.addClass('radio');
		buttonTxtColorDefaultLabel.addStyle('float:none;')
		buttonTxtColorDefaultLabel.addClass('buttonEditorLabelInner');
		
		var buttonTxtColorRadioDefault = new ElementSection();
		buttonTxtColorRadioDefault.createElementType('input');
		buttonTxtColorRadioDefault.addAttribute('id','radioNone');
		buttonTxtColorRadioDefault.addAttribute('name','buttonColor');
		buttonTxtColorRadioDefault.addStyle('clear:both;margin-right:5px;float:left;');
		buttonTxtColorRadioDefault.addAttribute('type','radio');
		buttonTxtColorRadioDefault.element.addEventListener('click',that.TxtaddButtonColor);
		buttonTxtColorDefaultLabel.writeHtml('Default');
		buttonTxtColorRadioDefault.appendTo(buttonTxtColorDefaultLabel.element);

		buttonTxtColorDefaultLabel.appendTo(divTxtChooseColor.element);

		var buttonTxtColorCustom = new ElementSection();
		buttonTxtColorCustom.createElementType('label');
		buttonTxtColorCustom.addClass('radio');
		buttonTxtColorCustom.addClass('buttonEditorLabel');
		
		var buttonTxtColorRadioCustom = new ElementSection();
		buttonTxtColorRadioCustom.createElementType('input');
		buttonTxtColorRadioCustom.addAttribute('id','radioColor');
		buttonTxtColorRadioCustom.addAttribute('name','buttonColor');
		buttonTxtColorRadioCustom.addStyle('margin-right:5px;float:left;margin-left:30px;');
		buttonTxtColorRadioCustom.element.addEventListener('click',that.changeTxtPalletToggle);
		buttonTxtColorRadioCustom.addAttribute('type','radio');
		buttonTxtColorCustom.writeHtml('Color');
		buttonTxtColorRadioCustom.appendTo(buttonTxtColorCustom.element);

		buttonTxtColorCustom.appendTo(divTxtChooseColor.element);
		divTxtChooseColor.appendTo(divBgControl.element);

		that.buttonTxtColorPallet = new ElementSection(this);
		that.buttonTxtColorPallet.createElementType('input');
		that.buttonTxtColorPallet.addClass('bgColorPallet');
		that.buttonTxtColorPallet.addAttribute('type','color');
		that.buttonTxtColorPallet.addStyle('display:none;float:left;clear:both;margin-left:120px;');
		that.buttonTxtColorPallet.element.addEventListener('input',that.changeTxtButtonColor);
		that.buttonTxtColorPallet.appendTo(divBgControl.element);

		var applyButton = new ElementSection();
		applyButton.createElementType('button');
		applyButton.addClass('btn-md btn-success')
		applyButton.addId('btnApply');
		applyButton.writeHtml('Apply');
		applyButton.element.addEventListener('click',that.applyChanges);

		divBgControl.appendTo(modal.element);
		applyButton.appendTo(modal.element);
	}
	this.addButtonName = function(ev){
		that.buttonName = ev.target.value;
	}
	this.addButtonSize = function(ev){
		modal.removeElementClass(ev.target,'btn');
		that.buttonSize = ev.target.className;
	}
	this.addButtonColor = function(ev){
		that.buttonColor = 'none';
		that.buttonColorPallet.setStyle('display','none');
	}
	this.changePalletToggle = function(ev){
		that.buttonColorPallet.setStyle('display','block');
	}
	this.changeButtonColor = function(ev){
		that.buttonColor = ev.target.value;
	}
	this.addTxtButtonColor = function(ev){
		that.txtButtonColor = 'none';
		that.txtButtonColorPallet.setStyle('display','none');
	}
	this.changeTxtPalletToggle = function(ev){
		that.buttonTxtColorPallet.setStyle('display','block');
	}
	this.changeTxtButtonColor = function(ev){
		that.txtButtonColor = ev.target.value;
	}
	this.applyChanges = function(ev){
		if(that.buttonName!=null){
			modal.setElementInnerHtml(parentEle,that.buttonName);
		}
		if(that.buttonSize!=null){
			modal.addElementClass(parentEle,that.buttonSize);
		}
		if(that.buttonColor!=null){
			modal.setElementStyle(parentEle,'backgroundColor',that.buttonColor);
		}
		if(that.txtButtonColor!=null){
			modal.setElementStyle(parentEle,'color',that.txtButtonColor);
		}
		that.closeModal(ev);
	}
	this.displayBgColorSelect = function(ev){
		var colorContainer = modal.getEleByClassName('controls colorControl');
		var imageButton;
		if(modal.getEleByClassName('btn btnBgImage active')!=undefined){
			imageButton = modal.getEleByClassName('btn btnBgImage active');
		}
		else{
			imageButton = modal.getEleByClassName('btn btnBgImage');
		}
		var imageContainer = modal.getEleByClassName('controls imageControl');
		modal.removeElementClass(imageButton,'active');
		modal.setElementStyle(colorContainer,'display','block');
		modal.setElementStyle(imageContainer,'display','none');
		modal.addElementClass(ev.target,'active');
	}
	this.displayBgImageSelect = function(ev){
		var colorContainer = modal.getEleByClassName('controls colorControl');
		var bgColorButton;
		if(modal.getEleByClassName('btn btnBgColor active')!=undefined){
			bgColorButton = modal.getEleByClassName('btn btnBgColor active');
		}else{
			bgColorButton = modal.getEleByClassName('btn btnBgColor');
		}
		var imageContainer = modal.getEleByClassName('controls imageControl');
		var upload = modal.getEleByClassName('imageUpload');
		modal.removeElementClass(bgColorButton,'active');
		modal.setElementStyle(imageContainer,'display','block');
		modal.appendElementChild(imageContainer,upload);
		modal.setElementStyle(colorContainer,'display','none');
		modal.addElementClass(ev.target,'active');
	}
	this.bgSelectedNone = function(ev){
		var styleElementIdName = modal.getElementAttribute(ev.target,'data-for');
		var styleElement = modal.getEleById(styleElementIdName);
		modal.setElementStyle(styleElement,'background','none');
		if((modal.getEleByClassName('bgColorPallet')!=undefined)){
			var bgColorPallet = modal.getEleByClassName('bgColorPallet')
			modal.setElementStyle(bgColorPallet,'display','none');
			}
	}
	this.bgSelectedColor = function(ev){
		var styleElementIdName =  modal.getElementAttribute(ev.target,'data-for');
		var styleElement = modal.getEleById(styleElementIdName);
		var pallet = modal.getEleByClassName('bgColorPallet');
		pallet.setAttribute('data-for',styleElementIdName)
		modal.setElementStyle(pallet,'display','block');
		modal.appendElementChild(ev.target.parentElement,pallet);
	}
	this.changeBgColor = function(ev){
		modal.setElementStyle(parentEle,'backgroundColor',ev.target.value);
	}
	this.uploadBgImage = function(ev){
		var imageFile = modal.getEleByClassName('imageUpload');
		var cleanFileName = imageFile.value.substring(12,imageFile.length);
		var imageName = 'images/' + cleanFileName;
		var styleToId = modal.getElementAttribute(ev.target,'data-for');
		var styleToElement = modal.getEleById(styleToId);
		modal.setElementStyle(styleToElement,'backgroundImage','url('+imageName+')');
	}
	this.closeModal = function(ev){
		var parentModal = ev.target.parentElement;
		var parentOverlay = parentModal.parentElement;
		modal.removeElementChild(parentOverlay,document.body);
	}
}