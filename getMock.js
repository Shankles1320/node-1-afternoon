const mockData = require('../MOCK_DATA.json')



const getMockData = (req, res, ) => {
    if (req.query.price){
        const items = products.filter(val => val.price >= parseInt(req.query.price));
        return res.status(200).send(items);
    }
   
    res.status(200).send(mockData)
};
mudule.exports = getMockData