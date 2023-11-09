import sequelize from "../db.js";
import { DataTypes } from "sequelize";

const Progress = sequelize.define('Progress', {
  projectId: {
    type: DataTypes.INTEGER,
    allowNull: false
  },
  comment: {
    type: DataTypes.STRING,
    allowNull: false
  },
  contributtorId: {
    type: DataTypes.INTEGER,
    allowNull: false
  }
});

export default Progress;

