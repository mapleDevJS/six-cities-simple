import { CliCommandInterface } from './cli-command.interface.js';
import chalk from 'chalk';

export default class HelpCommand implements CliCommandInterface {
  public readonly name = '--help';

  public async execute(): Promise<void> {
    const title = chalk.bold.hex('#06989a');
    const subTitle = chalk.hex('#06989a');
    const comment = chalk.hex('#ad7fa8');
    const text = chalk.bold.hex('#75507b');

    console.log(text(
      `
        ${title('Программа для подготовки данных для REST API сервера.')}

        ${subTitle('Пример:')}
            main.js --<command> [--arguments]

        ${subTitle('Команды:')}
            --version:                   ${comment('# выводит номер версии')}
            --help:                      ${comment('# печатает этот текст')}
            --import <path>:             ${comment('# импортирует данные из TSV')}
            --generator <n> <path> <url> ${comment('# генерирует произвольное количество тестовых данных')}
        `
    ));
  }
}
