import PropTypes from 'prop-types';

import { FilterInput, FilterWrap } from './Filter.styled';

export const Filter = ({ onChange, value }) => {
  return (
    <FilterWrap>
      <FilterInput
        onChange={onChange}
        name="filter"
        type="filter"
        value={value}
      ></FilterInput>
    </FilterWrap>
  );
};

Filter.propTypes = {
  onChange: PropTypes.func.isRequired,
  value: PropTypes.string.isRequired,
};
