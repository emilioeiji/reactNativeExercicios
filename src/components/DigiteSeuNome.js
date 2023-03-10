import React, {useState} from 'react'
import { SafeAreaView, TextInput ,Text } from 'react-native'
import Estilo from './estilo'

export default props => {
    const [nome, setNome] = useState('')
    return (
        <SafeAreaView>
            <Text>{nome}</Text>
            <TextInput 
                placeholder='Digite o seu nome'
                value={nome}
                onChangeText={setNome}
            />
        </SafeAreaView>
    )
}