import { createGetWeatherUseCase } from './usecase/get-weather.injector';

export const injector = {
  weatherUseCase: createGetWeatherUseCase()
};
