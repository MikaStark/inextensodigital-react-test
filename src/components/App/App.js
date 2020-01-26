import React, { Component } from 'react';
import './App.css';
import MasterToggle from '../MasterToggle/MasterToggle';
import Checkbox from '@material-ui/core/Checkbox';
import FormControlLabel from '@material-ui/core/FormControlLabel';

export default class App extends Component {
  options = [
    { label: 'Item 1', value: 1 },
    { label: 'Item 2', value: 2 },
    { label: 'Item 3', value: 3 },
    { label: 'Item 4', value: 4 }
  ];

  constructor(props) {
    super(props);
    this.state = {
      data: this.options.reduce((prev, { value }) => ({ ...prev, [value]: false }), {})
    };
  }

  onChange = value => ({ target }) =>
    this.setState({
      ...this.state,
      data: { ...this.state.data, [value]: target.checked }
    });

  onMasterChange = ({ target }) =>
    this.setState({
      ...this.state,
      data: this.options.reduce((prev, { value }) => ({ ...prev, [value]: target.checked }), {})
    });

  render() {
    return (
      <form>
        <MasterToggle data={this.state.data} onChange={this.onMasterChange} label="Select all" />
        {this.options.map(({ label, value }) => (
          <FormControlLabel
            key={`data-${value}`}
            control={
              <Checkbox
                name="data"
                value={value}
                checked={this.state.data[value]}
                onChange={this.onChange(value)}
              />
            }
            label={label}
          />
        ))}
      </form>
    );
  }
}
