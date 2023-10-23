import { menu, enlaces } from "./menu.js";


const btnHome = document.getElementById("btn_home");
const btnAbout = document.getElementById("btn_about");
const btnSap = document.getElementById("btn_sap");
const btnMinistries = document.getElementById("btn_ministries");
const btnFaqs = document.getElementById("btn_faqs");
const btnContact = document.getElementById("btn_contact");


const home = document.getElementById("home");
const about = document.getElementById("about");
const sap = document.getElementById("sap");
const ministries = document.getElementById("ministries");
const faqs = document.getElementById("faqs");
const contact = document.getElementById("contact");

function toggleHome() {
    home.classList.remove("hide");

    about.classList.add("hide");
    sap.classList.add("hide");
    ministries.classList.add("hide");
    faqs.classList.add("hide");
    contact.classList.add("hide");

    menu.classList.toggle("close");
    enlaces.classList.toggle("open");
}

function toggleAbout() {
    about.classList.remove("hide");

    home.classList.add("hide");
    sap.classList.add("hide");
    ministries.classList.add("hide");
    faqs.classList.add("hide");
    contact.classList.add("hide");

    menu.classList.toggle("close");
    enlaces.classList.toggle("open");
}

function toggleSap() {
    sap.classList.remove("hide");

    home.classList.add("hide");
    about.classList.add("hide");
    ministries.classList.add("hide");
    faqs.classList.add("hide");
    contact.classList.add("hide");

    menu.classList.toggle("close");
    enlaces.classList.toggle("open");
}

function toggleMinistries() {
    ministries.classList.remove("hide");

    home.classList.add("hide");
    about.classList.add("hide");
    sap.classList.add("hide");
    faqs.classList.add("hide");
    contact.classList.add("hide");

    menu.classList.toggle("close");
    enlaces.classList.toggle("open");
}

function toggleFaqs() {
    faqs.classList.remove("hide");

    home.classList.add("hide");
    about.classList.add("hide");
    sap.classList.add("hide");
    ministries.classList.add("hide");
    contact.classList.add("hide");

    menu.classList.toggle("close");
    enlaces.classList.toggle("open");
}

function toggleContact() {
    contact.classList.remove("hide");

    home.classList.add("hide");
    about.classList.add("hide");
    sap.classList.add("hide");
    ministries.classList.add("hide");
    faqs.classList.add("hide");

    menu.classList.toggle("close");
    enlaces.classList.toggle("open");
}



btnHome.addEventListener('click', toggleHome);
btnAbout.addEventListener('click', toggleAbout)
btnSap.addEventListener('click', toggleSap);
btnMinistries.addEventListener('click', toggleMinistries);
btnFaqs.addEventListener('click', toggleFaqs);
btnContact.addEventListener('click', toggleContact);
