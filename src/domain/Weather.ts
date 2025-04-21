export class Weather {
  constructor(
    public readonly description: string,
    public readonly temperature: number
  ) { }

  toString(): string {
    return `${this.description}, ${this.temperature.toFixed(1)}°C (${this.isCold() ? 'cold' : 'warm'})`;
  }

  private isCold(): boolean {
    return this.temperature < 10;
  }
}
