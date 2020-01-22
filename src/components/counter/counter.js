import React, {Component} from 'react';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';
import {increment} from "../../actionCreator";
import './counter.less'

class Counter extends Component {
    static propTypes = {
        count: PropTypes.number,
        handleIncrement: PropTypes.func,
    };

    handleOnClick = () => {
        const {handleIncrement} = this.props;
        handleIncrement()
    };

    render() {
        return (
            <div className='card counter'>
                <div className='card-body'>
                    <h2>Counter</h2>
                    <h3>{this.props.count}</h3>
                    <button
                        type="button"
                        className="btn btn-primary"
                        onClick={this.handleOnClick}>Tap button to increment</button>
                </div>
            </div>
        );
    }
}

const mapStateToProps = (storeState) => ({
    count: storeState.counter
});

const mapDispatchToProps = {
    handleIncrement: increment
};

export default connect(mapStateToProps, mapDispatchToProps)(Counter);