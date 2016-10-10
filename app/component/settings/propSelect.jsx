var React = require('react')
var Style = require('./propSelect.css')

module.exports = React.createClass({
    componentWillMount : function () {
        Style.use();
    },

    componentWillUnmount : function () {
        Style.unuse();
    },

    render : function () {
        return (
            <div>
                <select className="prop_sel">
                    <option value="UIButton">UIButton</option>
                </select>
            </div>
        )
    }
});