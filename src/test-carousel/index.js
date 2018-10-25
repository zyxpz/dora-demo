import Carousel from 'mido-h5-carousel';
import './index.less';

const carousel = new Carousel({
  warp: 'w1',
  main: 'm1',
  play: true,
  point: true
})

carousel.init();

const carousel2 = new Carousel({
  warp: 'w2',
  main: 'm2',
  play: true,
  horizontal: true,
  point: true
})

carousel2.init();