import { doc, getDoc, updateDoc } from "firebase/firestore";
import { db } from "../services/firebase";
import { getDefaultAddress } from "../utils/addresses";

const collection = "users";

const getUserById = (id, sendData) => {
  const docRef = doc(db, collection, id);
  getDoc(docRef)
    .then((docSnap) => {
      if (docSnap.exists()) {
        // console.log("Document data:", docSnap.data());
        sendData({
          success: true,
          message: "Successfully Logged In",
          data: {
            id, // id: docSnap.id
            ...docSnap.data(),
          },
          err: null,
        });
      } else {
        // docSnap.data() will be undefined in this case
        // console.log("No such document!");
        sendData({
          success: false,
          message: null,
          data: null,
          err: {
            name: "invalid_id",
            message: `No such document - path: ${collection}/${id}`,
            code: "",
            data: "",
          },
        });
      }
    })
    .catch((e) => {
      console.log("e: ", e);
      sendData({
        success: false,
        message: null,
        data: null,
        err: {
          name: "Firebase API Error",
          message: e.message,
          code: e.code,
          data: "",
        },
      });
    });
};

// saves the shipping addresses, default address is also kept in the profile address fields
const saveUserAddresses = async (id, addresses) => {
  const defaultAddress = getDefaultAddress(addresses);
  const updatedData = {
    addresses,
    address: defaultAddress ? defaultAddress.address : "",
    city: defaultAddress ? defaultAddress.city : "",
    state: defaultAddress ? defaultAddress.state : "",
    country: defaultAddress ? defaultAddress.country : "",
    pincode: defaultAddress ? defaultAddress.pincode : "",
  };
  await updateDoc(doc(db, collection, id), updatedData);
  return updatedData;
};

export { getUserById, saveUserAddresses };
