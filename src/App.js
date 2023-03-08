import React from 'react'
import { View, StyleSheet, SafeAreaView } from 'react-native'

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
// import ContadorV2 from './components/contador/ContadorV2'
// import Diferenciar from './components/Diferenciar'
// import ParImpar from './components/ParImpar'
// import UsuarioLogado from './components/UsuarioLogado'
// import ListaProdutos from './components/produtos/ListaProdutos'
// import ListaProdutosV2 from './components/produtosV2/ListaProdutosV2'
// import DigiteSeuNome from './components/DigiteSeuNome'
// import Quadrado from './components/layout/Quadrado'
// import FlexboxV1 from './components/layout/FlexboxV1'
// import FlexboxV2 from './components/layout/FlexboxV2'
// import FlexboxV3 from './components/layout/FlexboxV3'
// import FlexboxV4 from './components/layout/FlexboxV4'
import Mega from './components/mega/Mega'


export default () => (
    <SafeAreaView style={style.App}>
        <Mega qtdeNumeros={6} />
        {/* 
        <FlexboxV4 />
        <FlexboxV3 />
        <FlexboxV2 />
        <FlexboxV1 />
        <DigiteSeuNome />
        <ListaProdutosV2 />
        <ListaProdutos />
        <UsuarioLogado usuario={{nome: 'Emilio', email: 'emilio@eiji.com'}} />
        <ParImpar num={2}/>
        <Diferenciar />
        <ContadorV2 />
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
    </SafeAreaView>
    )

    const style = StyleSheet.create({
        App: {
            flex: 1,
            justifyContent: 'center',
            alignItems: 'center',
            padding: 20
        }
    })