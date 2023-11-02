import * as React from "react";
import {
  FormControl,
  Grid,
  IconButton,
  InputAdornment,
  InputLabel,
  OutlinedInput,
  TextField,
  Typography,
} from "@mui/material";
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

  return (
    <>
      <Stack className={`${classes.pro} container`}>
        <Grid container spacing={2} padding="0 80px">
          <Typography id="modal-modal-profile" variant="h4" component="h2">
            Profile
          </Typography>
          <Grid item md={12}>
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
          <Grid item md={6}>
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
          <Grid item md={6}>
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
          <Grid item md={12}>
            <TextField
              id="outlined-multiline-static"
              label="Address"
              multiline
              rows={3}
              sx={{ mb: 2, width: "100%" }}
            />
          </Grid>
        </Grid>

        <Typography
          sx={{ padding: "0 50px" }}
          id="modal-modal-profile"
          variant="h4"
          component="h2"
        >
          Settings
        </Typography>
        <Grid container spacing={2} padding="30px 80px">
          <Grid item md={6}>
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
          <Grid item md={6}>
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
          <Grid item md={12}>
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
      </Stack>
    </>
  );
};

export default Profile;
