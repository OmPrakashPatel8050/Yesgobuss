wallet =[ { id: '0001', Name:'Omprakash', Age:'22', Offer:'20% Discount' ,balance: 1000 }]

const getwallet=(req,res)=>{
  res.status(200).send(wallet)
}

const updatewalletbalance =   (req, res) => {
  const { balance } = req.body;
  wallet.balance = balance;
  res.json({ message: "Wallet balance updated successfully", newBalance: wallet.balance });
};

module.exports = {getwallet,updatewalletbalance}