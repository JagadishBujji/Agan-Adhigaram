import * as React from "react";
import { useSelector } from "react-redux";
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
import classes from "./Profile.module.css";
import { selectUser } from "../../store/userSlice";
import {
  isValidName,
  isValidAddress,
  isValidPassword,
  isValidPhoneNumber,
} from "../../utils/validator";
import { errorNotification } from "../../utils/notifications";

const Profile = () => {
  const [showPassword, setShowPassword] = React.useState(false);
  const [disableEdit, setdisableEdit] = React.useState(true);
  const { userDetail } = useSelector(selectUser);
  const [editedValues, setEditedValues] = React.useState({
    name: userDetail.name,
    phone: userDetail.phone,
    address: userDetail.address,
  });
  const { id, email } = userDetail;

  const docRef = doc(db, "users", id);

  const handleClickShowPassword = () => setShowPassword((show) => !show);

  const handleMouseDownPassword = (event) => {
    event.preventDefault();
  };

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

  const handleEditValues = (e) => {
    const { name, value } = e.target;
    setEditedValues((prev) => {
      return {
        ...editedValues,
        [name]: value,
      };
    });
  };

  const { name, address, phone } = editedValues;

  async function saveChanges() {
    await updateDoc(docRef, { name, phone, address });
    setdisableEdit(true);
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
            <IconButton aria-label="Edit">
              {disableEdit && (
                <EditIcon
                  sx={{ color: "#f19e38" }}
                  onClick={() => setdisableEdit(false)}
                />
              )}
            </IconButton>
          </Stack>
          <Grid container spacing={2} sx={profilehalf}>
            <Grid item md={12} xs={12}>
              <TextField
                fullWidth
                id="outlined-basic1"
                // label="Name"
                disabled={disableEdit}
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
                disabled={disableEdit}
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
                disabled={disableEdit}
                multiline
                name="address"
                rows={3}
                sx={{ mb: 2, width: "100%" }}
              />
            </Grid>
          </Grid>
          {!disableEdit && (
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
                onClick={(prev) => setdisableEdit(prev)}
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
            <IconButton aria-label="Edit">
              <EditIcon sx={{ color: "#f19e38" }} />
            </IconButton>
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
                  label="Confirm Password"
                />
              </FormControl>
            </Grid>
          </Grid>
          <Stack
            spacing={2}
            direction="row"
            justifyContent="end"
            alignItems="end"
          >
            <Button variant="contained" sx={save}>
              Save Changes
            </Button>
            <Button variant="outlined" sx={Cancel}>
              Cancel
            </Button>
          </Stack>
        </Box>
      </Stack>
    </>
  );
};

export default Profile;
