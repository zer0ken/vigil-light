$(document).ready(function () {
    console.log($('.transparent').toArray().map(e => $(e)))
    console.log(
        $('.transparent').toArray()
            .map(
                e => ({...($(e).offset())})
            )
    )
    // $('#over-the-door').css('clip-path', `clip-path: polygon(${});`)
})