import { GetWeatherService } from '../../application/get-weather.service';
import { WeatherServiceOutputPort } from '../../port/out/weather-service.output-port';
import { MetaWeatherOutputAdapter } from '../../adapter/out/weatherapi/meta-weather.output-adapter';
import { WttrInOutputAdapter } from '../../adapter/out/weatherapi/wttr-in.output-adapter';
import dotenv from 'dotenv';
dotenv.config();

export const createGetWeatherUseCase = () => {
  let adapter: WeatherServiceOutputPort;

  switch (process.env.WEATHER_PROVIDER) {
    case 'meta':
      adapter = new MetaWeatherOutputAdapter();
      break;
    default:
      adapter = new WttrInOutputAdapter();
  }

  return new GetWeatherService(adapter);
};
