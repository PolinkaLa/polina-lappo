const navUl = document.getElementById('navUl');

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
