const apiHelper = require('../utils/apiHelper');
const CombinedData = require('../models/combinedData');

exports.getAggregatedData = async (req, res, next) => {
  try {
    const apiUrl1 = process.env.API_URL_1;
    const apiUrl2 = process.env.API_URL_2;

    const data1 = await apiHelper.fetchData(apiUrl1);
    const data2 = await apiHelper.fetchData(apiUrl2);

    const combinedData = new CombinedData(data1, data2);

    res.json(combinedData.getData());
  } catch (error) {
    next(error);
  }
};