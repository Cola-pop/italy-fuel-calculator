import fetchAPI from '../index';

const getFuelPricesAPI = async () => {
  return fetchAPI('GET', 'fuel', {}, {});
};

export default getFuelPricesAPI;
