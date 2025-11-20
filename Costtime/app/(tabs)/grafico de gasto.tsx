import React from "react";
import { View, Text, StyleSheet, ScrollView } from "react-native";

export default function DashboardScreen() {
  return (
    <ScrollView style={styles.container}>

      {/* ===== CARD 1 – Gasto Mensal ===== */}
      <View style={styles.card}>
        <View style={styles.rowBetween}>
          <Text style={styles.cardTitle}>Gasto Mensal</Text>
          <Text style={styles.emoji}>💸</Text>
        </View>

        {/* CÍRCULO PRINCIPAL */}
        <View style={styles.donutCenter}>
          <View style={styles.bigCircle}>
            <View style={styles.bigInnerCircle} />
          </View>
          <Text style={styles.donutValue}>R$ 547,00</Text>
          <Text style={styles.donutLabel}>Total</Text>
        </View>

        {/* MINI GRÁFICOS */}
        <View style={styles.rowAround}>
          <View style={styles.miniDonut}>
            <View style={styles.miniCircle}><View style={styles.miniInnerCircle} /></View>
            <Text style={styles.miniLabel}>Roupas</Text>
          </View>

          <View style={styles.miniDonut}>
            <View style={styles.miniCircle}><View style={styles.miniInnerCircle} /></View>
            <Text style={styles.miniLabel}>Calçados</Text>
          </View>

          <View style={styles.miniDonut}>
            <View style={styles.miniCircle}><View style={styles.miniInnerCircle} /></View>
            <Text style={styles.miniLabel}>Acessórios</Text>
          </View>
        </View>
      </View>

      {/* ===== CARD 2 – Impacto Ambiental ===== */}
      <View style={styles.card}>
        <View style={styles.rowBetween}>
          <Text style={styles.cardTitle}>Impacto Ambiental</Text>
          <Text style={styles.emoji}>🌱</Text>
        </View>

        {/* GRÁFICO MEIA-LUA (SEMICÍRCULO) */}
        <View style={styles.semiCircle}>
          <View style={styles.semiFill} />
        </View>
        <Text style={styles.semiValue}>32 kg CO₂</Text>
        <Text style={styles.semiLabel}>Emitidos este mês</Text>
      </View>

      {/* ===== CARD 3 – Estilo de Consumo ===== */}
      <View style={styles.card}>
        <View style={styles.rowBetween}>
          <Text style={styles.cardTitle}>Estilo de Consumo</Text>
          <Text style={styles.emoji}>👕</Text>
        </View>

        <Text style={styles.listTitle}>Itens recentes:</Text>

        {/* LISTA DE ROUPAS */}
        <View style={styles.listBox}>
          <Text style={styles.listItem}>• Calça moletom cinza — R$ 129,90</Text>
          <Text style={styles.listItem}>• Camisa oversized — R$ 89,90</Text>
          <Text style={styles.listItem}>• Tênis esportivo — R$ 199,00</Text>
          <Text style={styles.listItem}>• Meia longa preta — R$ 19,90</Text>
          <Text style={styles.listItem}>• Blusa térmica — R$ 89,90</Text>
        </View>
      </View>

    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#141414",
    padding: 15,
  },

  /* ==== CARDS ==== */
  card: {
    backgroundColor: "#1E1E1E",
    borderRadius: 18,
    padding: 18,
    marginBottom: 22,
  },

  cardTitle: {
    color: "#fff",
    fontSize: 20,
    fontWeight: "bold",
  },

  emoji: {
    fontSize: 26,
  },

  rowBetween: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },

  rowAround: {
    flexDirection: "row",
    justifyContent: "space-around",
    marginTop: 10,
  },

  /* ==== DONUT PRINCIPAL ==== */
  donutCenter: {
    alignItems: "center",
    marginTop: 15,
  },

  bigCircle: {
    width: 150,
    height: 150,
    borderRadius: 75,
    borderWidth: 12,
    borderColor: "#FFA047",
    justifyContent: "center",
    alignItems: "center",
  },

  bigInnerCircle: {
    width: 90,
    height: 90,
    borderRadius: 45,
    backgroundColor: "#141414",
  },

  donutValue: {
    color: "#fff",
    fontSize: 26,
    marginTop: 5,
    fontWeight: "bold",
  },

  donutLabel: {
    color: "#ccc",
    fontSize: 14,
  },

  /* ==== MINI DONUTS ==== */
  miniDonut: {
    alignItems: "center",
  },

  miniCircle: {
    width: 70,
    height: 70,
    borderRadius: 35,
    borderWidth: 7,
    borderColor: "#FFA047",
    justifyContent: "center",
    alignItems: "center",
  },

  miniInnerCircle: {
    width: 40,
    height: 40,
    borderRadius: 20,
    backgroundColor: "#141414",
  },

  miniLabel: {
    color: "#ccc",
    fontSize: 14,
    marginTop: 5,
  },

  /* ==== SEMICÍRCULO ==== */
  semiCircle: {
    width: 180,
    height: 90,
    borderTopLeftRadius: 180,
    borderTopRightRadius: 180,
    backgroundColor: "#333",
    overflow: "hidden",
    alignSelf: "center",
    marginTop: 15,
  },

  semiFill: {
    width: "100%",
    height: "100%",
    backgroundColor: "#FFA047",
  },

  semiValue: {
    color: "#fff",
    fontSize: 24,
    textAlign: "center",
    fontWeight: "bold",
    marginTop: 10,
  },

  semiLabel: {
    color: "#ccc",
    textAlign: "center",
    marginBottom: 10,
  },

  /* ==== LISTA ==== */
  listTitle: {
    color: "#fff",
    fontSize: 18,
    marginTop: 10,
    marginBottom: 8,
    fontWeight: "bold",
  },

  listBox: {
    backgroundColor: "#141414",
    borderRadius: 10,
    padding: 12,
  },

  listItem: {
    color: "#ccc",
    fontSize: 15,
    marginBottom: 6,
  },
});