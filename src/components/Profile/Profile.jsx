import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { collection, doc, updateDoc } from "firebase/firestore";
import { db } from "../../services/firebase";
import {
  Box,
  Button,
  FormControl,
  Grid,
  IconButton,
  InputAdornment,
  InputLabel,
  OutlinedInput,
  TextField,
  Typography,
} from "@mui/material";
import EditIcon from "@mui/icons-material/Edit";
import { Stack } from "@mui/system";
import Visibility from "@mui/icons-material/Visibility";
import VisibilityOff from "@mui/icons-material/VisibilityOff";
import {
  CitySelect,
  CountrySelect,
  StateSelect,
} from "react-country-state-city";
import "react-country-state-city/dist/react-country-state-city.css";
import {
  GetCountries,
  GetState,
  GetCity,
  GetLanguages, //async functions
} from "react-country-state-city";
import classes from "./Profile.module.css";
import { selectUser } from "../../store/userSlice";
import {
  isValidName,
  isValidAddress,
  isValidPassword,
  isValidPhoneNumber,
} from "../../utils/validator";
import {
  errorNotification,
  successNotification,
} from "../../utils/notifications";
import { getAuth, updatePassword } from "firebase/auth";
import { logout } from "../../api/auth";

const save = {
  background: "#f19e38",
  color: "#fff",
  fontSize: "16px",
  "&:hover": {
    background: "#f19e38",
    color: "#fff",
  },
};
const Cancel = {
  border: "1px solid #f19e38",
  color: "#f19e38",
  fontSize: "16px",
  "&:hover": {
    border: "1px solid #f19e38",
    color: "#f19e38",
  },
};

const profilehalf = {
  padding: "0 50px",
  "@media (max-width: 768px)": {
    padding: "0",
  },
};
const sechalf = {
  padding: "0 50px",
  "@media (max-width: 768px)": {
    padding: "0",
  },
};

const Profile = () => {
  const dispatch = useDispatch();
  const { userDetail } = useSelector(selectUser);
  const { id } = userDetail;

  const [showPassword, setShowPassword] = useState(false);
  const [showCPassword, setShowCPassword] = useState(false);
  const [disableProfileEdit, setDisableProfileEdit] = useState(true);
  const [disableSettingsEdit, setDisableSettingsEdit] = useState(true);
  const [editedValues, setEditedValues] = useState({
    name: userDetail.name,
    phone: userDetail.phone,
    address: userDetail.address,
    country: userDetail.country,
    state: userDetail.state,
    city: userDetail.city,
    pincode: userDetail.pincode,
  });
  const [pwd, setPwd] = useState("");
  const [cpwd, setCpwd] = useState("");
  const [countriesList, setCountriesList] = useState([]);
  const [stateList, setStateList] = useState([]);
  const [cityList, setCityList] = useState([]);
  const [languageList, setLanguageList] = useState([]);

  useEffect(() => {
    GetCountries().then((result) => {
      setCountriesList(result);
    });

    // GetLanguages().then((result) => {
    //   setLanguageList(result);
    // });
  }, []);

  const handleClickShowPassword = () => setShowPassword((show) => !show);

  const handleClickShowCPassword = () => setShowCPassword((show) => !show);

  const handleMouseDownPassword = (event) => {
    event.preventDefault();
  };

  const handleEditValues = (e) => {
    const { name, value } = e.target;
    setEditedValues((prev) => {
      return {
        ...editedValues,
        [name]: value,
      };
    });
  };

  const { name, address, phone, country, state, city, pincode } = editedValues;

  async function saveChanges() {
    const docRef = doc(db, "users", id);
    await updateDoc(docRef, { name, phone, address });
    setDisableProfileEdit(true);
  }

  const handleSaveChanges = () => {
    const { name, address, phone } = editedValues;

    !isValidName(name)
      ? errorNotification("Invalid Name")
      : !isValidPhoneNumber(phone)
      ? errorNotification("Invalid phone")
      : !isValidAddress(address)
      ? errorNotification("Invalid Address ")
      : saveChanges();
  };

  const updateUserPassword = () => {
    if (!isValidPassword(pwd)) {
      errorNotification(
        "Invalid, Password must be 6 characters or more in length"
      );
      return;
    }
    if (pwd !== cpwd) {
      errorNotification(
        "Invalid, Password must be 6 characters or more in length"
      );
      return;
    }

    // console.log("updateUserPassword", isValidPassword, pwd, cpwd);
    const auth = getAuth();

    const user = auth.currentUser;
    // console.log("user: ", user);

    updatePassword(user, pwd)
      .then(() => {
        successNotification("Password updated successfully!!!");
        setDisableSettingsEdit(true);
        setPwd("");
        setCpwd("");
      })
      .catch((error) => {
        errorNotification(error.message);
        console.log("updateUserPassword error: ", error.message);
        setPwd("");
        setCpwd("");
        if (error.code === "auth/requires-recent-login") {
          // logout the user
          dispatch(logout);
        }
      });
  };

  return (
    <>
      <Stack className={`${classes.pro} container`}>
        <Box>
          <Stack
            direction="row"
            justifyContent="space-between"
            alignItems="center"
            sx={{ width: "100%", mb: 2 }}
          >
            <Typography id="modal-modal-profile" variant="h4" component="h2">
              Profile
            </Typography>
            {disableProfileEdit && (
              <IconButton aria-label="Edit">
                <EditIcon
                  sx={{ color: "#f19e38" }}
                  onClick={() => setDisableProfileEdit(false)}
                />
              </IconButton>
            )}
          </Stack>
          <Grid container spacing={2} sx={profilehalf}>
            <Grid item md={12} xs={12}>
              <TextField
                fullWidth
                id="outlined-basic1"
                // label="Name"
                disabled={disableProfileEdit}
                onChange={(e) => handleEditValues(e)}
                value={editedValues.name}
                variant="outlined"
                name="name"
                type="text"
                className="name"
                sx={{ mb: 2 }}
              />
            </Grid>
            <Grid item md={6} xs={12}>
              <TextField
                fullWidth
                id="outlined-basic1"
                // label="Email"
                value={userDetail.email}
                disabled
                variant="outlined"
                name="mail"
                type="mail"
                className="name"
                sx={{ mb: 2 }}
              />
            </Grid>
            <Grid item md={6} xs={12}>
              <TextField
                fullWidth
                id="outlined-basic1"
                // label="Phone Number"
                value={editedValues.phone}
                onChange={(e) => handleEditValues(e)}
                disabled={disableProfileEdit}
                variant="outlined"
                name="phone"
                type="mail"
                className="name"
                sx={{ mb: 2 }}
              />
            </Grid>
            <Grid item md={12} xs={12}>
              <TextField
                id="outlined-multiline-static"
                // label="Address"
                value={editedValues.address}
                onChange={(e) => handleEditValues(e)}
                disabled={disableProfileEdit}
                multiline
                name="address"
                rows={2}
                sx={{ mb: 2, width: "100%" }}
              />
            </Grid>
            <Grid item md={6} xs={12}>
              <TextField
                fullWidth
                id="outlined-basic1"
                label="Country"
                value={editedValues.country}
                disabled={true}
                variant="outlined"
                name="country"
                className="name"
                sx={{ mb: 2 }}
              />
            </Grid>
            <Grid item md={6} xs={12}>
              <TextField
                fullWidth
                id="outlined-basic1"
                label="State"
                value={editedValues.state}
                disabled={true}
                variant="outlined"
                name="state"
                className="name"
                sx={{ mb: 2 }}
              />
            </Grid>
            <Grid item md={6} xs={12}>
              <TextField
                fullWidth
                id="outlined-basic1"
                label="city"
                value={editedValues.city}
                disabled={true}
                variant="outlined"
                name="city"
                className="name"
                sx={{ mb: 2 }}
              />
            </Grid>
            <Grid item md={6} xs={12}>
              <TextField
                fullWidth
                id="outlined-basic"
                label="Pincode"
                variant="outlined"
                name="pincode"
                // type="number"
                value={editedValues.pincode}
                // onChange={handleInputChange}
                disabled={true}
                className="pincode"
                size="medium"
              />
            </Grid>
          </Grid>

          {!disableProfileEdit && (
            <Stack
              spacing={2}
              direction="row"
              justifyContent="end"
              alignItems="end"
            >
              <Button variant="contained" sx={save} onClick={handleSaveChanges}>
                Save Changes
              </Button>
              <Button
                variant="outlined"
                sx={Cancel}
                onClick={() => setDisableProfileEdit(true)}
              >
                Cancel
              </Button>
            </Stack>
          )}
        </Box>
        <Box marginTop="30px">
          <Stack
            direction="row"
            justifyContent="space-between"
            alignItems="center"
            sx={{ width: "100%", mb: 2 }}
          >
            <Typography id="modal-modal-profile" variant="h4" component="h2">
              Settings
            </Typography>
            {disableSettingsEdit && (
              <IconButton
                aria-label="Edit"
                onClick={() => setDisableSettingsEdit(false)}
              >
                <EditIcon sx={{ color: "#f19e38" }} />
              </IconButton>
            )}
          </Stack>
          <Grid container spacing={2} sx={sechalf}>
            {/* <Grid item md={6} xs={12}>
              <FormControl sx={{ mb: 1, width: "100%" }} variant="outlined">
                <InputLabel htmlFor="outlined-adornment-password">
                  Current Password
                </InputLabel>
                <OutlinedInput
                  id="outlined-adornment-password"
                  type={showPassword ? "text" : "password"}
                  endAdornment={
                    <InputAdornment position="end">
                      <IconButton
                        aria-label="toggle password visibility"
                        onClick={handleClickShowPassword}
                        onMouseDown={handleMouseDownPassword}
                        edge="end"
                      >
                        {showPassword ? <VisibilityOff /> : <Visibility />}
                      </IconButton>
                    </InputAdornment>
                  }
                  label="Current Password"
                />
              </FormControl>
            </Grid> */}
            <Grid item md={12} xs={12}>
              <FormControl sx={{ mb: 1, width: "100%" }} variant="outlined">
                <InputLabel htmlFor="outlined-adornment-password">
                  New Password
                </InputLabel>
                <OutlinedInput
                  id="outlined-adornment-password"
                  disabled={disableSettingsEdit}
                  type={showPassword ? "text" : "password"}
                  value={pwd}
                  onChange={(e) => setPwd(e.target.value)}
                  endAdornment={
                    <InputAdornment position="end">
                      <IconButton
                        disabled={disableSettingsEdit}
                        aria-label="toggle password visibility"
                        onClick={handleClickShowPassword}
                        onMouseDown={handleMouseDownPassword}
                        edge="end"
                      >
                        {showPassword ? <VisibilityOff /> : <Visibility />}
                      </IconButton>
                    </InputAdornment>
                  }
                  label="New Password"
                />
              </FormControl>
            </Grid>
            <Grid item md={12} xs={12}>
              <FormControl sx={{ mb: 1, width: "100%" }} variant="outlined">
                <InputLabel htmlFor="outlined-adornment-password">
                  Confirm Password
                </InputLabel>
                <OutlinedInput
                  id="outlined-adornment-password"
                  type={showCPassword ? "text" : "password"}
                  disabled={disableSettingsEdit}
                  value={cpwd}
                  onChange={(e) => setCpwd(e.target.value)}
                  endAdornment={
                    <InputAdornment position="end">
                      <IconButton
                        disabled={disableSettingsEdit}
                        aria-label="toggle password visibility"
                        onClick={handleClickShowCPassword}
                        onMouseDown={handleMouseDownPassword}
                        edge="end"
                      >
                        {showCPassword ? <VisibilityOff /> : <Visibility />}
                      </IconButton>
                    </InputAdornment>
                  }
                  label="Confirm Password"
                />
              </FormControl>
            </Grid>
          </Grid>
          {!disableSettingsEdit && (
            <Stack
              spacing={2}
              direction="row"
              justifyContent="end"
              alignItems="end"
            >
              <Button
                variant="contained"
                sx={save}
                onClick={updateUserPassword}
              >
                Update Password
              </Button>
              <Button
                variant="outlined"
                sx={Cancel}
                onClick={() => {
                  setDisableSettingsEdit(true);
                  setPwd("");
                  setCpwd("");
                }}
              >
                Cancel
              </Button>
            </Stack>
          )}
        </Box>
      </Stack>
    </>
  );
};

export default Profile;
