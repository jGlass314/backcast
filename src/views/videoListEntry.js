var VideoListEntryView = Backbone.View.extend({

  initialize: function() {
    // console.log(this.model);


  },

  events: {
    'click': 'handleClick'
  },

  handleClick: function() {
    //debugger;
    console.log('call handleClick');
  },

  render: function() {
    // console.log('this:',this);
    this.$el.append(this.template(this.model.attributes));
    return this;
  },

  template: templateURL('src/templates/videoListEntry.html')

});
