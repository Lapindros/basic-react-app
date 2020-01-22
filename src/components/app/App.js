import React, {Component} from 'react';
import UserForm from "../userForm/UserForm";
import "react-datepicker/dist/react-datepicker.css";
import Filters from "../filters/filters";
import Counter from "../counter/counter";
import './App.less';
import {Route} from "react-router-dom";
import ArticlesPage from "../../routes/articles-page";
import {Locale} from '../../localization'
import NavComponent from "../navComponent/NavComponent";
import LocalizatonComponent from "../localizatonComponent/LocalizatonComponent";

class App extends Component {

    render() {
        return (
            <div className='container-fluid'>
                <LocalizatonComponent/>
                <NavComponent
                    locale={Locale}
                />
                <UserForm/>
                <Route path='/filters' component={Filters}/>
                <Route path='/articles' component={ArticlesPage}/>
                <Route path='/counter' component={Counter}/>
            </div>
        );
    }
}

export default App;