import React, { useEffect } from 'react'
import { View, Image, Text, FlatList } from 'react-native'
import { Feather } from '@expo/vector-icons'
import logoImg from '../../assets/logo.png'
import api from '../../services/api'


import styles from './styles'
import { TouchableOpacity } from 'react-native-gesture-handler'
import { useNavigation } from '@react-navigation/native'

export default function incidents() {

    const navigation = useNavigation()

    function navigateToDetail() {
        navigation.navigate('Detail')
    }

    // function loadIncidents() {
    //     console.log(`dhosadiusd`)
    // }

    useEffect(()=>{

    })

    return(
        <View style={styles.container}>
            <View style={styles.header}>
                <Image source={logoImg}/>
                <Text style={styles.headerText}>
                    Total de <Text style={styles.headerTextBold}>0 casos</Text>
                </Text>
            </View>
            <Text style={styles.title}>Bem Vindo!</Text>
            <Text style={styles.description}>Escolha um dos casos abaixo e salve o dia.</Text>

            <FlatList
                data={[1, 2, 3, 4]}
                style={styles.incidentsList}
                keyExtractor={incident => String(incident)}
                renderItem={() => (
                    <View style={styles.incident}> 
                        <Text style={styles.incidentProperty}>ONG:</Text> 
                        <Text style={styles.incidentValue}>APAD</Text>
                        
                        <Text style={styles.incidentProperty}>CASO:</Text>
                        <Text style={styles.incidentValue}>Cadelinha atropelada</Text>
                        
                        <Text style={styles.incidentProperty}>VALOR:</Text>
                        <Text style={styles.incidentValue}>R$ 120,00</Text>

                        <TouchableOpacity
                            styles={styles.detailsButton}
                            onPress={navigateToDetail}
                        >
                            <Text style={styles.detailsButtonText}>Ver mais detalhes</Text>
                            <Feather name="arrow-right" size={16} color="#E02041"/>
                        </TouchableOpacity>
                    </View>
                )}
            />
        </View>
    )
}