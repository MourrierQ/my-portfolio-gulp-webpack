import $ from 'jquery';
import StickyHeader from './modules/StickyHeader';
import smoothScroll from 'jquery-smooth-scroll';
import RevealOnScroll from './modules/RevealOnScroll';

var stickyHeader = new StickyHeader();

new RevealOnScroll($(".skillset__item"),"85%");
new RevealOnScroll($(".overlay"),"75%");
new RevealOnScroll($(".icon"),"90%");
