var VideoListView = Backbone.View.extend({
  initialize: function() {
    var that = this;
    this.collection.on('sync', function() {
      that.render();
    });
  },

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
        model: video,
        collection: this.collection
      }).render().el
    );
  },

  template: templateURL('src/templates/videoList.html')

});
