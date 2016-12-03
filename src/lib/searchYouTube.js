var searchYouTube = (options, callback) => {
  $.get('https://www.googleapis.com/youtube/v3/search', {
    part: 'snippet',
    key: options.key,
    q: options.query,
    maxResults: options.max,
    type: 'video',
    videoEmbeddable: 'true'
  }).done(data => {
    console.log(data.items);
    callback(data.items);
  });
};

window.searchYouTube = searchYouTube;
