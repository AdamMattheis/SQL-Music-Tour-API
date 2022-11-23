'use strict'
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Stage_events extends Model {}

  Stage_events.init({
    stage_events_id: {
      type:DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
     autoIncrement: true
    },
    stage_id: {
      type:DataTypes.SMALLINT,
      allowNull: false},
    event_id: {
      type:DataTypes.SMALLINT,
      allowNull: false
    }
  }, {
    sequelize,
    modelName: 'Stage_events',
  });
  return Stage_events;
};