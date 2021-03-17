import React from 'react';
import { View, Text, ImageBackground } from 'react-native'
import StyledButton from '../StyledButton';
import styles from './styles'


const CarItem = (props) => {

  const { name, tagLine, tagLineCTA, image } = props.car;

  return (
    <View style={styles.carContainer}>
      <ImageBackground
        source={image}
        style={styles.image}
      />

      <View style={styles.titles}>
        <Text style={styles.title}>{name}</Text>
        <Text style={styles.subtitle}>{tagLine}&nbsp;
        <Text style={styles.subtitleCTA}>
            {tagLineCTA}
          </Text>
        </Text>

      </View>

      <View style={styles.buttonContainer}>
        <StyledButton type="primary"
          content={"Existing Inventory"}
          onPress={() => {
            console.warn("Existing");
          }}
        />
        <StyledButton type="secondary"
          content={"Custom Order"}
          onPress={() => {
            console.warn("Custom Order");
          }}
        />
      </View>
    </View>
  )
}

export default CarItem;