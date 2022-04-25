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

export async function getProductsFromCategoryAndQuery(/* categoryId, query */) {
  // Implemente aqui! Quando o fizer, descomente os parâmetros que essa função recebe
}
