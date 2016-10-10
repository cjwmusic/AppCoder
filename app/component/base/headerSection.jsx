var React = require('react')
var Style = require('./headerSection.css')

module.exports = React.createClass({
    componentWillMount : function () {
        Style.use();
    },
    
    componentWillUnmount : function () {
        Style.unuse();
    },

    render : function () {
        var title = this.props.title;
        return (
            <div className="header">
                <div className="title">{title}</div>

            </div>
        )
    }
});