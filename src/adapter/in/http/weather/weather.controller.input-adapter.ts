import { Request, Response } from 'express';
import { GetWeatherInputPort } from '../../../../port/in/get-weather.input-port';

export class WeatherControllerInputAdapter {
  constructor(private readonly getWeatherUseCase: GetWeatherInputPort) { }

  async getWeather(req: Request, res: Response) {
    try {
      const city = req.query.city as string;
      if (!city) return res.status(400).send({ error: 'City is required' });

      const forecast = await this.getWeatherUseCase.getWeather(city);
      res.json({ city, forecast: forecast.toString() });
    } catch (e: any) {
      res.status(500).send({ error: e.message });
    }
  }
}
