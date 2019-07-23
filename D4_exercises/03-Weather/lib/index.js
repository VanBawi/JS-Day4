// TODO: Write your JS code in here
import $ from 'jquery';
import 'select2';

$('#city-input').select2();


&appid=//APi Keys

const cities = ["Amsterdam","Bali","Barcelona","Berlin","Brussels","Buenos Aires","Chengdu","Copenhagen","Kyoto","Lisbon","London","Melbourne","Mexico","Milan","Montréal","Paris","Rio de Janeiro","São Paulo","Shanghai","Shenzhen","Singapore","Tokyo"];

$('#city-input').select2({ data: cities }); // <-- add the `data` option





navigator.geolocation.getCurrentPosition((data) => {
    console.log(data);
  });