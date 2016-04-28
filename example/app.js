var App = React.createClass({
  getInitialState: function () {
    return {
      lang: 'javascript',
      value: 'var hello = "world";'
    };
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

        <article>
          <HighLight
            lang={this.state.lang}
            value={this.state.value}
          />

          <pre>
            <code
              className='hljs textarea'
              contentEditable='true'
              spellCheck='false'
              onInput={e => this.setState({ value: event.target.outerText })}>
              {this.state.value}
            </code>
          </pre>
        </article>
      </div>
    );
  }
});

ReactDOM.render(<App/>, document.getElementById('root'));
