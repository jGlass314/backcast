var VideoListView = Backbone.View.extend({

  render: function() {
    this.$el.children().detach();
    this.$el.html(this.template());

    // for(var i = 0; i < 5; i++) {
    //   this.renderVideo(this.collection.at(i));
    // }
    this.collection.forEach(this.renderVideo, this);
    return this;
  },

  renderVideo: function(video) {
    var videoView = new VideoListEntryView({
      el: this.$('.video-list'),
      model: video
    });
    /*this.$el.append(*/videoView.render();/*);*/
  },

  template: templateURL('src/templates/videoList.html')

});
