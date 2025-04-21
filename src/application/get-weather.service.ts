import { GetWeatherInputPort } from '../port/in/get-weather.input-port';
import { WeatherServiceOutputPort } from '../port/out/weather-service.output-port';
import { Weather } from '../domain/Weather';

export class GetWeatherService implements GetWeatherInputPort {
  constructor(private readonly weatherService: WeatherServiceOutputPort) {}

  async getWeather(city: string): Promise<Weather> {
    return await this.weatherService.getCurrentWeather(city);
  }
}
