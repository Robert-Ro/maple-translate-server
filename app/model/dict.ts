import { Application } from "egg";

module.exports = (app: Application) => {
  const mongoose = app.mongoose;
  const Schema = mongoose.Schema;

  const DictSchema = new Schema({
    word: { type: String }, // 单词
    result: { type: Array }, // 直接意思
    dict: { type: Array }, // 字典意思
    phonetic: { type: Array } // 音标
  });

  // todo 1.index: word, 2: created_at, updated_at

  const Model = mongoose.model("Dict", DictSchema);
  // Model.ensureIndexes({})
  return Model;
};
