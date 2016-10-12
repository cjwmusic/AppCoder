var React = require('react');
var Style = require('./main.css');

import HeaderSection from "../component/base/headerSection.jsx"
import FooterSection from "../component/base/footerSection.jsx"
import PropSelect from "../component/settings/propSelect.jsx"
import SettingCell from "../component/settings/settingCell.jsx"

module.exports = React.createClass({

    //Life Cycle
    componentWillMount : function () {
        Style.use();
    },

    componentWillUnmount : function () {
        Style.unuse();
    },

    render : function () {
        return (
            <div id="app" className="main">
                <HeaderSection title = 'iOS Code Generator V0.1'/>

                <div className="setting_area">
                    <div className = 'select_prop'>
                        <PropSelect />
                    </div>
                    <button className="button">添加</button>

                    <SettingCell />

                </div>

                <div className="code_area">
                    <textarea className="code_text" >
                        Contribute to Learning-HTML-CSS development by creating an ... 这是偶尔看到的一篇学习CSS布局的文章，对于我这个菜鸟来说真是受益匪浅， .
                        Contribute to Learning-HTML-CSS development by creating an ... 这是偶尔看到的一篇学习CSS布局的文章，对于我这个菜鸟来说真是受益匪浅， .
                        Contribute to Learning-HTML-CSS development by creating an ... 这是偶尔看到的一篇学习CSS布局的文章，对于我这个菜鸟来说真是受益匪浅， .\n
                        Contribute to Learning-HTML-CSS development by creating an ... 这是偶尔看到的一篇学习CSS布局的文章，对于我这个菜鸟来说真是受益匪浅， .
                        Contribute to Learning-HTML-CSS development by creating an ... 这是偶尔看到的一篇学习CSS布局的文章，对于我这个菜鸟来说真是受益匪浅， .
                        Contribute to Learning-HTML-CSS development by creating an ... 这是偶尔看到的一篇学习CSS布局的文章，对于我这个菜鸟来说真是受益匪浅， .
                        Contribute to Learning-HTML-CSS development by creating an ... 这是偶尔看到的一篇学习CSS布局的文章，对于我这个菜鸟来说真是受益匪浅， .
                        Contribute to Learning-HTML-CSS development by creating an ... 这是偶尔看到的一篇学习CSS布局的文章，对于我这个菜鸟来说真是受益匪浅， .
                        Contribute to Learning-HTML-CSS development by creating an ... 这是偶尔看到的一篇学习CSS布局的文章，对于我这个菜鸟来说真是受益匪浅， .
                        Contribute to Learning-HTML-CSS development by creating an ... 这是偶尔看到的一篇学习CSS布局的文章，对于我这个菜鸟来说真是受益匪浅， .
                        Contribute to Learning-HTML-CSS development by creating an ... 这是偶尔看到的一篇学习CSS布局的文章，对于我这个菜鸟来说真是受益匪浅， .
                    </textarea>
                </div>
                <FooterSection title = 'wukong@kongge.com'/>
            </div>
        );
    }
});