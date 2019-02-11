import { Service } from "egg";

/**
 * Word Service
 */
export default class Word extends Service {
  public async save() {
    const { ctx } = this;
    const { word, result, dict, phonetic } = ctx.request.body;
    ctx.logger.error(word, result, dict, phonetic);
    const dictModel = ctx.model.Dict;
    dictModel.findOne({ word }, (err, res) => {
      if (err) {
        return {
          success: false,
          err: err
        };
      } else {
        if (res) {
          // 存在，更新
          dictModel.update(
            { word },
            { $set: { word, result, dict, phonetic } }
          );
        } else {
          //不存在，新增
          dictModel.create({ word, result, dict, phonetic });
        }
      }
    });
    return {
      success: true
    };
  }
}
