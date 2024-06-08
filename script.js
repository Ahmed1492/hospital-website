var btn = document.getElementById('upto')


onscroll = function () {

    if (this.scrollY >= 400) {
        btn.style.display = 'block'
    } else {
        btn.style.display = 'none'

    }

}

btn.addEventListener('click', function () {
    scroll({
        behavior: "smooth",
        top: 0,

    })
})

