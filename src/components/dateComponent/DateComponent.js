import React, {Component} from 'react';
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import './DateComponent.less';

class DateComponent extends Component {
    state = {
        startDate: new Date()
    };

    handleSelectionChange = selected => this.setState({selected});

    handleChange = date => {
        this.setState({
            startDate: date
        });
    };

    render() {
        return (
            <div className='date'>
                <DatePicker
                    selected={this.state.startDate}
                    onChange={this.handleChange}
                    isClearable
                    inline
                />
            </div>
        );
    }
}

export default DateComponent;