// This file is created by egg-ts-helper
// Do not modify this file!!!!!!!!!

import 'egg';
import ExportTest from '../../../app/service/Test';
import ExportWord from '../../../app/service/Word';

declare module 'egg' {
  interface IService {
    test: ExportTest;
    word: ExportWord;
  }
}
