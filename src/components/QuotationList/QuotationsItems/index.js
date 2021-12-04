import React from "react";
import { View, Text, Image } from "react-native";

import styles from './style';

export default function QuotationsItems() {
    return (
        <View style={styles.mainContent}>
            <View style={styles.contextLeft}>
                <View style={styles.boxLogo}>
                    <Image 
                        style={styles.logoBitcoin} 
                        source={require("../../../img/costs_logo.png")} />
                    <Text style={styles.dayCotation}>04/12/2021</Text>
                </View>
            </View>
            <View style={styles.contextRight}>
                <Text style={styles.price}>$ 500.525</Text>
            </View>
            
        </View>
    );
};