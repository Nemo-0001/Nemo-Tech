let currentLang = localStorage.getItem('lang') || 'en'; // Load language from localStorage

function setLanguage(lang) {
    currentLang = lang;
    localStorage.setItem('lang', lang);
    document.body.setAttribute('lang', lang);
    document.body.style.direction = lang === 'ar' ? 'rtl' : 'ltr';
    document.querySelectorAll('[data-translate]').forEach(el => {
        const key = el.getAttribute('data-translate');
        el.textContent = translations[lang][key];
    });
}

document.querySelectorAll('.language-options a').forEach(langOption => {
    langOption.addEventListener('click', function(e) {
        e.preventDefault();
        setLanguage(this.getAttribute('data-lang'));
    });
});

function toggleTheme() {
    const isDark = document.body.classList.toggle('dark-theme');
    const themeText = isDark ? translations[currentLang].dark : translations[currentLang].light;
    const themeElement = document.getElementById('currentTheme');
    if (themeElement) {
        themeElement.textContent = themeText;
    }

    const themeIcon = document.getElementById('themeIcon');
    const arrowDown = document.getElementById('arrowDown');
    themeIcon.className = isDark ? 'fas fa-sun' : 'fas fa-moon';
    themeIcon.style.color = isDark ? '#ffd700' : '#444';
    arrowDown.style.color = isDark ? '#fff' : '#444';

    localStorage.setItem('theme', isDark ? 'dark' : 'light');
}

document.addEventListener('DOMContentLoaded', function() {
    const savedTheme = localStorage.getItem('theme');
    if (savedTheme === 'dark') {
        document.body.classList.add('dark-theme');
    }
    setLanguage(currentLang);

    const themeToggle = document.getElementById('toggleTheme');
    if (themeToggle) {
        themeToggle.addEventListener('click', toggleTheme);
    }
});

document.addEventListener('DOMContentLoaded', function() {
    const header = document.getElementById('mainHeader');
    const toggleBtn = document.getElementById('toggleHeader');
    const userMenuBtn = document.querySelector('.user-menu-btn');
    const dropdownMenu = document.querySelector('.dropdown-menu');

    // Toggle header visibility
    toggleBtn.addEventListener('click', function() {
        header.classList.toggle('hidden');
        this.classList.toggle('active');
    });

    // Toggle user menu
    userMenuBtn.addEventListener('click', function(e) {
        e.stopPropagation();
        dropdownMenu.style.display = dropdownMenu.style.display === 'block' ? 'none' : 'block';
    });

    // Close dropdown when clicking outside
    document.addEventListener('click', function() {
        dropdownMenu.style.display = 'none';
    });

    // Prevent dropdown from closing when clicking inside it
    dropdownMenu.addEventListener('click', function(e) {
        e.stopPropagation();
    });

    // Services popup functionality
    const services = document.querySelectorAll('.service');
    services.forEach(service => {
        service.addEventListener('mouseenter', function() {
            this.querySelector('.popup').style.display = 'block';
        });
        service.addEventListener('mouseleave', function() {
            this.querySelector('.popup').style.display = 'none';
        });
    });

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

    // When the user clicks anywhere outside of the modal, close it
    window.onclick = function(event) {
        if (event.target == loginModal) {
            loginModal.style.display = 'none';
        }
        if (event.target == signupModal) {
            signupModal.style.display = 'none';
        }
    }

    // Close the dropdown menu if the user clicks outside of it
    window.addEventListener('click', function(event) {
        if (!event.target.matches('.dropdown-toggle')) {
            var dropdowns = document.getElementsByClassName('dropdown-menu');
            for (var i = 0; i < dropdowns.length; i++) {
                var openDropdown = dropdowns[i];
                if (openDropdown.style.display === 'block') {
                    openDropdown.style.display = 'none';
                }
            }
        }
    });
});