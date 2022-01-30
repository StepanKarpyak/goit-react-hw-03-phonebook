import React from "react";
import PropTypes from 'prop-types';
import { LabelFilter, InputFilter } from './ContactFilter.styled';

const ContactFilter = ({ value, onChange }) => (
  <LabelFilter>
    Find contacts by name
    <InputFilter type="text" value={value} onChange={onChange} />
  </LabelFilter>
);

export default ContactFilter;

ContactFilter.propTypes = {
  value: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
};