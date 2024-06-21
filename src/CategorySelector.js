import React from 'react';
import { Input } from 'reactstrap';

class CategorySelector extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      categories: []
    };
  }

  componentDidMount() {
    fetch('http://127.0.0.1:4949/categories')
      .then(response => response.json())
      .then(data => {
        this.setState({ categories: data });
      })
      .catch(error => {
        console.error('Error fetching categories:', error);
      });
  }

  render() {
    const { categories } = this.state;
    return (
      <Input type="select" onChange={this.props.onChange}>
        <option value="">Select Category</option>
        {categories.map(category => (
          <option key={category.id} value={category.id}>{category.name}</option>
        ))}
      </Input>
    );
  }
}

export default CategorySelector;
