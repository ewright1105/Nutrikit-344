import React from 'react';
import { Input } from 'reactstrap';

class FoodSelector extends React.Component {
  render() {
    const { foods } = this.props;

    return (
      <Input type="select" size={9} onChange={this.props.onChange} multiple>
        <option value="" disabled>Select Food</option>
        {foods && foods.map(food => (
          <option key={food["name"]} value={food["name"]}>{`${food["name"]}`}</option>
        ))}
      </Input>
    );
  }
}

export default FoodSelector;
