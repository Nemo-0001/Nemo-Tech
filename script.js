// Get modal elements
var loginModal = document.getElementById('loginPopup');
var signupModal = document.getElementById('signupPopup');

// Get buttons to open modals
var loginBtn = document.getElementById('loginButton');
var signupBtn = document.getElementById('signupButton');

// Get the <span> elements that close the modals
var closeBtns = document.querySelectorAll('.modal .close');

// When the user clicks the button, open the modal 
loginBtn.onclick = function() {
    loginModal.style.display = 'block';
}

signupBtn.onclick = function() {
    signupModal.style.display = 'block';
}

// When the user clicks on <span> (x), close the modal
closeBtns.forEach(function(btn) {
    btn.onclick = function() {
        btn.parentElement.parentElement.style.display = 'none';
    }
});

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
    if (event.target == loginModal) {
        loginModal.style.display = 'none';
    }
    if (event.target == signupModal) {
        signupModal.style.display = 'none';
    }
}

document.getElementById("service1").addEventListener("mouseenter", function() {
    document.getElementById("myPopup1").style.display = "block";
});

document.getElementById("service1").addEventListener("mouseleave", function() {
    document.getElementById("myPopup1").style.display = "none";
});

document.getElementById("service2").addEventListener("mouseenter", function() {
    document.getElementById("myPopup2").style.display = "block";
});

document.getElementById("service2").addEventListener("mouseleave", function() {
    document.getElementById("myPopup2").style.display = "none";
});

document.getElementById("service3").addEventListener("mouseenter", function() {
    document.getElementById("myPopup3").style.display = "block";
});

document.getElementById("service3").addEventListener("mouseleave", function() {
    document.getElementById("myPopup3").style.display = "none";
});

function closePopup(popupId) {
    document.getElementById(popupId).style.display = "none";
}