import React, { Component } from 'react'
import {View, StyleSheet, Text, TouchableOpacity} from 'react-native'
import propTypes from 'prop-types'

const styles = StyleSheet.create({
    container:{
        margin: 20,
    },
    row:{
        flexDirection: "row",
        justifyContent: "space-between",
        marginBottom: 20
    },
    counterBox: {
        paddingHorizontal: 20,
        paddingVertical: 20,
        alignItems: "center",
        borderRadius: 15,
        backgroundColor: "#e67e22",
    },
    counterButton:{
        padding: 20,
        borderRadius: 15
    },
    buttonAdd:{
        backgroundColor: "#2ecc71"
    },
    buttonSubstract:{
        backgroundColor: "#e67e22"
    },
    buttonReset:{
        backgroundColor: "#3498db"
    },
    buttonCounterText:{
        paddingHorizontal: 20,
        paddingVertical: 0
    }

})

export default class Counter extends Component {
    
    constructor(props){
        super(props)

        this.state = {
            counter: 0,
        }
    };

    //Cuando el componente ya fue creado
    componentDidMount = () => {
        this.setState({counter:10});
    };

        //Dentro de esta metodo se indica que la App no siga renderizando una vez que el contador llega a 0.- 
    shouldComponentUpdate = (_, nextState) => {
        const { counter } = this.state;

        if(counter <= 0){
            return false
        }

        return true;
    }

    //Dentro de esta metodo se ingresa la logica para que la propiedad counter no siga cambiando su valor una vez llegue a 0
    static getDerivedStateFromProps = (props, state) => {
        const { counter } = state

        if(counter <= 0){
            return {
                counter: 0
            }
        }
        console.log("getDerivedStateFromProps: ", counter)
        return counter;    
    }
    
    //Recibe el objeto state y modifica sus propiedades.-
    add = () => this.setState((states) => {
        return {
            counter: states.counter + 1
        }
    });

    //shortcut del mismo metodo 
    substract = () => this.setState( ({ counter }) => ({ counter: counter - 1}) );

    reset = () => this.setState({counter: 0});

    render() {
        const { counter } = this.state;
        
        return(
        <>
            <View style={styles.container}>
                <View style={[styles.row, styles.counterBox]}>
                    <Text style={styles.textDefault}>Contador</Text>
                    <Text style={styles.textDefault}>{counter}</Text>
                </View>
                <View style={styles.row}>
                    <TouchableOpacity 
                        onPress={this.add}
                        style={[styles.counterButton, styles.buttonAdd]}>
                        <Text style={styles.buttonCounterText}>+</Text>
                    </TouchableOpacity>

                    <TouchableOpacity 
                        onPress={this.reset}
                        style={[styles.counterButton, styles.buttonReset
                        ]}>
                        <Text style={styles.buttonCounterText}>Reset</Text>
                    </TouchableOpacity>

                    <TouchableOpacity 
                        onPress={this.substract}
                        style={[styles.counterButton, styles.buttonSubstract
                        ]}>
                        <Text style={styles.buttonCounterText}>-</Text>
                    </TouchableOpacity>
                </View>
            </View>
        </>
        );

        
    }
}