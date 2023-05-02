const { DataTypes } = require("sequelize")

const db = require("../db/conn")

// User
const User = require("./User")

const Post = db.define('Post', {
    title: {
        type: DataTypes.STRING,
        allowNull: false,
        require: true,
    },
    description: {
        type: DataTypes.STRING,
        allowNull: false,
        require: true,
    }
}, { timestamps: true }
)

// criando a relacao entre os dois
Post.belongsTo(User)
User.hasMany(Post)

module.exports = Post