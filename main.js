$(window).ready(setLight)

function setLight() {
    const hue = $(':root').css('--hue')
    console.log(hue)

    $('#large-window').css({ background: `linear-gradient(hsl(${hue}, 80%, 32%), hsl(${hue}, 60%, 40%))` })
    $('#small-window').css({ background: `hsl(${hue}, 30%, 60%)` })
    $('#gap').css({ background: `linear-gradient(-90deg, hsl(${hue}, 70%, 50%), hsl(${hue}, 30%, 30%))` })
}