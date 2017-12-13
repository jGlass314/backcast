var AppView = Backbone.View.extend({

  el: '#app',

  initialize: function(data) {
    this.videos = new Videos(data);
  },

  render: function() {
  //  console.log('this.videos:', this.videos);
    this.$el.html(this.template());
    new SearchView({
      el: this.$('.search'),
      collection: this.videos
    }).render();

    new VideoPlayerView({
      el: this.$('.player')
    }).render(this.videos.at(0));

    new VideoListView({
      el: this.$('.list'),
      collection: this.videos
    }).render();

    return this;
  },

  template: templateURL('src/templates/app.html')

});
