import axios from 'axios';

export async function getCategories() {
  try {
    const URL = 'https://api.mercadolibre.com/sites/MLB/categories';
    const response = await axios.get(URL);
    return response.data;
  } catch (error) {
    console.log(error.message);
    return [];
  }
}

export async function getProductsFromCategoryAndQuery(categoryId, query) {
  try {
    const URL = `https://api.mercadolibre.com/sites/MLB/search?category=${categoryId}&q=${query}`;
    const response = await axios.get(URL);
    return response.data;
  } catch (error) {
    console.log(error.message);
    return [];
  }
}

export async function getProductsFromQuery(query) {
  try {
    const URL = `https://api.mercadolibre.com/sites/MLB/search?q=${query}`;
    const response = await axios.get(URL);
    return response.data;
  } catch (error) {
    console.log(error.message);
    return [];
  }
}

export async function getProductDetails(productId) {
  try {
    const URL = `https://api.mercadolibre.com/items/${productId}`;
    const response = await axios.get(URL);
    return response.data;
  } catch (error) {
    console.log(error.message);
    return [];
  }
}

export async function getProductPictures(productId) {
  try {
    const product = await getProductDetails(productId);
    return product.pictures;
  } catch (error) {
    console.log(error.message);
    return [];
  }
}

export async function getProductsFromCategory(categoryId) {
  try {
    const URL = `https://api.mercadolibre.com/sites/MLB/search?category=${categoryId}`;
    const products = await axios.get(URL);
    return products.data;
  } catch (error) {
    console.log(error.message);
    return [];
  }
}

export async function getProductDescription(productId) {
  try {
    const URL = `https://api.mercadolibre.com/items/${productId}/description`;
    const description = await axios.get(URL);
    return description.data;
  } catch (error) {
    console.log(error.message);
    return {};
  }
}
