


function openCity(evt, cityName, button) {
    const wrap = button.closest('.tab_wrap');

    const tabcontent = wrap.querySelectorAll('.block_tabcontent');
    tabcontent.forEach((content) => {
        content.style.display = "none";
    });

    const tablinks = wrap.querySelectorAll('.btn_tablinks');
    tablinks.forEach((link) => {
        link.className = link.className.replace(" active", "");
    });

    const selectedTab = wrap.querySelector(`.block_tabcontent[data-city="${cityName}"]`);
    if (selectedTab) {
        selectedTab.style.display = "flex";
    }

    evt.currentTarget.className += " active";
}


const reviews__swiper = new Swiper('.reviews__swiper', {
    slidesPerView: 1,
    loop: true,
    spaceBetween: 8,

    navigation: {
        nextEl: '.reviews__swiper__next',
        prevEl: '.reviews__swiper__prev',
    },

    breakpoints: {
        768: {
            slidesPerView: 2,
            spaceBetween: 20,
        },
    }


});


const promo__swiper = new Swiper('.promo__swiper', {
    slidesPerView: 1,
    loop: true,
    spaceBetween: 8,

    breakpoints: {
        768: {
            slidesPerView: 2,
            spaceBetween: 20,
        },
    },
    pagination: {
        el: '.promo__pagination',
    },

});

document.querySelectorAll('.project_gallery__swiper').forEach(function (swiperContainer) {
    new Swiper(swiperContainer, {
        slidesPerView: 'auto',
        loop: true,
        spaceBetween: 8,

        navigation: {
            nextEl: swiperContainer.closest('.project_gallery__tabcontent').querySelector('.project_gallery__swiper__next'),
            prevEl: swiperContainer.closest('.project_gallery__tabcontent').querySelector('.project_gallery__swiper__prev'),
        },

        breakpoints: {
            768: {
                slidesPerView: 1,
                spaceBetween: 20,
            },
        }
    });
});

document.querySelectorAll('.project_progress__swiper').forEach(function (swiperContainer) {
    new Swiper(swiperContainer, {
        slidesPerView: 'auto',
        loop: true,
        spaceBetween: 8,

        navigation: {
            nextEl: swiperContainer.closest('.project_progress__tabcontent').querySelector('.project_progress__swiper__next'),
            prevEl: swiperContainer.closest('.project_progress__tabcontent').querySelector('.project_progress__swiper__prev'),
        },

        breakpoints: {
            768: {
                slidesPerView: 2,
                spaceBetween: 20,
            },
        }
    });
});



function openMenu() {
    $('.mobile_menu').toggleClass('active');
    $('.header__mobile_menu').toggleClass('active');
    $('body').toggleClass('no-scroll');
}

$('.header__mobile_menu').on('click', openMenu);

function openSort() {
    $('.project_catalog__main__sort .content, .catalog_products__sort .content').toggleClass('active');
    $('.project_catalog__main__sort .sort_btn, .catalog_products__sort .sort_btn').toggleClass('active');
}

$('.project_catalog__main__sort .sort_btn, .catalog_products__sort .sort_btn').on('click', openSort);

function openProject() {
    $('.catalog_filter__project .project_list').toggleClass('active');
    $('.catalog_filter__project .project_btn').toggleClass('active');
}

$('.catalog_filter__project .project_btn').on('click', openProject);



const project_finishing__swiper = new Swiper('.project_finishing__swiper', {
    slidesPerView: 'auto',
    loop: true,
    spaceBetween: 8,

    navigation: {
        nextEl: '.project_finishing__swiper__next',
        prevEl: '.project_finishing__swiper__prev',
    },

    breakpoints: {
        768: {
            slidesPerView: 1,
            spaceBetween: 20,
        },
    }


});



const project_advantages__swiper = new Swiper('.project_advantages__swiper', {
    slidesPerView: 'auto',
    loop: true,
    spaceBetween: 8,


});





document.querySelectorAll('.custom-wrapper').forEach(wrapper => {
    const priceSlider = wrapper.querySelector(".slider-container .price-slider");
    const rangeInputs = wrapper.querySelectorAll(".range-input input");
    const priceInputs = wrapper.querySelectorAll(".price-input input");

    const rangeMin = parseFloat(rangeInputs[0].min);
    const rangeMax = parseFloat(rangeInputs[0].max);
    const priceGap = 0.5; // Минимальный допустимый разрыв

    // Обработчик для числовых инпутов
    priceInputs.forEach((input) => {
        input.addEventListener("input", () => {
            let minPrice = parseFloat(priceInputs[0].value);
            let maxPrice = parseFloat(priceInputs[1].value);

            if (maxPrice - minPrice < priceGap) {
                if (input.classList.contains("min-input")) {
                    minPrice = maxPrice - priceGap;
                    priceInputs[0].value = minPrice.toFixed(1);
                } else {
                    maxPrice = minPrice + priceGap;
                    priceInputs[1].value = maxPrice.toFixed(1);
                }
            }

            rangeInputs[0].value = minPrice.toFixed(1);
            rangeInputs[1].value = maxPrice.toFixed(1);

            updateSliderStyle();
        });
    });

    // Обработчик для range input
    rangeInputs.forEach((range) => {
        range.addEventListener("input", () => {
            let minVal = parseFloat(rangeInputs[0].value);
            let maxVal = parseFloat(rangeInputs[1].value);

            if (maxVal - minVal < priceGap) {
                if (range.classList.contains("min-range")) {
                    rangeInputs[0].value = (maxVal - priceGap).toFixed(1);
                } else {
                    rangeInputs[1].value = (minVal + priceGap).toFixed(1);
                }
            } else {
                priceInputs[0].value = minVal.toFixed(1);
                priceInputs[1].value = maxVal.toFixed(1);
            }

            updateSliderStyle();
        });
    });

    // Функция для обновления стилей слайдера
    function updateSliderStyle() {
        const min = parseFloat(rangeInputs[0].value);
        const max = parseFloat(rangeInputs[1].value);
        const range = rangeMax - rangeMin;

        priceSlider.style.left = `${((min - rangeMin) / range) * 100}%`;
        priceSlider.style.right = `${100 - ((max - rangeMin) / range) * 100}%`;
    }

    updateSliderStyle();
});


const gallery_popup__swiper = new Swiper('.gallery_popup__swiper', {
    slidesPerView: 1,
    loop: true,
    spaceBetween: 8,

    navigation: {
        nextEl: '.gallery_popup__swiper__next',
        prevEl: '.gallery_popup__swiper__prev',
    },
    pagination: {
        el: '.gallery_popup__swiper__pagination',
        type: 'custom',
        renderCustom: function (swiper, current, total) {
            return `${current}/${total}`;
        },
    },
});


function openGallery() {
    $('.gallery_popup').addClass('active');
    $('body').addClass('no-scroll');
}

function closeGallery() {
    $('.gallery_popup').removeClass('active');
    $('body').removeClass('no-scroll');
}

$('.gallery_popup__close').on('click', closeGallery);

$('.project_gallery__swiper .swiper-slide').on('click', openGallery);



function openDocument() {
    $('.documents_popup').addClass('active');
    $('body').addClass('no-scroll');
}

function closeDocument() {
    $('.documents_popup').removeClass('active');
    $('body').removeClass('no-scroll');
}

$('.documents_popup__close').on('click', closeDocument);

$('.project_documents__open').on('click', openDocument);


function openConsul() {
    $('.consul_popup').addClass('active');
    $('.popup_bg').addClass('active');
    $('body').addClass('no-scroll');
}

function closeConsul() {
    $('.consul_popup').removeClass('active');
    $('.popup_bg').removeClass('active');
    $('body').removeClass('no-scroll');
}

$('.consul_popup__close').on('click', closeConsul);

$('.project_finishing__open').on('click', openConsul);


function openBron() {
    $('.bron_popup').addClass('active');
    $('.popup_bg').addClass('active');
    $('body').addClass('no-scroll');
}

function closeBron() {
    $('.bron_popup').removeClass('active');
    $('.popup_bg').removeClass('active');
    $('body').removeClass('no-scroll');
}

$('.bron_popup__close').on('click', closeBron);

$('.catalog_products__product__btn').on('click', openBron);