const navUl = document.getElementById("navUl");
const closePopover = document.getElementById("close-popover");
const popover = document.getElementById("popover");
const mobNav = document.getElementById("mob-nav");
const mobNavClose = document.getElementById("mob-nav-close");
const nav = document.getElementsByTagName("header")[0];
const hire = document.getElementById("hire");
const submit = document.getElementById("submit");



navUl.addEventListener("click", (event) => {
    const toShowSectionId = event.target.id.slice(0, -4);
    const toShowSection = document.getElementById(toShowSectionId);
    let activeSection = document.getElementsByClassName("activeSection")[0];
    activeSection.classList.remove("activeSection");
    activeSection.classList.add("dont-show");
    toShowSection.classList.remove("dont-show");
    toShowSection.classList.add("activeSection")
    let activeLink = document.getElementsByClassName("active-link")[0];
    activeLink.classList.remove("active-link");
    activeLink = document.getElementById(event.target.id);
    activeLink.classList.add("active-link");
})

closePopover.addEventListener("click", (event) => {
    console.log(popover.classList);
    popover.classList.add("dont-show");
})

mobNav.addEventListener("touchend", () => {
    nav.classList.add("mob-nav")
    mobNav.classList.add("dont-show");
    mobNavClose.style = "display: block; z-index: 1;";
})

mobNavClose.addEventListener("touchend", () => {
    nav.classList.remove("mob-nav");
    mobNavClose.style = "";
    mobNav.classList.remove("dont-show");
})

nav.addEventListener("touchend", () => {
    setTimeout(() => {
        nav.classList.remove("mob-nav");
        mobNavClose.style = "";
        mobNav.classList.remove("dont-show");
    }, 700)
})

hire.addEventListener("click", () => {
    const toShowSection = document.getElementById("contact");
    let activeSection = document.getElementsByClassName("activeSection")[0];
    activeSection.classList.remove("activeSection");
    activeSection.classList.add("dont-show");
    toShowSection.classList.remove("dont-show");
    toShowSection.classList.add("activeSection")
    let activeLink = document.getElementsByClassName("active-link")[0];
    activeLink.classList.remove("active-link");
    activeLink = document.getElementById("contactLink");
    activeLink.classList.add("active-link");
})

// submit.addEventListener("click", () => {
//     const token = "863499719:AAFSJt4x8EFFjM-Y1aCPJ_di0JfaFUFjKTo";
//     const chatId = "-323480272";
//     const message = {
//         "name": document.getElementById("name").value,
//         "email": document.getElementById("email").value,
//         "project": document.getElementById("project").value
//     }
//     console.log(message);
//     fetch(`https://api.telegram.org/bot${token}/sendMessage?chat_id=${chatId}`, {
//         method: 'POST',
//         mode: 'cors', 
//         headers: {
//             'Content-Type': 'application/json',
//         },
//         data: message
//     })
//     .then(response => response.json());

//     popover.classList.remove("dont-show");
//     document.getElementById("name").value = "";
//     document.getElementById("email").value = "";
//     document.getElementById("phone").value = "";
//     document.getElementById("project").value = "";

// })