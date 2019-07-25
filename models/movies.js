"use strict";

module.exports = (sequelize, DataTypes) => {
    var Movies = sequelize.define('Movies', {
        id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        title: DataTypes.INTEGER,
        cover: DataTypes.STRING
        },
        {
            timestamps: false
        }
    );

    return Movies;
};