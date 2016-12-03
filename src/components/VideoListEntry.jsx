var VideoListEntry = (prop) => {
  console.log(prop);
  var that = prop.video.snippet;

  var output = (
  <div className="video-list-entry">
    <div className="media-left media-middle">
      <img className="media-object" src={that.thumbnails.default.url} alt="" />
    </div>
    <div className="media-body">
      <div className="video-list-entry-title">{that.title}</div>
      <div className="video-list-entry-detail">{that.description}</div>
    </div>
  </div>
);

  return output;
};
// PropTypes tell other developers what `props` a component expects
// Warnings will be shown in the console when the defined rules are violated
VideoListEntry.propTypes = {
  video: React.PropTypes.object.isRequired
};

// In the ES6 spec, files are "modules" and do not share a top-level scope
// `var` declarations will only exist globally where explicitly defined
window.VideoListEntry = VideoListEntry;
