import type IEmployee from "../interfaces/IEmployee";

export default interface InterfaceDatabaseAccessAdapter {
  get_employees(): Promise<IEmployee[]>;
}