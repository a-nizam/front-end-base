var param = {
    windowWidth: 0,
    windowHeight: 0,
    minheaderHeight: 600
};
var block = {
    header: $('header'),
    dropdown: $('.dropdown')
};

function setDynamicParams() {
    param.windowWidth = $(window).width();
    param.windowHeight = $(window).height();
}

function setHeaderSize() {
    block.header.width(param.windowWidth);
    if (param.windowWidth > 767) {
        if (param.windowHeight > param.minheaderHeight) {
            block.header.height(param.windowHeight);
        } else {
            block.header.height(param.minheaderHeight);
        }
    } else {
        block.header.height('auto');
    }
}

function setSlidingEffectToDropdowns() {
    var slidingSpeed = 200;
    if (param.windowWidth > 767) {
        block.dropdown.on('show.bs.dropdown', function (e) {
            $(this).find('.dropdown-menu').first().stop(true, true).slideDown(slidingSpeed);
        });
        block.dropdown.on('hide.bs.dropdown', function (e) {
            $(this).find('.dropdown-menu').first().stop(true, true).slideUp(slidingSpeed);
        });
    }
}

function setMap() {
    ymaps.ready(init);
    var myMap,
        placeMark;

    function init() {
        myMap = new ymaps.Map("map", {
            center: [42.9806398, 47.508374],
            zoom: 18,
            controls: []
        });
        myMap.behaviors.disable('scrollZoom');
        placeMark = new ymaps.Placemark([42.9806398, 47.508374], {
            hintContent: 'Logix',
            balloonContent: 'Создание сайтов'
        });
        myMap.geoObjects.add(placeMark);
    }
}

$(document).ready(function () {
    setDynamicParams();
    setHeaderSize();
    setSlidingEffectToDropdowns();
    setMap();
});

$(window).resize(function () {
    setDynamicParams();
    setHeaderSize();
});