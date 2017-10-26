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
      makeListDiv.classList.toggle('markItemDone');
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
        if(!editItem){
          return editItem();
        } else {
          textValue = document.createTextNode(editedItem);
          itemDiv.appendChild(textValue);
        };
      };
      appendEdit();
    };
    function hoverOver(){
      makeListDiv.classList.add('hover-class');
    };
    function hoverOut(){
      makeListDiv.classList.remove('hover-class');
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

//Start Themes function
var defaultTheme = document.getElementById('defaultTheme');
var halloweenTheme = document.getElementById('halloweenTheme');
var usaTheme = document.getElementById('usaTheme');
var moneyTheme = document.getElementById('moneyTheme');
defaultTheme.addEventListener('click', changeDefault);
defaultTheme.addEventListener('mouseover', hoverDefault);
defaultTheme.addEventListener('mouseout', exitDefault);
halloweenTheme.addEventListener('click', changeHalloween);
halloweenTheme.addEventListener('mouseover', hoverHalloween);
halloweenTheme.addEventListener('mouseout', exitHalloween);
usaTheme.addEventListener('click', changeUsa);
usaTheme.addEventListener('mouseover', hoverUsa);
usaTheme.addEventListener('mouseout', exitUsa);
moneyTheme.addEventListener('click', changeMoney);
moneyTheme.addEventListener('mouseover', hoverMoney);
moneyTheme.addEventListener('mouseout', exitMoney);
var getBody = document.getElementById('bodyTag').classList;
function changeDefault(){
  getBody.remove('halloween-theme', 'usa-theme', 'money-theme');
};
function changeHalloween(){
  getBody.remove('default-theme', 'usa-theme', 'money-theme');
  getBody.add('halloween-theme');
};
function changeUsa(){
    getBody.remove('halloween-theme', 'default-theme', 'money-theme');
    getBody.add('usa-theme');
};
function changeMoney(){
  getBody.remove('halloween-theme', 'usa-theme', 'default-theme');
  getBody.add('money-theme');
};

function hoverDefault(){
  defaultTheme.classList.add('hover-theme');
};
function exitDefault(){
  defaultTheme.classList.remove('hover-theme');
};
function hoverHalloween(){
  halloweenTheme.classList.add('hover-theme');
};
function exitHalloween(){
  halloweenTheme.classList.remove('hover-theme');
};
function hoverUsa(){
  usaTheme.classList.add('hover-theme');
};
function exitUsa(){
  usaTheme.classList.remove('hover-theme');
};
function hoverMoney(){
  moneyTheme.classList.add('hover-theme');
};
function exitMoney(){
  moneyTheme.classList.remove('hover-theme');
};
//End Themes function
// Query Api function Start
var url = 'https://randomuser.me/api/?results=4'
var apiDiv = document.getElementById('apiDiv');
var userPhotoArray = [];
var userNameArray = [];
function grabApiInfo(){
  fetch(url)
    .then(function(resp){
      return resp.json()
    })
    .then(function(data){
      console.log(data);
      var userInfo = data.results;
      for(i = 0; i < 4; i++){
        var apiHolder = document.createElement('div');
        apiHolder.classList.add('col-sm-2', 'api-holder');
        var userName = userInfo[i].login.username;
        var userNameText = document.createElement('p');
        userNameArray.push(userName);
        userNameText.textContent = userName;
        apiHolder.appendChild(userNameText);
        var apiImg = document.createElement('img')
        var userPhoto = userInfo[i].picture.medium;
        userPhoto.toString();
        userPhotoArray.push(userPhoto);
        apiImg.src = userPhotoArray[i];
        apiImg.classList.add('api-img');
        apiHolder.appendChild(apiImg);
        apiDiv.appendChild(apiHolder);
      };
    })
    .catch(function(err){
      console.log(err);
    });
};
grabApiInfo();

// query api function end
//Things left to do: Make it look nice/clean up CSS,fix null on cancel edit
