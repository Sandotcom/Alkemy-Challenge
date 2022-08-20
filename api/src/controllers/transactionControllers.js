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
    const userTransactions = await Transaction.findAll({ 
      where: { userId },
      order: [['createdAt', 'DESC']],
    });
    
    let balance = 0;
    let incomes = 0;
    let outcomes = 0;

    userTransactions.map((e) => {
      if(e.type === 'Ingreso') {
        balance += e.value
        incomes += e.value
      } else {
        balance -= e.value
        outcomes += e.value
      }
    })

    res.status(200).send({ transactions: userTransactions, balance: { total: balance, ingresos: incomes, egresos: outcomes}})
  } catch (error) {
    res.status(401).json({ message: "Error retrieving transactions." })
  }
}

export const putTransaction = async (req, res) => {
  const { id } = req.params
  const toUpdate = req.body
  const userId = req.userId
  
  try {
    const transaction = await Transaction.findByPk(id)

    if(!transaction) return res.status(404).json({ message: 'Transaction not found.' })

    if(transaction.userId === userId){
      await Transaction.update(toUpdate, { where: { id }})
  
      const updatedInfo = await Transaction.findByPk(id)
  
      res.status(200).send(updatedInfo)
    } else {
      res.status(403).json({ message: 'Cannot update others transactions.' })
    }
  } catch (error) {
    res.status(401).json({ message: "Error updating transaction" })
  }
}

export const deleteTransaction = async (req, res) => {
  const { id } = req.params
  const userId = req.userId

  try {
    const transaction = await Transaction.findByPk(id)
    
    if(!transaction) return res.status(404).json({ message: 'Transaction not found.' })

    if(transaction.userId === userId){
      await transaction.destroy()

      res.status(200).json({ message: 'Deleted successfully' })
    } else {
      res.status(403).json({ message: 'Cannot delete others transactions.' })
    }
  } catch (error) {
    res.status(401).json({ message: "Error deleting transaction" })
  }
}