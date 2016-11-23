var React = require('react');

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
		var modal = new Foundation.Reveal($('#error-modal')); //jquery call in parentheses
		modal.open();
	},

	render: function() {

		var {title, message}=this.props;

		return(
			<div id="error-modal" className="reveal tiny text-center" data-reveal="" data-close-on-esc="true">
				<h4>{title}</h4>
				<p>{message}</p>
				<p><button className="expanded button" data-close="">OK</button></p>
			</div>
		);
	}
});

module.exports = ErrorModal;