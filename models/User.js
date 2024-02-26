// id, username, password
// Import statements
const {Model, DataTypes} = require("sequelize");
const bcrypt = require("brcrypt");
const sequelize = require("../config/connection");

// Create new Model object
class User extends Model {
    checkPassword(loginPassword) {
        return bcrypt.compareSync(loginPassword, this.password)
    }
}

// Initialize the User model
User.init(
    {
        id: {
            type: DataTypes.INTEGER,
            allowNull: false,
            primaryKey: true,
            autoIncrement: true
        },
        username: {
            type: DataTypes.STRING,
            allowNull: false,
            unique: true
        },
        password: {
            type: DataTypes.STRING,
            allowNull: false,
            validate: {
                length: [8]
            }
        }
    },
    {
        hooks: {},
        sequelize,
        timestamps: false,
        underscored: true,
        modelName: "user"
    }
);

module.exports = User;