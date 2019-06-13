//Instantiate Storage Class
const storage = new Storage();
//Get stored location data
const weatherLocation = storage.getLocationData();

//Instantiate Weather Class
const weather = new Weather(weatherLocation.city,weatherLocation.state);

//Instantiate UI Class
const ui = new UI();



//Get Weather on DOM Load
document.addEventListener('DOMContentLoaded',getWeather);

//Change Location event
document.getElementById('w-change-btn').addEventListener('click',(e) => {
  const city = document.getElementById('city').value;
  const state = document.getElementById('state').value;
  // Change Location
  weather.changeLocation(city,state);

  //Set location in localStorage
  storage.setLocation(city,state);

  //Get and display weather
  getWeather();

  //Close Modal
  $('#locModal').modal('hide');
});

function getWeather(){
  weather.getWeather()
  .then(results => ui.paint(results))
  .catch(err => document.getElementById('errorDiv').innerHTML = err);
}