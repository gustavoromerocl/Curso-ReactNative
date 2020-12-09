import React, { Component } from 'react'
import { Button, ScrollView, StyleSheet, Text, View } from 'react-native'
import axios from 'axios'
import TotalData from '../components/Home/TotalData'
import colors from '../components/config/colors'
import DropDownPicker from '../components/commons/DropDownPicker'
import AsyncStorage from '@react-native-async-storage/async-storage';
import LineChartData from '../components/commons/LineChart'
import Loading from '../components/commons/Loading'

const styles = StyleSheet.create({
    container: {
        backgroundColor: colors.black,
        flex: 1,
    }
  });

export default class World extends Component {
    constructor(props){
        super(props)

        this.state = {
            currentData: [],
            countries: [],
            selectedCountry: '',
            isLoading: false,
        }
    }

    getFromStorage = async () => {
        const formattedCountries  = JSON.parse(await AsyncStorage.getItem('countries'));
        this.setState({countries: formattedCountries});
    }


    fetchWorldData = async () => {
        this.setState({isLoading: true})
        try{
            const { status, data } =  await axios({
                baseURL: 'https://api.covid19api.com',
                method: 'GET',
                url: '/world/total',
                timeout: 3000,
            });
            if(status === 200)
                this.setState({currentData: data})
 
        }catch(error){
            this.setState({currentData: []})
            console.log("error")
        }
        this.setState({isLoading: false})
    }

    //valida que el arreglo no este vacio // Propiedades computadas
    getLastValue = (currentValue, key) => {
        const lastValue = currentValue.slice(-1)

        if(lastValue.length){
            return lastValue[0][key]
        }

        return 0;
    }

    selectCountry = ({value}) => this.setState({selectedCountry: value});

    componentDidMount = () => {
        this.getFromStorage();
        this.fetchWorldData();
    }

    componentDidUpdate = (prevProps, prevState) => {
        const { selectedCountry: currentSelectedCountry } = this.state;
        const { selectedCountry: lastSelectedCountry } = prevState;

        if(lastSelectedCountry != currentSelectedCountry){
            this.fetchData(currentSelectedCountry)
        }
        //console.log('current state:' , selectedCountry);
        //console.log('last state: ',prevState.selectedCountry);

    }

    render() {
        const {currentData, isLoading} = this.state;

        console.log(currentData)

        const totalConfirmed = currentData?.TotalConfirmed;
        const totalRecovery = currentData?.TotalRecovered;
        const totalDeaths = currentData?.TotalDeaths;
        const totalActive = 'Unknown';

        return (
            <View style={styles.container}>
                <Button
                    title="Refrescar"
                    onPress={() => this.fetchWorldData()}
                />
                <Loading isLoading={isLoading} color={colors.white}>
                    <TotalData 
                        totalConfirmed={totalConfirmed} 
                        totalRecovery={totalRecovery} 
                        totalDeaths={totalDeaths} 
                        totalActives={totalActive} 
                    />
                </Loading>
            </View>
        )
    }
}
