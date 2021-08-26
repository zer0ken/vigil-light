$(document).ready(function () {

    const points = $('.transparent').toArray()
        .map(
            e => ({ ...($(e).offset()), width: $(e).width(), height: $(e).height() })
        ).map(
            data => ([
                data.left + ' ' + data.top,
                (data.left + data.width) + ' ' + data.top,
                (data.left + data.width) + ' ' + (data.top + data.height),
                data.left + ' ' + (data.top + data.height)
            ])
        )

    console.log(points)
    console.log(`polygon(${points[0].join(', ')})`)

    $('#over-the-door').css('clip-path', `polygon(${points[0].join(', ')})`)
})