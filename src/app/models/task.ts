export class Task {

  constructor(
    public name: string = null,
    public description: string = null,
    public deadline: string = null,
    public completed: boolean = false
  ) {
  }
}
