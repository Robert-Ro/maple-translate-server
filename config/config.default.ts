import { EggAppConfig, EggAppInfo, PowerPartial } from "egg";

export default (appInfo: EggAppInfo) => {
  const config = {} as PowerPartial<EggAppConfig>;

  // override config from framework / plugin
  // use for cookie sign key, should change to your own and keep security
  config.keys = "A1019656789";

  // add your egg config in here
  // config.middleware = ["errorHandler"];
  config.security = {
    csrf: {
      ignore: "/api"
    }
  };

  // add your special config in here
  const bizConfig = {
    sourceUrl: `${appInfo.name}`
  };
  config.mongoose = {
    client: {
      url: "mongodb://127.0.0.1/dict",
      options: {}
    }
  };
  // the return config will combines to EggAppConfig
  return {
    ...config,
    ...bizConfig
  };
};
