import * as React from "react";
import { useState } from "react";
import {
  isValidEmail,
  isValidPassword,
  isValidAddress,
  isValidPhoneNumber,
  isValidName,
  isValidNumber,
  normalizePhoneNumber,
} from "../utils/validator";
import { doc, setDoc } from "firebase/firestore";
import { useDispatch } from "react-redux";
import { login } from "../store/userSlice";
import { requestEmailVerification } from "../api/authEmails";
import { db } from "../services/firebase";
import {
  FormControl,
  Grid,
  IconButton,
  InputAdornment,
  InputLabel,
  OutlinedInput,
  TextField,
} from "@mui/material";
import Box from "@mui/material/Box";
import Visibility from "@mui/icons-material/Visibility";
import VisibilityOff from "@mui/icons-material/VisibilityOff";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Modal from "@mui/material/Modal";
import "./SignupModal.css";
import {
  getAuth,
  createUserWithEmailAndPassword,
  updateProfile,
} from "firebase/auth";
import { getAuthErrorMessage } from "../utils/authMessages";
import { errorNotification, successNotification } from "../utils/notifications";
import CountryAndStates from "./CountryAndStates";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 600,
  bgcolor: "background.paper",
  borderRadius: "10px",
  boxShadow: 24,
  p: 4,
  "@media (max-width: 768px)": {
    width: 400,
    maxHeight: "450px",
    overflowY: "scroll",
  },
};

const signup = {
  // background: "#f19e38",
  color: "#f19e38",
  marginTop: "5px",
  fontSize: "12px",
  fontweight: 800,
  fontfamily: "'Poppins', sans-serif",
  // "&:hover": {
  //   // background: "#f19e38",
  //   color: "#fff",
  //   fontsize: "14px",
  //   fontweight: 500,
  //   fontfamily: "'Poppins', sans-serif",
  // },
};

const Signupbtn = {
  width: "100%",
  background: "#f19e38",
  color: "#fff",
  fontsize: "18px",
  "&:hover": {
    background: "#f19e38",
    color: "#fff",
    fontsize: "18px",
  },
};

// const text = {
//   maxHeight: "600px",
//   overflowY: "scroll",
// };

export default function SignupModal() {
  const dispatch = useDispatch();
  const [open, setOpen] = useState(false);
  const [showPassword, setShowPassword] = useState(false);
  const [countryid, setCountryid] = useState(0);
  const [stateid, setstateid] = useState(0);
  const [countryName, setCountryName] = useState("");
  const [stateName, setstateName] = useState("");
  const [cityName, setCityName] = useState("");
  const [signUpDetails, setSignUpDetails] = useState({
    name: "",
    email: "",
    phonenumber: "",
    address: "",
    createPassword: "",
    confirmPassword: "",
    country: "",
    state: "",
    city: "",
    pincode: "",
  });
  // console.log("testing for name", signUpDetails);
  const auth = getAuth();
  const collection = "users";

  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  const handleClickShowPassword = () => setShowPassword((show) => !show);

  const handleMouseDownPassword = (event) => {
    event.preventDefault();
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setSignUpDetails((prevState) => {
      return {
        ...prevState,
        [name]: value,
      };
    });
  };

  // first problem only - a stack of toasts was shown before
  const getSignUpError = ({
    name,
    email,
    phonenumber,
    address,
    createPassword,
    confirmPassword,
    country,
    state,
    pincode,
  }) => {
    if (!isValidName(name))
      return "Please enter your name in English letters (initials like K. Ramesh are fine)";
    if (!isValidEmail(email)) return "Please enter a valid email address";
    if (!isValidPhoneNumber(phonenumber))
      return "Please enter a valid 10 digit phone number";
    if (!isValidAddress(address))
      return "Please enter the door no, street and area in English";
    if (!country) return "Please select the country";
    if (!state) return "Please select the state";
    if (!isValidNumber(pincode)) return "Please enter a valid pincode";
    if (!isValidPassword(createPassword))
      return "Password should be at least 6 characters";
    if (createPassword !== confirmPassword) return "Passwords don't match";
    return "";
  };

  const handleSignUP = () => {
    const details = {
      ...signUpDetails,
      name: signUpDetails.name.trim(),
      email: signUpDetails.email.trim().toLowerCase(),
      phonenumber: normalizePhoneNumber(signUpDetails.phonenumber),
      address: signUpDetails.address.trim(),
      pincode: signUpDetails.pincode.trim(),
    };
    const error = getSignUpError(details);
    if (error) {
      errorNotification(error);
      return;
    }

    const { name, email, phonenumber, address, createPassword, pincode } =
      details;
    createUserWithEmailAndPassword(auth, email, createPassword)
      .then(async (userCredential) => {
        const { user } = userCredential;
        const userData = {
          name,
          phone: phonenumber,
          address,
          email,
          country: countryName,
          state: stateName,
          // city is optional here - the library list misses many towns,
          // checkout asks for it in the delivery address
          city: cityName,
          pincode,
          role: "consumer",
          // new accounts verify the email before the first order;
          // older accounts don't have this field and are not asked
          email_verification_required: true,
        };
        await setDoc(doc(db, collection, user.uid), userData);
        // the login listener may have read the profile before it was saved
        dispatch(login({ id: user.uid, ...userData }));
        // the verification mail greets the customer by this name (%DISPLAY_NAME%),
        // so it is saved before the mail is sent
        await updateProfile(user, { displayName: name }).catch((e) =>
          console.log("display name: ", e)
        );
        // a typo in the email is caught now, not when the password is forgotten
        requestEmailVerification(user).catch((e) =>
          console.log("verification mail: ", e)
        );
        successNotification(
          `Account created! We have sent a verification link to ${email}.`
        );
      })
      .catch((e) => {
        errorNotification(getAuthErrorMessage(e));
      });
  };

  return (
    <div>
      <Button onClick={handleOpen} sx={signup}>
        Create New Account?
      </Button>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="signup-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <Typography id="signup-title" variant="h4" component="h2">
            Sign Up
          </Typography>

          <Grid container>
            <Grid md={6} xs={12}>
              <TextField
                fullWidth
                id="signup-name"
                label="Name"
                variant="outlined"
                name="name"
                type="text"
                className="name"
                value={signUpDetails.name}
                onChange={handleInputChange}
                sx={{
                  mb: 2,
                  width: "90%",
                  "@media (max-width: 768px)": {
                    width: "100%",
                  },
                }}
              />
            </Grid>
            <Grid md={6} xs={12}>
              <TextField
                fullWidth
                id="signup-email"
                label="Email"
                variant="outlined"
                name="email"
                type="email"
                value={signUpDetails.email}
                onChange={handleInputChange}
                className="email"
                sx={{ mb: 2 }}
              />
            </Grid>
          </Grid>
          <Grid container>
            <Grid md={12} xs={12}>
              <TextField
                fullWidth
                id="signup-phone"
                label="Phone Number"
                variant="outlined"
                name="phonenumber"
                type="tel"
                value={signUpDetails.phonenumber}
                onChange={handleInputChange}
                className="phone"
                sx={{ mb: 2 }}
              />
            </Grid>

            <Grid md={12} xs={12}>
              <TextField
                id="signup-address"
                label="Address"
                multiline
                rows={1}
                name="address"
                value={signUpDetails.address}
                onChange={handleInputChange}
                sx={{ mb: 2, width: "100%" }}
              />
            </Grid>
            <Grid md={12} xs={12}>
              <CountryAndStates
                signUpDetails={signUpDetails}
                setSignUpDetails={setSignUpDetails}
                handleInputChange={handleInputChange}
                countryid={countryid}
                setCountryid={setCountryid}
                setCountryName={setCountryName}
                stateid={stateid}
                setstateid={setstateid}
                setstateName={setstateName}
                setCityName={setCityName}
              />
            </Grid>
            <Grid md={6} xs={12}>
              <FormControl
                sx={{
                  mb: 2,
                  width: "90%",
                  "@media (max-width: 768px)": {
                    width: "100%",
                  },
                }}
                variant="outlined"
              >
                <InputLabel htmlFor="signup-password">
                  Create Password
                </InputLabel>
                <OutlinedInput
                  id="signup-password"
                  type={showPassword ? "text" : "password"}
                  name="createPassword"
                  value={signUpDetails.createPassword}
                  onChange={handleInputChange}
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
                  label="Create Password"
                />
              </FormControl>
            </Grid>
            <Grid md={6} xs={12}>
              <FormControl sx={{ mb: 2, width: "100%" }} variant="outlined">
                <InputLabel htmlFor="signup-confirm-password">
                  Confirm Password
                </InputLabel>
                <OutlinedInput
                  id="signup-confirm-password"
                  type={showPassword ? "text" : "password"}
                  name="confirmPassword"
                  value={signUpDetails.confirmPassword}
                  onChange={handleInputChange}
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
                  label="Confirm Password"
                />
              </FormControl>
            </Grid>
          </Grid>
          <Button sx={Signupbtn} onClick={handleSignUP}>
            Sign up
          </Button>
        </Box>
      </Modal>
    </div>
  );
}
