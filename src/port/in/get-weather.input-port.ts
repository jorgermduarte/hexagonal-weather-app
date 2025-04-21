import { Weather } from '../../domain/Weather';

export interface GetWeatherInputPort {
  getWeather(city: string): Promise<Weather>;
}
