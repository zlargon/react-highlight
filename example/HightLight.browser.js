(function (window) {

  var HighLight = React.createClass({
    componentDidMount: function () {
      // this will only be called once after first time render
      this.updateCodeBlockDOM();
    },

    componentDidUpdate: function () {
      // whenever component is updated
      this.updateCodeBlockDOM();
    },

    render: function () {
      /*
       * <pre inherit_all_the_props_from_parent >
       *  <code ref='code' className={'hljs ' + this.props.lang}>
       *    to_be_rendered_by_highlight.js
       *  </code>
       * </pre>
       *
       */

      var props = Object.assign({}, this.props);
      delete props.lang;
      delete props.value;

      return (
        React.createElement('pre', props,
          React.createElement('code', {
            ref: 'code',
            className: 'hljs ' + this.props.lang
          })
        )
      );
    },

    updateCodeBlockDOM: function () {
      // update real DOM element after component render
      var ele = ReactDOM.findDOMNode(this.refs.code);

      try {
        ele.innerHTML = hljs.highlight(this.props.lang, this.props.value, true).value;
      } catch (e) {
        // Unknown language: remove highlight
        console.warn(e.message);
        ele.innerHTML = this.props.value;
      }
    }
  });

  // class static member
  HighLight.propTypes = {
    lang: React.PropTypes.string.isRequired,
    value: React.PropTypes.string.isRequired
  };

  // window.HighLight
  if (typeof window === 'object' && typeof window.HighLight === 'undefined') {
    window.HighLight = HighLight;
  }

})(this);
