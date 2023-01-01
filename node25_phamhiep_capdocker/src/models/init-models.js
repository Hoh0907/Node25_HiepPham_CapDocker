const DataTypes = require("sequelize").DataTypes;
const _binh_luan = require("./binh_luan");
const _img = require("./img");
const _luu_anh = require("./luu_anh");
const _users = require("./users");

function initModels(sequelize) {
  const binh_luan = _binh_luan(sequelize, DataTypes);
  const img = _img(sequelize, DataTypes);
  const luu_anh = _luu_anh(sequelize, DataTypes);
  const users = _users(sequelize, DataTypes);

  img.belongsToMany(users, { as: 'nguoi_dung_id_users', through: binh_luan, foreignKey: "hinh_id", otherKey: "nguoi_dung_id" });
  img.belongsToMany(users, { as: 'nguoi_dung_id_users_luu_anhs', through: luu_anh, foreignKey: "hinh_id", otherKey: "nguoi_dung_id" });
  users.belongsToMany(img, { as: 'hinh_id_imgs', through: binh_luan, foreignKey: "nguoi_dung_id", otherKey: "hinh_id" });
  users.belongsToMany(img, { as: 'hinh_id_img_luu_anhs', through: luu_anh, foreignKey: "nguoi_dung_id", otherKey: "hinh_id" });
  binh_luan.belongsTo(img, { as: "hinh", foreignKey: "hinh_id"});
  img.hasMany(binh_luan, { as: "binh_luans", foreignKey: "hinh_id"});
  luu_anh.belongsTo(img, { as: "hinh", foreignKey: "hinh_id"});
  img.hasMany(luu_anh, { as: "luu_anhs", foreignKey: "hinh_id"});
  binh_luan.belongsTo(users, { as: "nguoi_dung", foreignKey: "nguoi_dung_id"});
  users.hasMany(binh_luan, { as: "binh_luans", foreignKey: "nguoi_dung_id"});
  img.belongsTo(users, { as: "nguoi_dung", foreignKey: "nguoi_dung_id"});
  users.hasMany(img, { as: "imgs", foreignKey: "nguoi_dung_id"});
  luu_anh.belongsTo(users, { as: "nguoi_dung", foreignKey: "nguoi_dung_id"});
  users.hasMany(luu_anh, { as: "luu_anhs", foreignKey: "nguoi_dung_id"});

  return {
    binh_luan,
    img,
    luu_anh,
    users,
  };
}
module.exports = initModels;
module.exports.initModels = initModels;
module.exports.default = initModels;
