import { DataTypes } from "sequelize";
import { sequelize } from '../db.js'
import Transaction from "./Transaction.js";

const User = sequelize.define('user', {
  id: {
    type: DataTypes.UUID,
    defaultValue: DataTypes.UUIDV4,
    allowNull: false,
    primaryKey: true
  },
  email: {
    type: DataTypes.STRING,
    allowNull: false,
    unique: true
  },
  name: {
    type: DataTypes.STRING,
    allowNull: false
  },
  password: {
    type: DataTypes.STRING,
    allowNull: false
  }
}, { timestamps: false })

User.hasMany(Transaction)
Transaction.belongsTo(User)

export default User;