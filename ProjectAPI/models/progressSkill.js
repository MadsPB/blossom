import sequelize from "../db.js";
import { DataTypes } from "sequelize";

const ProgressSkill = sequelize.define('ProgressSkill', {
  progressId: {
    type: DataTypes.NUMBER,
    allowNull: false,
  },
  skillId: {
    type: DataTypes.NUMBER,
    allowNull: false
  }
});

export default ProgressSkill;