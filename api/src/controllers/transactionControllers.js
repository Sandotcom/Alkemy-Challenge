import Transaction from "../models/Transaction.js";


export const newTransaction = async (req, res) => {
  const { concept, value, type, date } = req.body;
  const userId = req.userId;

  try {
    const transaction = await Transaction.create({ concept, value, type, date, userId })
    
    res.status(200).send(transaction)
  } catch (error) {
    res.status(401).json({ message: "Error creating transaction"})
  }
}

export const getTransactions = async (req, res) => {
  const userId = req.userId
  
  try {
    const userTransactions = await Transaction.findAll({ where: { userId }});

    res.status(200).send(userTransactions)
  } catch (error) {
    console.log(error)
  }
}