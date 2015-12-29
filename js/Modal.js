function Modal(){
	var modal;
	var parent;
	var that= this;
	this.openModal = function(targetElement){
		parent = targetElement.parentElement.id;
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
		var styleElementIdName = modal.getElementAttribute(ev.target,'data-for');
		var styleElement = modal.getEleById(styleElementIdName);
		modal.setElementStyle(styleElement,'backgroundColor',ev.target.value);
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