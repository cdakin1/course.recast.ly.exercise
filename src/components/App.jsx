class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      currentVideo: null,
      videos: []
    };
    console.log('app', this);
    this.getYouTube = this.getYouTube.bind(this);
  }

  componentDidMount() {
    this.getYouTube('cats');
  }

  getYouTube (searchString) {
    this.props.searchYouTube({key: window.YOUTUBE_API_KEY, query: searchString, max: 5}, data => {
      this.setState({
        currentVideo: data[0],
        videos: data
      });
    });
  }

  render() {
    return (<div>
      <Nav getYouTube={this.getYouTube}/>
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
