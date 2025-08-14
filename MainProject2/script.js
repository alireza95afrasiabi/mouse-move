function divBuilder(e) {

    let main = document.getElementById('_main');

    for (i = 0; i < 300; i++) {

        let div = document.createElement("div")

        main.appendChild(div)

    }

}

divBuilder();

let _div = document.querySelectorAll('main>div')

_div.forEach(function (item) {
    item.addEventListener('mouseenter', () => {
        item.style.background = 'salmon'
        item.style.borderRadius = '50%'
    })
});