import { Service } from "egg";

/**
 * Word Service
 */
export default class Word extends Service {
  public async save() {
    let { word, result, dict, phonetic } = this.ctx.request.body;
    this.ctx.logger.error(word, result, dict, phonetic);
    
    return {
      success: true
    };
  }
}
