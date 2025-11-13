import type IEmployee from "../interfaces/IEmployee";
import type InterfaceDatabaseAccessAdapter from "./InterfaceDatabaseAccessAdapter";
import { Client } from "pg"

const {
  DATABASE_URL
} = import.meta.env

export default class AdapterPSQL implements InterfaceDatabaseAccessAdapter {

  private client: Client;

  public constructor() {
    this.client = new Client({
      connectionString: DATABASE_URL!
    })
  }

  public async get_employees(): Promise<IEmployee[]> {
    await this.client.connect()

    const query = this.client.query("SELECT * FROM employee;")

    return (await query).rows as any
  }
}