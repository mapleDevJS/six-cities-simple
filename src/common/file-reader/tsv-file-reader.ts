import { FileReaderInterface } from './file-reader.interface.js';
import EventEmitter from 'events';

export default class TSVFileReader extends EventEmitter implements FileReaderInterface {
  constructor(public filename: string) {
    super();
  }

  public async read(): Promise<void> {
    // Код для работы с потоками
  }
}
