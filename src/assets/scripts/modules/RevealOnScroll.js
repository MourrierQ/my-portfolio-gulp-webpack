import $ from 'jquery';
import waypoints from '../../../../node_modules/waypoints/lib/noframework.waypoints'

export default class RevealOnScroll {
  constructor(els,offset){
    this.$itemsToReveal = els;
    this.$offset = offset;
    this.hideInitially();
    this.createWaypoints();
  }

  hideInitially(){
    this.$itemsToReveal.addClass('reveal-item');
    console.log(this.$itemsToReveal);
  }

  createWaypoints(){
    var that = this;
    this.$itemsToReveal.each(function(){
      var currentItem = this;
      new Waypoint({
        element: currentItem,
        handler: function(){
          $(currentItem).addClass("reveal-item--is-visible");
        },
        offset: that.$offset
      });
    });
  }
}
