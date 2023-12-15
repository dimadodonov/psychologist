import 'focus-visible';
// import lazyImages from './modules/lazyImages';
import collapse from './modules/collapse';
import main from './modules/main';
import slider from './modules/swiper';
import svg4everybody from 'svg4everybody';

import documentReady from './helpers/documentReady';

documentReady(() => {
    collapse();
    main();
    slider();
    svg4everybody();
});
