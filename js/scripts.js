// List title function start
var name = prompt('What is your name?', 'default name');
function listTitle(){
  let grabList = document.getElementById('nameTitle');
  let addHead = document.createElement('h2');
  addHead.textContent = name+'\'s Bucketlist';
  grabList.appendChild(addHead);
};
listTitle();
//List title function end


//Start Submit button

var listItemHolder = document.getElementById('listItemHolder');
function createListItem(){
  var makeListDiv = document.createElement('div');
  makeListDiv.classList.add('row', 'listBorder');
  listItemHolder.appendChild(makeListDiv);
  function createCheckBoxDiv(){
    var checkboxDiv = document.createElement('div');
    checkboxDiv.classList.add('col-sm-4');
    var makeCheckbox = document.createElement('input');
    makeCheckbox.type = 'checkbox';
    checkboxDiv.appendChild(makeCheckbox);
    makeListDiv.appendChild(checkboxDiv);
  }
  createCheckBoxDiv();
  function createItemDiv(){
    var itemDiv = document.createElement('div');
    itemDiv.classList.add('col-sm-4');
    var inputValue = document.getElementById('inputBox').value;
    var textValue = document.createTextNode(inputValue);
    itemDiv.appendChild(textValue);
    makeListDiv.appendChild(itemDiv);
    //itemDiv.addEventListener('click', testFunc);
  };
  createItemDiv();
  function createDelDiv(){
    var delDiv = document.createElement('div');
    delDiv.classList.add('col-sm-4');
    var delButton = document.createElement('button');
    delButton.innerHTML = '<i class="fa fa-trash-o" aria-hidden="true"></i>';
    delDiv.appendChild(delButton);
    makeListDiv.appendChild(delDiv);
  };
  createDelDiv();
};
var grabSubmit = document.getElementById('submitButton');
grabSubmit.addEventListener('click',createListItem);

//End Submit Button
