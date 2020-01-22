import React, {Component, Fragment} from 'react';
import './UserForm.less';

class UserForm extends Component {
    state = {
        username: ''
    };

    handleUserChange = ev => {
        ev.preventDefault();
        this.setState({
            username: ev.target.value
        })
    };

    render() {
        const {username}=this.state;
        return (
            <form className='form'>
                <div className='form-group'>
                    <label
                        htmlFor="exampleInputEmail1"
                        className="bmd-label-floating">Username</label>
                    <input
                        type="text"
                        className="form-control"
                        id="exampleInputEmail1"
                        value={username}
                        onChange={this.handleUserChange}/>
                    <span className="bmd-help">We'll never share your username with anyone else.</span>
                </div>
            </form>
        );
    }
}

export default UserForm;