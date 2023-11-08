import sequelize from "../db.js";
import { DataTypes } from "sequelize";

const Project = sequelize.define('Project', {
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

try{
  (async()=>await sequelize.sync({alter:true}))();
} catch (error)
{
  console.log("could not sync: "+error);
}

export default Project;

