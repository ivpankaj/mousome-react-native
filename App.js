import axios from "axios";

import { useState } from "react";
import {
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
  Image,
} from "react-native";

export default function App() {
  const [city, setCity] = useState("");
  const [weatherData, setWeatherData] = useState(null);
  const API_KEY = "4f4bd4c2a556b0596608d279f2c34bc6";
  const kelvinToCelsius = (kelvin) => {
    return Math.floor(kelvin - 273.15);
  };

  const fetchData = async () => {
    try {
      const response = await axios.get(
        `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}`
      );


      setWeatherData(response.data);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <View>
      <Text style={styles.headline}>Mousome </Text>
 
      <View style={styles.searchcollection}>
        <TextInput
          value={city}
          onChangeText={(text) => setCity(text)}
          style={styles.search}
          placeholder="enter your city"
        />
        <TouchableOpacity onPress={fetchData} style={styles.button}>
          <Text>Search</Text>
        </TouchableOpacity>
      </View>

      <View style={styles.container}>
        {weatherData && (
          <View>
            <Image
              style={{ marginLeft: 50 }}
              source={require("../p2/assets/weather2.png")}
            />
            <Text style={styles.text1}>{weatherData.name}</Text>
            <Text style={styles.text2}>{kelvinToCelsius(weatherData.main.temp)}°C</Text>
           <Text style={styles.text3}>Conditions:{weatherData.weather[0].description}</Text>
       
            <Text style={styles.text4}>Feels Like: {kelvinToCelsius(weatherData.main.feels_like)}°C</Text>
            <Text style={styles.text5}>humidity: {weatherData.main.humidity}</Text>
          </View>
        )}
      </View>
      <Text style={styles.footer}>
        Design and Develop By Pankaj
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  headline: {
    fontSize: 25,
    marginTop: 65,
    marginLeft: 15,
   
  },
  headline2: {
    fontSize: 18,
    marginTop: 5,
    marginLeft: 15,
  },
  search: {
    marginTop: 45,
    marginLeft: 25,
    height: 50,
    padding: 10,
    width: 280,
    backgroundColor: "white",
    borderWidth: 2,
    borderColor: "black",
    borderRadius: 10,
  },
  searchcollection: {
    display: "flex",
    flexDirection: "row",
    marginTop: -10,
  },
  button: {
    height: 50,
    marginTop: 45,
    marginLeft: 5,
    padding: 10,
    width: 70,
    backgroundColor: "white",
    borderWidth: 2,
    borderColor: "blue",
    borderRadius: 10,
  },
  container: {
    backgroundColor: "white",
    height: 500,
    width: 350,
    marginTop: 50,
    marginLeft: 18,
    borderRadius: 15,
    borderColor: "green",
    borderWidth: 2,
  },
  text1:{
    fontSize:40,
    width:350,
    color:"purple",
    marginTop:10,
    marginLeft:100
  },
  text2:{
    fontSize:25,
    color:"blue",
    marginLeft:150,
    marginTop:10
    
  },
  text3:{
    fontSize:20,
    color:"brown",
    marginLeft:100,
    marginTop:10,
    marginTop:25

  },
  text4:{
    fontSize:20,
    color:"red",
    marginLeft:100,
    marginTop:5
  },
  text5:{
    fontSize:20,
    color:"green",
    marginLeft:100,
    marginTop:5
  },
  footer:{
    marginLeft:110,
    marginTop:60
  }

});
