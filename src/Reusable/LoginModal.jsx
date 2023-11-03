import * as React from "react";
import { Link } from "react-router-dom";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Modal from "@mui/material/Modal";
import {
  FormControl,
  Grid,
  IconButton,
  InputAdornment,
  InputLabel,
  OutlinedInput,
  Stack,
  TextField,
} from "@mui/material";
import Visibility from "@mui/icons-material/Visibility";
import VisibilityOff from "@mui/icons-material/VisibilityOff";
import "./LoginModal.css";

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

const login = {
  border: "1px solid #f19e38",
  color: "#f19e38",
  fontSize: "14px",
  fontWeight: 500,
  marginLeft: "10px",
  marginRight: "10px",
  fontFamily: "'Poppins', sans-serif",
};
const loginbtn = {
  border: "1px solid #f19e38",
  color: "#f19e38",
  fontSize: "14px",
  fontWeight: 500,

  fontFamily: "'Poppins', sans-serif",
  width: "100%",
};

// const forgot = {
//   color: "#f19e38",
//   fontSize: "18px",
//   fontWeight: 500,
//   fontFamily: "'Poppins', sans-serif",
// };

export default function LoginModal() {
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
      <Button onClick={handleOpen} sx={login}>
        Login
      </Button>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <Typography id="modal-modal-title" variant="h4" component="h2">
            Login
          </Typography>
          <Grid container>
            <Grid md={12} xs={12}>
              <TextField
                fullWidth
                id="outlined-basic"
                label="Email"
                variant="outlined"
                name="mail"
                type="mail"
                sx={{ mb: 2 }}
              />
            </Grid>
            <Grid md={12} xs={12}>
              <FormControl sx={{ mb: 2, width: "100%" }} variant="outlined">
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
          </Grid>
          <Stack
            direction="row"
            alignItems="end"
            justifyContent="end"
            sx={{ mb: 2 }}
          >
            {/* <Checkbox name="remember" label="Remember me" /> */}
            <Link
              variant="subtitle2"
              underline="hover"
              sx={{ color: "#9F3239" }}
            >
              Forgot password?
            </Link>
          </Stack>
          <Button sx={loginbtn}>Login</Button>
        </Box>
      </Modal>
    </div>
  );
}
