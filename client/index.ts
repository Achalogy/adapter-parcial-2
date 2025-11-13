import colors from 'chalk'
import figlet from 'figlet'
import type InterfaceDatabaseAccessAdapter from './src/implementacion/InterfaceDatabaseAccessAdapter'
import AdapterREST from './src/implementacion/AdapterREST'
import type IEmployee from './src/interfaces/IEmployee'
import AdapterPSQL from './src/implementacion/AdapterPSQL'
import { Command } from 'commander'

console.clear()
console.log(
  colors.yellow.bold(figlet.textSync("ADAPTER"))
)

console.log(
  colors.green.bold("By Miguel Vargas (Acha)")
)

const program = new Command();

program
  .option("-a, --adapter <'psql' | 'rest'>")
  .parse(process.argv);

const opts = program.opts();
const ADAPTER = opts.adapter

console.log(`Actualmente se esta usando el adapter ${colors.red(ADAPTER)}`)

let data: IEmployee[] = [];

switch (ADAPTER) {
  case "psql": {
    const database: InterfaceDatabaseAccessAdapter = new AdapterPSQL();
    data = await database.get_employees()
    break
  }
  case "rest": {
    const database: InterfaceDatabaseAccessAdapter = new AdapterREST();
    data = await database.get_employees()
    break
  }
}

console.table(data)