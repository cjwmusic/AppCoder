var React = require('react')
var Style = require('./footerSection.css')

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
            <div className="footer">
                    <div className="title">{title}</div>
        
            </div>
        )
    }
    
});