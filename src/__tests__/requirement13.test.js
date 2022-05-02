import React from 'react';
import { render, screen, waitFor, fireEvent } from '@testing-library/react';
import axios from 'axios';
import App from '../App';
import mockFetch from '../__mocks__/mockFetch';
import mockedQueryResult from '../__mocks__/query';

jest.spyOn(window, 'scrollTo').mockImplementation(() => {});

describe(`13 - Mostre junto ao ícone do carrinho a quantidade de produtos dentro dele, em todas as telas em que ele aparece`, () => {
  it('Vê a quantidade de produtos no carrinho da tela de detalhes', async () => {

    jest.spyOn(axios, 'get').mockImplementation(mockFetch)
    render(<App />);
    await waitFor(() => expect(axios.get).toHaveBeenCalled());
    fireEvent.click(screen.getAllByTestId('category')[0]);
    await waitFor(() => expect(axios.get).toHaveBeenCalledTimes(2));
    fireEvent.click(screen.getAllByTestId('product')[0]);
    await waitFor(
      () => expect(screen.getByTestId('product-detail-name')).toHaveTextContent(
        mockedQueryResult.results[0].title,
      ),
    );
    fireEvent.click(screen.getByTestId('product-detail-add-to-cart'));
    await waitFor(() => expect(screen.getAllByTestId('shopping-cart-product-name')));
    expect(screen.getByTestId('shopping-cart-product-name')).toHaveTextContent(
      mockedQueryResult.results[0].title,
    );
    fireEvent.click(screen.getAllByTestId('product-increase-quantity')[0]);
    expect(screen.getByTestId('shopping-cart-size')).toHaveTextContent('2');
  });
});
