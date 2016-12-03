var searchYouTube = (options, callback) => {
  $.get('https://www.googleapis.com/youtube/v3/search', {
    part: 'snippet',
    key: options.key,
    q: options.query,
    maxResults: options.max,
    type: 'video',
    videoEmbeddable: 'true'
  }).done(data => {
    console.log('data', data.items);
    callback(data.items);
  }).fail(error => console.log(error));
};

window.searchYouTube = searchYouTube;
