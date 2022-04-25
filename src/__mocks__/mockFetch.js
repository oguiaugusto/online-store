const categories = require('./categories');
const query = require('./query');
const details = require('./details');


const mockFetch = (url) => {
  if (url === 'https://api.mercadolibre.com/sites/MLB/categories') {
    return Promise.resolve({
      data: categories,
    })
  }

  if (url.includes(' https://api.mercadolibre.com/sites/MLB/search?category=') && url.includes('&q=')) {
    return Promise.resolve({
      data: query,
    })
  }

  if (url.includes('https://api.mercadolibre.com/sites/MLB/search?q=')) {
    return Promise.resolve({
      data: query,
    })
  }

  if (url.includes('https://api.mercadolibre.com/sites/MLB/search?category=')) {
    return Promise.resolve({
      data: query,
    })
  }

  if (url.includes('https://api.mercadolibre.com/items/')) {
    return Promise.resolve({
      data: details,
    })
  }

  return Promise.reject('Houve algo de errado com o endpoint, verifique se ele está correto')
};

module.exports = mockFetch;
