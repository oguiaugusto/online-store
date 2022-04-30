import styled from 'styled-components';

const StyledAttributesTable = styled.div`
  width: 100%;

  p {
    padding: 10px 12px;
    background-color: #dfdfdf;
    font-weight: 600;
    border: 1px solid #959595;
  }

  .responsive-table {
    max-height: 250px;
    overflow-y: scroll;
    overflow-x: hidden;
    overflow: overlay;
  }

  table, td {
    border: 1px solid #959595;
    border-collapse: collapse;
  }

  table {
    background-color: #dfdfdf;
    border-top: none;
    border-bottom: 1px solid #959595;
    width: 100%;
  }

  table tr:first-child td {
    border-top: none !important;
  }

  table tr:last-child td {
    border-bottom: none !important;
  }

  tr td:first-child {
    font-weight: 500;
  }

  td {
    padding: 10px 12px;
  }

  .responsive-table::-webkit-scrollbar-track {
    background: none;
  }
`;

export default StyledAttributesTable;
