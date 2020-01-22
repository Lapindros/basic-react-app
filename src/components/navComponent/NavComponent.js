import React, {Component} from 'react';
import {NavLink} from "react-router-dom";
import {connect} from "react-redux";

class NavComponent extends Component {

    render() {
        const {locale} = this.props;
        return (
            <nav>
                <div>
                    <NavLink to='/' exact activeStyle={{color: 'red'}}>{locale.home}</NavLink>
                </div>
                <div>
                    <NavLink to='/articles' activeStyle={{color: 'red'}}>{locale.articles}</NavLink>
                </div>
                <div>
                    <NavLink to='/filters' activeStyle={{color: 'red'}}>{locale.filters}</NavLink>
                </div>
                <div>
                    <NavLink to='/counter' activeStyle={{color: 'red'}}>{locale.counter}</NavLink>
                </div>
            </nav>
        );
    }
}

const mapStateToProps = (store) => ({
    currentlocale: store.locale,

});

export default connect(mapStateToProps)(NavComponent)