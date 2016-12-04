class Search extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      value: null
    };
    this.handleInput = this.handleInput.bind(this);
  }

  handleInput (event) {
    this.setState({
      value: event.target.value
    });
    this.props.getYouTube(event.target.value);
  }


  render () {
    return (
    <div className="search-bar form-inline">
      <input className="form-control" type="text" value={this.state.value} onChange={this.handleInput}/>
      <button type="button" className="btn hidden-sm-down" >
        <span className="glyphicon glyphicon-search"></span>
      </button>
    </div>);
  }
}


// In the ES6 spec, files are "modules" and do not share a top-level scope
// `var` declarations will only exist globally where explicitly defined
window.Search = Search;
