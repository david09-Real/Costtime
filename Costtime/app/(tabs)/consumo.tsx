import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, ScrollView } from 'react-native';
import { Ionicons, Feather, MaterialIcons } from '@expo/vector-icons';
import { PieChart, Pie, Cell, ResponsiveContainer } from 'recharts';

export default function ConsumoScreen() {
  const data = [
    { name: 'Tênis', value: 47.2 },
    { name: 'Calça', value: 14.2 },
    { name: 'Moletom', value: 10.4 },
    { name: 'Camiseta', value: 9.4 },
    { name: 'Blusa', value: 9.4 },
    { name: 'Short', value: 4.7 },
    { name: 'Regata', value: 4.7 },
  ];

  const COLORS = ['#001F7F', '#0036CC', '#004FFF', '#2D7FFF', '#66B2FF', '#3399FF', '#80C7FF'];

  return (
    <View style={styles.container}>
      {/* Topo */}
      <View style={styles.header}>
        <TouchableOpacity>
          <Ionicons name="menu" size={26} color="#fff" />
        </TouchableOpacity>
        <Text style={styles.headerTitle}>Consumo</Text>
        <TouchableOpacity>
          <Ionicons name="settings-sharp" size={24} color="#fff" />
        </TouchableOpacity>
      </View>

      {/* Conteúdo */}
      <ScrollView style={styles.content} contentContainerStyle={{ paddingBottom: 100 }}>
        <View style={styles.card}>
          <Text style={styles.cardTitle}>Roupas</Text>
          <Text style={styles.cardSubtitle}>R$: 1060,00</Text>

          <View style={styles.chartContainer}>
            <PieChart width={150} height={150}>
              <Pie
                data={data}
                cx="50%"
                cy="50%"
                innerRadius={40}
                outerRadius={70}
                paddingAngle={2}
                dataKey="value"
              >
                {data.map((entry, index) => (
                  <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                ))}
              </Pie>
            </PieChart>

            <View style={styles.legendContainer}>
              {data.map((item, index) => (
                <Text key={index} style={styles.legendText}>
                  {item.value.toFixed(1)}% {item.name}
                </Text>
              ))}
            </View>
          </View>
        </View>
      </ScrollView>

      {/* Botão adicionar */}
      <TouchableOpacity style={styles.addButton}>
        <Ionicons name="add" size={30} color="#000" />
      </TouchableOpacity>

 
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
    padding: 15,
  },

  card: {
    backgroundColor: '#2e2e2e',
    borderRadius: 12,
    padding: 15,
    alignItems: 'flex-start',
  },
  cardTitle: { color: '#fff', fontSize: 20, fontWeight: 'bold' },
  cardSubtitle: { color: '#ccc', fontSize: 14, marginBottom: 10 },

  chartContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },

  legendContainer: {
    marginLeft: 20,
  },
  legendText: { color: '#ccc', fontSize: 13, marginBottom: 4 },

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
