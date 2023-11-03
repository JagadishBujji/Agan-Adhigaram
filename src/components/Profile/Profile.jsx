import * as React from "react";
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

const Profile = () => {
  const [showPassword, setShowPassword] = React.useState(false);

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
              <EditIcon sx={{ color: "#f19e38" }} />
            </IconButton>
          </Stack>
          <Grid container spacing={2} sx={profilehalf}>
            <Grid item md={12} xs={12}>
              <TextField
                fullWidth
                id="outlined-basic1"
                label="Name"
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
                label="Email"
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
                label="Phone Number"
                variant="outlined"
                name="mail"
                type="mail"
                className="name"
                sx={{ mb: 2 }}
              />
            </Grid>
            <Grid item md={12} xs={12}>
              <TextField
                id="outlined-multiline-static"
                label="Address"
                multiline
                rows={3}
                sx={{ mb: 2, width: "100%" }}
              />
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
            <Grid item md={6} xs={12}>
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
            </Grid>
            <Grid item md={6} xs={12}>
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
