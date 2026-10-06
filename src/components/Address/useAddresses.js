import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { login, selectUser } from "../../store/userSlice";
import { saveUserAddresses } from "../../api/user";
import {
  deleteAddress,
  getUserAddresses,
  saveAddress,
  setDefaultAddress,
} from "../../utils/addresses";
import {
  errorNotification,
  successNotification,
} from "../../utils/notifications";

const newAddressId = () =>
  `addr_${Date.now().toString(36)}${Math.random().toString(36).slice(2, 6)}`;

// shipping addresses of the logged in user, changes are saved to the user doc
const useAddresses = () => {
  const dispatch = useDispatch();
  const { userDetail } = useSelector(selectUser);
  const [isSaving, setIsSaving] = useState(false);

  const addresses = getUserAddresses(userDetail);

  const persist = async (updatedAddresses, message) => {
    setIsSaving(true);
    try {
      const updatedData = await saveUserAddresses(
        userDetail.id,
        updatedAddresses
      );
      dispatch(login({ ...userDetail, ...updatedData }));
      successNotification(message);
      return true;
    } catch (e) {
      errorNotification(e.message);
      return false;
    } finally {
      setIsSaving(false);
    }
  };

  // returns the saved address (with id), null when it is not saved
  const save = async (address) => {
    const id = address.id || newAddressId();
    const updatedAddresses = saveAddress(addresses, address, id);
    const isSaved = await persist(updatedAddresses, "Address saved");
    return isSaved ? updatedAddresses.find((item) => item.id === id) : null;
  };

  const remove = (id) =>
    persist(deleteAddress(addresses, id), "Address removed");

  const makeDefault = (id) =>
    persist(setDefaultAddress(addresses, id), "Default address updated");

  return { addresses, isSaving, save, remove, makeDefault };
};

export default useAddresses;
