let selector = e => document.querySelector(e)
let toggler = selector("#toggler")
let navbarContainer = selector(".navbar-container")
toggler.addEventListener("click", e => {
    navbarContainer.classList.toggle("mobile-hide")
    let target = event.target
    if (target.classList.contains("fa")) {
        target.classList.toggle("fa-bars")
        target.classList.toggle("fa-close")
    }
})