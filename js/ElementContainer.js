function ElementContainer(){
	this.elementContainer;
	this.elementDiv;
	this.titleDivision;
	this.divisionElement;
	var count=0;
	var exchangeVariable=0;
	var mainLayoutInstance = MainLayout.getInstance();
	var startX, startY, startWidth, startHeight;
	var that = this;

	this.init = function(){
		that.elementContainer = new ElementSection();
		that.elementContainer.createElementType('div');
		that.elementContainer.addClass('elementContainer');
		that.titleDiv();
		// that.toggleHeadingWrapper('HTML Components');
		// that.createComponentsContainer();
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
		that.toggleHeadingWrapper('BootStrap Components');
		that.createComponentsContainer();
		that.makeBootButton();
		that.makeBootNavBar();
		that.makeBootBrandImage();
		that.makeBootNavForm();
		that.makeBootAboutSection();
		that.makeBootContact();
	}
	this.titleDiv = function(){
		var titleDivision = new ElementSection();
		titleDivision.createElementType('div');
		titleDivision.addStyle('background:black;width:100%;height:30px;color:white;line-height:30px;font-size:16px;');
		titleDivision.writeHtml('Drag Components From Here');
		titleDivision.appendTo(that.elementContainer.element);
	}
	this.toggleHeadingWrapper = function(headerName){
		that.clickWrapper = new ElementSection();
		that.clickWrapper.createElementType('div');
		that.clickWrapper.addClass('toggleHeadingWrapper');
		that.clickWrapper.createEvent('click','toggleDisplayContainer');
		that.clickableHeading(headerName);
		that.clickWrapper.appendTo(that.elementContainer.element);
	}
	this.clickableHeading = function(headerName){
		var clickHeading = new ElementSection();
		clickHeading.createElementType('h2');
		clickHeading.addClass('clickableHeading');
		clickHeading.writeHtml(headerName);
		clickHeading.appendTo(that.clickWrapper.element);
	}
	this.createComponentsContainer = function(){
		that.componentsContainer = new ElementSection();
		that.componentsContainer.createElementType('div');
		that.componentsContainer.addClass('componentContainer');
		that.componentsContainer.appendTo(that.elementContainer.element);
	}
	this.makeDivisionButton =function(){
		var component = new ElementSection();
		component.createElementType('button');
		component.addAttribute('value','div');
		component.writeHtml('DIV Element');
		component.addAttribute('id','box');
		//component.addStyle('background-color:#000000;width:20%;height:100px;float:left;cursor:pointer;margin:1px');
		component.addAttribute('draggable','true');
		component.element.addEventListener('dragstart',that.dragStart);
		component.createEvent('mouseenter','mouseEnter');
		component.createEvent('mouseleave','mouseLeave');
		component.createEvent('mouseout','mouseOut');
		component.appendTo(that.componentsContainer.element);
	}
	this.makeUnorderedListButton = function(){
		var component = new ElementSection();
		component.createElementType('button');
		component.addAttribute('value','ul');
		component.writeHtml('ul Element');
		component.addAttribute('id','boxul');
		//component.addStyle('background-color:#000000;width:20%;height:100px;float:left;cursor:pointer;margin:1px');
		component.addAttribute('draggable','true');
		component.element.addEventListener('dragstart',that.dragStart);
		component.createEvent('mouseenter','mouseEnter');
		component.createEvent('mouseleave','mouseLeave');
		component.createEvent('mouseout','mouseOut');
		component.appendTo(that.componentsContainer.element);
	}
	this.makeListButton = function(){
		var component = new ElementSection();
		component.createElementType('button');
		component.addAttribute('value','li');
		component.writeHtml('li Element');
		component.addAttribute('id','boxli');
		//component.addStyle('background-color:#000000;width:20%;height:100px;float:left;cursor:pointer;margin:1px');
		component.addAttribute('draggable','true');
		component.element.addEventListener('dragstart',that.dragStart);
		component.createEvent('mouseenter','mouseEnter');
		component.createEvent('mouseleave','mouseLeave');
		component.createEvent('mouseout','mouseOut');
		component.appendTo(that.componentsContainer.element);
	}
	this.makeParagraphButton = function(){
		var component = new ElementSection();
		component.createElementType('button');
		component.addAttribute('value','p');
		component.writeHtml('p Element');
		component.addAttribute('id','boxp');
		//component.addStyle('background-color:#000000;width:20%;height:100px;float:left;cursor:pointer;margin:1px');
		component.addAttribute('draggable','true');
		component.element.addEventListener('dragstart',that.dragStart);
		component.createEvent('mouseenter','mouseEnter');
		component.createEvent('mouseleave','mouseLeave');
		component.createEvent('mouseout','mouseOut');
		component.appendTo(that.componentsContainer.element);
	}
	this.makeAnchorButton = function(){
		var component = new ElementSection();
		component.createElementType('button');
		component.addAttribute('value','a');
		component.writeHtml('a Element');
		component.addAttribute('id','boxa');
		//component.addStyle('background-color:#000000;width:20%;height:100px;float:left;cursor:pointer;margin:1px');
		component.addAttribute('draggable','true');
		component.element.addEventListener('dragstart',that.dragStart);
		component.createEvent('mouseenter','mouseEnter');
		component.createEvent('mouseleave','mouseLeave');
		component.createEvent('mouseout','mouseOut');
		component.appendTo(that.componentsContainer.element);
	}
	this.makeImageButton = function(){
		var component = new ElementSection();
		component.createElementType('button');
		component.addAttribute('value','img');
		component.writeHtml('img Element');
		component.addAttribute('id','boximg');
		//component.addStyle('background-color:#000000;width:20%;height:100px;float:left;cursor:pointer;margin:1px');
		component.addAttribute('draggable','true');
		component.element.addEventListener('dragstart',that.dragStart);
		component.createEvent('mouseenter','mouseEnter');
		component.createEvent('mouseleave','mouseLeave');
		component.createEvent('mouseout','mouseOut');
		component.appendTo(that.componentsContainer.element);
	}
	this.makeSpanButton = function(){
		var component = new ElementSection();
		component.createElementType('button');
		component.addAttribute('value','span');
		component.writeHtml('span Element');
		component.addAttribute('id','boxspan');
		//component.addStyle('background-color:#000000;width:20%;height:100px;float:left;cursor:pointer;margin:1px');
		component.addAttribute('draggable','true');
		component.element.addEventListener('dragstart',that.dragStart);
		component.createEvent('mouseenter','mouseEnter');
		component.createEvent('mouseleave','mouseLeave');
		component.createEvent('mouseout','mouseOut');
		component.appendTo(that.componentsContainer.element);
	}
	this.makeFormButton = function(){
		var component = new ElementSection();
		component.createElementType('button');
		component.addAttribute('value','form');
		component.writeHtml('form Element');
		component.addAttribute('id','boxform');
		//component.addStyle('background-color:#000000;width:20%;height:100px;float:left;cursor:pointer;margin:1px');
		component.addAttribute('draggable','true');
		component.element.addEventListener('dragstart',that.dragStart);
		component.createEvent('mouseenter','mouseEnter');
		component.createEvent('mouseleave','mouseLeave');
		component.createEvent('mouseout','mouseOut');
		component.appendTo(that.componentsContainer.element);
	}
	this.makeTextAreaButton = function(){
		var component = new ElementSection();
		component.createElementType('button');
		component.addAttribute('value','textarea');
		component.writeHtml('textarea Element');
		component.addAttribute('id','boxTxtArea');
		//component.addStyle('background-color:#000000;width:20%;height:100px;float:left;cursor:pointer;margin:1px');
		component.addAttribute('draggable','true');
		component.element.addEventListener('dragstart',that.dragStart);
		component.createEvent('mouseenter','mouseEnter');
		component.createEvent('mouseleave','mouseLeave');
		component.createEvent('mouseout','mouseOut');
		component.appendTo(that.componentsContainer.element);
	}
	this.makeLabelButton = function(){
		var component = new ElementSection();
		component.createElementType('button');
		component.addAttribute('value','label');
		component.writeHtml('label Element');
		component.addAttribute('id','boxlabel');
		//component.addStyle('background-color:#000000;width:20%;height:100px;float:left;cursor:pointer;margin:1px');
		component.addAttribute('draggable','true');
		component.element.addEventListener('dragstart',that.dragStart);
		component.createEvent('mouseenter','mouseEnter');
		component.createEvent('mouseleave','mouseLeave');
		component.createEvent('mouseout','mouseOut');
		component.appendTo(that.componentsContainer.element);
	}
	this.makeSelectButton = function(){
		var component = new ElementSection();
		component.createElementType('button');
		component.addAttribute('value','select');
		component.writeHtml('select Element');
		component.addAttribute('id','boxSelect');
		//component.addStyle('background-color:#000000;width:20%;height:100px;float:left;cursor:pointer;margin:1px');
		component.addAttribute('draggable','true');
		component.element.addEventListener('dragstart',that.dragStart);
		component.createEvent('mouseenter','mouseEnter');
		component.createEvent('mouseleave','mouseLeave');
		component.createEvent('mouseout','mouseOut');
		component.appendTo(that.componentsContainer.element);
	}
	this.makeBtnButton = function(){
		var component = new ElementSection();
		component.createElementType('button');
		component.addAttribute('value','button');
		component.writeHtml('button Element');
		component.addAttribute('id','boxButton');
		//component.addStyle('background-color:#000000;width:20%;height:100px;float:left;cursor:pointer;margin:1px');
		component.addAttribute('draggable','true');
		component.element.addEventListener('dragstart',that.dragStart);
		component.createEvent('mouseenter','mouseEnter');
		component.createEvent('mouseleave','mouseLeave');
		component.createEvent('mouseout','mouseOut');
		component.appendTo(that.componentsContainer.element);
	}
	this.makeInputButton = function(){
		var component = new ElementSection();
		component.createElementType('button');
		component.addAttribute('value','txtinput');
		component.writeHtml('input Element');
		component.addAttribute('id','boxInput');
		//component.addStyle('background-color:#000000;width:20%;height:100px;float:left;cursor:pointer;margin:1px');
		component.addAttribute('draggable','true');
		component.element.addEventListener('dragstart',that.dragStart);
		component.createEvent('mouseenter','mouseEnter');
		component.createEvent('mouseleave','mouseLeave');
		component.createEvent('mouseout','mouseOut');
		component.appendTo(that.componentsContainer.element);
	}
	this.makeBootButton = function(){
		var bootStrapComponent = new ElementSection();
		bootStrapComponent.createElementType('button');
		bootStrapComponent.addAttribute('value','bootButton');
		bootStrapComponent.writeHtml('Bootstrap Button');
		bootStrapComponent.addAttribute('id','boxBoot');
		//component.addStyle('background-color:#000000;width:20%;height:100px;float:left;cursor:pointer;margin:1px');
		bootStrapComponent.addAttribute('draggable','true');
		bootStrapComponent.element.addEventListener('dragstart',that.dragStart);
		bootStrapComponent.createEvent('mouseenter','mouseEnter');
		bootStrapComponent.createEvent('mouseleave','mouseLeave');
		bootStrapComponent.createEvent('mouseout','mouseOut');
		bootStrapComponent.appendTo(that.componentsContainer.element);
	}
	this.makeBootNavBar = function(){
		var bootStrapComponentNav = new ElementSection();
		bootStrapComponentNav.createElementType('button');
		bootStrapComponentNav.addAttribute('value','bootNavBar');
		bootStrapComponentNav.writeHtml('Bootstrap Navigation');
		bootStrapComponentNav.addAttribute('id','boxNav');
		//component.addStyle('background-color:#000000;width:20%;height:100px;float:left;cursor:pointer;margin:1px');
		bootStrapComponentNav.addAttribute('draggable','true');
		bootStrapComponentNav.element.addEventListener('dragstart',that.dragStart);
		bootStrapComponentNav.createEvent('mouseenter','mouseEnter');
		bootStrapComponentNav.createEvent('mouseleave','mouseLeave');
		bootStrapComponentNav.createEvent('mouseout','mouseOut');
		bootStrapComponentNav.appendTo(that.componentsContainer.element);
	}
	this.makeBootBrandImage = function(){
		var bootStrapComponent = new ElementSection();
		bootStrapComponent.createElementType('button');
		bootStrapComponent.addAttribute('value','bootBrandImg');
		bootStrapComponent.writeHtml('Bootstrap Header Icon');
		bootStrapComponent.addAttribute('id','boxBrand');
		//component.addStyle('background-color:#000000;width:20%;height:100px;float:left;cursor:pointer;margin:1px');
		bootStrapComponent.addAttribute('draggable','true');
		bootStrapComponent.element.addEventListener('dragstart',that.dragStart);
		bootStrapComponent.createEvent('mouseenter','mouseEnter');
		bootStrapComponent.createEvent('mouseleave','mouseLeave');
		bootStrapComponent.createEvent('mouseout','mouseOut');
		bootStrapComponent.appendTo(that.componentsContainer.element);
	}
	this.makeBootNavForm = function(){
		var bootStrapComponent = new ElementSection();
		bootStrapComponent.createElementType('button');
		bootStrapComponent.addAttribute('value','bootForm');
		bootStrapComponent.writeHtml('Bootstrap Form');
		bootStrapComponent.addAttribute('id','boxNavForm');
		//component.addStyle('background-color:#000000;width:20%;height:100px;float:left;cursor:pointer;margin:1px');
		bootStrapComponent.addAttribute('draggable','true');
		bootStrapComponent.element.addEventListener('dragstart',that.dragStart);
		bootStrapComponent.createEvent('mouseenter','mouseEnter');
		bootStrapComponent.createEvent('mouseleave','mouseLeave');
		bootStrapComponent.createEvent('mouseout','mouseOut');
		bootStrapComponent.appendTo(that.componentsContainer.element);
	}
	this.makeBootAboutSection = function(){
		var bootStrapComponent = new ElementSection();
		bootStrapComponent.createElementType('button');
		bootStrapComponent.addAttribute('value','bootAbout');
		bootStrapComponent.writeHtml('About Content');
		bootStrapComponent.addAttribute('id','boxContentAbout');
		//component.addStyle('background-color:#000000;width:20%;height:100px;float:left;cursor:pointer;margin:1px');
		bootStrapComponent.addAttribute('draggable','true');
		bootStrapComponent.element.addEventListener('dragstart',that.dragStart);
		bootStrapComponent.createEvent('mouseenter','mouseEnter');
		bootStrapComponent.createEvent('mouseleave','mouseLeave');
		bootStrapComponent.createEvent('mouseout','mouseOut');
		bootStrapComponent.appendTo(that.componentsContainer.element);
	}
	this.makeBootContact = function(){
		var bootStrapComponent = new ElementSection();
		bootStrapComponent.createElementType('button');
		bootStrapComponent.addAttribute('value','bootContact');
		bootStrapComponent.writeHtml('Contact');
		bootStrapComponent.addAttribute('id','boxContentContact');
		//component.addStyle('background-color:#000000;width:20%;height:100px;float:left;cursor:pointer;margin:1px');
		bootStrapComponent.addAttribute('draggable','true');
		bootStrapComponent.element.addEventListener('dragstart',that.dragStart);
		bootStrapComponent.createEvent('mouseenter','mouseEnter');
		bootStrapComponent.createEvent('mouseleave','mouseLeave');
		bootStrapComponent.createEvent('mouseout','mouseOut');
		bootStrapComponent.appendTo(that.componentsContainer.element);
	}
	this.createStaticComponents = function(elementType,elementDestination){
		count++;
		if(elementType == 'div'){
			that.divisionElement = new ElementSection();
			that.divisionElement.createElementType('div');
			that.divisionElement.addClass('divisionContainer'+count);
			that.divisionElement.addAttribute('id','box'+count);
			that.divisionElement.addStyle('background-color:#222222;width:20%;height:100px;float:left;cursor:se-resize;margin:1px;');
			that.divisionElement.createEvent('mouseenter','mouseEnter');
			that.divisionElement.createEvent('mouseleave','mouseLeave');
			that.divisionElement.createEvent('mouseout','mouseOut');
			that.divisionElement.createEvent('click','changeFormFields');
			that.divisionElement.element.addEventListener('dblclick',that.resizeElement);
			that.divisionElement.addSelectClassComponents('divisionContainer'+count);
			that.divisionElement.appendTo(elementDestination);
		}
		else if(elementType == 'bootNavBar'){
			that.initiateBootSrapComponents();
			that.initiateNormalComponents();

			that.btStrpElementDivNavHeader = new ElementSection();
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

			that.btStrpElementDivNavHeader.createCompoundElements('div','nav-header');
			that.btStrpElementDivNavHeader.appendTo(that.btStrpElementDivContFluid.element);

			that.btStrpElementBtnNavTogCol.createCompoundElements('button','navbar-toggle Collapsed');
			that.btStrpElementBtnNavTogCol.appendTo(that.btStrpElementDivNavHeader.element);

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
			that.btStrpElementANav.appendTo(that.btStrpElementDivNavHeader.element);

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

			that.normalElementLabel.writeHtml('Name');
			that.normalElementLabel.appendTo(that.btStrpElementFrmGrpColXs12Floating.element);
			that.normalElementInput.addClass('form-control');
			that.normalElementInput.addAttribute('placeholder','Name');
			that.normalElementInput.addAttribute('type','text');
			that.normalElementInput.appendTo(that.btStrpElementFrmGrpColXs12Floating.element);
			that.btStrpElementFrmGrpColXs12Floating.appendTo(that.btStrpElementRow2.element);
			that.btStrpElementRow2.appendTo(that.normalElementForm.element);

			that.normalElementLabel1.writeHtml('Email Address');
			that.normalElementLabel1.appendTo(that.btStrpElementFrmGrpColXs12Floating1.element);
			that.normalElementInput1.addClass('form-control');
			that.normalElementInput1.addAttribute('placeholder','Email Address');
			that.normalElementInput1.addAttribute('type','email');
			that.normalElementInput1.appendTo(that.btStrpElementFrmGrpColXs12Floating1.element);
			that.btStrpElementFrmGrpColXs12Floating1.appendTo(that.btStrpElementRow3.element);
			that.btStrpElementRow3.appendTo(that.normalElementForm.element);

			that.normalElementLabel2.writeHtml('Phone Number');
			that.normalElementLabel2.appendTo(that.btStrpElementFrmGrpColXs12Floating2.element);
			that.normalElementInput2.addClass('form-control');
			that.normalElementInput2.addAttribute('placeholder','Phone Number');
			that.normalElementInput2.addAttribute('type','tel');
			that.normalElementInput2.appendTo(that.btStrpElementFrmGrpColXs12Floating2.element);
			that.btStrpElementFrmGrpColXs12Floating2.appendTo(that.btStrpElementRow4.element);
			that.btStrpElementRow4.appendTo(that.normalElementForm.element);

			that.normalElementLabel3.writeHtml('Message');
			that.normalElementLabel3.appendTo(that.btStrpElementFrmGrpColXs12Floating3.element);
			that.normalElementTextArea.addClass('form-control');
			that.normalElementTextArea.addAttribute('placeholder','Message');
			that.normalElementTextArea.addAttribute('rows','5');
			that.normalElementTextArea.appendTo(that.btStrpElementFrmGrpColXs12Floating3.element);
			that.btStrpElementFrmGrpColXs12Floating3.appendTo(that.btStrpElementRow5.element);
			that.btStrpElementRow5.appendTo(that.normalElementForm.element);

			that.normalElementBr.appendTo(that.btStrpElementFrmGrpColXs12.element);
			that.btStrpElementBtnBtnSucBtnLg.writeHtml('Send');
			that.btStrpElementBtnBtnSucBtnLg.addAttribute('type','button');
			that.btStrpElementBtnBtnSucBtnLg.appendTo(that.btStrpElementFrmGrpColXs12.element);
			that.btStrpElementFrmGrpColXs12.appendTo(that.btStrpElementRow6.element);
			that.btStrpElementRow6.appendTo(that.normalElementForm.element);

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
			that.divisionElement.createEvent('mouseenter','mouseEnter');
			that.divisionElement.createEvent('mouseleave','mouseLeave');
			that.divisionElement.createEvent('mouseout','mouseOut');
			that.divisionElement.createEvent('click','changeFormFields');
			that.divisionElement.addSelectClassComponents('divisionContainer'+count);
			that.divisionElement.appendTo(elementDestination);
		}
		else if(elementType == 'ul'){
			that.divisionElement = new ElementSection();
			that.divisionElement.createElementType('ul');
			that.divisionElement.addClass('ulContainer');
			that.divisionElement.addAttribute('id','boxul'+count);
			that.divisionElement.addStyle('background-color:#292929;width:50%;height:100px;float:left;cursor:pointer;margin:1px;');
			that.divisionElement.createEvent('mouseenter','mouseEnter');
			that.divisionElement.createEvent('mouseleave','mouseLeave');
			that.divisionElement.createEvent('mouseout','mouseOut');
			that.divisionElement.createEvent('click','changeFormFields');
			that.divisionElement.addSelectClassComponents('divisionContainer'+count);
			that.divisionElement.appendTo(elementDestination);
		}
		else if(elementType == 'li'){
			that.divisionElement = new ElementSection();
			that.divisionElement.createElementType('li');
			that.divisionElement.addClass('liClass');
			that.divisionElement.addAttribute('id','boxli'+count);
			that.divisionElement.addStyle('background-color:#2f2f2f;width:50%;height:100px;float:left;cursor:pointer;margin:1px;');
			that.divisionElement.createEvent('mouseenter','mouseEnter');
			that.divisionElement.createEvent('mouseleave','mouseLeave');
			that.divisionElement.createEvent('mouseout','mouseOut');
			that.divisionElement.createEvent('click','changeFormFields');
			that.divisionElement.addSelectClassComponents('divisionContainer'+count);
			that.divisionElement.appendTo(elementDestination);
		}
		else if(elementType == 'p'){
			that.divisionElement = new ElementSection();
			that.divisionElement.createElementType('p');
			that.divisionElement.addClass('pClass');
			that.divisionElement.writeHtml('This is a paragraph');
			that.divisionElement.addAttribute('contentEditable','true');
			that.divisionElement.addStyle('color:#ffffff;');
			that.divisionElement.addAttribute('id','boxp'+count);
			that.divisionElement.createEvent('mouseenter','mouseEnter');
			that.divisionElement.createEvent('mouseleave','mouseLeave');
			that.divisionElement.createEvent('mouseout','mouseOut');
			that.divisionElement.createEvent('click','changeFormFields');
			that.divisionElement.addSelectClassComponents('divisionContainer'+count);
			that.divisionElement.appendTo(elementDestination);
		}
		else if(elementType == 'a'){
			that.divisionElement = new ElementSection();
			that.divisionElement.createElementType('a');
			that.divisionElement.addClass('aClass');
			that.divisionElement.writeHtml('This is a link');
			that.divisionElement.addAttribute('href','#');
			that.divisionElement.addStyle('color:#000080;');
			that.divisionElement.addAttribute('contentEditable','true');
			that.divisionElement.addAttribute('id','boxa'+count);
			that.divisionElement.createEvent('mouseenter','mouseEnter');
			that.divisionElement.createEvent('mouseleave','mouseLeave');
			that.divisionElement.createEvent('mouseout','mouseOut');
			that.divisionElement.createEvent('click','changeFormFields');
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
			that.divisionElement.createEvent('mouseenter','mouseEnter');
			that.divisionElement.createEvent('mouseleave','mouseLeave');
			that.divisionElement.createEvent('mouseout','mouseOut');
			that.divisionElement.createEvent('click','changeFormFields');
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
			that.divisionElement.createEvent('mouseenter','mouseEnter');
			that.divisionElement.createEvent('mouseleave','mouseLeave');
			that.divisionElement.createEvent('mouseout','mouseOut');
			that.divisionElement.createEvent('click','changeFormFields');
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
			that.divisionElement.createEvent('mouseenter','mouseEnter');
			that.divisionElement.createEvent('mouseleave','mouseLeave');
			that.divisionElement.createEvent('mouseout','mouseOut');
			that.divisionElement.createEvent('click','changeFormFields');
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
			that.divisionElement.createEvent('mouseenter','mouseEnter');
			that.divisionElement.createEvent('mouseleave','mouseLeave');
			that.divisionElement.createEvent('mouseout','mouseOut');
			that.divisionElement.createEvent('click','changeFormFields');
			that.divisionElement.addSelectClassComponents('labelClass'+count);
			that.divisionElement.appendTo(elementDestination);
		}
		else if(elementType == 'select'){
			that.divisionElement = new ElementSection();
			that.divisionElement.createElementType('select');
			that.divisionElement.addClass('selectClass');
			that.divisionElement.addStyle('color:#000080;');
			that.divisionElement.addAttribute('id','boxSelect'+count);
			that.divisionElement.createEvent('mouseenter','mouseEnter');
			that.divisionElement.createEvent('mouseleave','mouseLeave');
			that.divisionElement.createEvent('mouseout','mouseOut');
			that.divisionElement.createEvent('click','changeFormFields');
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
			that.divisionElement.createEvent('mouseenter','mouseEnter');
			that.divisionElement.createEvent('mouseleave','mouseLeave');
			that.divisionElement.createEvent('mouseout','mouseOut');
			that.divisionElement.createEvent('click','changeFormFields');
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
			that.divisionElement.createEvent('mouseenter','mouseEnter');
			that.divisionElement.createEvent('mouseleave','mouseLeave');
			that.divisionElement.createEvent('mouseout','mouseOut');
			that.divisionElement.createEvent('click','changeFormFields');
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
		//div element with class row1
		that.btStrpElementRow6 = new ElementSection();
		that.btStrpElementRow6.createCompoundElements('div','row');
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

		that.normalElementInput2 = new ElementSection();
		that.normalElementInput2.createCompoundElements('input','');

		that.normalElementLabel2 = new ElementSection();
		that.normalElementLabel2.createCompoundElements('label','');

		that.normalElementLabel3 = new ElementSection();
		that.normalElementLabel3.createCompoundElements('label','');

		that.normalElementTextArea = new ElementSection();
		that.normalElementTextArea.createCompoundElements('textarea','')

		that.normalElementBr = new ElementSection();
		that.normalElementBr.createCompoundElements('br','');

	}//Events to resize div
	this.resizeElement = function(ev){
		ev.target.addEventListener('mousedown',that.initDrag);
	}
	this.initDrag = function(e){
		startX = e.clientX;
		startY = e.clientY;
		startWidth = parseInt(document.defaultView.getComputedStyle(e.target).width, 10);
   		startHeight = parseInt(document.defaultView.getComputedStyle(e.target).height, 10);
   		document.documentElement.addEventListener('mousemove', that.doDrag, false);
  		 document.documentElement.addEventListener('mouseup', that.stopDrag, false);
	}
	this.doDrag = function(e) {
   			//e.target.style.width = (startWidth + e.clientX - startX) + 'px';
   			e.target.style.height = (startHeight + e.clientY - startY) + 'px';
	}
 	this.stopDrag = function(e) {
    	document.documentElement.removeEventListener('mousemove', that.doDrag, false);   
    	document.documentElement.removeEventListener('mouseup', that.stopDrag, false);
	}
	//Event for drag 
	this.dragStart = function(ev){
		ev.dataTransfer.effectAllowed='copy';
  		ev.dataTransfer.setData('Text', ev.target.getAttribute('id'));
   		ev.dataTransfer.setDragImage(ev.target,0,0);
   		return true;
	}
	this.getElementContainerPortion = function(){
		return that.elementContainer.element;
	}
}
