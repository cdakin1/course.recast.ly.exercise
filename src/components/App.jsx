class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      currentVideo: null,
      videos: null
    };

    this.data = window.searchYouTube({key: window.YOUTUBE_API_KEY, query: 'cats', max: 5}, function(data) {
      console.log('data', data);
      return data;
    });
    console.log(this);
  }

  render() {
    return (<div>
      <Nav />
      <div className="col-md-7">
        <VideoPlayer video={this.state.currentVideo}/>
      </div>
      <div className="col-md-5">
        <VideoList videos={this.state.videos}/>
      </div>
    </div>);
  }
}


// In the ES6 spec, files are "modules" and do not share a top-level scope
// `var` declarations will only exist globally where explicitly defined
window.App = App;
