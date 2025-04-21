import express from 'express';
import { WeatherControllerInputAdapter } from './weather.controller.input-adapter';
import { injector } from '../../../../config/injector';

const router = express.Router();
const controller = new WeatherControllerInputAdapter(injector.weatherUseCase);
router.get('/weather', async (req, res) => {
    await controller.getWeather(req, res);
});

export default router;
