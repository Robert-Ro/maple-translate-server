import { Application } from "egg";

module.exports = (app: Application) => {
  const mongoose = app.mongoose;
  const Schema = mongoose.Schema;

  const DictSchema = new Schema({
    word: { type: String, index: true }, // 单词
    result: { type: Array, default: [] }, // 直接意思
    dict: { type: Array, default: [] }, // 字典意思
    phonetic: { type: Array, default: [] }, // 音标
    create_at: { type: Date, default: Date.now },
    updated_at: { type: Date, default: Date.now }
  });

  const Model = mongoose.model("Dict", DictSchema);

  return Model;
};
