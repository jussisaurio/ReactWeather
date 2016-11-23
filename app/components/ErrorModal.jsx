var React = require('react');
var ReactDOM = require('react-dom');
var ReactDOMServer = require('react-dom/server');

var ErrorModal = React.createClass({

	propTypes: {
		title: React.PropTypes.string,
		message: React.PropTypes.string.isRequired
	},

	getDefaultProps: function(){
		return {
			title: 'Error'
		};
		
	},

	// runs immediately after component is mounted
	componentDidMount: function() {
		
		var {title, message}=this.props;
		var modalMarkup = (
			<div id="error-modal" className="reveal tiny text-center" data-reveal="" data-close-on-esc="true">
				<h4>{title}</h4>
				<p>{message}</p>
				<p><button className="expanded button" data-close="">OK</button></p>
			</div>);

		var $modal = $(ReactDOMServer.renderToString(modalMarkup)); // jQuery object

		$(ReactDOM.findDOMNode(this)).html($modal); // jquery selects the DOM Node where ErrorModal lives
		// and adds the markup to it

		var modal = new Foundation.Reveal($('#error-modal')); //jquery call in parentheses
		modal.open();
	},

	render: function() {

		// these are done in componentDidMount because React doesnt work well with 3rd party libraries updating DOM
		return(
			<div></div>	
		);
	}
});

module.exports = ErrorModal;