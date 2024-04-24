document.addEventListener('DOMContentLoaded', function () {
    const logoText = document.querySelector('.logo_text');
    const logo = document.querySelector('.logo');
    const navList = document.querySelector('.nav-list');
    const navIconsContainer = document.querySelector('.nav-icons');

    navIconsContainer.style.display = 'none';

    window.addEventListener('scroll', function () {
        if (window.scrollY > 50) {
            logoText.style.opacity = '0';
            logo.style.opacity = '1';
            navList.style.display = 'none'; 
            navIconsContainer.style.display = 'flex';
        } else {
            logoText.style.opacity = '1';
            logo.style.opacity = '0';
            navList.style.display = 'flex'; 
            navIconsContainer.style.display = 'none'; 
        }
    });
});

document.getElementById("tryNowButton").addEventListener("click", function() {
    window.location.href = "../public/signin.html";
});

