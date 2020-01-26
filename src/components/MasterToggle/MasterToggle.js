import React, { Component } from 'react';
import './MasterToggle.css';
import Checkbox from '@material-ui/core/Checkbox';
import FormControlLabel from '@material-ui/core/FormControlLabel';

export default class MasterToggle extends Component {
  get isAllChecked() {
    return Object.values(this.props.data).every(value => !!value);
  }

  get hasSomeChecked() {
    return Object.values(this.props.data).some(value => !!value);
  }

  get isIndeterminated() {
    return this.hasSomeChecked && !this.isAllChecked;
  }

  render() {
    return (
      <FormControlLabel
        className="master-toggle"
        control={
          <Checkbox
            checked={this.isAllChecked}
            indeterminate={this.isIndeterminated}
            onChange={this.props.onChange}
          />
        }
        label={this.props.label}
      />
    );
  }
}
