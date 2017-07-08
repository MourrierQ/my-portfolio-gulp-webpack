import $ from 'jquery'
import waypoints from '../../../../node_modules/waypoints/lib/noframework.waypoints'

export default class StickyHeader {
  constructor(){
    this.$pageSections = $(".page-section");
    this.$headerLinks = $(".primary-nav a");
    this.createPageSectionWaypoints();
    this.addSmoothScrolling();
    // this.refreshWaypoints();
  }

  addSmoothScrolling(){
    this.$headerLinks.smoothScroll();
  }

  createPageSectionWaypoints(){
    var that = this;
    this.$pageSections.each(function(){
      var currentPageSection = this
      new Waypoint({
        element: currentPageSection,
        handler: function(direction){
          if(direction === "down"){
            var matchingHeaderLink = currentPageSection.getAttribute("data-matching-link");
            that.$headerLinks.removeClass('is-current-link')
            $(matchingHeaderLink).addClass("is-current-link")
          }
        },
        offset: "28%"
      });

      new Waypoint({
        element: currentPageSection,
        handler: function(direction){
          if(direction === "up"){
            var matchingHeaderLink = currentPageSection.getAttribute("data-matching-link");
            that.$headerLinks.removeClass('is-current-link')
            $(matchingHeaderLink).addClass("is-current-link")
          }
        },
        offset: "-15%"
      });
    });
  }


}
