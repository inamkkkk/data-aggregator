const axios = require('axios');

exports.fetchData = async (url) => {
  try {
    const response = await axios.get(url);
    return response.data;
  } catch (error) {
    console.error(`Error fetching data from ${url}: ${error.message}`);
    throw error;
  }
};