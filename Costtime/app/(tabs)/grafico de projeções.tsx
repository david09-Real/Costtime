import React from "react";
import { View, Text, TouchableOpacity, StyleSheet, SafeAreaView, ScrollView } from "react-native";
import { Feather, Ionicons } from "@expo/vector-icons";

export default function ProjecaoFutura() {
  return (
    <SafeAreaView style={styles.container}>
      {/* Header */}
      <View style={styles.header}>
        <TouchableOpacity>
          <Feather name="menu" size={26} color="#fff" />
        </TouchableOpacity>

        <Text style={styles.headerTitle}>Projeção</Text>

        <TouchableOpacity>
          <Ionicons name="settings-sharp" size={26} color="#fff" />
        </TouchableOpacity>
      </View>

      <ScrollView style={{ flex: 1 }}>
        <View style={styles.mainCard}>
          <Text style={styles.projectionTitle}>Nome da Projeção</Text>

          <Text style={styles.subtitle}>
            Quanto você irá gastar consumindo esse item em:
          </Text>

          {/* Botões de tempo */}
          <View style={styles.timeButtons}>
            <TouchableOpacity style={styles.timeButton}><Text style={styles.timeText}>1M</Text></TouchableOpacity>
            <TouchableOpacity style={styles.timeButton}><Text style={styles.timeText}>6M</Text></TouchableOpacity>
            <TouchableOpacity style={styles.timeButton}><Text style={styles.timeText}>1A</Text></TouchableOpacity>
          </View>

          {/* Tipos de gráfico */}
          <View style={styles.graphType}>
            <Text style={styles.graphTypeText}>Tipos de gráficos ▾</Text>
          </View>

          <Text style={styles.valueText}>R$1550</Text>

          {/* Gráfico simples (placeholder) */}
          <View style={styles.graphPlaceholder}>
            <Text style={{ color: "#fff", opacity: 0.6 }}>[ Gráfico de barras ]</Text>
          </View>

          {/* Tabs */}
          <View style={styles.tabRow}>
            <TouchableOpacity style={styles.activeTab}><Text style={styles.activeTabText}>Dinheiro</Text></TouchableOpacity>
            <TouchableOpacity style={styles.inactiveTab}><Text style={styles.inactiveTabText}>Tempo de vida</Text></TouchableOpacity>
          </View>
        </View>

        {/* Aba inferior */}
        <View style={styles.bottomCard}>
          <View style={styles.secondaryTabs}>
            <TouchableOpacity style={styles.secondaryActive}><Text style={styles.secondaryActiveText}>Dinheiro</Text></TouchableOpacity>
            <TouchableOpacity style={styles.secondaryInactive}><Text style={styles.secondaryInactiveText}>Vida</Text></TouchableOpacity>
            <TouchableOpacity style={styles.secondaryInactive}><Text style={styles.secondaryInactiveText}>Meio Ambiente</Text></TouchableOpacity>
          </View>

          <Text style={styles.sectionTitle}>Gasto médio por</Text>

          {/* Gráfico de rosca placeholder */}
          <View style={styles.donutRow}>
            <View style={styles.donutGraph}><Text style={styles.donutPlaceholder}>[ Donut ]</Text></View>
            <Text style={styles.donutDescription}>
              Isso se equivale em 16,87% do que você ganha em uma semana
            </Text>
          </View>

          {/* Exemplo repetido */}
          <View style={styles.donutRow}>
            <View style={styles.donutGraph}><Text style={styles.donutPlaceholder}>[ Donut ]</Text></View>
            <Text style={styles.donutDescription}>
              Isso se equivale em 16,87% do que você ganha em um mês
            </Text>
          </View>

          <Text style={styles.sectionTitle}>Soluções</Text>

          <ScrollView horizontal showsHorizontalScrollIndicator={false}>
            <View style={styles.solutionCard}>
              <Text style={styles.solutionText}>
                Poderia reduzir em 10% o consumo, para economizar XXXXXXXXXXXXXXXX
              </Text>
            </View>

            <View style={styles.solutionCard}>
              <Text style={styles.solutionText}>
                Poderia reduzir em 20% o consumo, para economizar XXXXXXXXXXXXXXXX
              </Text>
            </View>
          </ScrollView>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#0a0a1a",
  },
  header: {
    height: 60,
    backgroundColor: "#e45426",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    paddingHorizontal: 18,
    borderBottomLeftRadius: 10,
    borderBottomRightRadius: 10,
  },
  headerTitle: {
    color: "#fff",
    fontSize: 18,
    fontWeight: "600",
  },
  mainCard: {
    backgroundColor: "#0c0c3a",
    margin: 12,
    padding: 16,
    borderRadius: 12,
  },
  projectionTitle: {
    color: "#fff",
    fontSize: 20,
    fontWeight: "700",
    marginBottom: 6,
  },
  subtitle: {
    color: "#ddd",
    marginBottom: 16,
  },
  timeButtons: {
    flexDirection: "row",
    gap: 10,
  },
  timeButton: {
    backgroundColor: "#1a1a4a",
    paddingVertical: 6,
    paddingHorizontal: 16,
    borderRadius: 20,
  },
  timeText: { color: "#fff" },
  graphType: { marginTop: 14 },
  graphTypeText: { color: "#ccc" },
  valueText: {
    color: "#fff",
    fontSize: 28,
    fontWeight: "700",
    marginTop: 10,
  },
  graphPlaceholder: {
    backgroundColor: "#11114a",
    marginTop: 16,
    height: 180,
    borderRadius: 10,
    justifyContent: "center",
    alignItems: "center",
  },
  tabRow: {
    flexDirection: "row",
    marginTop: 18,
  },
  activeTab: {
    backgroundColor: "#e45426",
    paddingVertical: 8,
    paddingHorizontal: 20,
    borderRadius: 20,
    marginRight: 8,
  },
  inactiveTab: {
    backgroundColor: "#1a1a4a",
    paddingVertical: 8,
    paddingHorizontal: 20,
    borderRadius: 20,
  },
  activeTabText: { color: "#fff", fontWeight: "600" },
  inactiveTabText: { color: "#bbb" },

  bottomCard: {
    backgroundColor: "#1a1a1a",
    marginTop: -10,
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
    padding: 16,
  },

  secondaryTabs: {
    flexDirection: "row",
    marginBottom: 12,
  },
  secondaryActive: {
    backgroundColor: "#e45426",
    paddingVertical: 6,
    paddingHorizontal: 18,
    borderRadius: 20,
    marginRight: 6,
  },
  secondaryInactive: {
    backgroundColor: "#333",
    paddingVertical: 6,
    paddingHorizontal: 18,
    borderRadius: 20,
    marginRight: 6,
  },
  secondaryActiveText: { color: "#fff" },
  secondaryInactiveText: { color: "#aaa" },

  sectionTitle: {
    color: "#fff",
    fontSize: 18,
    fontWeight: "600",
    marginTop: 12,
    marginBottom: 12,
  },

  donutRow: {
    flexDirection: "row",
    marginBottom: 18,
  },
  donutGraph: {
    width: 80,
    height: 80,
    borderRadius: 40,
    backgroundColor: "#0a0a3a",
    justifyContent: "center",
    alignItems: "center",
    marginRight: 12,
  },
  donutPlaceholder: { color: "#777" },
  donutDescription: { color: "#ddd", flex: 1 },

  solutionCard: {
    backgroundColor: "#262626",
    width: 250,
    padding: 14,
    borderRadius: 14,
    marginRight: 12,
  },
  solutionText: { color: "#fff", fontSize: 14 },
});
