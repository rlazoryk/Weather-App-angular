export interface Weather {
  city: string;
  temperature: string;
  details: {state: string, pressure: string, humidity: string, clouds: string};
  image: string;
}
