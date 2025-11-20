import React, { useState } from 'react';
import { StyleSheet, TextInput, TouchableOpacity, Text, View, Image } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import { useRouter } from 'expo-router';

export default function LoginScreen() {
  const [email, setEmail] = useState('');
  const [senha, setSenha] = useState('');

  const router = useRouter();

  const handleSubmit = () => {
    // Aqui você faria a validação real
    if (email !== '' && senha !== '') {
      router.push('/perfil'); // Vai para o Perfil
    }
  };

  return (
    <View style={styles.container}>
      <LinearGradient
        colors={['#E65729', '#000000', '#343434']}
        locations={[0, 0.3, 1]}
        style={styles.linear}
      >
        <View style={styles.content}>
          {/* Logo */}
          <View style={styles.logoContainer}>
            <Text style={styles.logoIcon}>🕒💲</Text>
            <Text style={styles.logoText}>CostTime</Text>
          </View>

          {/* Título */}
          <Text style={styles.title}>Bem Vindo de volta!</Text>
          <Text style={styles.subtitle}>
            Preencha seus dados ou continue com as redes sociais
          </Text>

          {/* Inputs */}
          <TextInput
            value={email}
            onChangeText={setEmail}
            placeholder="Email"
            placeholderTextColor="#aaa"
            style={styles.textInput}
          />

          <TextInput
            value={senha}
            onChangeText={setSenha}
            placeholder="Senha"
            placeholderTextColor="#aaa"
            secureTextEntry
            style={styles.textInput}
          />

          {/* Botão Entrar */}
          <TouchableOpacity style={styles.button} onPress={handleSubmit}>
            <Text style={styles.buttonText}>Entrar</Text>
          </TouchableOpacity>

          {/* Ou continue com */}
          <Text style={styles.orText}>Ou continue com</Text>

          <View style={styles.socialContainer}>
            <Image
              source={{ uri: 'https://upload.wikimedia.org/wikipedia/commons/4/4f/Icono_de_Google.png' }}
              style={styles.socialIcon}
            />
            <Image
              source={{ uri: 'https://upload.wikimedia.org/wikipedia/commons/5/51/Facebook_f_logo_%282019%29.svg' }}
              style={styles.socialIcon}
            />
          </View>

          {/* Cadastro */}
          <Text style={styles.signupText}>
            Novo usuário? {' '}
            <Text
              style={styles.signupLink}
              onPress={() => router.push('/cadastro')}
            >
              Cadastrar
            </Text>
          </Text>
        </View>
      </LinearGradient>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1 },
  linear: { flex: 1, justifyContent: 'center', alignItems: 'center' },
  content: { width: '85%', alignItems: 'center' },

  logoContainer: { alignItems: 'center', marginBottom: 20 },
  logoIcon: { fontSize: 50 },
  logoText: { color: '#fff', fontSize: 28, fontWeight: 'bold', marginTop: 5 },

  title: { color: '#fff', fontSize: 22, fontWeight: 'bold', marginBottom: 5 },
  subtitle: { color: '#ccc', textAlign: 'center', marginBottom: 20 },

  textInput: {
    width: '100%',
    height: 45,
    backgroundColor: '#333',
    borderRadius: 10,
    paddingHorizontal: 12,
    color: '#fff',
    marginVertical: 8,
  },

  button: {
    backgroundColor: '#E65729',
    width: '100%',
    height: 46,
    borderRadius: 10,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 10,
  },
  buttonText: { color: '#fff', fontSize: 18, fontWeight: 'bold' },

  orText: { color: '#ccc', marginVertical: 20 },
  socialContainer: { flexDirection: 'row', gap: 20 },
  socialIcon: { width: 50, height: 50, borderRadius: 25 },

  signupText: { color: '#fff', marginTop: 25 },
  signupLink: { color: '#E65729', fontWeight: 'bold' },
});
