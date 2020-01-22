import React, {Component} from 'react';
import Select from 'react-select';
import './SelectComponent.less';
import {connect} from "react-redux";
import {filterSelectedItems, RemoveSelectedItems} from "../../actionCreator";

class SelectComponent extends Component {
    state = {
        selected: null,
    };

    handleChangeOption = selectedOption => {
        const {filterItems, removeAllFilters} = this.props;
        this.setState(
            {selected: selectedOption},
        );

        const selectedArticles = selectedOption;
        if (selectedOption === null) {
            removeAllFilters()
        }

        if (selectedArticles) {
            selectedOption.forEach(element => filterItems(element.id));
        }
    };

    render() {
        const {selectOptions} = this.props;
        return (
            <div className='select'>
                <Select
                    isMulti
                    options={selectOptions}
                    value={this.state.selected}
                    onChange={this.handleChangeOption}
                />
            </div>
        );
    }
}

const mapStateToProps = (store) => ({
    selectOptions: store.select,
    filteredArticles: store.articles.filteredArticles
});

const mapDispatchToProps = {
    filterItems: filterSelectedItems,
    removeAllFilters: RemoveSelectedItems,
};

export default connect(mapStateToProps, mapDispatchToProps)(SelectComponent);