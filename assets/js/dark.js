// dark인지 확인
const userPrefers = getComputedStyle(document.documentElement).getPropertyValue('content');
if (theme === "dark") {
    document.getElementById("theme-toggle").innerHTML = '<i class="fas fa-sun"></i>';
} else if (theme === "light") {
    document.getElementById("theme-toggle").innerHTML = '<i class="fas fa-moon"></i>';
} else if  (userPrefers === "dark") {
    document.documentElement.setAttribute('data-theme', 'dark');
    window.localStorage.setItem('theme', 'dark');
    document.getElementById("theme-toggle").innerHTML = '<i class="fas fa-sun"></i>';
} else {
    document.documentElement.setAttribute('data-theme', 'light');
    window.localStorage.setItem('theme', 'light');
    document.getElementById("theme-toggle").innerHTML = '<i class="fas fa-moon"></i>';
}

// 버튼눌렀을때 다크모드 바꿈
function modeSwitcher() {
    let currentMode = document.documentElement.getAttribute('data-theme');
    if (currentMode === "dark") {
    document.documentElement.setAttribute('data-theme', 'light');
    window.localStorage.setItem('theme', 'light');
    document.getElementById("theme-toggle").innerHTML = '<i class="fas fa-moon"></i>';
    } else {
    document.documentElement.setAttribute('data-theme', 'dark');
    window.localStorage.setItem('theme', 'dark');
    document.getElementById("theme-toggle").innerHTML = '<i class="fas fa-sun"></i>';
    }
}