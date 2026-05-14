import { db } from "@/lib/firebase";
import {
  collection,
  addDoc,
  getDocs,
} from "firebase/firestore";

import { Product } from "@/types/product";

const productsRef = collection(db, "products");

export const addProduct = async (
  product: Product
) => {
  await addDoc(productsRef, product);
};

export const getProducts = async () => {
  const snapshot = await getDocs(productsRef);

  return snapshot.docs.map((doc) => ({
    id: doc.id,
    ...doc.data(),
  })) as Product[];
};