const offers = [
  {
    Id: '0001',
    Title: "Special Offer",
    Description: "20% off on all rides",
    ValidTill: "2024-07-15",
    Condition:"Only For New User"
  }
];

//To fetch all offers
const getalloffers =  (req, res) => {
  res.json(offers);
};

// To create a new offer
const createanoffer = (req, res) => {
  const newOffer = req.body;
  newOffer.id = offers.length + 1; 
  offers.push(newOffer);
  res.status(201).json(newOffer);
};

module.exports = {getalloffers,createanoffer}