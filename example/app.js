var App = React.createClass({
  getDefaultProps: function () {
    return {
      lang: 'javascript',
      value: 'var hello = "world";'
    }
  },

  getInitialState: function () {
    return this.props;
  },

  render: function () {
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
});

ReactDOM.render(<App/>, document.getElementById('root'));
