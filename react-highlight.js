(function (factory) {
  if (typeof require === 'function' &&
      typeof module  === 'object' &&
      typeof exports === 'object' &&
      module.exports === exports) {

    // Node: export as module
    module.exports = factory(
      require('react'),
      require('react-dom'),
      require('highlight.js')
    );
  } else {
    // Browser: export as global variable
    window.HighLight = window.HighLight || factory(React, ReactDOM, hljs);
  }

})(function (React, ReactDOM, hljs) {
  return React.createClass({
    propTypes: {
      lang: React.PropTypes.string.isRequired,
      value: React.PropTypes.string.isRequired
    },

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
        console.warn(e);
        ele.innerHTML = this.props.value; // remove syntax highlight
      }
    }
  });
});
