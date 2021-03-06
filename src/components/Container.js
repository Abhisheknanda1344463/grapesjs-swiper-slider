import constants from '../constants';

export default (domComponents, config = {}) => {
    const defaultType = domComponents.getType('default');
    const defaultModel = defaultType.model;
    const defaultView = defaultType.view;
    const {
        containerName,
        wrapperName,
        prevName,
        nextName,
        paginationName,
        scrollbarName,
        wrapperSelector,
        prevSelector,
        nextSelector,
        paginationSelector,
        scrollbarSelector,
        containerId,
    } = constants;

    domComponents.addType(containerName, {

        model: defaultModel.extend({
            defaults: {
                ...defaultModel.prototype.defaults,

                name: 'Swiper Slider',

                // Properties
                initialSlide: '0',
                speed: 300,
                slidesPerView: 3,
                spaceBetween: '0',
                slidesPerGroup: 1,
                slidesOffsetBefore: '0',
                slidesOffsetAfter: '0',
                direction: 'horizontal',
                effect: 'slide',
                autoHeight: false,
                watchOverflow: true,
                centeredSlides: false,
                loop: false,
                pagination: 'none',
                scrollbar: false,

                // Autoplay
                autoplay: false,
                autoplayDelay: 3000,
                autoplayStopOnLastSlide: false,
                autoplayDisableOnInteraction: true,
                autoplayReverseDirection: false,
                autoplayWaitForTransition: true,

                // Small
                smallSlidesPerView: 1,
                smallSpaceBetween: '0',
                smallSlidesPerGroup: 1,

                // Medium
                mediumSlidesPerView: 1,
                mediumSpaceBetween: '0',
                mediumSlidesPerGroup: 1,

                // Large
                largeSlidesPerView: 1,
                largeSpaceBetween: '0',
                largeSlidesPerGroup: 1,

                traits: [
                    {
                        type: 'checkbox',
                        label: 'Autoplay',
                        name: 'autoplay',
                        changeProp: 1,
                    },
                    {
                        type: 'checkbox',
                        label: 'Loop',
                        name: 'loop',
                        changeProp: 1,
                    },
                    {
                        type: 'checkbox',
                        label: 'Scrollbar',
                        name: 'scrollbar',
                        changeProp: 1,
                    },
                    {
                        type: 'number',
                        label: 'Initial Slide',
                        name: 'initialSlide',
                        changeProp: 1,
                    },
                    {
                        type: 'select',
                        label: 'Direction',
                        name: 'direction',
                        changeProp: 1,
                        options: [
                            'horizontal',
                            'vertical',
                        ]
                    },
                    {
                        type: 'number',
                        label: 'Speed',
                        name: 'speed',
                        changeProp: 1,
                    },
                    {
                        type: 'select',
                        label: 'Pagination',
                        name: 'pagination',
                        changeProp: 1,
                        options: [
                            'none',
                            'bullets',
                            'fraction',
                            'progressbar',
                        ]
                    },
                    {
                        type: 'select',
                        label: 'Transition effect',
                        name: 'effect',
                        changeProp: 1,
                        options: [
                            'slide',
                            'fade',
                            'cube',
                            'coverflow',
                            'flip',
                        ]
                    },
                    {
                        type: 'number',
                        label: 'Slides Per View',
                        name: 'slidesPerView',
                        changeProp: 1,
                    },
                    {
                        type: 'number',
                        label: 'Slides Per Group',
                        name: 'slidesPerGroup',
                        changeProp: 1,
                    },
                    {
                        type: 'number',
                        label: 'Space Between',
                        name: 'spaceBetween',
                        changeProp: 1,
                    },
                    {
                        type: 'number',
                        label: 'Slides Offset Before',
                        name: 'slidesOffsetBefore',
                        changeProp: 1,
                    },
                    {
                        type: 'number',
                        label: 'Slides Offset After',
                        name: 'slidesOffsetAfter',
                        changeProp: 1,
                    },
                    {
                        type: 'number',
                        label: 'Autoplay Delay',
                        name: 'autoplayDelay',
                        changeProp: 1,
                    },
                    {
                        type: 'checkbox',
                        label: 'Autoplay stop on Last slide',
                        name: 'autoplayStopOnLastSlide',
                        changeProp: 1,
                    },
                    {
                        type: 'checkbox',
                        label: 'Autoplay disable on interaction',
                        name: 'autoplayDisableOnInteraction',
                        changeProp: 1,
                    },
                    {
                        type: 'checkbox',
                        label: 'Autoplay reverse direction',
                        name: 'autoplayReverseDirection',
                        changeProp: 1,
                    },
                    {
                        type: 'checkbox',
                        label: 'Autoplay wait for transition',
                        name: 'autoplayWaitForTransition',
                        changeProp: 1,
                    },
                    // {
                    //     type: 'checkbox',
                    //     label: 'Auto Height',
                    //     name: 'autoHeight',
                    //     changeProp: 1,
                    // },
                    {
                        type: 'checkbox',
                        label: 'Watch Overflow',
                        name: 'watchOverflow',
                        changeProp: 1,
                    },
                    {
                        type: 'checkbox',
                        label: 'Centered Slides',
                        name: 'centeredSlides',
                        changeProp: 1,
                    },
                ],

                droppable: `${wrapperSelector}, ${prevSelector}, ${nextSelector}, ${scrollbarSelector}, ${paginationSelector}}`,

                draggable: true,

                style: {
                  'padding': '30px 50px',
                  'height': '239px'
                },

                'script-deps': config.script,
                'style-deps': config.style,
                'class-container': config.classContainer,
                'class-wrapper': config.classWrapper,
                'class-prev': config.classPrev,
                'class-next': config.classNext,
                'class-pagination': config.classPagination,
                'class-scrollbar': config.classScrollbar,

                script() {
                    const el = this;
                    const scriptDeps = '{[ script-deps ]}';
                    const styleDeps = '{[ style-deps ]}';
                    const falsies = ['0', 'false', 'none'];
                    const truthies = ['1', 'true'];
                    const elId = el.getAttribute('id');

                    const options = {
                        initialSlide: parseInt('{[ initialSlide ]}', 10),
                        speed: parseInt('{[ speed ]}', 10),
                        slidesPerView: parseInt('{[ slidesPerView ]}', 10),
                        spaceBetween: parseInt('{[ spaceBetween ]}', 10),
                        slidesPerGroup: parseInt('{[ slidesPerGroup ]}', 10),
                        slidesOffsetBefore: parseInt('{[ slidesOffsetBefore ]}', 10),
                        slidesOffsetAfter: parseInt('{[ slidesOffsetAfter ]}', 10),
                        direction: '{[ direction ]}',
                        effect: '{[ effect ]}',
                        autoHeight: isNaN('{[ autoHeight ]}'),
                        watchOverflow: isNaN('{[ watchOverflow ]}'),
                        centeredSlides: isNaN('{[ centeredSlides ]}'),
                        loop: isNaN('{[ loop ]}'),
                        navigation: {
                            nextEl: `#${elId} .swiper-button-next`,
                            prevEl: `#${elId} .swiper-button-prev`,
                        },
                        breakpointsInverse: true,
                    };

                    if (!falsies.includes('{[ pagination ]}')) {
                        options.pagination = {
                            el: `#${elId} .swiper-pagination`,
                            type: '{[ pagination ]}',
                        };
                    }

                    if (truthies.includes('{[ autoplay ]}')) {
                        options.autoplay = {
                            delay: '{[ autoplayDelay ]}',
                            stopOnLastSlide: '{[ autoplayStopOnLastSlide ]}',
                            disableOnInteraction: '{[ autoplayDisableOnInteraction ]}',
                            reverseDirection: '{[ autoplayReverseDirection ]}',
                            waitForTransition: '{[ autoplayWaitForTransition ]}',
                        };
                    }

                    if (isNaN('{[ scrollbar ]}')) {
                        options.scrollbar = {
                            el: `#${elId} .swiper-scrollbar`,
                            draggable: true,
                        };
                    }

                    const initSlider = function () {
                        window.sliderSwiper = new Swiper(el, options);
                    };

                    if (scriptDeps && typeof Swiper == 'undefined') {
                        // Load the style tag
                        var style = document.createElement('link');
                        style.rel = 'stylesheet';
                        style.href = styleDeps;
                        document.head.appendChild(style);

                        // Load the script tag
                        var script = document.createElement('script');
                        script.src = scriptDeps;
                        script.onload = initSlider;
                        document.head.appendChild(script);
                    } else {
                        initSlider();
                    }
                },
                ...config.sliderProps
            },
            init(){
              this.addStyle({ "position": "relative" });
              // this.addStyle({ "padding": "30px 50px" });
              // this.addStyle({ "height": "239px" });
            },
        }, {
            isComponent(el) {
                if (el.hasAttribute && el.hasAttribute(containerId)) {
                    return {type: containerName};
                }
            },
        }),

        view: defaultView.extend({
            init() {
                const props = [
                    'initialSlide',
                    'speed',
                    'slidesPerView',
                    'spaceBetween',
                    'slidesPerGroup',
                    'slidesOffsetBefore',
                    'slidesOffsetAfter',
                    'direction',
                    'effect',
                    'autoHeight',
                    'watchOverflow',
                    'centeredSlides',
                    'loop',
                    'pagination',
                    'scrollbar',
                    'autoplay',
                    'autoplayDelay',
                    'autoplayStopOnLastSlide',
                    'autoplayDisableOnInteraction',
                    'autoplayReverseDirection',
                    'autoplayWaitForTransition',
                    //
                    // // Small
                    // 'smallSlidesPerView',
                    // 'smallSpaceBetween',
                    // 'smallSlidesPerGroup',
                    //
                    // // Medium
                    // 'mediumSlidesPerView',
                    // 'mediumSpaceBetween',
                    // 'mediumSlidesPerGroup',
                    //
                    // // Large
                    // 'largeSlidesPerView',
                    // 'largeSpaceBetween',
                    // 'largeSlidesPerGroup',
                ];

                const reactTo = props.map(prop => `change:${prop}`).join(' ');
                this.listenTo(this.model, reactTo, this.render);
                const comps = this.model.components();

                // Add a basic template if it's not yet initialized
                if (!comps.length) {
                    comps.add(`
                            <div data-gjs-type="${wrapperName}">
                              ${config.slideEls}
                            </div>
                            <div data-gjs-type="${prevName}"></div>
                            <div data-gjs-type="${nextName}"></div>
                            <div data-gjs-type="${paginationName}"></div>
                            <div data-gjs-type="${scrollbarName}"></div>
                          `
                    );
                }
            },
        }),
    });
}
