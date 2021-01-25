export class ResourceType {
  constructor(private id: number, private name: string) {}
}

export class Resource {
  constructor(
    private id: number,
    private name: string,
    private type: ResourceType
  ) {}
}
