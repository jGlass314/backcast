var VideoListEntryView = Backbone.View.extend({
  events: {
    'click': 'handleClick'
  },

  handleClick: function() {
    new VideoPlayerView({
      el: $('body').find('.player'),
      collection: this.collection
    }).render(this.model);
  },

  render: function() {
    this.$el.html(this.template(this.model.attributes));
    return this;
  },

  template: templateURL('src/templates/videoListEntry.html')

});
