class App extends React.Component {

  constructor (props) {
    super(props);
    this.state = props;
  }

  render () {
    return (
      <div className="container">
        <h1>Live Editor</h1>
        <div>
          <strong>Language: </strong>
          <input
            value={this.state.lang}
            onChange={e => this.setState({ lang: e.target.value })}
          />
        </div>

        <div>
          <HighLight
            lang={this.state.lang}
            value={this.state.value}
          />

          <pre>
            <code
              className='hljs textarea'
              contentEditable='true'
              spellCheck='false'
              onInput={e => this.setState({ value: e.target.innerText })}>
              {this.props.value /* only init once time */}
            </code>
          </pre>
        </div>
      </div>
    );
  }
}

App.defaultProps = {
  lang: 'javascript',
  value:'let hello = "world";'
};

ReactDOM.render(<App/>, document.getElementById('root'));
