import React, { Component }  from 'react';

import Filter from './Filter';
import FilteredFruitList from './FilteredFruitList.js';



const FruitBasket = (props) => {

    return (
      <div className="fruit-basket">
        <Filter filters={props.filters}
        handleChange={props.changeCurrentFilter} />
        <FilteredFruitList
          filter={props.currentFilter} fruit={props.fruit}/>
      </div>
    );
}

FruitBasket.defaultProps = {
  fruit: undefined,
  filters: undefined,
  currentFilter: undefined,
  updateFilterCallback: undefined
}

export default FruitBasket;
