var VideoPlayerView = Backbone.View.extend({
  render: function(model) {
    //this.$el.html('<div class="loading">Please wait...</div>');
    this.$el.children().detach();
    this.$el.html(this.template(model.attributes));
    return this;
  },

  template: templateURL('src/templates/videoPlayer.html')

});
