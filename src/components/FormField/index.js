/* eslint-disable linebreak-style */
import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const FormFieldWarpper = styled.div`
`;
const Label = styled.label`
`;
const Input = styled.input`
`;

function FormField({
  type, name, label, value, onChange,
}) {
  const isTextArea = type === 'textArea';
  const tag = isTextArea ? 'textArea' : 'input';
  const fieldId = `id_${name}`;
  return (
    <FormFieldWarpper>
      <Label
        htmlFor={fieldId}
      >
        {label}
        :
        <Input
          as={tag}
          id={fieldId}
          type={type}
          name={name}
          value={value}
          onChange={onChange}
        />
      </Label>
    </FormFieldWarpper>
  );
}
FormField.defaultProps = {
  type: 'text',
  value: '',
  onChange: () => {},

};
FormField.propTypes = {
  label: PropTypes.string.isRequired,
  type: PropTypes.string,
  name: PropTypes.string.isRequired,
  value: PropTypes.string,
  onChange: PropTypes.func,
};
export default FormField;
