import React, { FC } from "react";
import { styles } from "./styles";
import { Button, Image, SafeAreaView, Text, TouchableOpacity, View } from "react-native";

interface StartScreenProps {
  toScoreBoardScreen: (open: boolean) => void;
  goInputName: () => void;
}

const Home: FC<StartScreenProps> = ({ toScoreBoardScreen, goInputName }) => {

  return (
    <View style={styles.container}>
      
      <View style={styles.buttonScore}>
        <TouchableOpacity onPress={() => toScoreBoardScreen(true)}>
          <svg width="100%" height="100%" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <g id="SVGRepo_bgCarrier" stroke-width="0" />
            <g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round" />
            <g id="SVGRepo_iconCarrier"> <path d="M6.67 14H4C2.9 14 2 14.9 2 16V21C2 21.55 2.45 22 3 22H6.67C7.22 22 7.67 21.55 7.67 21V15C7.67 14.45 7.22 14 6.67 14Z" fill="#fac400" /> <path d="M13.3302 10H10.6602C9.56016 10 8.66016 10.9 8.66016 12V21C8.66016 21.55 9.11016 22 9.66016 22H14.3302C14.8802 22 15.3302 21.55 15.3302 21V12C15.3302 10.9 14.4402 10 13.3302 10Z" fill="#fac400" /> <path d="M20.0001 17H17.3301C16.7801 17 16.3301 17.45 16.3301 18V21C16.3301 21.55 16.7801 22 17.3301 22H21.0001C21.5501 22 22.0001 21.55 22.0001 21V19C22.0001 17.9 21.1001 17 20.0001 17Z" fill="#fac400" /> <path d="M15.0095 4.85047C15.3195 4.54047 15.4395 4.17047 15.3395 3.85047C15.2395 3.53047 14.9295 3.30047 14.4895 3.23047L13.5295 3.07047C13.4895 3.07047 13.3995 3.00047 13.3795 2.96047L12.8495 1.90047C12.4495 1.09047 11.5395 1.09047 11.1395 1.90047L10.6095 2.96047C10.5995 3.00047 10.5095 3.07047 10.4695 3.07047L9.50945 3.23047C9.06945 3.30047 8.76945 3.53047 8.65945 3.85047C8.55945 4.17047 8.67945 4.54047 8.98945 4.85047L9.72945 5.60047C9.76945 5.63047 9.79945 5.75047 9.78945 5.79047L9.57945 6.71047C9.41945 7.40047 9.67945 7.71047 9.84945 7.83047C10.0195 7.95047 10.3895 8.11047 10.9995 7.75047L11.8995 7.22047C11.9395 7.19047 12.0695 7.19047 12.1095 7.22047L12.9995 7.75047C13.2795 7.92047 13.5095 7.97047 13.6895 7.97047C13.8995 7.97047 14.0495 7.89047 14.1395 7.83047C14.3095 7.71047 14.5695 7.40047 14.4095 6.71047L14.1995 5.79047C14.1895 5.74047 14.2195 5.63047 14.2595 5.60047L15.0095 4.85047Z" fill="#fac400" /> </g>
          </svg>
        </TouchableOpacity>
      </View>
      <View style={styles.buttonLogo}>
        <TouchableOpacity style={styles.buttonLogo} onPress={goInputName}>
          <Image
            style={styles.logo}
            source={require('./../../../assets/logo.png')}
          />
        </TouchableOpacity>
      </View>
    </View>
  )
}

export default Home;