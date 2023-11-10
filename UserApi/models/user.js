import { DataTypes } from "sequelize";
import sequelize from "../infrastructure/db.js";

const User = sequelize.define('user', {
  username: {
    type: DataTypes.STRING,
    allowNull: false,
    unique: true
  },
  password: {
    type: DataTypes.STRING,
    allowNull: false
  }
});

export default User;