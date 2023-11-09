import sequelize from "../db.js";
import { DataTypes } from "sequelize";

const Skill = sequelize.define('Skill', {
  name: {
    type: DataTypes.STRING,
    allowNull: false,
    unique: true
  }
});

export default Skill;

