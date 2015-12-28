 var count=1;
 var container;
 var dragContainer;
 var marginBox;
 // function dragStart(ev) {
 //   ev.dataTransfer.effectAllowed='move';
 //   ev.dataTransfer.setData("Text", ev.target.getAttribute('id'));
 //   ev.dataTransfer.setDragImage(ev.target,0,0);
 //   return true;
 // }
// function dragEnter(ev){
//   event.preventDefault();
//   dragContainer = ev.target;
//   dragContainer.style.outline = '3px dotted white';
//   container.style.outline ="none";
//   return true;
// }
// function dragOver(ev){
//   event.preventDefault();
// }
// function dragDrop(ev) {
//  count++;
//  var data = ev.dataTransfer.getData("Text");
//  var mainElement = document.getElementById(data);
//  console.log("main",data);
//  ev.target.appendChild(mainElement);
//  ev.stopPropagation();
//  // mainElement.setAttribute("draggable","false");
//  // var copyElement = mainElement.cloneNode(true);
//  // var givenId = copyElement.id;
//  // copyElement.removeAttribute('id',givenId); 
//  // copyElement.setAttribute('id',givenId+count);
//  // var basicElements = new BasicElements();
//  // basicElements.add(copyElement);
//  // dragContainer.style.outline = 'none';
//  return false;
// }
// function mouseEnter(ev){
//   container = ev.target;
//   container.style.outline = '3px dotted white';
//   var spanWidthClass = document.getElementsByClassName('widthSpanned')[0];
//   spanWidthClass.style.background = 'blue';
// }
// function mouseLeave(ev){
//   container.style.outline = 'none';
//   var spanWidthClass = document.getElementsByClassName('widthSpanned')[0];
//   spanWidthClass.style.background = 'white';
// }
// function mouseOut(ev){
//   container.style.outline ='none';
// }
function changeBoxMarginColor(ev){
  marginBox = ev.target;
  marginBox.style.background = 'black';
  marginBox.style.opacity = '0.5';
}
function resetBoxMarginColor(ev){
  marginBox = ev.target;
  marginBox.style.opacity ='1';
  marginBox.style.background ='white';
}
function changeBoxBorderColor(ev){
  var box = ev.target;
  box.style.background = "blue";
  marginBox.style.background ="white";
  marginBox.style.opacity = '1';
  box.style.opacity = '0.5';
}
function resetBoxBorderColor(ev){
  var box = ev.target;
  box.style.background="white";
  box.style.opacity ='1';
}
function divisionClick(ev){
  var division = ev.target;
  var style = window.getComputedStyle(division);
  var divWidth = parseInt(style.getPropertyValue("width"));
  var divHeight = parseInt(style.getPropertyValue("height"));
  var divMargin = parseInt(style.getPropertyValue("margin"));
  var divPadding = parseInt(style.getPropertyValue("padding"));
  var divBorder = parseInt(style.getPropertyValue("border"));
  console.log("width",divWidth);
  console.log("height",divHeight);
  console.log("margin",divMargin);
  console.log("padding",divPadding);
  console.log("border",divBorder);
  var spanWidthClass = document.getElementsByClassName('widthSpanned')[0];
  console.log(spanWidthClass);
  spanWidthClass.innerHTML = divWidth+'X'+divHeight;
}