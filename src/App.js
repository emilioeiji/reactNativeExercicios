import React from 'react'
import { View, StyleSheet } from 'react-native'

// import Oficinal, { Comp1, Comp2 } from './components/Multi'
// import Primeiro from './components/Primeiro'
// import MinMax from './components/MinMax'
// import Login from './components/Login'
// import Aleatorio from './components/Aleatorio'
// import Titulo from './components/Titulo'
// import Botao from './components/Botao'
// import Contador from './components/Contador'
// import Pai from './components/direta/Pai'
// import Pai from './components/indireta/Pai'
import ContadorV2 from './components/contador/ContadorV2'

export default () => (
    <View style={style.App}>
        <ContadorV2 />
        {/* 
        <Pai />
        <Pai />
        <Contador inicial={100} />
        <Botao />
        <Aleatorio min={1} max={60}/>
        <Titulo principal='Cadastro' 
                secundario='Tela de cadastro'/>
        <Login />
        <MinMax min='3' max='20' />
        <MinMax min='1' max='94' />
        <Oficinal />
        <Comp1 />
        <Comp2 />
        <Primeiro /> */}
    </View>
    )

    const style = StyleSheet.create({
        App: {
            flex: 1,
            justifyContent: 'center',
            alignItems: 'center',
            padding: 20
        }
    })