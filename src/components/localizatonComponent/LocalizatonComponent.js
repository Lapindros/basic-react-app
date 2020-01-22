import React, {Component} from 'react';
import {Locale} from "../../localization";
import {setLocale} from "../../actionCreator";
import {connect} from "react-redux";
import './localization.less';

class LocalizatonComponent extends Component {

    _onSetLanguage(language) {
        const {changeLocale, currentlocale} = this.props;
        changeLocale(language);
        Locale.setLanguage(currentlocale.locale)
    }

    getLocale = () => {
        const {currentlocale} = this.props;
        Locale.setLanguage(currentlocale.locale)
    };

    render() {
        return (
            <div>
                {this.getLocale()}
                {Locale.choose_language}
                <ul className='locale_list'>
                    <li onClick={() => this._onSetLanguage('en')}>English</li>
                    <li onClick={() => this._onSetLanguage('ru')}>Russian</li>
                </ul>
            </div>
        );
    }
}

const mapStateToProps = (store) => ({
    currentlocale: store.locale,

});

const mapDispatchToProps = {
    changeLocale: setLocale,
};

export default connect(mapStateToProps, mapDispatchToProps)(LocalizatonComponent)




