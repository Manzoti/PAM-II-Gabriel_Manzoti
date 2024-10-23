import React, {useState} from 'react';
import {View, TextInput, Button, Alert} from 'react-native';
import firebase from 'firebase/compat/app';
import 'firebase/compat/firestore';


const firebaseConfig = {
  apiKey: "AIzaSyAu9DmAsfgWCNtgMXO0CsrU-nUS7Rlzj1k",
  authDomain: "meuprimeirofirebase-176d1.firebaseapp.com",
  projectId: "meuprimeirofirebase-176d1",
  storageBucket: "meuprimeirofirebase-176d1.appspot.com",
  messagingSenderId: "646357232434",
  appId: "1:646357232434:web:b1d81775b341672be7052b"
};


firebase.initializeApp(firebaseConfig);

const App = () => {
  const [nome, setNome] = useState('');
  const [sobrenome, setsobrenome] = useState('');

  const sendData = async () => {
    const nomesCollection = firebase.firestore().collection('Nomes');
    try {
      await nomesCollection.add({
        Nome: nome,
        Sobrenome: sobrenome
      });
      Alert.alert('Sucesso', 'Dados cadastrados com sucesso!');
      setNome('');
      setsobrenome('');
    } catch (error) {
      console.error(error);
      Alert.alert('Erro', 'Ocorreu um erro ao cadastrar os dados.');
    }
  };

  return(
    <view>
      <TextInput
        placeholder="Nome"
        value={nome}
        onChangeText={setNome}
        />
        <TextInput
        placeholder="Sobrenome"
        value={sobrenome}
        onChangeText={setsobrenome}
        />
        <button title="Cadastrar" onPress={sendData} />
    </view>
  );
};

export default App;