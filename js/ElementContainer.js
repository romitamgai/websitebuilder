function ElementContainer(){
	this.elementContainer;
	this.elementDiv;
	this.titleDivision;
	this.divisionElement;
	var count=0;
	var exchangeVariable=0;
	var mainLayoutInstance = MainLayout.getInstance();
	var that = this;

	this.init = function(){
		that.elementContainer = new ElementSection();
		that.elementContainer.createElementType('div');
		that.elementContainer.addClass('elementContainer');
		that.elementContainer.addStyle('background:#c8c3c3;width:100%;height:30%;overflow-y:scroll;padding:5px;');
		that.titleDiv();

		// that.clickableWrapper("Normal Elements");
		// that.elementTypesContainer();
		// that.makeDivisionButton();
		// that.makeSpanButton();
		// that.makeUnorderedListButton();
		// that.makeListButton();
		// that.makeParagraphButton();
		// that.makeAnchorButton();
		// that.makeImageButton();
		// that.makeFormButton();
		// that.makeTextAreaButton();
		// that.makeLabelButton();
		// that.makeSelectButton();
		// that.makeBtnButton();
		// that.makeInputButton();
		that.clickableWrapper("BootStrap Elements");
		that.elementTypesContainer();
		that.makeBootButton();
		that.makeBootNavBar();
		that.makeBootBrandImage();
		that.makeBootNavForm();
		that.makeBootAboutSection();
		that.makeBootContact();
	}
	this.titleDiv = function(){
		that.titleDivision = new ElementSection();
		that.titleDivision.createElementType('div');
		that.titleDivision.addStyle('background:black;width:100%;height:30px;color:white;line-height:30px;font-size:16px;');
		that.titleDivision.element.innerHTML = 'Elements Pane';
		that.titleDivision.appendTo(that.elementContainer.element);
	}
	this.clickableWrapper = function(headerName){
		that.clickWrapper = new ElementSection();
		that.clickWrapper.createElementType('div');
		that.clickWrapper.addClass('clickWrapper');
		that.clickWrapper.addStyle('height:30px;width:100%;background-color:#b7b5b5;');
		that.clickWrapper.createEvent("click","toggleContents");
		that.clickableHeadingGeneral(headerName);
		that.clickWrapper.appendTo(that.elementContainer.element);
	}
	this.clickableHeadingGeneral = function(headerName){
		that.generalClickable = new ElementSection();
		that.generalClickable.createElementType('h2');
		that.generalClickable.addClass('clickableHeading');
		that.generalClickable.addStyle('font-size:24px;font-weight:bold;color:black;cursor:pointer;line-height:30px;');
		that.generalClickable.writeHtml(headerName);
		that.generalClickable.appendTo(that.clickWrapper.element);
	}
	this.elementTypesContainer = function(){
		that.elementTypeContainer = new ElementSection();
		that.elementTypeContainer.createElementType('div');
		that.elementTypeContainer.addClass('formFieldContainer');
		that.elementTypeContainer.addStyle('display:block;background-color:white;padding-top:5px;');
		that.elementTypeContainer.appendTo(that.elementContainer.element);
	}
	this.makeDivisionButton =function(){
		that.elementDiv = new ElementSection();
		that.elementDiv.createElementType('button');
		that.elementDiv.addAttribute("value","div");
		that.elementDiv.writeHtml('div Element');
		that.elementDiv.addAttribute('id','box');
		//that.elementDiv.addStyle('background-color:#000000;width:20%;height:100px;float:left;cursor:pointer;margin:1px');
		that.elementDiv.addAttribute('draggable','true');
		that.elementDiv.createEvent("dragstart","dragStart");
		that.elementDiv.createEvent("mouseenter","mouseEnter");
		that.elementDiv.createEvent("mouseleave","mouseLeave");
		that.elementDiv.createEvent("mouseout","mouseOut");
		that.elementDiv.appendTo(that.elementTypeContainer.element);
	}
	this.makeUnorderedListButton = function(){
		that.elementUlButton = new ElementSection();
		that.elementDiv.createElementType('button');
		that.elementDiv.addAttribute("value","ul");
		that.elementDiv.writeHtml('ul Element');
		that.elementDiv.addAttribute('id','boxul');
		//that.elementDiv.addStyle('background-color:#000000;width:20%;height:100px;float:left;cursor:pointer;margin:1px');
		that.elementDiv.addAttribute('draggable','true');
		that.elementDiv.createEvent("dragstart","dragStart");
		that.elementDiv.createEvent("mouseenter","mouseEnter");
		that.elementDiv.createEvent("mouseleave","mouseLeave");
		that.elementDiv.createEvent("mouseout","mouseOut");
		that.elementDiv.appendTo(that.elementTypeContainer.element);
	}
	this.makeListButton = function(){
		that.elementListButton = new ElementSection();
		that.elementListButton.createElementType('button');
		that.elementListButton.addAttribute("value","li");
		that.elementListButton.writeHtml('li Element');
		that.elementListButton.addAttribute('id','boxli');
		//that.elementDiv.addStyle('background-color:#000000;width:20%;height:100px;float:left;cursor:pointer;margin:1px');
		that.elementListButton.addAttribute('draggable','true');
		that.elementListButton.createEvent("dragstart","dragStart");
		that.elementListButton.createEvent("mouseenter","mouseEnter");
		that.elementListButton.createEvent("mouseleave","mouseLeave");
		that.elementListButton.createEvent("mouseout","mouseOut");
		that.elementListButton.appendTo(that.elementTypeContainer.element);
	}
	this.makeParagraphButton = function(){
		that.elementParagraph = new ElementSection();
		that.elementParagraph.createElementType('button');
		that.elementParagraph.addAttribute("value","p");
		that.elementParagraph.writeHtml('p Element');
		that.elementParagraph.addAttribute('id','boxp');
		//that.elementDiv.addStyle('background-color:#000000;width:20%;height:100px;float:left;cursor:pointer;margin:1px');
		that.elementParagraph.addAttribute('draggable','true');
		that.elementParagraph.createEvent("dragstart","dragStart");
		that.elementParagraph.createEvent("mouseenter","mouseEnter");
		that.elementParagraph.createEvent("mouseleave","mouseLeave");
		that.elementParagraph.createEvent("mouseout","mouseOut");
		that.elementParagraph.appendTo(that.elementTypeContainer.element);
	}
	this.makeAnchorButton = function(){
		that.elementAnchor = new ElementSection();
		that.elementAnchor.createElementType('button');
		that.elementAnchor.addAttribute("value","a");
		that.elementAnchor.writeHtml('a Element');
		that.elementAnchor.addAttribute('id','boxa');
		//that.elementDiv.addStyle('background-color:#000000;width:20%;height:100px;float:left;cursor:pointer;margin:1px');
		that.elementAnchor.addAttribute('draggable','true');
		that.elementAnchor.createEvent("dragstart","dragStart");
		that.elementAnchor.createEvent("mouseenter","mouseEnter");
		that.elementAnchor.createEvent("mouseleave","mouseLeave");
		that.elementAnchor.createEvent("mouseout","mouseOut");
		that.elementAnchor.appendTo(that.elementTypeContainer.element);
	}
	this.makeImageButton = function(){
		that.elementImage = new ElementSection();
		that.elementImage.createElementType('button');
		that.elementImage.addAttribute("value","img");
		that.elementImage.writeHtml('img Element');
		that.elementImage.addAttribute('id','boximg');
		//that.elementDiv.addStyle('background-color:#000000;width:20%;height:100px;float:left;cursor:pointer;margin:1px');
		that.elementImage.addAttribute('draggable','true');
		that.elementImage.createEvent("dragstart","dragStart");
		that.elementImage.createEvent("mouseenter","mouseEnter");
		that.elementImage.createEvent("mouseleave","mouseLeave");
		that.elementImage.createEvent("mouseout","mouseOut");
		that.elementImage.appendTo(that.elementTypeContainer.element);
	}
	this.makeSpanButton = function(){
		that.elementSpan = new ElementSection();
		that.elementSpan.createElementType('button');
		that.elementSpan.addAttribute("value","span");
		that.elementSpan.writeHtml('span Element');
		that.elementSpan.addAttribute('id','boxspan');
		//that.elementDiv.addStyle('background-color:#000000;width:20%;height:100px;float:left;cursor:pointer;margin:1px');
		that.elementSpan.addAttribute('draggable','true');
		that.elementSpan.createEvent("dragstart","dragStart");
		that.elementSpan.createEvent("mouseenter","mouseEnter");
		that.elementSpan.createEvent("mouseleave","mouseLeave");
		that.elementSpan.createEvent("mouseout","mouseOut");
		that.elementSpan.appendTo(that.elementTypeContainer.element);
	}
	this.makeFormButton = function(){
		that.elementForm = new ElementSection();
		that.elementForm.createElementType('button');
		that.elementForm.addAttribute("value","form");
		that.elementForm.writeHtml('form Element');
		that.elementForm.addAttribute('id','boxform');
		//that.elementDiv.addStyle('background-color:#000000;width:20%;height:100px;float:left;cursor:pointer;margin:1px');
		that.elementForm.addAttribute('draggable','true');
		that.elementForm.createEvent("dragstart","dragStart");
		that.elementForm.createEvent("mouseenter","mouseEnter");
		that.elementForm.createEvent("mouseleave","mouseLeave");
		that.elementForm.createEvent("mouseout","mouseOut");
		that.elementForm.appendTo(that.elementTypeContainer.element);
	}
	this.makeTextAreaButton = function(){
		that.elementTextArea = new ElementSection();
		that.elementTextArea.createElementType('button');
		that.elementTextArea.addAttribute("value","textarea");
		that.elementTextArea.writeHtml('textarea Element');
		that.elementTextArea.addAttribute('id','boxTxtArea');
		//that.elementDiv.addStyle('background-color:#000000;width:20%;height:100px;float:left;cursor:pointer;margin:1px');
		that.elementTextArea.addAttribute('draggable','true');
		that.elementTextArea.createEvent("dragstart","dragStart");
		that.elementTextArea.createEvent("mouseenter","mouseEnter");
		that.elementTextArea.createEvent("mouseleave","mouseLeave");
		that.elementTextArea.createEvent("mouseout","mouseOut");
		that.elementTextArea.appendTo(that.elementTypeContainer.element);
	}
	this.makeLabelButton = function(){
		that.elementLabel = new ElementSection();
		that.elementLabel.createElementType('button');
		that.elementLabel.addAttribute("value","label");
		that.elementLabel.writeHtml('label Element');
		that.elementLabel.addAttribute('id','boxlabel');
		//that.elementDiv.addStyle('background-color:#000000;width:20%;height:100px;float:left;cursor:pointer;margin:1px');
		that.elementLabel.addAttribute('draggable','true');
		that.elementLabel.createEvent("dragstart","dragStart");
		that.elementLabel.createEvent("mouseenter","mouseEnter");
		that.elementLabel.createEvent("mouseleave","mouseLeave");
		that.elementLabel.createEvent("mouseout","mouseOut");
		that.elementLabel.appendTo(that.elementTypeContainer.element);
	}
	this.makeSelectButton = function(){
		that.elementSelect = new ElementSection();
		that.elementSelect.createElementType('button');
		that.elementSelect.addAttribute("value","select");
		that.elementSelect.writeHtml('select Element');
		that.elementSelect.addAttribute('id','boxSelect');
		//that.elementDiv.addStyle('background-color:#000000;width:20%;height:100px;float:left;cursor:pointer;margin:1px');
		that.elementSelect.addAttribute('draggable','true');
		that.elementSelect.createEvent("dragstart","dragStart");
		that.elementSelect.createEvent("mouseenter","mouseEnter");
		that.elementSelect.createEvent("mouseleave","mouseLeave");
		that.elementSelect.createEvent("mouseout","mouseOut");
		that.elementSelect.appendTo(that.elementTypeContainer.element);
	}
	this.makeBtnButton = function(){
		that.elementBtn = new ElementSection();
		that.elementBtn.createElementType('button');
		that.elementBtn.addAttribute("value","button");
		that.elementBtn.writeHtml('button Element');
		that.elementBtn.addAttribute('id','boxButton');
		//that.elementDiv.addStyle('background-color:#000000;width:20%;height:100px;float:left;cursor:pointer;margin:1px');
		that.elementBtn.addAttribute('draggable','true');
		that.elementBtn.createEvent("dragstart","dragStart");
		that.elementBtn.createEvent("mouseenter","mouseEnter");
		that.elementBtn.createEvent("mouseleave","mouseLeave");
		that.elementBtn.createEvent("mouseout","mouseOut");
		that.elementBtn.appendTo(that.elementTypeContainer.element);
	}
	this.makeInputButton = function(){
		that.elementInput = new ElementSection();
		that.elementInput.createElementType('button');
		that.elementInput.addAttribute("value","txtinput");
		that.elementInput.writeHtml('input Element');
		that.elementInput.addAttribute('id','boxInput');
		//that.elementDiv.addStyle('background-color:#000000;width:20%;height:100px;float:left;cursor:pointer;margin:1px');
		that.elementInput.addAttribute('draggable','true');
		that.elementInput.createEvent("dragstart","dragStart");
		that.elementInput.createEvent("mouseenter","mouseEnter");
		that.elementInput.createEvent("mouseleave","mouseLeave");
		that.elementInput.createEvent("mouseout","mouseOut");
		that.elementInput.appendTo(that.elementTypeContainer.element);
	}
	this.makeBootStrap = function(){
		that.elementBoot = new ElementSection();
		that.elementBoot.createElementType('button');
		that.elementBoot.addAttribute("value","bootButton");
		that.elementBoot.writeHtml('Bootstrap Button');
		that.elementBoot.addAttribute('id','boxBoot');
		//that.elementDiv.addStyle('background-color:#000000;width:20%;height:100px;float:left;cursor:pointer;margin:1px');
		that.elementBoot.addAttribute('draggable','true');
		that.elementBoot.createEvent("dragstart","dragStart");
		that.elementBoot.createEvent("mouseenter","mouseEnter");
		that.elementBoot.createEvent("mouseleave","mouseLeave");
		that.elementBoot.createEvent("mouseout","mouseOut");
		that.elementBoot.appendTo(that.elementTypeContainer.element);
	}
	this.makeBootButton = function(){
		that.elementBoot = new ElementSection();
		that.elementBoot.createElementType('button');
		that.elementBoot.addAttribute("value","bootButton");
		that.elementBoot.writeHtml('Bootstrap Button');
		that.elementBoot.addAttribute('id','boxBoot');
		//that.elementDiv.addStyle('background-color:#000000;width:20%;height:100px;float:left;cursor:pointer;margin:1px');
		that.elementBoot.addAttribute('draggable','true');
		that.elementBoot.createEvent("dragstart","dragStart");
		that.elementBoot.createEvent("mouseenter","mouseEnter");
		that.elementBoot.createEvent("mouseleave","mouseLeave");
		that.elementBoot.createEvent("mouseout","mouseOut");
		that.elementBoot.appendTo(that.elementTypeContainer.element);
	}
	this.makeBootNavBar = function(){
		that.elementBootNav = new ElementSection();
		that.elementBootNav.createElementType('button');
		that.elementBootNav.addAttribute("value","bootNavBar");
		that.elementBootNav.writeHtml('Bootstrap Navigation');
		that.elementBootNav.addAttribute('id','boxNav');
		//that.elementDiv.addStyle('background-color:#000000;width:20%;height:100px;float:left;cursor:pointer;margin:1px');
		that.elementBootNav.addAttribute('draggable','true');
		that.elementBootNav.createEvent("dragstart","dragStart");
		that.elementBootNav.createEvent("mouseenter","mouseEnter");
		that.elementBootNav.createEvent("mouseleave","mouseLeave");
		that.elementBootNav.createEvent("mouseout","mouseOut");
		that.elementBootNav.appendTo(that.elementTypeContainer.element);
	}
	this.makeBootBrandImage = function(){
		var bootStrapElement = new ElementSection();
		bootStrapElement.createElementType('button');
		bootStrapElement.addAttribute("value","bootBrandImg");
		bootStrapElement.writeHtml('Bootstrap Header Icon');
		bootStrapElement.addAttribute('id','boxBrand');
		//that.elementDiv.addStyle('background-color:#000000;width:20%;height:100px;float:left;cursor:pointer;margin:1px');
		bootStrapElement.addAttribute('draggable','true');
		bootStrapElement.createEvent("dragstart","dragStart");
		bootStrapElement.createEvent("mouseenter","mouseEnter");
		bootStrapElement.createEvent("mouseleave","mouseLeave");
		bootStrapElement.createEvent("mouseout","mouseOut");
		bootStrapElement.appendTo(that.elementTypeContainer.element);
	}
	this.makeBootNavForm = function(){
		var bootStrapElement = new ElementSection();
		bootStrapElement.createElementType('button');
		bootStrapElement.addAttribute("value","bootForm");
		bootStrapElement.writeHtml('Bootstrap Form');
		bootStrapElement.addAttribute('id','boxNavForm');
		//that.elementDiv.addStyle('background-color:#000000;width:20%;height:100px;float:left;cursor:pointer;margin:1px');
		bootStrapElement.addAttribute('draggable','true');
		bootStrapElement.createEvent("dragstart","dragStart");
		bootStrapElement.createEvent("mouseenter","mouseEnter");
		bootStrapElement.createEvent("mouseleave","mouseLeave");
		bootStrapElement.createEvent("mouseout","mouseOut");
		bootStrapElement.appendTo(that.elementTypeContainer.element);
	}
	this.makeBootAboutSection = function(){
		var bootStrapElement = new ElementSection();
		bootStrapElement.createElementType('button');
		bootStrapElement.addAttribute("value","bootAbout");
		bootStrapElement.writeHtml('About Content');
		bootStrapElement.addAttribute('id','boxContentAbout');
		//that.elementDiv.addStyle('background-color:#000000;width:20%;height:100px;float:left;cursor:pointer;margin:1px');
		bootStrapElement.addAttribute('draggable','true');
		bootStrapElement.createEvent("dragstart","dragStart");
		bootStrapElement.createEvent("mouseenter","mouseEnter");
		bootStrapElement.createEvent("mouseleave","mouseLeave");
		bootStrapElement.createEvent("mouseout","mouseOut");
		bootStrapElement.appendTo(that.elementTypeContainer.element);
	}
	this.makeBootContact = function(){
		var bootStrapElement = new ElementSection();
		bootStrapElement.createElementType('button');
		bootStrapElement.addAttribute("value","bootContact");
		bootStrapElement.writeHtml('Contact');
		bootStrapElement.addAttribute('id','boxContentContact');
		//that.elementDiv.addStyle('background-color:#000000;width:20%;height:100px;float:left;cursor:pointer;margin:1px');
		bootStrapElement.addAttribute('draggable','true');
		bootStrapElement.createEvent("dragstart","dragStart");
		bootStrapElement.createEvent("mouseenter","mouseEnter");
		bootStrapElement.createEvent("mouseleave","mouseLeave");
		bootStrapElement.createEvent("mouseout","mouseOut");
		bootStrapElement.appendTo(that.elementTypeContainer.element);
	}
	this.makeNewElement = function(elementType,elementDestination){
		count++;
		if(elementType == 'div'){
			that.divisionElement = new ElementSection();
			that.divisionElement.createElementType('div');
			that.divisionElement.addClass('divisionContainer'+count);
			that.divisionElement.addAttribute('id','box'+count);
			that.divisionElement.addStyle('background-color:#222222;width:20%;height:100px;float:left;cursor:se-resize;margin:1px;');
			that.divisionElement.createEvent("mouseenter","mouseEnter");
			that.divisionElement.createEvent("mouseleave","mouseLeave");
			that.divisionElement.createEvent("mouseout","mouseOut");
			that.divisionElement.createEvent("click","changeFormFields");
			that.divisionElement.createEvent('click','resizeElement');
			that.divisionElement.addSelectClassComponents('divisionContainer'+count);
			that.divisionElement.appendTo(elementDestination);
		}
		//BootStrap NavBar
		else if(elementType == 'bootNavBar'){
			that.initiateBootSrapComponents();
			that.initiateNormalComponents();

			that.btStrpElementDivNav = new ElementSection();
			that.btStrpElementBtnNavTogCol = new ElementSection();
			that.btStrpElementSpanSr = new ElementSection();
			that.btStrpElementSpanIco = new ElementSection();
			that.btStrpElementANav = new ElementSection();
			that.btStrpElementDivColNavCol = new ElementSection();
			that.btStrpElementUlNavNavbarNav = new ElementSection();
			that.btStrpElementLiActive = new ElementSection();
			that.normalElementA = new ElementSection();
			that.normalElementLi = new ElementSection();
			that.btStrpElementLiDrop = new ElementSection();
			that.btStrpElementADropTogg = new ElementSection();
			that.btStrpElementSpanCaret = new ElementSection();
			that.btStrpElementUlDropMenu = new ElementSection();

			that.btStrpElementDivContFluid.appendTo(that.btStrpElementNav.element);

			that.btStrpElementDivNav.createCompoundElements('div','nav-header');
			that.btStrpElementDivNav.appendTo(that.btStrpElementDivContFluid.element);

			that.btStrpElementBtnNavTogCol.createCompoundElements('button','navbar-toggle Collapsed');
			that.btStrpElementBtnNavTogCol.appendTo(that.btStrpElementDivNav.element);

			that.btStrpElementSpanSr.createCompoundElements('span','sr-only');
			that.btStrpElementSpanSr.writeHtml('Toggle navigation')
			that.btStrpElementSpanSr.appendTo(that.btStrpElementBtnNavTogCol.element);

			that.btStrpElementSpanIco.createCompoundElements('span','icon-bar');
			that.btStrpElementSpanIco.appendTo(that.btStrpElementBtnNavTogCol.element);

			that.btStrpElementSpanIco.createCompoundElements('span','icon-bar');
			that.btStrpElementSpanIco.appendTo(that.btStrpElementBtnNavTogCol.element);

			that.btStrpElementSpanIco.createCompoundElements('span','icon-bar');
			that.btStrpElementSpanIco.appendTo(that.btStrpElementBtnNavTogCol.element);

			that.btStrpElementANav.createCompoundElements('a','navbar-brand');
			that.btStrpElementANav.writeHtml('Brand');
			that.btStrpElementANav.addAttribute('href','#');
			that.btStrpElementANav.appendTo(that.btStrpElementDivNav.element);

			that.btStrpElementDivColNavCol.createCompoundElements('div','collapse navbar-collapse');
			that.btStrpElementDivColNavCol.appendTo(that.btStrpElementDivContFluid.element);

			that.btStrpElementUlNavNavbarNav.createCompoundElements('ul','nav navbar-nav');
			that.btStrpElementUlNavNavbarNav.appendTo(that.btStrpElementDivColNavCol.element);

			that.btStrpElementLiActive.createCompoundElements('li','active');
			that.btStrpElementLiActive.appendTo(that.btStrpElementUlNavNavbarNav.element);

			that.normalElementA.createCompoundElements('a','');
			that.normalElementA.addAttribute('href','#');
			that.normalElementA.writeHtml('Link');
			that.normalElementA.appendTo(that.btStrpElementLiActive.element);	

			that.btStrpElementSpanSr.createCompoundElements('span','sr-only');
			that.btStrpElementSpanSr.writeHtml('')
			that.btStrpElementSpanSr.appendTo(that.normalElementA.element);

			that.normalElementLi.createCompoundElements('li','');
			that.normalElementLi.appendTo(that.btStrpElementUlNavNavbarNav.element);

			that.normalElementA.createCompoundElements('a','');
			that.normalElementA.addAttribute('href','#');
			that.normalElementA.writeHtml('Link');
			that.normalElementA.appendTo(that.normalElementLi.element);	

			that.btStrpElementLiDrop.createCompoundElements('li','dropdown');
			that.btStrpElementLiDrop.appendTo(that.btStrpElementUlNavNavbarNav.element);

			that.btStrpElementADropTogg.createCompoundElements('a','dropdown-toggle');
			that.btStrpElementADropTogg.addAttribute('href','#');
			that.btStrpElementADropTogg.addAttribute('data-toggle','dropdown');
			that.btStrpElementADropTogg.writeHtml('DropDown');
			that.btStrpElementADropTogg.appendTo(that.btStrpElementLiDrop.element);	

			that.btStrpElementSpanCaret.createCompoundElements('span','caret');
			that.btStrpElementSpanCaret.appendTo(that.btStrpElementADropTogg.element);

			that.btStrpElementUlDropMenu.createCompoundElements('ul','dropdown-menu');
			that.btStrpElementUlDropMenu.appendTo(that.btStrpElementLiDrop.element);

			that.normalElementLi.createCompoundElements('li','');
			that.normalElementLi.appendTo(that.btStrpElementUlDropMenu.element);

			that.normalElementA.createCompoundElements('a','');
			that.normalElementA.addAttribute('href','#');
			that.normalElementA.writeHtml('Link');
			that.normalElementA.appendTo(that.normalElementLi.element);

			that.normalElementLi.createCompoundElements('li','');
			that.normalElementLi.appendTo(that.btStrpElementUlDropMenu.element);

			that.normalElementA.createCompoundElements('a','');
			that.normalElementA.addAttribute('href','#');
			that.normalElementA.writeHtml('Link');
			that.normalElementA.appendTo(that.normalElementLi.element);	

			
			that.btStrpElementFormNavBarForm.appendTo(that.btStrpElementDivColNavCol.element);
			that.btStrpElementDivFormGrp.appendTo(that.btStrpElementFormNavBarForm.element);
			that.btStrpElementInpForm.appendTo(that.btStrpElementDivFormGrp.element);	
			that.btStrpElementBtnBtnBtnDef.writeHtml('Submit');
			that.btStrpElementBtnBtnBtnDef.appendTo(that.btStrpElementFormNavBarForm.element);		

			that.btStrpElementNav.appendTo(elementDestination);
		}
		// else if(elementType == 'bootNavBar'){
		// 	that.initiateBootSrapComponents();
		// 	that.initiateNormalComponents();

		// 	that.btStrpElementDivNav = new ElementSection();
		// 	that.btStrpElementBtnNavTogCol = new ElementSection();
		// 	that.btStrpElementSpanSr = new ElementSection();
		// 	that.btStrpElementSpanIco = new ElementSection();
		// 	that.btStrpElementANav = new ElementSection();
		// 	that.btStrpElementDivColNavCol = new ElementSection();
		// 	that.btStrpElementUlNavNavbarNav = new ElementSection();
		// 	that.btStrpElementLiActive = new ElementSection();
		// 	that.normalElementA = new ElementSection();
		// 	that.normalElementLi = new ElementSection();
		// 	that.btStrpElementLiDrop = new ElementSection();
		// 	that.btStrpElementADropTogg = new ElementSection();
		// 	that.btStrpElementSpanCaret = new ElementSection();
		// 	that.btStrpElementUlDropMenu = new ElementSection();

		// 	that.btStrpElementNav.addClass('navbar-fixed-top');
		// 	that.btStrpElementDivCont.appendTo(that.btStrpElementNav.element);

		// 	that.btStrpElementDivNav.createCompoundElements('div','nav-header');
		// 	that.btStrpElementDivNav.addClass('page-scroll');
		// 	that.btStrpElementDivNav.appendTo(that.btStrpElementDivCont.element);

		// 	that.btStrpElementBtnNavTogCol.createCompoundElements('button','navbar-toggle Collapsed');
		// 	that.btStrpElementBtnNavTogCol.appendTo(that.btStrpElementDivNav.element);

		// 	that.btStrpElementSpanSr.createCompoundElements('span','sr-only');
		// 	that.btStrpElementSpanSr.writeHtml('Toggle navigation')
		// 	that.btStrpElementSpanSr.appendTo(that.btStrpElementBtnNavTogCol.element);

		// 	that.btStrpElementSpanIco.createCompoundElements('span','icon-bar');
		// 	that.btStrpElementSpanIco.appendTo(that.btStrpElementBtnNavTogCol.element);

		// 	that.btStrpElementSpanIco.createCompoundElements('span','icon-bar');
		// 	that.btStrpElementSpanIco.appendTo(that.btStrpElementBtnNavTogCol.element);

		// 	that.btStrpElementSpanIco.createCompoundElements('span','icon-bar');
		// 	that.btStrpElementSpanIco.appendTo(that.btStrpElementBtnNavTogCol.element);

		// 	that.btStrpElementANav.createCompoundElements('a','navbar-brand');
		// 	that.btStrpElementANav.writeHtml('Brand');
		// 	that.btStrpElementANav.addAttribute('href','#');
		// 	that.btStrpElementANav.appendTo(that.btStrpElementDivNav.element);

		// 	that.btStrpElementDivColNavCol.createCompoundElements('div','collapse navbar-collapse');
		// 	that.btStrpElementDivColNavCol.appendTo(that.btStrpElementDivCont.element);

		// 	that.btStrpElementUlNavNavbarNav.createCompoundElements('ul','nav navbar-nav');
		// 	that.btStrpElementUlNavNavbarNav.addClass('navbar-right');
		// 	that.btStrpElementUlNavNavbarNav.appendTo(that.btStrpElementDivColNavCol.element);

		// 	that.btStrpElementLiActive.createCompoundElements('li','hidden');
		// 	that.btStrpElementLiActive.appendTo(that.btStrpElementUlNavNavbarNav.element);

		// 	that.normalElementA.createCompoundElements('a','');
		// 	that.normalElementA.addId('page-top');
		// 	that.normalElementA.addAttribute('href','#');
		// 	that.normalElementA.writeHtml('Link');
		// 	that.normalElementA.appendTo(that.btStrpElementLiActive.element);	

		// 	// that.btStrpElementSpanSr.createCompoundElements('span','sr-only');
		// 	// that.btStrpElementSpanSr.writeHtml('')
		// 	// that.btStrpElementSpanSr.appendTo(that.normalElementA.element);

		// 	that.normalElementLi.createCompoundElements('li','page-scroll');
		// 	that.normalElementLi.appendTo(that.btStrpElementUlNavNavbarNav.element);

		// 	that.normalElementA.createCompoundElements('a','');
		// 	that.normalElementA.addId('portfolio');
		// 	that.normalElementA.addAttribute('href','#');
		// 	that.normalElementA.writeHtml('Link');
		// 	that.normalElementA.appendTo(that.normalElementLi.element);	

		// 	that.normalElementLi.createCompoundElements('li','page-scroll');
		// 	that.normalElementLi.appendTo(that.btStrpElementUlNavNavbarNav.element);

		// 	that.normalElementA.createCompoundElements('a','');
		// 	that.normalElementA.addId('portfolio');
		// 	that.normalElementA.addAttribute('href','#');
		// 	that.normalElementA.writeHtml('Link');
		// 	that.normalElementA.appendTo(that.normalElementLi.element);	

		// 	// that.btStrpElementLiDrop.createCompoundElements('li','dropdown');
		// 	// that.btStrpElementLiDrop.appendTo(that.btStrpElementUlNavNavbarNav.element);

		// 	// that.btStrpElementADropTogg.createCompoundElements('a','dropdown-toggle');
		// 	// that.btStrpElementADropTogg.addAttribute('href','#');
		// 	// that.btStrpElementADropTogg.addAttribute('data-toggle','dropdown');
		// 	// that.btStrpElementADropTogg.writeHtml('DropDown');
		// 	// that.btStrpElementADropTogg.appendTo(that.btStrpElementLiDrop.element);	

		// 	// that.btStrpElementSpanCaret.createCompoundElements('span','caret');
		// 	// that.btStrpElementSpanCaret.appendTo(that.btStrpElementADropTogg.element);

		// 	// that.btStrpElementUlDropMenu.createCompoundElements('ul','dropdown-menu');
		// 	// that.btStrpElementUlDropMenu.appendTo(that.btStrpElementLiDrop.element);

		// 	// that.normalElementLi.createCompoundElements('li','');
		// 	// that.normalElementLi.appendTo(that.btStrpElementUlDropMenu.element);

		// 	// that.normalElementA.createCompoundElements('a','');
		// 	// that.normalElementA.addAttribute('href','#');
		// 	// that.normalElementA.writeHtml('Link');
		// 	// that.normalElementA.appendTo(that.normalElementLi.element);

		// 	// that.normalElementLi.createCompoundElements('li','');
		// 	// that.normalElementLi.appendTo(that.btStrpElementUlDropMenu.element);

		// 	// that.normalElementA.createCompoundElements('a','');
		// 	// that.normalElementA.addAttribute('href','#');
		// 	// that.normalElementA.writeHtml('Link');
		// 	// that.normalElementA.appendTo(that.normalElementLi.element);	

			
		// 	// that.btStrpElementFormNavBarForm.appendTo(that.btStrpElementDivColNavCol.element);
		// 	// that.btStrpElementDivFormGrp.appendTo(that.btStrpElementFormNavBarForm.element);
		// 	// that.btStrpElementInpForm.appendTo(that.btStrpElementDivFormGrp.element);	
		// 	// that.btStrpElementBtnBtnBtnDef.writeHtml('Submit');
		// 	// that.btStrpElementBtnBtnBtnDef.appendTo(that.btStrpElementFormNavBarForm.element);		

		// 	that.btStrpElementNav.appendTo(elementDestination);
		// }
		else if(elementType == 'bootAbout'){
			that.initiateBootSrapComponents();
			that.initiateNormalComponents();
			that.normalElementH2.writeHtml('About');
			that.normalElementH2.appendTo(that.btStrpElementCollg12TxtCntr.element);
			that.normalElementHr.addClass('star-light');
			that.normalElementHr.appendTo(that.btStrpElementCollg12TxtCntr.element);
			that.btStrpElementCollg12TxtCntr.appendTo(that.btStrpElementRow.element);
			that.btStrpElementRow.appendTo(that.btStrpElementDivCont.element);

			that.normalElementP.writeHtml('Whether you\'re a student looking to showcase your work, a professional looking to attract clients, or a graphic artist looking to share your projects, this template is the perfect starting point!');
			that.normalElementP.appendTo(that.btStrpElementCollg4CollgOff2.element);
			that.btStrpElementCollg4CollgOff2.appendTo(that.btStrpElementRow1.element);

			that.normalElementP1.writeHtml('Freelancer is a free bootstrap theme created by Start Bootstrap. The download includes the complete source files including HTML, CSS, and JavaScript as well as optional LESS stylesheets for easy customization.');
			that.normalElementP1.appendTo(that.btStrpElementCollg4.element);
			that.btStrpElementCollg4.appendTo(that.btStrpElementRow1.element);

			that.normalElementI = new ElementSection();
			that.normalElementI.createElementType('i');
			that.normalElementI.addClass('fa fa-downolad');
			that.normalElementI.appendTo(that.normalElementA.element);
			that.normalElementA.addClass('btn btn-default');
			that.normalElementA.writeHtml('Download Theme');
			that.normalElementA.appendTo(that.btStrpElementCollg8CollgOff2TxtCntr.element);
			that.btStrpElementCollg8CollgOff2TxtCntr.appendTo(that.btStrpElementRow1.element);
			
			that.btStrpElementRow1.appendTo(that.btStrpElementDivCont.element);
			that.btStrpElementDivCont.appendTo(that.btStrpElementSuccess.element);
			that.btStrpElementSuccess.appendTo(elementDestination);
		}
		else if(elementType == 'bootContact'){
			that.initiateBootSrapComponents();
			that.initiateNormalComponents();
			that.normalElementH2.writeHtml('Contact Us');
			that.normalElementH2.appendTo(that.btStrpElementCollg12TxtCntr.element);
			that.normalElementHr.appendTo(that.btStrpElementCollg12TxtCntr.element);
			that.btStrpElementCollg12TxtCntr.appendTo(that.btStrpElementRow.element);
			that.btStrpElementRow.appendTo(that.btStrpElementDivCont.element);

			that.normalElementLabel1.writeHtml('Name');
			that.normalElementLabel1.appendTo(that.btStrpElementFrmGrpColXs12Floating.element);
			that.normalElementInput1.addClass('form-control');
			that.normalElementInput1.addAttribute('placeholder','Name');
			that.normalElementInput1.addAttribute('type','text');
			that.normalElementInput1.appendTo(that.btStrpElementFrmGrpColXs12Floating.element);
			that.btStrpElementFrmGrpColXs12Floating.appendTo(that.btStrpElementRow2.element);
			that.btStrpElementRow2.appendTo(that.normalElementForm.element);

			that.normalElementLabel.writeHtml('Email Address');
			that.normalElementLabel.appendTo(that.btStrpElementFrmGrpColXs12Floating1.element);
			that.normalElementInput.addClass('form-control');
			that.normalElementInput.addAttribute('placeholder','Email Address');
			that.normalElementInput.addAttribute('type','email');
			that.normalElementInput.appendTo(that.btStrpElementFrmGrpColXs12Floating1.element);
			that.btStrpElementFrmGrpColXs12Floating1.appendTo(that.btStrpElementRow3.element);
			that.btStrpElementRow3.appendTo(that.normalElementForm.element);

			that.normalElementBr.appendTo(that.btStrpElementFrmGrpColXs12.element);
			that.btStrpElementBtnBtnSucBtnLg.writeHtml('Submit');
			that.btStrpElementBtnBtnSucBtnLg.addAttribute('type','submit');
			that.btStrpElementBtnBtnSucBtnLg.appendTo(that.btStrpElementFrmGrpColXs12.element);
			that.btStrpElementFrmGrpColXs12.appendTo(that.btStrpElementRow4.element);
			that.btStrpElementRow4.appendTo(that.normalElementForm.element);

			that.normalElementForm.appendTo(that.btStrpElementCollg8CollgOff2TxtCntr.element);
			that.btStrpElementCollg8CollgOff2TxtCntr.removeClass('text-center');
			that.btStrpElementCollg8CollgOff2TxtCntr.appendTo(that.btStrpElementRow1.element);
			that.btStrpElementRow1.appendTo(that.btStrpElementDivCont.element);
			that.btStrpElementDivCont.appendTo(elementDestination);
		}
		else if(elementType == 'bootForm'){
			that.initiateBootSrapComponents();
			that.btStrpElementInpForm.appendTo(that.btStrpElementDivFormGrp.element);
			that.btStrpElementDivFormGrp.appendTo(that.btStrpElementFormNavBarForm.element);
			that.btStrpElementBtnBtnBtnDef.writeHtml('Submit');
			that.btStrpElementBtnBtnBtnDef.appendTo(that.btStrpElementFormNavBarForm.element);
			that.btStrpElementFormNavBarForm.appendTo(elementDestination);
		}
		else if(elementType == 'bootBrandImg'){
			that.initiateBootSrapComponents();
			that.initiateNormalComponents();
			that.normalElementImg.appendTo(that.btStrpElementANavBarBrand.element);
			that.btStrpElementANavBarBrand.appendTo(that.btStrpElementDivNavBarHeader.element);
			that.btStrpElementDivNavBarHeader.appendTo(that.btStrpElementDivContFluid.element);
			that.btStrpElementDivContFluid.appendTo(that.btStrpElementNav.element);
			that.btStrpElementNav.appendTo(elementDestination);

		}
		else if(elementType == 'bootButton'){
			that.initiateBootSrapComponents();
			that.btStrpElementBtnBtnBtnDef.writeHtml('Button');
			that.btStrpElementBtnBtnBtnDef.appendTo(elementDestination);
		}
		else if(elementType == 'span'){
			that.divisionElement = new ElementSection();
			that.divisionElement.createElementType('span');
			that.divisionElement.addClass('spanContainer');
			that.divisionElement.addAttribute('id','boxspan'+count);
			that.divisionElement.addStyle('background-color:#333333;width:20%;height:100px;cursor:pointer;margin:1px;color:#ffffff');
			that.divisionElement.writeHtml('This is a span');
			that.divisionElement.createEvent("mouseenter","mouseEnter");
			that.divisionElement.createEvent("mouseleave","mouseLeave");
			that.divisionElement.createEvent("mouseout","mouseOut");
			that.divisionElement.createEvent("click","changeFormFields");
			that.divisionElement.addSelectClassComponents('divisionContainer'+count);
			that.divisionElement.appendTo(elementDestination);
		}
		else if(elementType == 'ul'){
			that.divisionElement = new ElementSection();
			that.divisionElement.createElementType('ul');
			that.divisionElement.addClass('ulContainer');
			that.divisionElement.addAttribute('id','boxul'+count);
			that.divisionElement.addStyle('background-color:#292929;width:50%;height:100px;float:left;cursor:pointer;margin:1px;');
			that.divisionElement.createEvent("mouseenter","mouseEnter");
			that.divisionElement.createEvent("mouseleave","mouseLeave");
			that.divisionElement.createEvent("mouseout","mouseOut");
			that.divisionElement.createEvent("click","changeFormFields");
			that.divisionElement.addSelectClassComponents('divisionContainer'+count);
			that.divisionElement.appendTo(elementDestination);
		}
		else if(elementType == 'li'){
			that.divisionElement = new ElementSection();
			that.divisionElement.createElementType('li');
			that.divisionElement.addClass('liClass');
			that.divisionElement.addAttribute('id','boxli'+count);
			that.divisionElement.addStyle('background-color:#2f2f2f;width:50%;height:100px;float:left;cursor:pointer;margin:1px;');
			that.divisionElement.createEvent("mouseenter","mouseEnter");
			that.divisionElement.createEvent("mouseleave","mouseLeave");
			that.divisionElement.createEvent("mouseout","mouseOut");
			that.divisionElement.createEvent("click","changeFormFields");
			that.divisionElement.addSelectClassComponents('divisionContainer'+count);
			that.divisionElement.appendTo(elementDestination);
		}
		else if(elementType == 'p'){
			that.divisionElement = new ElementSection();
			that.divisionElement.createElementType('p');
			that.divisionElement.addClass('pClass');
			that.divisionElement.writeHtml("This is a paragraph");
			that.divisionElement.addAttribute('contentEditable','true');
			that.divisionElement.addStyle('color:#ffffff;');
			that.divisionElement.addAttribute('id','boxp'+count);
			that.divisionElement.createEvent("mouseenter","mouseEnter");
			that.divisionElement.createEvent("mouseleave","mouseLeave");
			that.divisionElement.createEvent("mouseout","mouseOut");
			that.divisionElement.createEvent("click","changeFormFields");
			that.divisionElement.addSelectClassComponents('divisionContainer'+count);
			that.divisionElement.appendTo(elementDestination);
		}
		else if(elementType == 'a'){
			that.divisionElement = new ElementSection();
			that.divisionElement.createElementType('a');
			that.divisionElement.addClass('aClass');
			that.divisionElement.writeHtml("This is a link");
			that.divisionElement.addAttribute("href","#");
			that.divisionElement.addStyle('color:#000080;');
			that.divisionElement.addAttribute('contentEditable','true');
			that.divisionElement.addAttribute('id','boxa'+count);
			that.divisionElement.createEvent("mouseenter","mouseEnter");
			that.divisionElement.createEvent("mouseleave","mouseLeave");
			that.divisionElement.createEvent("mouseout","mouseOut");
			that.divisionElement.createEvent("click","changeFormFields");
			that.divisionElement.addSelectClassComponents('divisionContainer'+count);
			that.divisionElement.appendTo(elementDestination);
		}
		else if(elementType == 'img'){
			that.divisionElement = new ElementSection();
			that.divisionElement.createElementType('img');
			that.divisionElement.addClass('imgClass');
			that.divisionElement.addStyle('color:#000080;');
			that.divisionElement.addAttribute('src','images/brush.png');
			that.divisionElement.addAttribute('id','boximg'+count);
			that.divisionElement.createEvent("mouseenter","mouseEnter");
			that.divisionElement.createEvent("mouseleave","mouseLeave");
			that.divisionElement.createEvent("mouseout","mouseOut");
			that.divisionElement.createEvent("click","changeFormFields");
			that.divisionElement.addSelectClassComponents('divisionContainer'+count);
			that.divisionElement.appendTo(elementDestination);
		}
		else if(elementType == 'form'){
			that.divisionElement = new ElementSection();
			that.divisionElement.createElementType('form');
			that.divisionElement.addClass('formClass');
			that.divisionElement.addStyle('color:#000080;');
			that.divisionElement.addAttribute('id','boxForm'+count);
			that.divisionElement.writeHtml('This is a form');
			that.divisionElement.createEvent("mouseenter","mouseEnter");
			that.divisionElement.createEvent("mouseleave","mouseLeave");
			that.divisionElement.createEvent("mouseout","mouseOut");
			that.divisionElement.createEvent("click","changeFormFields");
			that.divisionElement.addSelectClassComponents('divisionContainer'+count);
			that.divisionElement.appendTo(elementDestination);
		}
		else if(elementType == 'textarea'){
			that.divisionElement = new ElementSection();
			that.divisionElement.createElementType('textarea');
			that.divisionElement.addClass('textareaClass');
			that.divisionElement.addStyle('color:#000080;');
			that.divisionElement.addAttribute('id','boxTextarea'+count);
			that.divisionElement.addAttribute('rows','4');
			that.divisionElement.addAttribute('cols','50');
			that.divisionElement.createEvent("mouseenter","mouseEnter");
			that.divisionElement.createEvent("mouseleave","mouseLeave");
			that.divisionElement.createEvent("mouseout","mouseOut");
			that.divisionElement.createEvent("click","changeFormFields");
			that.divisionElement.addSelectClassComponents('divisionContainer'+count);
			that.divisionElement.appendTo(elementDestination);
		}
		else if(elementType == 'label'){
			that.divisionElement = new ElementSection();
			that.divisionElement.createElementType('label');
			that.divisionElement.addClass('labelClass');
			that.divisionElement.addStyle('color:#000080;');
			that.divisionElement.addAttribute('id','boxlabel'+count);
			that.divisionElement.writeHtml('This is a label');
			that.divisionElement.createEvent("mouseenter","mouseEnter");
			that.divisionElement.createEvent("mouseleave","mouseLeave");
			that.divisionElement.createEvent("mouseout","mouseOut");
			that.divisionElement.createEvent("click","changeFormFields");
			that.divisionElement.addSelectClassComponents('labelClass'+count);
			that.divisionElement.appendTo(elementDestination);
		}
		else if(elementType == 'select'){
			that.divisionElement = new ElementSection();
			that.divisionElement.createElementType('select');
			that.divisionElement.addClass('selectClass');
			that.divisionElement.addStyle('color:#000080;');
			that.divisionElement.addAttribute('id','boxSelect'+count);
			that.divisionElement.createEvent("mouseenter","mouseEnter");
			that.divisionElement.createEvent("mouseleave","mouseLeave");
			that.divisionElement.createEvent("mouseout","mouseOut");
			that.divisionElement.createEvent("click","changeFormFields");
			that.divisionElement.addSelectClassComponents('selectClass'+count);
			that.divisionElement.appendTo(elementDestination);
		}
		else if(elementType == 'txtinput'){
			that.divisionElement = new ElementSection();
			that.divisionElement.createElementType('input');
			that.divisionElement.addClass('inputClass');
			that.divisionElement.addStyle('color:#000080;');
			that.divisionElement.addAttribute('type','text');
			that.divisionElement.addAttribute('id','boxInput'+count);
			that.divisionElement.createEvent("mouseenter","mouseEnter");
			that.divisionElement.createEvent("mouseleave","mouseLeave");
			that.divisionElement.createEvent("mouseout","mouseOut");
			that.divisionElement.createEvent("click","changeFormFields");
			that.divisionElement.addSelectClassComponents('inputClass'+count);
			that.divisionElement.appendTo(elementDestination);
		}
		else if(elementType = 'button'){
			that.divisionElement = new ElementSection();
			that.divisionElement.createElementType('button');
			that.divisionElement.addClass('buttonClass');
			that.divisionElement.addStyle('color:#000080;');
			that.divisionElement.addAttribute('id','boxButton'+count);
			that.divisionElement.writeHtml('Button');
			that.divisionElement.addAttribute('type','button');
			that.divisionElement.createEvent("mouseenter","mouseEnter");
			that.divisionElement.createEvent("mouseleave","mouseLeave");
			that.divisionElement.createEvent("mouseout","mouseOut");
			that.divisionElement.createEvent("click","changeFormFields");
			that.divisionElement.addSelectClassComponents('buttonClass'+count);
			that.divisionElement.appendTo(elementDestination);
		}
	}
	this.initiateBootSrapComponents = function(){
		//div element with class navbar-header
		that.btStrpElementDivNavBarHeader = new ElementSection();
		that.btStrpElementDivNavBarHeader.createCompoundElements('div','navbar-header');
		//nav element with class navbar navbar-default
		that.btStrpElementNav = new ElementSection();
		that.btStrpElementNav.createCompoundElements('nav','navbar navbar-default');
		//div element with class container
		that.btStrpElementDivCont = new ElementSection();
		that.btStrpElementDivCont.createCompoundElements('div','container');
		//div element with class container-fluid
		that.btStrpElementDivContFluid = new ElementSection();
		that.btStrpElementDivContFluid.createCompoundElements('div','container-fluid');
		//anchor element with class navbar-brand
		that.btStrpElementANavBarBrand = new ElementSection();
		that.btStrpElementANavBarBrand.createCompoundElements('a','navbar-brand');
		//button element with class btn and btn-active
		that.btStrpElementBtnBtnBtnDef = new ElementSection();
		that.btStrpElementBtnBtnBtnDef.createCompoundElements('button','btn btn-active');
		//button element with class btn and btn-success btn-lg
		that.btStrpElementBtnBtnSucBtnLg = new ElementSection();
		that.btStrpElementBtnBtnSucBtnLg.createCompoundElements('button','btn btn-success btn-lg');
		//form element with class navbar-form and navbar-left
		that.btStrpElementFormNavBarForm = new ElementSection();
		that.btStrpElementFormNavBarForm.createCompoundElements('form','navbar-form navbar-right');
		//div element with class form-group
		that.btStrpElementDivFormGrp = new ElementSection();
		that.btStrpElementDivFormGrp.createCompoundElements('div','form-group');
		//input element with class form-control
		that.btStrpElementInpForm = new ElementSection();
		that.btStrpElementInpForm.createCompoundElements('input','form-control');
		//div element with class Success
		that.btStrpElementSuccess = new ElementSection();
		that.btStrpElementSuccess.createCompoundElements('div','success');
		//div element with class row
		that.btStrpElementRow = new ElementSection();
		that.btStrpElementRow.createCompoundElements('div','row');
		//div element with class row1
		that.btStrpElementRow1 = new ElementSection();
		that.btStrpElementRow1.createCompoundElements('div','row');
		//div element with class row1
		that.btStrpElementRow2 = new ElementSection();
		that.btStrpElementRow2.createCompoundElements('div','row');
		//div element with class row1
		that.btStrpElementRow3 = new ElementSection();
		that.btStrpElementRow3.createCompoundElements('div','row');
		//div element with class row1
		that.btStrpElementRow4 = new ElementSection();
		that.btStrpElementRow4.createCompoundElements('div','row');
		//div element with class row1
		that.btStrpElementRow5 = new ElementSection();
		that.btStrpElementRow5.createCompoundElements('div','row');
		//div element with class col-lg-12 text-center
		that.btStrpElementCollg12TxtCntr = new ElementSection();
		that.btStrpElementCollg12TxtCntr.createCompoundElements('div','col-lg-12 text-center');
		//div element with class col-lg-4 col-lg-offset-2
		that.btStrpElementCollg4CollgOff2 = new ElementSection();
		that.btStrpElementCollg4CollgOff2.createCompoundElements('div','col-lg-4 col-lg-offset-2');
		//div element with class col-lg-4
		that.btStrpElementCollg4 = new ElementSection();
		that.btStrpElementCollg4.createCompoundElements('div','col-lg-4');
		//div element with class col-lg-8 col-lg-offset-2 text-center
		that.btStrpElementCollg8CollgOff2TxtCntr = new ElementSection();
		that.btStrpElementCollg8CollgOff2TxtCntr.createCompoundElements('div','col-lg-8 col-lg-offset-2 text-center');
		//div element with class form-group col-xs-12
		that.btStrpElementFrmGrpColXs12 = new ElementSection();
		that.btStrpElementFrmGrpColXs12.createCompoundElements('div','form-group col-xs-12');
		//div element with class form-group col-xs-12 floating-label-group
		that.btStrpElementFrmGrpColXs12Floating = new ElementSection();
		that.btStrpElementFrmGrpColXs12Floating.createCompoundElements('div','form-group col-xs-12 floating-label-form-group');
		//div element with class form-group col-xs-12 floating-label-group
		that.btStrpElementFrmGrpColXs12Floating1 = new ElementSection();
		that.btStrpElementFrmGrpColXs12Floating1.createCompoundElements('div','form-group col-xs-12 floating-label-form-group');
		//div element with class form-group col-xs-12 floating-label-group
		that.btStrpElementFrmGrpColXs12Floating2 = new ElementSection();
		that.btStrpElementFrmGrpColXs12Floating2.createCompoundElements('div','form-group col-xs-12 floating-label-form-group');
		//div element with class form-group col-xs-12 floating-label-group
		that.btStrpElementFrmGrpColXs12Floating3 = new ElementSection();
		that.btStrpElementFrmGrpColXs12Floating3.createCompoundElements('div','form-group col-xs-12 floating-label-form-group');

	}
	that.initiateNormalComponents = function(){
		//img element
		that.normalElementImg = new ElementSection();
		that.normalElementImg.createCompoundElements('img','');
		that.normalElementImg.addAttribute('alt','Image');

		that.normalElementH2 = new ElementSection();
		that.normalElementH2.createCompoundElements('h2','');

		that.normalElementHr = new ElementSection();
		that.normalElementHr.createCompoundElements('hr','');

		that.normalElementP = new ElementSection();
		that.normalElementP.createCompoundElements('p','');

		that.normalElementP1 = new ElementSection();
		that.normalElementP1.createCompoundElements('p','');

		that.normalElementA = new ElementSection();
		that.normalElementA.createCompoundElements('a','');
		that.normalElementA.addAttribute('href','#');

		that.normalElementForm = new ElementSection();
		that.normalElementForm.createElementType('form');

		that.normalElementInput = new ElementSection();
		that.normalElementInput.createCompoundElements('input','');

		that.normalElementLabel = new ElementSection();
		that.normalElementLabel.createCompoundElements('label','');

		that.normalElementInput1 = new ElementSection();
		that.normalElementInput1.createCompoundElements('input','');

		that.normalElementLabel1 = new ElementSection();
		that.normalElementLabel1.createCompoundElements('label','');

		that.normalElementBr = new ElementSection();
		that.normalElementBr.createCompoundElements('br','');

	}
	this.getElementContainerPortion = function(){
		return that.elementContainer.element;
	}
}
