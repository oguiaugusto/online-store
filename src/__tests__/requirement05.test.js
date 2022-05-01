import React from 'react';
import {
  render,
  screen,
  waitFor,
  fireEvent
} from '@testing-library/react';
import axios from 'axios';
import App from '../App';
import mockedQueryResult from '../__mocks__/query';
import mockFetch from '../__mocks__/mockFetch';

jest.spyOn(window, 'scrollTo').mockImplementation(() => {});

describe(`5 - Liste os produtos buscados por termos, com os dados resumidos, associados a esses termos`, () => {
  it(`Exibe todos os produtos retornados pela API, dado um determinado
      filtro`, async () => {

    jest.spyOn(axios, 'get').mockImplementation(mockFetch);
    render(<App />);
    fireEvent.change(screen.getByTestId('query-input'), {
      target: {
        value: 'livro'
      },
    });
    fireEvent.click(screen.getByTestId('query-button'));
    await waitFor(() => expect(axios.get).toHaveBeenCalled());
    expect(screen.getAllByTestId('product').length).toEqual(
      mockedQueryResult.results.length,
    );
  });
});
