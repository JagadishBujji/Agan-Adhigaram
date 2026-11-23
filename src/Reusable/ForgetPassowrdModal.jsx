import { useState } from "react";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Modal from "@mui/material/Modal";
import { Grid, TextField } from "@mui/material";
import "./LoginModal.css";
import { isValidEmail } from "../utils/validator";
import { errorNotification, successNotification } from "../utils/notifications";
import { requestPasswordReset } from "../api/authEmails";
import {
  getAuthErrorMessage,
  getPasswordResetSentMessage,
} from "../utils/authMessages";

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

  const handleClose = () => setOpen(false);

  const handlePasswordReset = () => {
    const trimmedEmail = email.trim().toLowerCase();
    if (!isValidEmail(trimmedEmail)) {
      errorNotification("Please enter a valid email address.");
      return;
    }
    const showSentMessage = () => {
      successNotification(getPasswordResetSentMessage(trimmedEmail));
      handleClose();
    };
    requestPasswordReset(trimmedEmail)
      .then(showSentMessage)
      .catch((e) => {
        // same message as success, so the form does not reveal which emails have accounts
        if (e.code === "auth/user-not-found") {
          showSentMessage();
          return;
        }
        console.log("forgot password: ", e);
        errorNotification(getAuthErrorMessage(e));
      });
  };

  return (
    <div>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="forgot-password-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <Typography id="forgot-password-title" variant="h4" component="h2">
            Forgot Password
          </Typography>
          <Grid container>
            <Grid md={12} xs={12}>
              <TextField
                fullWidth
                id="forgot-password-email"
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
