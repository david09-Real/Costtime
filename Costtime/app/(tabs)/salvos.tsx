import React from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity, FlatList } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import { Ionicons, MaterialIcons, Feather } from '@expo/vector-icons';

type Item = {
  id: string;
  categoria: string;
  itens: number;
  valor: string;
  horas: string;
  imagem: string;
};

const dados: Item[] = [
  {
    id: '1',
    categoria: 'Roupas',
    itens: 7,
    valor: 'R$ 1060,00',
    horas: '106 Horas',
    imagem: 'https://images.unsplash.com/photo-1521334884684-d80222895322',
  },
  {
    id: '2',
    categoria: 'Eletronicos',
    itens: 2,
    valor: 'R$ 3800,00',
    horas: '380 Horas',
    imagem: 'https://images.unsplash.com/photo-1517336714731-489689fd1ca8',
  },
  {
    id: '3',
    categoria: 'Casa',
    itens: 5,
    valor: 'R$ 2700,00',
    horas: '270 Horas',
    imagem: 'https://images.unsplash.com/photo-1560185127-6ed189bf02f4',
  },
];

export default function WishlistScreen() {
  const renderItem = ({ item }: { item: Item }) => (
    <View style={styles.card}>
      <View style={styles.cardInfo}>
        <Text style={styles.cardTitle}>{item.categoria}</Text>
        <Text style={styles.cardDetail}>{item.itens} itens</Text>
        <Text style={styles.cardDetail}>{item.valor}</Text>
        <Text style={styles.cardDetail}>{item.horas}</Text>
      </View>
      <Image source={{ uri: item.imagem }} style={styles.cardImage} />
    </View>
  );

  return (
    <LinearGradient colors={['#E65729', '#000000']} style={styles.container}>
      {/* Topo */}
      <View style={styles.header}>
        <TouchableOpacity>
          <Ionicons name="menu" size={26} color="#fff" />
        </TouchableOpacity>
        <Text style={styles.headerTitle}>Wishlist</Text>
        <TouchableOpacity>
          <Ionicons name="settings-sharp" size={24} color="#fff" />
        </TouchableOpacity>
      </View>

      {/* Conteúdo */}
      <View style={styles.content}>
        <FlatList
          data={dados}
          keyExtractor={(item) => item.id}
          renderItem={renderItem}
          contentContainerStyle={{ paddingBottom: 100 }}
        />
      </View>

      {/* Botão adicionar */}
      <TouchableOpacity style={styles.addButton}>
        <Ionicons name="add" size={30} color="#000" />
      </TouchableOpacity>

      {/* Barra inferior */}
      <View style={styles.bottomBar}>
        <TouchableOpacity>
          <Ionicons name="bookmark" size={24} color="#E65729" />
        </TouchableOpacity>
        <TouchableOpacity>
          <Feather name="pie-chart" size={24} color="#000" />
        </TouchableOpacity>
        <TouchableOpacity>
          <Ionicons name="download-outline" size={24} color="#000" />
        </TouchableOpacity>
        <TouchableOpacity>
          <MaterialIcons name="insert-photo" size={24} color="#000" />
        </TouchableOpacity>
      </View>
    </LinearGradient>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1 },
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
    backgroundColor: '#1e1e1e',
    padding: 15,
  },

  card: {
    flexDirection: 'row',
    backgroundColor: '#2e2e2e',
    borderRadius: 12,
    marginBottom: 15,
    overflow: 'hidden',
  },
  cardInfo: {
    flex: 1,
    padding: 10,
    justifyContent: 'center',
  },
  cardTitle: { color: '#fff', fontSize: 18, fontWeight: 'bold', marginBottom: 5 },
  cardDetail: { color: '#ccc', fontSize: 14 },

  cardImage: {
    width: 120,
    height: 100,
    borderTopRightRadius: 12,
    borderBottomRightRadius: 12,
  },

  addButton: {
    position: 'absolute',
    bottom: 80,
    right: 30,
    width: 55,
    height: 55,
    borderRadius: 30,
    backgroundColor: '#fff',
    justifyContent: 'center',
    alignItems: 'center',
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
