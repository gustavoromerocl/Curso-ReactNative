import React from 'react'
import { Button, ScrollView} from 'react-native'
import LineChartData from '../../components/commons/LineChart';
import colors from '../../components/config/colors';

//Los parametros de entrada se pasan a traves de la propiedad route.params
const Charts = ({navigation, route: {params:{lineChartConfirmed, lineChartRecovery, lineChartDeaths, lineChartActive}}}) => (
    <ScrollView>
        <Button
        title="Volver"
        onPress={() => navigation.pop() }
        />
        <LineChartData data={lineChartConfirmed} color={colors.blue} title='Confirmados' />
        <LineChartData data={lineChartRecovery} color={colors.green} title='Recuperados' />
        <LineChartData data={lineChartDeaths} color={colors.red} title='Fallecidos' />
        <LineChartData data={lineChartActive} color={colors.yellow} title='Activos' />
    </ScrollView>
)

export default Charts;