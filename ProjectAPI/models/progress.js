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

try{
  (async()=>await sequelize.sync({alter:true}))();
} catch (error)
{
  console.log("could not sync: "+error);
}

export default Progress;

