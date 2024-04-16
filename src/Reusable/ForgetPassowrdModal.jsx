import { useState } from "react";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Modal from "@mui/material/Modal";
import { Grid, TextField } from "@mui/material";
import "./LoginModal.css";
import { isValidEmail } from "../utils/validator";
import { errorNotification, successNotification } from "../utils/notifications";
import { auth } from "../services/firebase";
import { sendPasswordResetEmail } from "firebase/auth";

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

const loginModalBtn = {
  border: "1px solid #f19e38",
  color: "#f19e38",
  fontSize: "14px",
  fontWeight: 500,
  margin: "0 10px",

  fontFamily: "'Poppins', sans-serif",
  "@media (max-width: 768px)": {
    marginBottom: "10px",
    marginLeft: "35px",
    marginRight: "10px",
    border: "none",
    fontWeight: "bold",
  },
};
const loginbtn = {
  // border: "1px solid #f19e38",
  color: "#fff",
  fontSize: "14px",
  fontWeight: 500,
  background: "#f19e38",
  fontFamily: "'Poppins', sans-serif",
  width: "100%",
  "&:hover": {
    background: "#f19e38",
    color: "#fff",
    fontsize: "18px",
  },
};

// const forgot = {
//   color: "#f19e38",
//   fontSize: "18px",
//   fontWeight: 500,
//   fontFamily: "'Poppins', sans-serif",
// };

export default function ForgetPasswordModal({ open, setOpen }) {
  const [email, setEmail] = useState("");

  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  const handlePasswordReset = () => {
    if (isValidEmail(email)) {
      sendPasswordResetEmail(auth, email)
        .then(() => {
          successNotification("Password reset email sent!");
          handleClose();
        })
        .catch((e) => {
          console.log("forgot passowrd: ", e);
          errorNotification(e.message);
        });
    } else {
      errorNotification("Invalid Email!!!");
    }
  };

  return (
    <div>
      <Button onClick={handleOpen} sx={loginModalBtn}>
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
            Forget Password
          </Typography>
          <Grid container>
            <Grid md={12} xs={12}>
              <TextField
                fullWidth
                id="outlined-basic"
                label="Email"
                variant="outlined"
                name="email"
                type="email"
                sx={{ mb: 2 }}
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </Grid>
          </Grid>

          <Button sx={loginbtn} onClick={handlePasswordReset}>
            Send Password Reset Link
          </Button>
        </Box>
      </Modal>
    </div>
  );
}
