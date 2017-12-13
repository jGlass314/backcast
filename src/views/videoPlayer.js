var VideoPlayerView = Backbone.View.extend({
  initialize: function() {
    var that = this;
    this.collection.on('sync', function() {
      that.render(that.collection.at(0));
    });
  },

  render: function(model) {
    this.$el.children().detach();
    this.$el.html(this.template(model.attributes));
    return this;
  },

  template: templateURL('src/templates/videoPlayer.html')
});
