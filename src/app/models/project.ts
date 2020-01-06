import { Task } from './task';


export class Project {
  constructor(
    public id: string = null,
    public name: string = null,
    public tasks: Array<Task> = [],
    public deadline: string = null
  ) {
  }
}
