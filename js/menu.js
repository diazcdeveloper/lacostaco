export const menu = document.getElementById("menu");
export const enlaces = document.getElementById("enlaces");

export function toggleMenu() {
    menu.classList.toggle("close");
    enlaces.classList.toggle("open");
}

menu.addEventListener('click', toggleMenu)