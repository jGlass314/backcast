var Videos = Backbone.Collection.extend({

  initialize: function() {

  },

  search: function(searchTerm) {
    this.fetch({
      reset: true,
      data: {
        q: searchTerm,
        maxResults: 5,
        key: window.YOUTUBE_API_KEY,
        type: 'video',
        part: 'snippet'
      },
      type: 'GET',
      success: function(data) {
        console.log('successful search for', searchTerm);
        console.log(data);
      },
      error: function()  {
        console.error('error searching for', searchTerm);
      }
    });

  },

  parse: function(response) {
    return response.items;
  },

  model: Video,
  url: 'https://www.googleapis.com/youtube/v3/search'

});
