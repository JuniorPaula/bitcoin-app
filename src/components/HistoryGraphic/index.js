import React from "react";
import { View, Dimensions } from "react-native";
import { LineChart } from "react-native-chart-kit";

export default function HistoryGraphic(props) {
    return (
        <View>
            <LineChart
                data={{
                    datasets: [
                        {
                            data: props.infoDataGraphic
                        },
                    ],
                }}
                width={Dimensions.get('window').width}
                height={220}
                yAxisLabel='$'
                xAxisSuffix='k'
                withVerticalLines={false}
                yLabelsOffset={1}
                withVerticalLabels={false}
                chartConfig={{
                    backgroundColor: '#000000',
                    backgroundGradientFrom: '#232323',
                    backgroundGradientTo: '#3f3f3f',
                    decimalPlaces: 0,
                    color: (opacity = 1) => `rgba(255, 255, 255, ${opacity})`,
                    labelColor: (opacity = 1) => `rgba(255, 255, 255, ${opacity})`,
                    propsForDots: {
                        r: '1',
                        strokeWidth: '1',
                        stroke: '#c3ac18'
                    }
                }}
                bazier
            />
        </View>
    );
};