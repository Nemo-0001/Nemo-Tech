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


const translations = {
    ar: {
        login: "تسجيل الدخول",
        signup: "التسجيل",
        settings: "الإعدادات",
        changeLanguage: "تغيير اللغة",
        changeTheme: "تغيير السمة",
        light: "فاتح",
        dark: "داكن",
        sitename: "Nemo Tech",
        home: "Home page",
        about: "About us",
        serv: "Our services",
        portf: "Portfolio",
        contact: "Contact us"
    },
    en: {
        login: "Login",
        signup: "Sign Up",
        settings: "Settings",
        changeLanguage: "Change Language",
        changeTheme: "Change Theme",
        light: "Light",
        dark: "Dark",
        sitename: "نيمو للتقنيات",
        home: "الصفحة الرئيسية",
        about: "من نحن",
        serv: "خدماتنا",
        portf: "أعمالنا",
        contact: "اتصل بنا"
    }
};

let currentLang = 'en';

function changeLanguage(lang) {
    console.log('Changing language to:', lang);
    currentLang = lang;
    document.documentElement.lang = lang;

    const elements = {
        'currentLang': lang === 'ar' ? 'العربية' : 'English',
        'loginButton': translations[lang].login,
        'signupButton': translations[lang].signup,
        'settingsButton': translations[lang].settings,
        'changeLanguage': translations[lang].changeLanguage,
        'toggleTheme': translations[lang].changeTheme
    };

    for (const [id, text] of Object.entries(elements)) {
        const element = document.getElementById(id);
        if (element) {
            element.textContent = text;
        } else {
            console.error('Element with id "${id}" not found');
        }
    }

    const currentTheme = document.body.classList.contains('dark-theme') ? 'dark' : 'light';
    const themeElement = document.getElementById('currentTheme');
    if (themeElement) {
        themeElement.textContent = translations[lang][currentTheme];
    } else {
        console.error('Element with id "currentTheme" not found');
    }

    localStorage.setItem('lang', lang);
    console.log('Language change complete');
}

function toggleTheme() {
    console.log('Toggling theme');
    const isDark = document.body.classList.toggle('dark-theme');
    const themeText = isDark ? translations[currentLang].dark : translations[currentLang].light;
    const themeElement = document.getElementById('currentTheme');
    if (themeElement) {
        themeElement.textContent = themeText;
    } else {
        console.error('Element with id "currentTheme" not found');
    }
    localStorage.setItem('theme', isDark ? 'dark' : 'light');
}

document.addEventListener('DOMContentLoaded', function() {
    console.log('DOM loaded');
    const savedLang = localStorage.getItem('lang') || 'en';
    const savedTheme = localStorage.getItem('theme');

    changeLanguage(savedLang);
    if (savedTheme === 'dark') {
        document.body.classList.add('dark-theme');
        const themeElement = document.getElementById('currentTheme');
        if (themeElement) {
            themeElement.textContent = translations[savedLang].dark;
        }
    }

    const languageOptions = document.querySelectorAll('.language-options a');
    console.log('Found language options:', languageOptions.length);
    languageOptions.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            console.log('Language option clicked:', this.dataset.lang);
            changeLanguage(this.dataset.lang);
        });
    });

    const themeToggle = document.getElementById('toggleTheme');
    if (themeToggle) {
        themeToggle.addEventListener('click', toggleTheme);
    } else {
        console.error('Element with id "toggleTheme" not found');
    }
});


// Express server setup (if you use this in client-side JS, ensure it's properly integrated)
// const express = require('express');
// const nodemailer = require('nodemailer');
// const app = express();

// app.use(express.json());
// app.use(express.static('public'));

// app.post('/register', (req, res) => {
//     // Registration logic
//     res.json({ message: 'Signed up successfully' });
// });

// app.post('/contact', (req, res) => {
//     let transporter = nodemailer.createTransport({
//         service: 'gmail',

//         auth: {
//             user: 'alnmrbdallh328@gmail.com',
//             pass: '@@BODY@@'
//         }
//         // Transport configure
//     });

//     let mailOptions = {
//         from: req.body.email,
//         to: 'alnmrbdallh328@example.com',
//         subject: 'A new message from: ',
//         text: req.body.message
//     };

//     transporter.sendMail(mailOptions, (error, info) => {
//         if (error) {
//             res.status(500).send('Error happened while sending message');
//         } else {
//             res.json({ message: 'Message sent successfully' });
//         }
//     });
// });

// app.listen(3000, () => console.log('Server running on port 3000'));