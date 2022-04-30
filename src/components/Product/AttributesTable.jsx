import React from 'react';
import PropTypes from 'prop-types';
import { StyledAttributesTable } from '../styled';

const AttributesTable = ({ attributes }) => (
  <StyledAttributesTable className="product-attributes">
    <p>Características</p>
    <div className="responsive-table">
      <table>
        <tbody>
          {
            attributes.map(({ id, name, value_name: value }) => (
              <tr key={ `attribute-${id}` }>
                <td>{name}</td>
                <td>{value}</td>
              </tr>
            ))
          }
        </tbody>
      </table>
    </div>
  </StyledAttributesTable>
);

AttributesTable.propTypes = {
  attributes: PropTypes.arrayOf(PropTypes.object).isRequired,
};

export default AttributesTable;
