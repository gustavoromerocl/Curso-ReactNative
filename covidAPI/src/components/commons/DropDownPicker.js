import React from 'react'
import DropDown from 'react-native-dropdown-picker'
import colors from '../config/colors';

const DropDownPicker = ({countries = [], onSelect = () => {}}) => (
    <DropDown
        items={countries}
        placeholder="Seleccionar un país"   
        containerStyle={{height:40}}
        style={{backgroundColor: colors.white}}
        onChangeItem={onSelect}
        searchable
    />
)

export default DropDownPicker;
