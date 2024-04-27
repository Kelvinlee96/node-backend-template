import { DataTypes } from "sequelize";
import { sequelize } from "../config/index.js";

const UserModel = sequelize.define('User', {
    id: {
        type: DataTypes.UUID,
        allowNull: false,
        primaryKey: true
    },
    firstName: {
        type: DataTypes.STRING,
        allowNull: false
    },
    lastName: {
        type: DataTypes.STRING,
        allowNull: false
    },
    email: {
        type: DataTypes.STRING,
    },
    isDeleted: {
        type: DataTypes.BOOLEAN,
    },
    createdAt: {
        type: DataTypes.DATE,
    },
    updatedAt: {
        type: DataTypes.DATE,
    }
  }, {
    // Other model options go here
});


export default UserModel;