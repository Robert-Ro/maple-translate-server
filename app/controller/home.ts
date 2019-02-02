import { Controller } from "egg";

export default class HomeController extends Controller {
  public async index() {
    const { ctx } = this;
    ctx.body = await ctx.service.test.sayHi("egg");
  }

  public async save() {
    const { ctx } = this;
    ctx.body = await ctx.service.word.save();
    ctx.set("content-type", "application/json; charset=utf-8");
  }
}
