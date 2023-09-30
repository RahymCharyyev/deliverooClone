import React, { useRef } from 'react';
import { View, Text, StyleSheet, Image, TextInput } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { Ionicons } from '@expo/vector-icons';
import Colors from '@/constants/Colors';
import { Link } from 'expo-router';
import BottomSheet from './BottomSheet';
import { BottomSheetModal } from '@gorhom/bottom-sheet';

const SearchBar = () => (
  <View style={styles.searchContainer}>
    <View style={styles.searchSection}>
      <View style={styles.searchField}>
        <Ionicons
          style={styles.searchIcon}
          name='ios-search'
          size={20}
          color={Colors.medium}
        />

        <TextInput
          style={styles.input}
          placeholder='Restaurants, groceries, dishes'
        />
      </View>
      <Link href={'/'} asChild>
        <TouchableOpacity style={styles.optionButton}>
          <Ionicons name='options-outline' size={20} color={Colors.primary} />
        </TouchableOpacity>
      </Link>
    </View>
  </View>
);

const CustomHeader = () => {
  const bottomSheetRef = useRef<BottomSheetModal>(null);
  const openModal = () => {
    bottomSheetRef.current?.present();
  };
  return (
    <SafeAreaView style={styles.safeArea}>
      <BottomSheet ref={bottomSheetRef} />

      <View style={styles.container}>
        <View style={styles.leftContainer}>
          <TouchableOpacity onPress={openModal}>
            <Image
              style={styles.bike}
              source={require('@/assets/images/bike.png')}
            />
          </TouchableOpacity>

          <TouchableOpacity onPress={openModal}>
            <Text style={styles.title}>Delivery · Now</Text>
            <View style={styles.locationName}>
              <Text style={styles.subtitle}>London</Text>
              <Ionicons name='chevron-down' size={20} color={Colors.primary} />
            </View>
          </TouchableOpacity>
        </View>

        <TouchableOpacity style={styles.profileButton}>
          <Ionicons name='person-outline' size={20} color={Colors.primary} />
        </TouchableOpacity>
      </View>
      <SearchBar />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: '#fff',
  },
  container: {
    height: 60,
    backgroundColor: '#fff',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: 20,
  },
  leftContainer: {
    flexDirection: 'row',
    gap: 20,
    alignItems: 'center',
  },
  bike: {
    width: 35,
    height: 35,
  },
  title: {
    fontSize: 14,
    color: Colors.medium,
  },
  locationName: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  subtitle: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  profileButton: {
    backgroundColor: Colors.lightGrey,
    padding: 10,
    borderRadius: 50,
  },
  searchContainer: {
    height: 60,
    backgroundColor: '#fff',
  },
  searchSection: {
    flexDirection: 'row',
    gap: 10,
    flex: 1,
    paddingHorizontal: 20,
    alignItems: 'center',
  },
  searchField: {
    flex: 1,
    backgroundColor: Colors.lightGrey,
    borderRadius: 8,
    flexDirection: 'row',
    alignItems: 'center',
  },
  input: {
    padding: 10,
    color: Colors.mediumDark,
  },
  searchIcon: {
    paddingLeft: 10,
  },
  optionButton: {
    padding: 10,
    borderRadius: 50,
  },
});

export default CustomHeader;
