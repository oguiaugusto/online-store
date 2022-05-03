import React from 'react';
import { render, screen, waitFor, fireEvent } from '@testing-library/react';
import axios from 'axios';
import App from '../App';
import mockFetch from '../__mocks__/mockFetch';

jest.spyOn(window, 'scrollTo').mockImplementation(() => {});

describe('15 - Mostre quais produtos tem o frete grátis', () => {
  it('Exibe corretmente a informação de frete grátis dos produtos', async () => {

    jest.spyOn(axios, 'get').mockImplementation(mockFetch)
    render(<App />);
    await waitFor(() => expect(axios.get).toHaveBeenCalled());
    fireEvent.click(screen.getAllByTestId('category')[0]);
    await waitFor(() => expect(axios.get).toHaveBeenCalledTimes(2));
    expect(screen.getAllByTestId('free-shipping').length).toBe(1);
  });
});
