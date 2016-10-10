var React = require('react')
var Style = require('./settingCell.css')

module.exports = React.createClass({

    componentWillMount : function () {
        Style.use();
    },

    componentWillUnmount : function () {
        Style.unuse();
    },

    render : function () {
        return (
            <div className="cell">
                <div className="title">UIButton</div>
            </div>
        )
    }

});