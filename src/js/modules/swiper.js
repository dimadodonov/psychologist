import Swiper from 'swiper/swiper-bundle.min';

export default () => {
    const sectionIntroSwiper = new Swiper('.section-intro-swiper', {
        spaceBetween: 20,
        speed: 500,
        slidesPerView: 2,
        watchSlidesVisibility: true,
        watchSlidesProgress: true,
        loop: true,
        // Navigation arrows
        navigation: {
            prevEl: '.swiper-btn-prev',
            nextEl: '.swiper-btn-next',
        },
        breakpoints: {
            // when window width is >= 320px
            320: {},
            // when window width is >= 480px
            480: {},
            // when window width is >= 640px
            640: { spaceBetween: 20 },
            960: { spaceBetween: 20 },
            1024: { spaceBetween: 20 },
            1200: {
                spaceBetween: 20,
            },
        },
    });
    const swiperReviews = new Swiper('.swiper-reviews', {
        spaceBetween: 20,
        speed: 500,
        slidesPerView: 2,
        loop: true,
        watchSlidesVisibility: true,
        watchSlidesProgress: true,
        // Navigation arrows
        navigation: {
            prevEl: '.swiper-btn-prev',
            nextEl: '.swiper-btn-next',
        },
        // If we need pagination
        pagination: {
            el: '.swiper-pagination',
            dynamicBullets: true,
        },
        breakpoints: {
            // when window width is >= 320px
            0: {
                slidesPerView: 1,
            },
            320: {
                slidesPerView: 1,
            },
            // when window width is >= 480px
            480: {
                slidesPerView: 1,
            },
            // when window width is >= 640px
            640: {
                slidesPerView: 1,
            },
            1024: {
                slidesPerView: 2,
            },
            1200: {
                slidesPerView: 2,
            },
        },
    });

    const swiperPsychologistCard = new Swiper(
        '.swiper-psychologist-grid-card',
        {
            slidesPerView: 4,
            slidesPerColumn: 2,
            spaceBetween: 40,
            grid: {
                rows: 2,
            },
            // pagination: {
            //     el: '.swiper-pagination',
            //     clickable: true,
            // },
            breakpoints: {
                320: {
                    slidesPerView: 1,
                    slidesPerColumn: 1,
                    spaceBetween: 10,
                    grid: {
                        rows: 1,
                    },
                },
                576: {
                    slidesPerView: 1,
                    slidesPerColumn: 1,
                    spaceBetween: 10,
                    grid: {
                        rows: 1,
                    },
                },
                768: {
                    slidesPerView: 2,
                    slidesPerColumn: 1,
                    spaceBetween: 10,
                    grid: {
                        rows: 1,
                    },
                },
                1024: {
                    slidesPerView: 4,
                    slidesPerColumn: 2,
                    spaceBetween: 20,
                    grid: {
                        rows: 2,
                    },
                },

                1200: {
                    slidesPerView: 4,
                    slidesPerColumn: 2,
                    spaceBetween: 40,
                    grid: {
                        rows: 2,
                    },
                },
            },
        }
    );
    const swiperArchive = new Swiper('.blog-archive-swiper', {
        spaceBetween: 20,
        speed: 500,
        slidesPerView: 3,
        loop: true,
        watchSlidesVisibility: true,
        watchSlidesProgress: true,
        breakpoints: {
            // when window width is >= 320px
            0: {
                slidesPerView: 1,
                spaceBetween: 10,
            },
            320: {
                slidesPerView: 1,
                spaceBetween: 10,
            },
            // when window width is >= 480px
            480: {
                slidesPerView: 1,
                spaceBetween: 10,
            },
            // when window width is >= 640px
            640: {
                slidesPerView: 2,
                spaceBetween: 10,
            },
            1024: {
                slidesPerView: 3,
            },
            1200: {
                slidesPerView: 3,
            },
        },
    });
};
