import { CustomCards } from "@/components/custom/CustomCards";
import React, { useEffect, useState } from "react";
import { View,Text,StyleSheet } from "react-native";
import { doc, DocumentData, getDoc } from "firebase/firestore";
import {  collection, addDoc, getDocs } from "firebase/firestore";
import { db } from "@/config/firebaseConfig";
import CustomButtonLogout from "@/components/custom/CustomLogout";
import MapComponent from "@/components/custom/CustomMap";



 const ProductScreen = () => {
    const [product, setProduct] = useState<any>([]);

    const getData =async() =>{
        try {
          const querySnapshot = await getDocs(collection(db, "City"));
          const productsArray: DocumentData[]= [];
          querySnapshot.forEach((doc) => {
          //  console.log(`${doc.id} => ${doc.data()}`);
            productsArray.push(doc.data());
          });

          setProduct(productsArray);
        } catch (e) {
          console.error("Error getting documents: ", e);
        }
      }

      useEffect(() => {
        getData();
      }, [getData]);

    return (
        <View style={styles.container}>
            <Text>Localise Me</Text>
            <View>
            <MapComponent/>
            </View>
           
            <CustomCards name="Estiam Overview" image='data:image/jpeg;base64,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' description="Ecole d'info de tout genre" />

            <CustomButtonLogout />
        </View>
    );
};


const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    padding: 16,
    backgroundColor: '#fff', // Set background color to white
  },
  title: {
    fontSize: 24,
    marginBottom: 16,
    textAlign: 'center',
  },
  input: {
    height: 40,
    borderColor: '#ccc',
    borderWidth: 1,
    marginBottom: 12,
    paddingHorizontal: 8,
  },
});

export default ProductScreen;

