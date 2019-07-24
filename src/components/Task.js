import React from 'react';
import {
    StyleSheet, Text, View
} from 'react-native';
import moment from 'moment';
import 'moment/locale/pt-br';
import commonStyles from '../commonStyles';

export default props => {
    let check = null;
    if (props.doneAt != null){
        check = (
        <View>
            <Icon name = 'check' size={20}
            color={commonStyles.colors.secondary}></Icon>
        </View>
        )
    }else{
        check = <View style = {styles.pending}></View>
    }


    const descStyle = props.doneAt !== null ?
    { textDecorationLine: 'line-through'} : {}


    return (
        <View style = {styles.container}>
            <View style = {styles.checkContainer}>
            {check}
            </View>
            <View>
                <Text style = {[styles.description, descStyle]}>
                    {props.desc}
                </Text>
                <Text style = {styles.date}>
                   
     {moment(props.estimateAt).locale('pt-br').format('ddd, D[de] MMMM')}
                </Text>
            </View>
        </View>
    )

    }

