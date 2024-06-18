import { useState } from "react";
import { View, Text, Image, TouchableOpacity, TextInput, Button } from "react-native";
import { styles } from "./styles";

export default function Index() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  const handleLogin = () => {
    if (email === 'exemplo@usuario.com' && password === '123456') {
      setError('');
      alert('Login bem-sucedido');
    } else {
      setError('Email ou senha inválido');
    }
  };
  const handleSignup = () => {
  
  };
  return (
    <View style={styles.container}>
      <Text style={styles.title}>
        Login
      </Text>
      <TextInput
        style={[styles.input, { fontSize: 25, color: 'dodgerblue' }]}
        placeholder="E-mail"
        value={email}
        onChangeText={setEmail}
        placeholderTextColor='dodgerblue'
      />
      <TextInput
        style={[styles.input, { fontSize: 25 }]}
        placeholder="Senha"
        secureTextEntry={true}
        value={password}
        onChangeText={setPassword}
        placeholderTextColor='dodgerblue'
      />
      {error ? <Text style={styles.error}>{error}</Text> : null}
    <Button title="Entrar" onPress={handleLogin} />
    <TouchableOpacity onPress={handleSignup}>
  <Text style={[styles.signupText, { color: 'dodgerblue' }]}>
    Não tem uma conta? Cadastre-se
  </Text>
</TouchableOpacity>

    </View>
  );
};
