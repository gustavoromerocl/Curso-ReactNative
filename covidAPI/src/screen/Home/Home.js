import React, { Component, useEffect, useMemo, useState } from 'react'
import { Alert, Button, ScrollView, StyleSheet, Text, View } from 'react-native'
import axios from 'axios'
import TotalData from '../../components/Home/TotalData'
import colors from '../../components/config/colors'
import AsyncStorage from '@react-native-async-storage/async-storage';
import LineChartData from '../../components/commons/LineChart'
import Loading from '../../components/commons/Loading'
import IconFeather from 'react-native-vector-icons/Feather'
import { useSafeAreaInsets } from 'react-native-safe-area-context'
import {capitalize} from '../../utils'

const styles = StyleSheet.create({
    container: {
        backgroundColor: colors.black,
        flex: 1,
    }, 
    title: {
        textAlign: "center",
        fontSize: 30,
        color: colors.white,
    }
  });



const Home = ({navigation, route: {
    params: {
        slug,
        country,
    }
}}) => {


    const [ currentData, updateCurrentData ] = useState([]);
    const [ isLoading, updateIsLoading ] = useState(false);
    const {top} = useSafeAreaInsets()
    
    useEffect(() => {
        IconFeather.loadFont();
    }, [])

    useEffect(() => {
        fetchData(slug)
    }, [slug])  

    //Trae el ultimo registro de las variable indicadas
    const getLastValue = (currentValue, key) => {
        const lastValue = currentValue.slice(-1)

        if(lastValue.length){
            return lastValue[0][key]
        }

        return 0;
    }

    const getFromStorage = async () => {
        const formattedCountries  = JSON.parse(await AsyncStorage.getItem('countries'));
        updateCountries(formattedCountries || []);
    }

    const fetchData = async (selectCountry) => {
        updateIsLoading(true)
        try{
            //Al clonar el objeto, se puede usar las propiedades de este en la variable que creamos mediante Axios
            //Forma alternativa de hacer la llamada a axios
            const { status, data } =  await axios({
                baseURL: 'https://api.covid19api.com',
                method: 'GET',
                url: `/country/${selectCountry}`,
                timeout: 3000,
            });
            //console.log('arreglo:', response);
            if(status === 200)
                updateCurrentData(data)
 
        }catch(error){
            updateCurrentData([])
            console.log("error")
        }
        updateIsLoading(false)
    }


    const backupData = async ({country, totalConfirmed, totalRecovery, totalDeaths, totalActive}) => {
        const response = await axios.post(
            'https://5f79f3e1e402340016f935ed.mockapi.io/react-native',
            {
              datetime: new Date().toISOString(),
              country,
              total_confirmed: totalConfirmed,
              total_recovered: totalRecovery,
              total_deaths: totalDeaths,
              total_active: totalActive,
            },
        );

        Alert.alert('Mensaje:' , 'Guardado')
    }


    const [
        totalConfirmed,
        totalRecovery,
        totalDeaths,
        totalActive,
        lineChartConfirmed,
        lineChartRecovery,
        lineChartDeaths,
        lineChartActive
    ] = useMemo(() => [
        getLastValue(currentData, 'Confirmed'),
        getLastValue(currentData, 'Recovered'),
        getLastValue(currentData, 'Deaths'),
        getLastValue(currentData, 'Active'),

        //Itera sobre el arreglo de la api y trae los valores de las variables solicitadas
        currentData.map((data) => data.Confirmed),
        currentData.map((data) => data.Recovered),
        currentData.map((data) => data.Deaths),
        currentData.map((data) => data.Active),
    ], [currentData])


    return (
        <View style={[styles.container, {paddingTop: top}]}>
            <Text style={styles.title}>{capitalize(country)}</Text>
            <Button 
                onPress={() => fetchData()} 
                title="LLamar a Axios">
            </Button>

            <Button 
                disabled
                onPress={() => navigation.navigate("screens")} 
                title="Ir a Screens">
            </Button>

            

            <Button
                title="backup data"
                onPress={() =>
                    backupData({
                    totalConfirmed,
                    totalActive,
                    totalDeaths,
                    totalRecovery,
                    })
                }
            />
            <Loading isLoading={isLoading} color={colors.white}>
                <TotalData 
                    totalConfirmed={totalConfirmed} 
                    totalRecovery={totalRecovery} 
                    totalDeaths={totalDeaths} 
                    totalActives={totalActive} 
                />
            </Loading>
            <Button 
            //Se pasan los argumentos a el screen en el mismo stack
                onPress={() => navigation.navigate(
                    "Charts", 
                    {
                    lineChartConfirmed,
                    lineChartRecovery,
                    lineChartDeaths,
                    lineChartActive,
                    }
                )} 
                title="Ir a Charts">
            </Button>
        </View>
    )
}

export default Home;