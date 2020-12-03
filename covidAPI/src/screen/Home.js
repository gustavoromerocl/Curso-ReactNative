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
        marginHorizontal: 20
    }
  });

export default class Home extends Component {
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

    fetchCountries = async () => {
        try{
            const { status, data } =  await axios.get('https://api.covid19api.com/countries')

            if(status === 200){
                const formattedCountries = data.map((country) => ({
                    label: country.Country,
                    value: country.Slug,
                }))

                await AsyncStorage.setItem('countries', JSON.stringify(formattedCountries))
                this.setState({countries: formattedCountries})
            }
        }
        catch(error){
            this.setState({countries: []})
            console.log("error")
        }
    }

    fetchData = async (selectCountry) => {
        this.setState({isLoading: true})
        try{
            //Al clonar el objeto, se puede usar las propiedades de este en la variable que creamos mediante Axios
            const { status, data } =  await axios.get(`https://api.covid19api.com/country/${selectCountry}`, );
            //console.log('arreglo:', response);
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
        const {currentData, countries, isLoading} = this.state;

        //Trae el ultimo registro de las variable indicadas
        const totalConfirmed = this.getLastValue(currentData, 'Confirmed')
        const totalRecovery = this.getLastValue(currentData, 'Recovered')
        const totalDeaths = this.getLastValue(currentData, 'Deaths')
        const totalActive= this.getLastValue(currentData, 'Active')

        //Itera sobre el arreglo de la api y trae los valores de las variables solicitadas
        const lineChartConfirmed = currentData.map((data) => data.Confirmed)
        const lineChartRecovery = currentData.map((data) => data.Recovered)
        const lineChartDeaths = currentData.map((data) => data.Deaths)
        const lineChartActive = currentData.map((data) => data.Active)

        
        //console.log(countries.length);
        //console.log('arreglo:', currentData.length);
        //console.log(totalConfirmed)
        /**
         *      <Button 
                    onPress={() => this.fetchCountries()} 
                    title="LLamar a Countries">
                </Button>
         */
        return (
            <ScrollView style={styles.container}>
                <Text>Covid</Text>
                <Button 
                    onPress={() => this.fetchData()} 
                    title="LLamar a Axios">
                </Button>

                <DropDownPicker countries={countries} onSelect={this.selectCountry}/>

                <Loading isLoading={isLoading} color={colors.white}>
                    <TotalData 
                        totalConfirmed={totalConfirmed} 
                        totalRecovery={totalRecovery} 
                        totalDeaths={totalDeaths} 
                        totalActives={totalActive} 
                    />
                </Loading>

                <LineChartData data={lineChartConfirmed} color={colors.blue} title='Confirmados' />
                <LineChartData data={lineChartRecovery} color={colors.green} title='Recuperados' />
                <LineChartData data={lineChartDeaths} color={colors.red} title='Fallecidos' />
                <LineChartData data={lineChartActive} color={colors.yellow} title='Activos' />
            </ScrollView>
        )
    }
}
