import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Image } from 'react-native';
import { Ionicons, Feather, MaterialIcons, FontAwesome5 } from '@expo/vector-icons';

export default function PerfilScreen() {
  return (
    <View style={styles.container}>
      {/* Header */}
      <View style={styles.header}>
        <TouchableOpacity>
          <Ionicons name="menu" size={26} color="#fff" />
        </TouchableOpacity>
        <Text style={styles.headerTitle}>Perfil</Text>
        <TouchableOpacity>
          <Ionicons name="settings-sharp" size={24} color="#fff" />
        </TouchableOpacity>
      </View>

      {/* Conteúdo */}
      <View style={styles.content}>
        {/* Foto de perfil */}
        <View style={styles.profileContainer}>
          <View style={styles.avatarCircle}>
            <Ionicons name="person" size={70} color="#4DA3FF" />
          </View>

          <Text style={styles.profileName}>Nome completo da pessoa</Text>
          <Text style={styles.profileInfo}>Emprego/função  |  Escala</Text>

          <View style={styles.salaryContainer}>
            <Text style={styles.salaryLabel}>Salário</Text>
            <Text style={[styles.salaryLabel, { fontWeight: 'bold' }]}>Preço hora</Text>
          </View>
        </View>

        {/* Botões de ações */}
        <View style={styles.buttonList}>
          <TouchableOpacity style={styles.optionButton}>
            <Feather name="bar-chart-2" size={20} color="#fff" />
            <Text style={styles.optionText}>Estatísticas</Text>
          </TouchableOpacity>

          <TouchableOpacity style={styles.optionButton}>
            <FontAwesome5 name="user-friends" size={18} color="#fff" />
            <Text style={styles.optionText}>Resumo geral do usuário</Text>
          </TouchableOpacity>

          <TouchableOpacity style={styles.optionButton}>
            <Ionicons name="flag-outline" size={20} color="#fff" />
            <Text style={styles.optionText}>Metas pessoais</Text>
          </TouchableOpacity>

          <TouchableOpacity style={styles.optionButton}>
            <MaterialIcons name="history" size={20} color="#fff" />
            <Text style={styles.optionText}>Histórico</Text>
          </TouchableOpacity>
        </View>
      </View>

    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#1e1e1e' },

  header: {
    height: 80,
    backgroundColor: '#E65729',
    flexDirection: 'row',
    alignItems: 'flex-end',
    justifyContent: 'space-between',
    paddingHorizontal: 20,
    paddingBottom: 10,
  },
  headerTitle: { color: '#fff', fontSize: 18, fontWeight: 'bold' },

  content: {
    flex: 1,
    alignItems: 'center',
    paddingTop: 30,
  },

  profileContainer: {
    alignItems: 'center',
    width: '100%',
  },
  avatarCircle: {
    backgroundColor: '#2e2e2e',
    borderRadius: 80,
    width: 100,
    height: 100,
    justifyContent: 'center',
    alignItems: 'center',
  },
  profileName: {
    color: '#fff',
    fontSize: 18,
    fontWeight: 'bold',
    marginTop: 10,
  },
  profileInfo: {
    color: '#ccc',
    fontSize: 13,
    marginVertical: 3,
  },
  salaryContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    gap: 15,
    marginTop: 10,
  },
  salaryLabel: {
    color: '#fff',
    fontSize: 14,
  },

  buttonList: {
    width: '85%',
    marginTop: 30,
    gap: 10,
  },
  optionButton: {
    backgroundColor: '#2e2e2e',
    borderRadius: 10,
    padding: 12,
    flexDirection: 'row',
    alignItems: 'center',
    gap: 10,
  },
  optionText: {
    color: '#fff',
    fontSize: 15,
  },

  bottomBar: {
    position: 'absolute',
    bottom: 15,
    alignSelf: 'center',
    backgroundColor: '#fff',
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
    width: 220,
    height: 55,
    borderRadius: 30,
    elevation: 8,
  },
});
