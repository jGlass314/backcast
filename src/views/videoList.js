var VideoListView = Backbone.View.extend({

  render: function() {
    this.$el.children().detach();
    this.$el.html(this.template());

    this.collection.forEach(this.renderVideo, this);
    return this;
  },

  renderVideo: function(video) {
    // console.log(this);
    this.$('.video-list').append(
      new VideoListEntryView({
        model: video
      }).render().el
    );

  },

  template: templateURL('src/templates/videoList.html')

});
