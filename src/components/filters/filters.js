import React, {Component} from 'react';
import "react-datepicker/dist/react-datepicker.css";
import SelectComponent from "../selectComponent/selectComponent";
import DateComponent from "../dateComponent/DateComponent";
import './Filters.less';

class Filters extends Component {

    render() {
        return (
            <div className='filters'>
                <SelectComponent/>
                <DateComponent/>
            </div>
        );
    }
}

export default Filters;