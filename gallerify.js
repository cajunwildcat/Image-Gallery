let title = decodeURIComponent(location.pathname.split('/').slice(-2, -1)[0]);
document.title = title;
let imageCount = 0;
$(window).on('load', () => {
    $.getJSON('Photos/photos.json', (data) => {
        data.forEach(file => {
            if (file.match(/\.(jpe?g|png|gif)$/i)) {
                imageCount++;
                $('#gallery').append(`<a href="Photos/${file}" target="_blank"><img src="Photos/${file}"/></a>`);
            }
        });
        $('#gallery').justifiedGallery({
            rowHeight: 360,
            margins: 6
        });
        $('#title').text(`${title}`).after(`<h2>${imageCount} Images</h2>`);
    });
});