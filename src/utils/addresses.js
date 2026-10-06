// Shipping addresses of a user - stored as users/{id}.addresses (array)
const MAX_ADDRESSES = 10;

const ADDRESS_LABELS = ["Home", "Office", "Other"];

const INDIAN_STATES = [
  "Andaman and Nicobar Islands",
  "Andhra Pradesh",
  "Arunachal Pradesh",
  "Assam",
  "Bihar",
  "Chandigarh",
  "Chhattisgarh",
  "Dadra and Nagar Haveli and Daman and Diu",
  "Delhi",
  "Goa",
  "Gujarat",
  "Haryana",
  "Himachal Pradesh",
  "Jammu and Kashmir",
  "Jharkhand",
  "Karnataka",
  "Kerala",
  "Ladakh",
  "Lakshadweep",
  "Madhya Pradesh",
  "Maharashtra",
  "Manipur",
  "Meghalaya",
  "Mizoram",
  "Nagaland",
  "Odisha",
  "Puducherry",
  "Punjab",
  "Rajasthan",
  "Sikkim",
  "Tamil Nadu",
  "Telangana",
  "Tripura",
  "Uttar Pradesh",
  "Uttarakhand",
  "West Bengal",
];

const emptyAddress = (userDetail = {}) => ({
  id: "",
  label: "Home",
  name: userDetail.name || "",
  phone: userDetail.phone || "",
  address: "",
  city: "",
  state: "",
  country: "India",
  pincode: "",
  isDefault: false,
});

// users registered before the address book have a single address in their profile
function getUserAddresses(userDetail) {
  if (!userDetail) {
    return [];
  }
  if (Array.isArray(userDetail.addresses)) {
    return userDetail.addresses;
  }
  if (userDetail.address) {
    return [
      {
        id: "profile",
        label: "Home",
        name: userDetail.name || "",
        phone: userDetail.phone || "",
        address: userDetail.address,
        city: userDetail.city || "",
        state: userDetail.state || "",
        country: userDetail.country || "India",
        pincode: userDetail.pincode || "",
        isDefault: true,
      },
    ];
  }
  return [];
}

function getDefaultAddress(addresses) {
  return addresses.find((item) => item.isDefault) || addresses[0] || null;
}

// returns the error message, empty when the address is valid
function validateAddress(address) {
  const value = (key) => String(address[key] || "").trim();

  // invoice pdf can print only english letters, numbers and common symbols
  const isEnglish = (text) => /^[\x20-\x7E\n\r]*$/.test(text);
  if (!["name", "address", "city"].every((key) => isEnglish(value(key)))) {
    return "Please enter the name and address in English";
  }

  if (value("name").length < 2) {
    return "Please enter the name of the person receiving the order";
  }
  if (!/^\d{10}$/.test(value("phone"))) {
    return "Please enter a valid 10 digit phone number";
  }
  if (value("address").length < 5) {
    return "Please enter the door no, street and area";
  }
  if (value("city") === "") {
    return "Please enter the city";
  }
  if (value("state") === "") {
    return "Please select the state";
  }
  if (!/^\d{6}$/.test(value("pincode"))) {
    return "Please enter a valid 6 digit pincode";
  }
  return "";
}

const withSingleDefault = (addresses, defaultId) =>
  addresses.map((item) => ({ ...item, isDefault: item.id === defaultId }));

// add (no id) or update (with id) an address, returns the new list
function saveAddress(addresses, address, newId) {
  const cleaned = {
    ...address,
    label: String(address.label || "").trim() || "Home",
    name: address.name.trim(),
    phone: address.phone.trim(),
    address: address.address.trim(),
    city: address.city.trim(),
    pincode: String(address.pincode).trim(),
  };

  const isNew = !addresses.some((item) => item.id === cleaned.id);
  const saved = isNew ? { ...cleaned, id: cleaned.id || newId } : cleaned;
  const updated = isNew
    ? [...addresses, saved]
    : addresses.map((item) => (item.id === saved.id ? saved : item));

  const currentDefault = addresses.find((item) => item.isDefault);
  // first address is always the default one
  const defaultId =
    saved.isDefault || !currentDefault ? saved.id : currentDefault.id;

  return withSingleDefault(updated, defaultId);
}

function deleteAddress(addresses, id) {
  const updated = addresses.filter((item) => item.id !== id);
  if (updated.length > 0 && !updated.some((item) => item.isDefault)) {
    return withSingleDefault(updated, updated[0].id);
  }
  return updated;
}

function setDefaultAddress(addresses, id) {
  return addresses.some((item) => item.id === id)
    ? withSingleDefault(addresses, id)
    : addresses;
}

function formatAddress(address) {
  if (!address) {
    return "";
  }
  const place = [address.address, address.city, address.state, address.country]
    .filter(Boolean)
    .join(", ");
  return address.pincode ? `${place} - ${address.pincode}` : place;
}

// userDetail stored in the order - name, phone and address are of the selected shipping address,
// so admin, invoice and mails deliver to the selected address
function toOrderUserDetail(userDetail, address) {
  return {
    id: userDetail.id,
    email: userDetail.email,
    name: address.name,
    phone: address.phone,
    address: address.address,
    city: address.city,
    state: address.state,
    country: address.country,
    pincode: address.pincode,
  };
}

export {
  MAX_ADDRESSES,
  ADDRESS_LABELS,
  INDIAN_STATES,
  emptyAddress,
  getUserAddresses,
  getDefaultAddress,
  validateAddress,
  saveAddress,
  deleteAddress,
  setDefaultAddress,
  formatAddress,
  toOrderUserDetail,
};
