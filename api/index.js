import app from "./src/app.js";
import { sequelize } from './src/db.js'
import User from "./src/models/User.js";
import Transaction from "./src/models/Transaction.js";

const PORT = process.env.PORT || 3001

sequelize.sync({ force: true }).then(() => {
  app.listen(PORT, () => 
    console.log(`Server running on port: ${PORT}`)
  );
})
