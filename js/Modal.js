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
		pElement.addStyle('font-size:20px;font-weight:bold;')
		pElement.writeHtml('Background');
		pElement.appendTo(modal.element);

		that.divBgControl = new ElementSection();
		that.divBgControl.createElementType('div');
		that.divBgControl.addClass('control-group');
		that.divBgControl.addStyle('margin-top:6px');

		that.divButtonGrp = new ElementSection();
		that.divButtonGrp.createElementType('div');
		that.divButtonGrp.addClass('btn-group');

		var bgColorButton = new ElementSection();
		bgColorButton.createElementType('button');
		bgColorButton.addClass('btn btnBgColor active');
		bgColorButton.writeHtml('Background Color');
		bgColorButton.element.addEventListener('click',that.displayBgColorSelect);
		bgColorButton.appendTo(that.divButtonGrp.element);

		var bgImageButton = new ElementSection();
		bgImageButton.createElementType('button');
		bgImageButton.addClass('btn btnBgImage');
		bgImageButton.writeHtml('Background Image');
		bgImageButton.element.addEventListener('click',that.displayBgImageSelect);
		bgImageButton.appendTo(that.divButtonGrp.element);

		that.divButtonGrp.appendTo(that.divBgControl.element);

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
		divColorControl.appendTo(that.divBgControl.element);

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

		var backgrRepeatLabel = new ElementSection();
		backgrRepeatLabel.createElementType('label');
		backgrRepeatLabel.addStyle('clear:both;float:left;margin-right:18px;margin-top:10px;');
		backgrRepeatLabel.writeHtml('Repeat Background');
		backgrRepeatLabel.appendTo(divImageControl.element);

		var  backgrRepeat = ['Yes','Repeat Horizontally','Repeat Vertically','Don\'t Repeat'];
		backgrRepeatSelect = new ElementSection(this);
		backgrRepeatSelect.createElementType('select');
		backgrRepeatSelect.addClass('backgrRepeatSelect');
		backgrRepeatSelect.addStyle('margin-top:10px;');
		backgrRepeatSelect.element.addEventListener('change',that.changeBackgrRepeatSelect);
		for(var i = 0; i< backgrRepeat.length;i++){
			var repeatOption = new ElementSection();
			repeatOption.createElementType('option');
			repeatOption.addAttribute('value',backgrRepeat[i]);
			repeatOption.writeHtml(backgrRepeat[i]);
			repeatOption.appendTo(backgrRepeatSelect.element);
		}
		backgrRepeatSelect.appendTo(divImageControl.element);

		divImageControl.appendTo(that.divBgControl.element);

		var applyButton = new ElementSection();
		applyButton.createElementType('button');
		applyButton.addClass('btn-md btn-success')
		applyButton.addId('btnApply');
		applyButton.writeHtml('Apply');
		applyButton.element.addEventListener('click',that.applyChanges);

		that.divBgControl.appendTo(modal.element);
		applyButton.appendTo(modal.element);	
	}
	this.selectButtonProperties = function(){
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
		buttonTxtColorLabel.writeHtml('Button Text Color');
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
	this.selectMenuProperties = function(){
		var menuPropertyButton = new ElementSection();
		menuPropertyButton.createElementType('button');
		menuPropertyButton.addClass('btn btnMenuProp');
		menuPropertyButton.writeHtml('Menu');
		menuPropertyButton.element.addEventListener('click',that.displaymenuSelect);
		menuPropertyButton.appendTo(that.divButtonGrp.element);

		var divMenuControl = new ElementSection();
		divMenuControl.createElementType('div');
		divMenuControl.addClass('controls menuControl');
		divMenuControl.setStyle('display','none');

		var menuPositionLabel = new ElementSection();
		menuPositionLabel.createElementType('label');
		menuPositionLabel.writeHtml('Menu Position');
		menuPositionLabel.addClass('menuPositonLabel');
		menuPositionLabel.appendTo(divMenuControl.element);

		var positionLeftButton = new ElementSection();
		positionLeftButton.createElementType('button');
		positionLeftButton.addStyle('margin-top:10px;float:left;');
		positionLeftButton.writeHtml('Left');
		positionLeftButton.addClass('btn btn-md');
		positionLeftButton.element.addEventListener('click',that.positionMenu);
		positionLeftButton.appendTo(divMenuControl.element);

		var positionRightButton = new ElementSection();
		positionRightButton.createElementType('button');
		positionRightButton.addStyle('margin-top:10px;float:left;');
		positionRightButton.writeHtml('Right');
		positionRightButton.addClass('btn btn-md');
		positionRightButton.element.addEventListener('click',that.positionMenu);
		positionRightButton.appendTo(divMenuControl.element);

		var positionDefaultButton = new ElementSection();
		positionDefaultButton.createElementType('button');
		positionDefaultButton.addStyle('margin-top:10px;float:left;');
		positionDefaultButton.writeHtml('Default');
		positionDefaultButton.addClass('btn btn-md');
		positionDefaultButton.element.addEventListener('click',that.positionMenu);
		positionDefaultButton.appendTo(divMenuControl.element);

		var addMenuItemLabel = new ElementSection();
		addMenuItemLabel.createElementType('label');
		addMenuItemLabel.writeHtml('Add New Item');
		addMenuItemLabel.addClass('menuItemLabel');
		addMenuItemLabel.appendTo(divMenuControl.element);

		var menuItemInput = new ElementSection();
		menuItemInput.createElementType('input');
		menuItemInput.addAttribute('type','text');
		menuItemInput.addStyle('float:left;width:40%;height:30px;margin-top:10px;')
		menuItemInput.addClass('form-control');
		menuItemInput.element.addEventListener('input',that.addMenuItem);
		menuItemInput.appendTo(divMenuControl.element);

		var removeMenuItemLabel = new ElementSection();
		removeMenuItemLabel.createElementType('label');
		removeMenuItemLabel.writeHtml('Remove Menu Item');
		removeMenuItemLabel.addClass('menuItemLabel');
		removeMenuItemLabel.appendTo(divMenuControl.element);

		var removeMenuItemInput = new ElementSection();
		removeMenuItemInput.createElementType('input');
		removeMenuItemInput.addAttribute('type','text');
		removeMenuItemInput.addStyle('float:left;width:40%;height:30px;margin-top:10px;')
		removeMenuItemInput.addClass('form-control');
		removeMenuItemInput.element.addEventListener('input',that.removeMenuItem);
		removeMenuItemInput.appendTo(divMenuControl.element);

		var buttonTxtColorCustom = new ElementSection();
		buttonTxtColorCustom.createElementType('label');
		buttonTxtColorCustom.addClass('radio');
		buttonTxtColorCustom.addClass('menuItemLabel');
		buttonTxtColorCustom.writeHtml('Item Color');
		buttonTxtColorCustom.appendTo(divMenuControl.element);

		that.buttonTxtColorPallet = new ElementSection(this);
		that.buttonTxtColorPallet.createElementType('input');
		that.buttonTxtColorPallet.addClass('menuColorPallet');
		that.buttonTxtColorPallet.addAttribute('type','color');
		that.buttonTxtColorPallet.addStyle('float:left;margin-top:10px');
		that.buttonTxtColorPallet.element.addEventListener('input',that.changeMenuItemColor);
		that.buttonTxtColorPallet.appendTo(divMenuControl.element);

		divMenuControl.appendTo(that.divBgControl.element);
	}
	this.addButtonName = function(ev){
		that.buttonName = ev.target.value;
	}
	this.addButtonSize = function(ev){
		ev.preventDefault();
		that.buttonSize = modal.getElementClassIndex(ev.target,1);
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
	this.changeMenuItemColor = function(ev){
		that.menuItemColor = ev.target.value;
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
		if(that.menuPosition!=null){
			modal.setElementStyle(parentEle,'float',that.menuPosition);
		}
		if(that.menuItem!=null){
			var childNodes = modal.getElementChildNodes(parentEle);
			for (var i = 0; i < childNodes.length; i++) {
				if(childNodes[i].nodeName == 'UL'){
				var normalElementLi = new ElementSection();
				normalElementLi.createCompoundElements('li','');
				
				var normalElementA = new ElementSection();
				normalElementA.createCompoundElements('a','');
				normalElementA.addAttribute('href','#');
				normalElementA.writeHtml(that.menuItem);

				normalElementA.appendTo(normalElementLi.element);
				normalElementLi.appendTo(childNodes[i]);
				}
			}
		}
		if(that.removeItem!=null){
			var childNodes = modal.getElementChildNodes(parentEle);
			for (var i = 0; i < childNodes.length; i++){
				if(childNodes[i].nodeName == 'UL'){
					var innerChildLi = modal.getElementChildNodes(childNodes[i]);
					for(var j = 0;j<innerChildLi.length;j++){
						var innerChildA = modal.getElementChildNodes(innerChildLi[j]);
						for(var k=0;k<innerChildA.length;k++){
							if(modal.getElementInnerHtml(innerChildA[k])==that.removeItem){
								modal.removeElementChild(innerChildLi[j],childNodes[i]);
							}
						}
					}
				}
			}	
		}
		if(that.menuItemColor!=null){
			var childNodes = modal.getElementChildNodes(parentEle);
			for (var i = 0; i < childNodes.length; i++){
				if(childNodes[i].nodeName == 'UL'){
					var innerChildLi = modal.getElementChildNodes(childNodes[i]);
					for(var j = 0;j<innerChildLi.length;j++){
						var innerChildA = modal.getElementChildNodes(innerChildLi[j]);
						for(var k=0;k<innerChildA.length;k++){
							modal.setElementStyle(innerChildA[i],'color',that.menuItemColor);
						}
					}
				}
			}	
		}
		if(modal.getEleByClassName('imageUpload')!=undefined){
			var imageFile = modal.getEleByClassName('imageUpload');
			var cleanFileName = imageFile.value.substring(12,imageFile.length);
			var imageName = 'images/' + cleanFileName;
			modal.setElementStyle(parentEle,'backgroundImage','url('+imageName+')');
		}
		if(that.backgrColor!=null){
			modal.setElementStyle(parentEle,'background',that.backgrColor);
		}
		if(that.bgRepeat!=null){
			modal.setElementStyle(parentEle,'backgroundRepeat',that.bgRepeat);
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
		if(modal.getEleByClassName('btn btnMenuProp active')!=undefined){
			menuButton = modal.getEleByClassName('btn btnMenuProp active');
		}
		else{
			menuButton = modal.getEleByClassName('btn btnMenuProp');
		}
		var imageContainer = modal.getEleByClassName('controls imageControl');
		modal.removeElementClass(imageButton,'active');
		modal.setElementStyle(imageContainer,'display','none');
		if(modal.getEleByClassName('controls menuControl')!=undefined){
			var menuContainer = modal.getEleByClassName('controls menuControl');
			modal.removeElementClass(menuButton,'active');
			modal.setElementStyle(menuContainer,'display','none');
		}
		modal.setElementStyle(colorContainer,'display','block');
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
		if(modal.getEleByClassName('btn btnMenuProp active')!=undefined){
			menuButton = modal.getEleByClassName('btn btnMenuProp active');
		}
		else{
			menuButton = modal.getEleByClassName('btn btnMenuProp');
		}
		if(modal.getEleByClassName('controls menuControl')!=undefined){
			var menuContainer = modal.getEleByClassName('controls menuControl');
			modal.removeElementClass(menuButton,'active');
			modal.setElementStyle(menuContainer,'display','none');
		}
		var imageContainer = modal.getEleByClassName('controls imageControl');
		modal.removeElementClass(bgColorButton,'active');
		modal.setElementStyle(imageContainer,'display','block');
		modal.setElementStyle(colorContainer,'display','none');
		modal.addElementClass(ev.target,'active');
	}
	this.displaymenuSelect = function(ev){
		var colorContainer = modal.getEleByClassName('controls colorControl');
		var imageContainer = modal.getEleByClassName('controls imageControl');
		var bgColorButton;
		if(modal.getEleByClassName('btn btnBgColor active')!=undefined){
			bgColorButton = modal.getEleByClassName('btn btnBgColor active');
		}else{
			bgColorButton = modal.getEleByClassName('btn btnBgColor');
		}
		var imageButton;
		if(modal.getEleByClassName('btn btnBgImage active')!=undefined){
			imageButton = modal.getEleByClassName('btn btnBgImage active');
		}
		else{
			imageButton = modal.getEleByClassName('btn btnBgImage');
		}
		modal.removeElementClass(imageButton,'active');
		modal.removeElementClass(bgColorButton,'active');
		modal.setElementStyle(colorContainer,'display','none');
		modal.setElementStyle(imageContainer,'display','none');

		var menuContainer = modal.getEleByClassName('controls menuControl');
		modal.setElementStyle(menuContainer,'display','block');
		modal.addElementClass(ev.target,'active');
	}
	this.bgSelectedNone = function(ev){
		that.backgrColor = 'none';
		if((modal.getEleByClassName('bgColorPallet')!=undefined)){
			var bgColorPallet = modal.getEleByClassName('bgColorPallet')
			modal.setElementStyle(bgColorPallet,'display','none');
		}
	}
	this.bgSelectedColor = function(ev){
		var styleElementIdName =  modal.getElementAttribute(ev.target,'data-for');
		var styleElement = modal.getEleById(styleElementIdName);
		var pallet = modal.getEleByClassName('bgColorPallet');
		modal.setElementAttribute(pallet,'data-for',styleElementIdName);
		modal.setElementStyle(pallet,'display','block');
		modal.appendElementChild(ev.target.parentElement,pallet);
	}
	this.positionMenu = function(ev){
		that.menuPosition = modal.getElementInnerHtml(ev.target);
		if(that.menuPosition == 'Left'){
			that.menuPosition = 'left';
		}else if(that.menuPosition == 'Right'){
			that.menuPosition = 'right';
		}else{
			that.menuPosition = 'none'
		}
	}
	this.addMenuItem = function(ev){
		that.menuItem = ev.target.value;
	}
	this.removeMenuItem = function(ev){
		that.removeItem = ev.target.value;
	}
	this.changeBgColor = function(ev){
		that.backgrColor = ev.target.value;
	}
	this.changeBackgrRepeatSelect = function(ev){
		var inputValue = ev.target.value;
		if(inputValue=='Yes'){
			that.bgRepeat = 'repeat';
		}else if(inputValue == 'Don\'t Repeat'){
			that.bgRepeat = 'no-repeat';
		}else if(inputValue == 'Repeat Horizontally'){
			that.bgRepeat = 'repeat-x';
		}else if(inputValue == 'Repeat Vertically'){
			that.bgRepeat = 'repeat-y';
		}else{
			that.bgRepeat = null;
		}
	}
	this.closeModal = function(ev){
		var parentModal = ev.target.parentElement;
		var parentOverlay = parentModal.parentElement;
		modal.removeElementChild(parentOverlay,document.body);
	}
}