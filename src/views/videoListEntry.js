var VideoListEntryView = Backbone.View.extend({

  initialize: function() {
    // console.log(this.model);


  },

  events: {
    'click': 'handleClick'
  },

  handleClick: function() {
    //debugger;
    new VideoPlayerView({
      el: $('body').find('.player')
    }).render(this.model);
  },

  render: function() {

    this.$el.html(this.template(this.model.attributes));
    return this;
  },

  template: templateURL('src/templates/videoListEntry.html')

});
