const nav = document.querySelectorAll('a')
const tabs = document.querySelectorAll(".tab")
let index = 0

nav.forEach(item => {
    item.addEventListener("click", () => {
        if (item.classList.contains('active')) {
            return false
        } else {
            item.classList.add('active')
        }

        index = item.getAttribute('data-nav')

        for (let i = 0; i < nav.length; i++) {
            if (nav[i].getAttribute('data-nav') != index) {
                nav[i].classList.remove('active')
            }
        }

        for (let j = 0; j < tabs.length; j++) {
            if (tabs[j].getAttribute('data-nav') == index ) {
                tabs[j].classList.add('active-tab')
            } else {
                tabs[j].classList.remove('active-tab')
            }
        }
    })
})