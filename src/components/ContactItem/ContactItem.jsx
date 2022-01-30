import React from 'react';
import PropTypes from 'prop-types';
import { LiList, ButtonDel } from './ContactItem.styled';

const ContactItem = ({ name, number, onDeleteContact }) => (
  <LiList>
    {name}: {number}
    <ButtonDel type="button" onClick={onDeleteContact}>
      Delete
    </ButtonDel>
  </LiList>

);

export default ContactItem;

ContactItem.propTypes = {
  name: PropTypes.string.isRequired,
  number: PropTypes.string.isRequired,
  onDeleteContact: PropTypes.func.isRequired,
};