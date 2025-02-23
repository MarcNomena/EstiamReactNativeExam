import { collection, getDocs } from "firebase/firestore";
import { db } from "@/config/firebaseConfig";
import { LocalisationArray, Localisation } from "@/interface/MapInteractor";

const useDatabase = () => {
  const getData = async (): Promise<LocalisationArray> => {
    try {
      const querySnapshot = await getDocs(collection(db, "Localisation"));
      const productsArray: Localisation[] = [];
      querySnapshot.forEach((doc) => {
        const localisationIteration: Localisation = {
          title: doc.data().title,
          description: doc.data().description,
          coordonne: {
            latitude: doc.data().coordonnee.latitude,
            longitude: doc.data().coordonnee.longitude,
          },
        };
        productsArray.push(localisationIteration);
      });

      const localisationArray: LocalisationArray = {
        localisation: productsArray,
      };

      return localisationArray;
    } catch (e) {
      console.error("Error getting documents: ", e);
      throw e;
    }
  };

  return { getData };
};

export default useDatabase;