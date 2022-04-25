import axios from 'axios';
import * as api from '../services/api';
import mockedCategoriesResult from '../__mocks__/categories';
import mockFetch from '../__mocks__/mockFetch';

describe('1 - Implemente o módulo de acesso à api do Mercado Livre', () => {

  afterEach(() => {
    axios.get.mockClear();
  });

  it('Implementa a função `getCategories`', () => {
    jest.spyOn(axios, 'get').mockImplementation(mockFetch);

    return api.getCategories().then((categories) => {
      expect(axios.get).toHaveBeenCalled();
      expect(axios.get).toHaveBeenCalledWith(
        'https://api.mercadolibre.com/sites/MLB/categories',
      );
      expect(categories).toEqual(mockedCategoriesResult);
    });
  });

  it('Implementa a função `getProductsFromCategoryAndQuery`', () => {
    const categoryId = 'category1';
    const query = 'my-query';
    const successResponseBody = {};

    const mockFetchPromise = Promise.resolve({
      data: successResponseBody,
    });

    jest.spyOn(axios, 'get').mockImplementation(() => mockFetchPromise);

    return api.getProductsFromCategoryAndQuery(categoryId, query).then((products) => {
      expect(axios.get).toHaveBeenCalled();
      expect(products).toEqual(successResponseBody);
    });
  });
});
