// This file is created by egg-ts-helper
// Do not modify this file!!!!!!!!!

import 'egg';
import ExportDict from '../../../app/model/dict';

declare module 'egg' {
  interface IModel {
    Dict: ReturnType<typeof ExportDict>;
  }
}
