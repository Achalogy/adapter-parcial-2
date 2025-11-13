import type IEmployee from "../interfaces/IEmployee";
import type InterfaceDatabaseAccessAdapter from "./InterfaceDatabaseAccessAdapter";

const {
  REST_URL
} = import.meta.env

export default class AdapterREST implements InterfaceDatabaseAccessAdapter {
  public async get_employees(): Promise<IEmployee[]> {
    const query = await fetch(new URL("/employees", REST_URL).toString())

    if(!query.ok) throw new Error(`Server error: ${query.statusText} (${query.status})`)

    return await query.json() as any
  }
}