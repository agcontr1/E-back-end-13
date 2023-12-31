const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');
const ProductTag = require('./ProductTag');
const Product = require('./Product');

class Tag extends Model {}

Tag.init(
  {
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true,
    },
    tag_name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
  },
  {
    sequelize,
    timestamps: false,
    freezeTableName: true,
    underscored: true,
    modelName: 'tag',
  }
);

Tag.belongsToMany(Product, { through: ProductTag, foreignKey: 'tag_id' });
Product.belongsToMany(Tag, { through: ProductTag, foreignKey: 'product_id' });

module.exports = Tag;
