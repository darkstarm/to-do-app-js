// List title function start
var name = prompt('What is your name?', 'default name');
function listTitle(){
  let grabList = document.getElementById('nameTitle');
  let addHead = document.createElement('h2');
  addHead.textContent = name+'\'s List';
  grabList.appendChild(addHead);
};
listTitle();
//List title function end


//Start Submit button
var userInput = document.getElementById('inputBox');
var listItemHolder = document.getElementById('listItemHolder');
function createListItem(){
  var makeListDiv = document.createElement('div');
  makeListDiv.classList.add('row', 'listBorder');
  listItemHolder.appendChild(makeListDiv);
  var checkboxDiv = document.createElement('div');
  function createCheckBoxDiv(){
    checkboxDiv.classList.add('col-sm-4');
    var makeCheckbox = document.createElement('input');
    makeCheckbox.type = 'checkbox';
    checkboxDiv.appendChild(makeCheckbox);
    makeListDiv.appendChild(checkboxDiv);
    function crossTextOut(){
      itemDiv.classList.toggle('markItemDone');
    };
    makeCheckbox.addEventListener('click', crossTextOut);
  };
  createCheckBoxDiv();
  var itemDiv = document.createElement('div');
  var userInput = document.getElementById('inputBox');
  function createItemDiv(){
    itemDiv.classList.add('col-sm-4');
    var inputValue = userInput.value;
    var textValue = document.createTextNode(inputValue);
    itemDiv.appendChild(textValue);
    makeListDiv.appendChild(itemDiv);
    function editItem(){
      var editedItem = prompt("Editing list item: "+inputValue, inputValue);
      itemDiv.removeChild(textValue);
      function appendEdit(){
        textValue = document.createTextNode(editedItem);
        itemDiv.appendChild(textValue);
      };
      appendEdit();
    };
    function hoverOver(){
      itemDiv.classList.add('hover-class');
    };
    function hoverOut(){
      itemDiv.classList.remove('hover-class');
    };
    itemDiv.addEventListener('mouseout', hoverOut)
    itemDiv.addEventListener('mouseover', hoverOver);
    itemDiv.addEventListener('click', editItem);
  };
  createItemDiv();
  function createDelDiv(){
    var delDiv = document.createElement('div');
    delDiv.classList.add('col-sm-4');
    var delButton = document.createElement('button');
    delButton.innerHTML = '<i class="fa fa-trash-o" aria-hidden="true"></i>';
    delDiv.appendChild(delButton);
    makeListDiv.appendChild(delDiv);
    delButton.addEventListener('click', deleteFunc);
    var deleteItemDiv = makeListDiv;
    function deleteFunc(){
      deleteItemDiv.parentNode.removeChild(makeListDiv);
    };
  };
  createDelDiv();
  userInput.value = "";
};
var grabSubmit = document.getElementById('submitButton');
grabSubmit.addEventListener('click',createListItem);
userInput.addEventListener('keydown', enterKeySubmit);
function enterKeySubmit(enterKey){
  if(enterKey.keyCode === 13){
    if(userInput.value === ""){
      enterKey.preventDefault();
    } else {
      createListItem();
    };
  };
};

//End Submit Button


//Things left to do: Make it look nice/clean up CSS, add themes Dropdown, add Counters for lists and items created, add Enter key function to input, change mouse cursor on hover edit;
