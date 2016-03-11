var Child = require('./Child');

var Parent = React.createClass({
	logging: function() {
				 console.log('that tickles');
	},
	render: function(){
				return (
					<div onClick={this.logging}>
					<div> This is the parent. </div>
					<Child name="child"/>
					</div>
					)
			}
});

module.exports = Parent;
