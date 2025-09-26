// --- Focus Events ---
window.onload = function() {
    document.getElementById("inputUsername").focus();
};
document.getElementById("userImg").addEventListener("click", () => {
    document.getElementById("inputUsername").focus();
});
document.getElementById("pwdImg").addEventListener("click", () => {
    document.getElementById("inputPassword").focus();
});

// --- Image drag disables ---
document.getElementById('pwdImg').ondragstart = function() { return false; };
document.getElementById('userImg').ondragstart = function() { return false; };
document.getElementById('googleImg').ondragstart = function() { return false; };
document.getElementById('loginImg').ondragstart = function() { return false; };


// --- Test login button ---
function login(loginMethod){
    // loginMethod -> determines the type of login, like: clicked on 'Google fiók' -> loginMethod = 'google'; clicked on 'Bejelentkezés' -> loginMethod = 'std' {standard}

    
    // Login unsuccesful style changes
    document.getElementById("errorMsg").innerHTML = "Hibás felhasználónév / jelszó!";
    var styleErrorColor = (window.getComputedStyle(document.body).getPropertyValue('--error'));
    document.getElementsByClassName('iconInputBox')[0].style.borderColor = styleErrorColor;
    document.getElementsByClassName('iconInputBox')[1].style.borderColor = styleErrorColor;
};
