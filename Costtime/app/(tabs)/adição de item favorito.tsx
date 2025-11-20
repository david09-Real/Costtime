import React, { useState } from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, TextInput, TouchableOpacity, Image, Switch, Alert, ScrollView, Platform } from 'react-native';
import * as ImagePicker from 'expo-image-picker';
import Slider from '@react-native-community/slider';
import { Picker } from '@react-native-picker/picker';
import { Ionicons } from '@expo/vector-icons';

export default function App() {
  const [nome, setNome] = useState('');
  const [imagem, setImagem] = useState(null);
  const [categoria, setCategoria] = useState('Roupas');
  const [preco, setPreco] = useState('');
  const [quantidade, setQuantidade] = useState(1);
  const [comentarios, setComentarios] = useState('');
  const [link, setLink] = useState('');
  const [adquirido, setAdquirido] = useState(false);
  const [favorito, setFavorito] = useState(false);
  const [indice, setIndice] = useState(3);

  async function pickImage() {
    try {
      const permissionResult = await ImagePicker.requestMediaLibraryPermissionsAsync();
      if (!permissionResult.granted) {
        Alert.alert('Permissão necessária', 'Permissão para acessar a galeria é necessária.');
        return;
      }

      const result = await ImagePicker.launchImageLibraryAsync({
        mediaTypes: ImagePicker.MediaTypeOptions.Images,
        quality: 0.7,
        allowsEditing: true,
      });


    } catch (err) {
      console.warn(err);
    }
  }

  function handleAdicionar() {
    const item = {
      nome,
      imagem,
      categoria,
      preco,
      quantidade,
      comentarios,
      link,
      adquirido,
      favorito,
      indice,
    };
    // Apenas exemplo: exibe no alert
    Alert.alert('Item Adicionado', JSON.stringify(item, null, 2));
  }

  return (
    <View style={styles.safe}>
      <StatusBar style="light" />
      <View style={styles.header}>
        <TouchableOpacity onPress={() => {}} style={styles.iconBtn}>
          <Ionicons name="chevron-back" size={22} color="#fff" />
        </TouchableOpacity>
        <Text style={styles.headerTitle}>Adicionar item</Text>
        <View style={{ width: 36 }} />
      </View>

      <ScrollView contentContainerStyle={styles.container} showsVerticalScrollIndicator={false}>

        <TextInput
          placeholder="nome"
          placeholderTextColor="#bfbfbf"
          value={nome}
          onChangeText={setNome}
          style={styles.input}
        />

        <View style={styles.row}>
          <TouchableOpacity style={styles.imageBox} onPress={pickImage} activeOpacity={0.8}>
            {imagem ? (
              <Image source={{ uri: imagem }} style={styles.image} />
            ) : (
              <Ionicons name="image" size={36} color="#bdbdbd" />
            )}
          </TouchableOpacity>

          <View style={{ flex: 1 }}>
            <Text style={styles.label}>Lista de desejos</Text>
            <View style={styles.pickerWrap}>
              <Picker
                selectedValue={categoria}
                onValueChange={(v) => setCategoria(v)}
                style={styles.picker}
                dropdownIconColor="#fff"
              >
                <Picker.Item label="Roupas" value="Roupas" />
                <Picker.Item label="Eletrônicos" value="Eletronicos" />
                <Picker.Item label="Casa" value="Casa" />
                <Picker.Item label="Outros" value="Outros" />
              </Picker>
            </View>
          </View>
        </View>

        <View style={styles.row}>
          <View style={{ flex: 1 }}>
            <Text style={styles.label}>Preço</Text>
            <TextInput
              placeholder="R$"
              placeholderTextColor="#bfbfbf"
              value={preco}
              onChangeText={setPreco}
              keyboardType="numeric"
              style={styles.input}
            />
          </View>

          <View style={{ width: 16 }} />

          <View style={{ flex: 1 }}>
            <Text style={styles.label}>Quantidade</Text>
            <View style={styles.qtyBox}>
              <TouchableOpacity onPress={() => setQuantidade(q => Math.max(1, q - 1))} style={styles.qtyBtn}>
                <Text style={styles.qtyTxt}>-</Text>
              </TouchableOpacity>
              <Text style={styles.qtyNumber}>{quantidade}</Text>
              <TouchableOpacity onPress={() => setQuantidade(q => q + 1)} style={styles.qtyBtn}>
                <Text style={styles.qtyTxt}>+</Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>

        <Text style={styles.label}>Comentários</Text>
        <TextInput
          placeholder=""
          placeholderTextColor="#bfbfbf"
          value={comentarios}
          onChangeText={setComentarios}
          style={[styles.input, { height: 90, textAlignVertical: 'top' }]}
          multiline
        />

        <Text style={styles.label}>Link do item</Text>
        <TextInput
          placeholder=""
          placeholderTextColor="#bfbfbf"
          value={link}
          onChangeText={setLink}
          style={styles.input}
        />

        <View style={[styles.row, { justifyContent: 'space-between', alignItems: 'center' }]}> 
          <View style={{ flexDirection: 'row', alignItems: 'center', gap: 8 }}>
            <Switch
              value={adquirido}
              onValueChange={setAdquirido}
              trackColor={{ false: '#767577', true: '#81b0ff' }}
              thumbColor={adquirido ? '#f5dd4b' : '#f4f3f4'}
            />
            <Text style={styles.label}>Adquirido</Text>
          </View>

          <TouchableOpacity onPress={() => setFavorito(s => !s)}>
            <Ionicons name={favorito ? 'star' : 'star-outline'} size={28} color={favorito ? '#f5c542' : '#888'} />
          </TouchableOpacity>
        </View>

        <Text style={[styles.label, { marginTop: 6 }]}>Índice de desejo</Text>
        <View style={styles.sliderBox}>
          <Slider
            style={{ width: '100%', height: 40 }}
            minimumValue={1}
            maximumValue={5}
            step={1}
            value={indice}
            onValueChange={v => setIndice(v)}
            minimumTrackTintColor="#F15A24"
            maximumTrackTintColor="#555"
            thumbTintColor={Platform.OS === 'android' ? '#fff' : undefined}
          />

          <View style={styles.sliderLabelsRow}>
            <Text style={styles.sliderNumber}>1</Text>
            <Text style={styles.sliderNumber}>2</Text>
            <Text style={styles.sliderNumber}>3</Text>
            <Text style={styles.sliderNumber}>4</Text>
            <Text style={styles.sliderNumber}>5</Text>
          </View>

          <View style={styles.sliderTextRow}>
            <Text style={styles.sliderText}>Muito baixo</Text>
            <Text style={styles.sliderText}>Baixo</Text>
            <Text style={styles.sliderText}>Médio</Text>
            <Text style={styles.sliderText}>Alto</Text>
            <Text style={styles.sliderText}>Muito alto</Text>
          </View>
        </View>

        <TouchableOpacity style={styles.addButton} onPress={handleAdicionar} activeOpacity={0.85}>
          <Text style={styles.addButtonText}>Adicionar</Text>
        </TouchableOpacity>

      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  safe: { flex: 1, backgroundColor: '#111' },
  header: { height: 64, backgroundColor: '#111', flexDirection: 'row', alignItems: 'center', paddingHorizontal: 12, justifyContent: 'space-between' },
  iconBtn: { width: 36, height: 36, alignItems: 'center', justifyContent: 'center' },
  headerTitle: { color: '#fff', fontSize: 18, fontWeight: '700' },
  container: { padding: 18, paddingBottom: 40 },
  input: { backgroundColor: '#303030', borderRadius: 8, paddingHorizontal: 12, paddingVertical: 10, color: '#fff', marginBottom: 12 },
  row: { flexDirection: 'row', alignItems: 'center' },
  imageBox: { width: 88, height: 88, borderRadius: 10, backgroundColor: '#2f2f2f', alignItems: 'center', justifyContent: 'center', overflow: 'hidden' },
  image: { width: '100%', height: '100%' },
  label: { color: '#bfbfbf', marginBottom: 6 },
  pickerWrap: { backgroundColor: '#303030', borderRadius: 8, overflow: 'hidden' },
  picker: { color: '#fff', height: 44, width: '100%' },
  qtyBox: { backgroundColor: '#2f2f2f', borderRadius: 8, padding: 6, flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between' },
  qtyBtn: { backgroundColor: '#3b3b3b', paddingHorizontal: 12, paddingVertical: 6, borderRadius: 6 },
  qtyTxt: { color: '#fff', fontSize: 16 },
  qtyNumber: { color: '#fff', fontSize: 16, marginHorizontal: 12 },
  sliderBox: { marginTop: 6 },
  sliderLabelsRow: { flexDirection: 'row', justifyContent: 'space-between', paddingHorizontal: 6, marginTop: -6 },
  sliderNumber: { color: '#9b9b9b', fontSize: 12 },
  sliderTextRow: { flexDirection: 'row', justifyContent: 'space-between', paddingHorizontal: 2, marginTop: 6 },
  sliderText: { color: '#9b9b9b', fontSize: 11, width: '18%', textAlign: 'center' },
  addButton: { marginTop: 18, backgroundColor: '#F15A24', paddingVertical: 14, borderRadius: 22, alignItems: 'center' },
  addButtonText: { color: '#fff', fontWeight: '700', fontSize: 16 },
});