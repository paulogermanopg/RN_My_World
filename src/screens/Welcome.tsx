import React, {useState} from 'react';
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
  Alert,
} from 'react-native';
// Novo MOdulo

const Welcome = () => {
  const [userName, setUserName] = useState('');
  const [password, setPassword] = useState('');

  const login = () => {
    if (!userName || userName.trim() === '') {
      Alert.alert('Erro ao Logar', 'Por favor, preencha seu email ou nome de usuário.');
    } else if (!password || password.trim() === '') {
      Alert.alert('Erro ao Logar', 'Por favor, digite a sua senha.');
    } else {
      Alert.alert('Parabéns!', 'Você acaba de logar, SQN!');
    }
  };

  return (
    <View style={styles.container}>
      <View style={styles.topWelcome}>
        <View style={styles.circle} />

        <Text style={styles.logoTextStyle}>WELCOME</Text>
        <Text style={styles.logoTextStyle}>TO MY WORLD</Text>
      </View>

      <View style={styles.bodyLogin}>
        <View>
          <Text style={styles.titleForLogin}>LOGIN</Text>
          <TextInput
            placeholder="User name"
            placeholderTextColor="#fff"
            keyboardType="email-address"
            style={styles.input}
            value={userName}
            onChangeText={setUserName}
          />

          <TextInput
            placeholder="Senha"
            placeholderTextColor="#fff"
            keyboardType="default"
            secureTextEntry
            style={styles.input}
            value={password}
            onChangeText={setPassword}
          />

          <TouchableOpacity style={styles.button} onPress={() => login()}>
            <Text style={{color: '#fff'}}>Entrar</Text>
          </TouchableOpacity>
        </View>

        <View style={styles.rodape}>
          <Text style={styles.rodapeText}>Sou um rodapé</Text>
          <Text style={styles.rodapeText}>Bem-vindo ao meu mundoº</Text>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    backgroundColor: '#1F1F1F',
  },
  topWelcome: {
    flex: 1,
    justifyContent: 'flex-end',
    paddingVertical: '10%',
    alignItems: 'center',
  },
  logoTextStyle: {
    color: '#fff',
    fontSize: 20,
    letterSpacing: 5,
  },
  bodyLogin: {
    flex: 2,
    justifyContent: 'space-between',
    backgroundColor: '#fff',
    width: '100%',
    borderTopLeftRadius: 70,
  },
  titleForLogin: {
    textAlign: 'center',
    color: '#000',
    marginVertical: '5%',
    fontSize: 18,
    letterSpacing: 5,
  },
  input: {
    borderRadius: 10,
    width: '70%',
    height: 45,
    backgroundColor: '#ccc',
    alignSelf: 'center',
    textAlign: 'center',
    marginVertical: 10,
    color: '#000',
    fontSize: 12,
  },
  button: {
    alignSelf: 'center',
    marginVertical: 10,
    backgroundColor: 'black',
    height: 40,
    width: 200,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 10,
  },
  rodape: {
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 70,
  },
  rodapeText: {
    textAlign: 'center',
    color: '#bbb',
    fontSize: 12,
  },
  circle: {
    width: 120,
    height: 120,
    borderRadius: 60,
    backgroundColor: '#fff',
    marginBottom: 20,
  },
});

export default Welcome;
