import React from 'react';
import { render, waitFor, screen } from '@testing-library/react';
import axios from 'axios';
import App from '../App';
import mockedCategoriesResult from '../__mocks__/categories';
import mockFetch from '../__mocks__/mockFetch';

jest.spyOn(window, 'scrollTo').mockImplementation(() => {});

describe(`4 - Liste as categorias de produtos disponíveis via API na página principal`, () => {
  it(`Exibe as categorias retornadas pela API na página de listagem de
      produtos`, async () => {

    jest.spyOn(axios, 'get').mockImplementation(mockFetch);

    render(<App />);
    await waitFor(() => expect(axios.get).toHaveBeenCalled());
    expect(screen.getAllByTestId('category').length).toEqual(
      mockedCategoriesResult.length,
    );
  });
});
