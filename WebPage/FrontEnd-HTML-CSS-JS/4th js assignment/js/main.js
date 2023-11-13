var HTMLUserData;
var userNameID;

var allUsersData = [];
if (localStorage.getItem("allUsersData") == null) {
    allUsersData = [];
} else {
    allUsersData = JSON.parse(localStorage.getItem("allUsersData"));
}

document.addEventListener('click', function (e) {
    HTMLUserData =  document.querySelectorAll("input");
    if (e.target.id == ("Login")) {
        loginData(HTMLUserData);
    } else if (e.target.id == ("SignUp")) {
        signUpData(HTMLUserData);
    }
})

function loginData(HTMLUserData) {

    if (valedateData(HTMLUserData)) {
        if (validateEmail(HTMLUserData[0].value)) {
            gotoHomePage(HTMLUserData[1],HTMLUserData[0])
        } else {
            document.getElementById("ErrorLog").innerHTML = "Email Not correct or doesNot Exist";
        }
    } else {
        document.getElementById("ErrorLog").innerHTML = "Enter all The values";
    }

}
function signUpData(HTMLUserData) {

    if (valedateData(HTMLUserData)) {
        if (validateEmail(HTMLUserData[0].value)) {
            addNewMember(HTMLUserData[1]/*UserName*/, HTMLUserData[2]/*PassWord*/, HTMLUserData[0]/*Email*/);
        } else {
            document.getElementById("ErrorLog").innerHTML = "Email Not correct format (characters from A to Z @ then gmail,yahoo or hotmail.com";
        }
    } else {
        document.getElementById("ErrorLog").innerHTML = "Enter all The values";
    }

}


// value validator
function valedateData(HtmlInputList) {
    for (var i = 0; i < HtmlInputList.length; i++) {
        if (HtmlInputList[i].value == "") {
            return false;/*Not Empty*/
        } else {
            return true;/*Empty*/
        }
    }
}
function validateEmail(email) {
    var regax = /^[a-z]+@(gmail|yahoo|hotmail).com$/i
    if (regax.test(email)) {
        return true;//Correct
    } else {
        return false;// not correct
    }
}
function checkEmailExists(email){
    if (allUsersData.length == 0) {
        console.log('true empty');
        return true;
    }else{
        for (var i = 0; i < allUsersData.length; i++) {
            
            if (allUsersData[i].email.toLowerCase() == email.toLowerCase()) {
                return false;
            }
            
        }
    }
}

function addNewMember(userName, password, email) {
    var userData = {
        userName: userName.value,
        password: password.value,
        email: email.value,
    };
    if (checkEmailExists(userData.email)) {     
        allUsersData.push(userData);
        localStorage.setItem("allUsersData", JSON.stringify(allUsersData));
        clearContent(HTMLUserData);
    }else{
        document.getElementById("ErrorLog").innerHTML = "Email Exists";
    }
}

function clearContent(HtmlInputList) {
    for (var i = 0; i < HtmlInputList.length; i++) {
        HtmlInputList[i].value = "";
    }
}

function gotoHomePage(password,email){
    var userData = {
        password: password.value,
        email: email.value
    };
    
    if (checkEmailExists(userData.email) == false) {
        getUserData(userData.email,userData.password);

    }else{
        document.getElementById("ErrorLog").innerHTML = "Email Not correct or doesNot Exist";
    }
}

function getUserData(email,password) {
    for (var i = 0; i < allUsersData.length; i++) {
        if (allUsersData[i].email == email && allUsersData[i].password == password) {
            localStorage.setItem("session",allUsersData[i].userName)
            document.querySelector("a").href = "./index.html";
        }
    }
}
if (document.getElementById("userName") != null) {
    document.getElementById("userName").innerHTML=localStorage.getItem('session');
}
