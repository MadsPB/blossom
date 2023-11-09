import sequelize from "../db.js";
import { DataTypes } from "sequelize";

const Project = sequelize.define('Projecta', {
  title: {
    type: DataTypes.STRING,
    allowNull: false
  },
  image_url: {
    type: DataTypes.STRING,
    allowNull: false
  },
  creatorId: {
    type: DataTypes.INTEGER,
    allowNull: false
  },
  description: {
    type: DataTypes.STRING,
    defaultValue: ""
  }
});

export default Project;

