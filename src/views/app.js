var AppView = Backbone.View.extend({

  el: '#app',

  initialize: function() {
    this.videos = new Videos(window.exampleVideoData);
  },

  render: function() {
    console.log('this.videos:', this.videos);
    this.$el.html(this.template());
    new SearchView({
      el: this.$('.search')
    }).render();
    new VideoPlayerView({
      el: this.$('.player')
    }).render();
    new VideoListView({
      el: this.$('.list'),
      collection: this.videos
    }).render();
    return this;
  },

  template: templateURL('src/templates/app.html')

});
