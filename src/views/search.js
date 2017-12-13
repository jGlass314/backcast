var SearchView = Backbone.View.extend({
  initialize: function() {
    var that = this;
    this.collection.on('sync', function() {
      that.render();
    });
  },

  render: function() {
    this.$el.html(this.template());
    var collection = this.collection;
    $('.form-control').on('keypress',function(e) {
      if(e.keyCode === 13) {
        collection.search($(this).val());
      }
    });

    $('button').on('click', function(e) {
      collection.search($(this).parent().find('.form-control').val());
    });

    return this;
  },

  template: templateURL('src/templates/search.html')
});
