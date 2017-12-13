var SearchView = Backbone.View.extend({

  initialize: function() {
    this.collection.search('family guy');
  },

  render: function() {
    this.$el.html(this.template());
    return this;
  },

  template: templateURL('src/templates/search.html')

});
