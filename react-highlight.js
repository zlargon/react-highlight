(function (factory) {
  if (typeof require === 'function' &&
      typeof module  === 'object' &&
      typeof exports === 'object' &&
      module.exports === exports) {

    // Node: export as module
    module.exports = factory(
      require('react'),
      require('react-dom'),
      require('prop-types'),
      require('highlight.js')
    );
  } else {
    // Browser: export as global variable
    window.HighLight = window.HighLight || factory(React, ReactDOM, PropTypes, hljs);
  }

})(function (React, ReactDOM, PropTypes, hljs) {

  class HighLight extends React.Component {
    constructor(props) {
      super(props);
      this.componentDidMount = this.componentDidMount.bind(this);
      this.componentDidUpdate = this.componentDidUpdate.bind(this);
      this.updateCodeBlockDOM = this.updateCodeBlockDOM.bind(this);
      this.render = this.render.bind(this);
    }

    componentDidMount () {
      // this will only be called once after first time render
      this.updateCodeBlockDOM();
    }

    componentDidUpdate () {
      // whenever component is updated
      this.updateCodeBlockDOM();
    }

    render () {
      /*
       * <pre inherit_all_the_props_from_parent >
       *  <code ref='code' className={'hljs ' + this.props.lang}>
       *    to_be_rendered_by_highlight.js
       *  </code>
       * </pre>
       *
       */
      const props = Object.assign({}, this.props);
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
    }

    updateCodeBlockDOM () {
      // update real DOM element after component render
      const ele = ReactDOM.findDOMNode(this.refs.code);

      try {
        ele.innerHTML = hljs.highlight(this.props.lang, this.props.value, true).value;
      } catch (e) {
        console.warn(e);
        ele.innerHTML = this.props.value; // remove syntax highlight
      }
    }
  };

  HighLight.propTypes = {
    lang: PropTypes.string.isRequired,
    value: PropTypes.string.isRequired
  };

  return HighLight;
});
