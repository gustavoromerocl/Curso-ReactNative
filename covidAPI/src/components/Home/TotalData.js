import React from 'react'
import { View, Text, StyleSheet } from 'react-native'
import colors from '../config/colors'
import Box from './Box'

const styles = StyleSheet.create({
    title:{
        fontSize: 20,
        color: colors.white,
        alignSelf: "center",
        fontWeight: "bold",
        margin: 20,
    },
    container: {
        flexDirection: "row",
        justifyContent: "center",
        marginHorizontal: 20,
        flexWrap: "wrap",
    },
})

//Se asignan variables por fecto al momento de la declaración
const TotalData = ({totalConfirmed, totalDeaths = 0, totalRecovery = 0 , totalActives = 0}) => (
    <>
        <Text style={styles.title}>Resumen</Text>
        <View style={styles.container}>
            <Box variableData={totalConfirmed} variableName="Total Confirmados" color={colors.blue}/>
            <Box variableData={totalDeaths} variableName="Fallecidos" color={colors.red}/>
            <Box variableData={totalRecovery} variableName="Recuperados" color={colors.green}/>
            <Box variableData={totalActives} variableName="Activos" color={colors.yellow}/>
        </View>
    </>
)

export default TotalData;


