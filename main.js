$(window).ready(setLight)

$(window).on({
    mousemove: function (e) {
        const [min, max] = [-16, 35]
        const $room = $('#room')
        $(':root').css('--y-rotation', (min + (max - min) * e.clientX / window.innerWidth) + 'deg')
    },
    mousewheel: function (e) {
        changeLight(e.originalEvent.wheelDeltaY > 0 ? 1 : -1)
    }
})

function setLight() {
    const hue = $(':root').css('--hue')

    $('#large-window').css({ background: `linear-gradient(170deg, hsl(${hue}, 70%, 22%), hsl(${hue}, 80%, 50%))` })
    $('#small-window').css({ color: `hsl(${hue}, 75%, 50%)` })
    $('#gap').css({ background: `linear-gradient(-90deg, hsl(${hue}, 75%, 50%), hsl(${hue}, 40%, 40%))` })
    $('#ceil-shadow').css({ background: `linear-gradient(hsla(${hue}, 70%, 22%, .4), var(--ceil-color), var(--ceil-color))` })
    $('#floor-shadow').css({ background: `linear-gradient(0deg, hsla(${hue}, 75%, 50%, .4), var(--floor-color), var(--floor-color))` })
}

function changeLight(delta) {
    const $root = $(':root')
    let hue = (parseInt($root.css('--hue')) + delta) % 360
    $root.css('--hue', hue)
    setLight()
}