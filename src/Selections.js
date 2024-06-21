import React from 'react';
import { Input } from 'reactstrap';

class Selections extends React.Component {
  render() {
    return (
      <Input type="select" size="8" onChange={this.props.onChange} multiple>
        {this.props.selectedItems.map(item => (
          <option key={item} value={item} onClick={() => this.props.onRemove({ target: { value: item } })}>
            {item}
          </option>
        ))}
      </Input>
    );
  }
}

export default Selections;
