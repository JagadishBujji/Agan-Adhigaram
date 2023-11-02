import * as React from "react";
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
};

const signup = {
  background: "#f19e38",
  color: "#fff",
  fontsize: "14px",
  fontweight: 800,
  fontfamily: "'Poppins', sans-serif",
  "&:hover": {
    background: "#f19e38",
    color: "#fff",
    fontsize: "14px",
    fontweight: 500,
    fontfamily: "'Poppins', sans-serif",
  },
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
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  const [showPassword, setShowPassword] = React.useState(false);

  const handleClickShowPassword = () => setShowPassword((show) => !show);

  const handleMouseDownPassword = (event) => {
    event.preventDefault();
  };

  return (
    <div>
      <Button onClick={handleOpen} sx={signup}>
        Sign up
      </Button>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <Typography id="modal-modal-title" variant="h4" component="h2">
            Sign Up
          </Typography>

          <Grid container>
            <Grid md={6}>
              <TextField
                fullWidth
                id="outlined-basic1"
                label="Name"
                variant="outlined"
                name="name"
                type="text"
                className="name"
                sx={{ mb: 2, width: "90%" }}
              />
            </Grid>
            <Grid md={6}>
              <TextField
                fullWidth
                id="outlined-basic"
                label="Email"
                variant="outlined"
                name="email"
                type="email"
                className="email"
                sx={{ mb: 2 }}
              />
            </Grid>
          </Grid>
          <Grid container>
            <Grid md={12}>
              <TextField
                fullWidth
                id="outlined-basic"
                label="Phone Number"
                variant="outlined"
                name="phonenumber"
                type="tel"
                className="phone"
                sx={{ mb: 2 }}
              />
            </Grid>
            <Grid md={12}>
              <TextField
                id="outlined-multiline-static"
                label="Address"
                multiline
                rows={3}
                sx={{ mb: 2, width: "100%" }}
              />
            </Grid>
            <Grid md={6}>
              <FormControl sx={{ mb: 2, width: "90%" }} variant="outlined">
                <InputLabel htmlFor="outlined-adornment-password">
                  Create Password
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
                  label="Create Password"
                />
              </FormControl>
            </Grid>
            <Grid md={6}>
              <FormControl sx={{ mb: 2, width: "100%" }} variant="outlined">
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
                  label="Password"
                />
              </FormControl>
            </Grid>
          </Grid>
          <Button sx={Signupbtn}>Sign up</Button>
        </Box>
      </Modal>
    </div>
  );
}
