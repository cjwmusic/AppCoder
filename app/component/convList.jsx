var React = require('react');
var Style = require('./convList.css');

module.exports = React.createClass({

    //Life Cycle
    componentWillMount : function () {
        Style.use();
    },

    componentWillUnmount : function () {
        Style.unuse();
    },
    
    render : function () {
        var user = this.props.user;
        return (
            <div className="cell">
                <div className="nick">iOS Code Generator</div>
            </div>
        );
    }
});