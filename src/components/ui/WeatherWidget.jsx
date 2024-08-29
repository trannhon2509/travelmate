import React, { useState, useEffect } from 'react';
import axios from 'axios';
import '../../assets/css/WeatherWidget.css'; // Import CSS cho widget thời tiết
import { Card } from 'react-bootstrap'; // Import Card từ react-bootstrap

function WeatherWidget() {
  const [weather, setWeather] = useState(null);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchWeather = async () => {
      try {
        const response = await axios.get('http://dataservice.accuweather.com/forecasts/v1/daily/1day/352954', {
          params: {
            apikey: 'v1M3rxQN4wCfoM1r4XWZBZ6VSPL41Qo3',
            details: true
          }
        });
        setWeather(response.data);
      } catch (err) {
        setError(err);
      }
    };

    fetchWeather();
  }, []);

  if (error) return <div>Error fetching weather data</div>;
  if (!weather) return <div>Loading...</div>;

  const { DailyForecasts, Headline } = weather;
  const todayForecast = DailyForecasts[0];

  return (
    <Card className='weather-widget'>
      <Card.Body>
        <Card.Title>
          <i className="bi bi-cloud-sun"></i> Weather for Today
        </Card.Title>
        <Card.Subtitle className="mb-2 text-muted">{Headline.Text}</Card.Subtitle>
        <Card.Text>
          <strong>Temperature:</strong> {todayForecast.Temperature.Minimum.Value}°F - {todayForecast.Temperature.Maximum.Value}°F
          <br />
          <strong>Real Feel:</strong> {todayForecast.RealFeelTemperature.Minimum.Value}°F - {todayForecast.RealFeelTemperature.Maximum.Value}°F
          <br />
          <strong>Condition:</strong> {todayForecast.Day.IconPhrase}
          <br />
          <strong>Precipitation:</strong> {todayForecast.Day.PrecipitationProbability}%
        </Card.Text>
        <Card.Link href={Headline.Link} target="_blank" rel="noopener noreferrer">
          More details <i className="bi bi-arrow-right"></i>
        </Card.Link>
      </Card.Body>
    </Card>
  );
}

export default WeatherWidget;
