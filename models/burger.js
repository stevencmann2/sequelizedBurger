module.exports = function(sequelize, DataTypes) {
    const Burger = sequelize.define("burger", {
      burger_name: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
          len: [1, 155]
        }
      },
      devoured: {
        type: DataTypes.BOOLEAN,
        defaultValue: false
      }
    });
    return Burger;
  };
  
  // module.exports = burger;