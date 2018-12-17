/*
Copyright 2018 Province of British Columbia

Licensed under the Apache License, Version 2.0 (the "License");
you may not use this file except in compliance with the License.
You may obtain a copy of the License at 

   http://www.apache.org/licenses/LICENSE-2.0

Unless required by applicable law or agreed to in writing, software
distributed under the License is distributed on an "AS IS" BASIS,
WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
See the License for the specific language governing permissions and
limitations under the License.

Created by Patrick Simonian
*/
import React, { Component } from 'react';
import styles from './FilterGroup.module.css';
import PropTypes from 'prop-types';
import shortid from 'shortid';

class FilterGroup extends Component {
  render() {
    const { title, toggleFilter, filters } = this.props;

    return (
      <div className={styles.FilterGroup}>
        <h2>{title}</h2>
        <ul>
          {filters.map(filter => (
            <li
              className={filter.active ? styles.active : ''}
              onClick={e => {
                e.preventDefault();
                toggleFilter(filter);
              }}
              key={shortid.generate()}
              data-count={15}
            >
              <a href="#">{filter.text}</a>
            </li>
          ))}
        </ul>
      </div>
    );
  }
}
FilterGroup.propTypes = {
  title: PropTypes.string.isRequired,
  filters: PropTypes.arrayOf({
    text: PropTypes.string.isRequired,
    value: PropTypes.string.isRequired,
    filterBy: PropTypes.string.isRequired,
    active: PropTypes.bool.isRequired,
  }).isRequired,
  toggleFilter: PropTypes.func.isRequired,
};

export default FilterGroup;
