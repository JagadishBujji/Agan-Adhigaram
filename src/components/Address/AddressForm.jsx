import { useState } from "react";
import {
  Button,
  Checkbox,
  Chip,
  FormControlLabel,
  Grid,
  MenuItem,
  Stack,
  TextField,
  Typography,
} from "@mui/material";
import {
  ADDRESS_LABELS,
  INDIAN_STATES,
  validateAddress,
} from "../../utils/addresses";
import { errorNotification } from "../../utils/notifications";
import { primaryBtn, secondaryBtn } from "./styles";

const AddressForm = ({ initialAddress, isSaving, onSave, onCancel }) => {
  const [address, setAddress] = useState(initialAddress);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setAddress((prevState) => ({ ...prevState, [name]: value }));
  };

  // old profile address might have a state which is not in the list
  const states =
    address.state && !INDIAN_STATES.includes(address.state)
      ? [address.state, ...INDIAN_STATES]
      : INDIAN_STATES;

  const handleSubmit = (e) => {
    e.preventDefault();
    const error = validateAddress(address);
    if (error) {
      errorNotification(error);
    } else {
      onSave({ ...address, country: "India" });
    }
  };

  return (
    <form onSubmit={handleSubmit} noValidate>
      <Typography variant="subtitle1" fontWeight={600} sx={{ mb: 1.5 }}>
        {address.id ? "Edit address" : "Add new address"}
      </Typography>
      <Stack direction="row" spacing={1} sx={{ mb: 2 }}>
        {ADDRESS_LABELS.map((label) => (
          <Chip
            key={label}
            label={label}
            clickable
            onClick={() => setAddress((prev) => ({ ...prev, label }))}
            sx={
              address.label === label
                ? { background: "#f19e38", color: "#fff" }
                : undefined
            }
            aria-pressed={address.label === label}
          />
        ))}
      </Stack>
      <Grid container spacing={2}>
        <Grid item xs={12} sm={6}>
          <TextField
            fullWidth
            required
            label="Full Name"
            name="name"
            autoComplete="name"
            value={address.name}
            onChange={handleChange}
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField
            fullWidth
            required
            label="Phone Number"
            name="phone"
            type="tel"
            autoComplete="tel-national"
            inputProps={{ inputMode: "numeric", maxLength: 10 }}
            value={address.phone}
            onChange={handleChange}
          />
        </Grid>
        <Grid item xs={12}>
          <TextField
            fullWidth
            required
            multiline
            minRows={2}
            label="Address (Door No, Street, Area)"
            name="address"
            autoComplete="street-address"
            value={address.address}
            onChange={handleChange}
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField
            fullWidth
            required
            label="City"
            name="city"
            autoComplete="address-level2"
            value={address.city}
            onChange={handleChange}
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField
            fullWidth
            required
            label="Pincode"
            name="pincode"
            autoComplete="postal-code"
            inputProps={{ inputMode: "numeric", maxLength: 6 }}
            value={address.pincode}
            onChange={handleChange}
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField
            fullWidth
            required
            select
            label="State"
            name="state"
            value={address.state}
            onChange={handleChange}
          >
            {states.map((state) => (
              <MenuItem key={state} value={state}>
                {state}
              </MenuItem>
            ))}
          </TextField>
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField
            fullWidth
            disabled
            label="Country"
            value="India"
            helperText="For other countries, please contact us"
          />
        </Grid>
      </Grid>
      <FormControlLabel
        sx={{ mt: 1 }}
        control={
          <Checkbox
            checked={Boolean(address.isDefault)}
            onChange={(e) =>
              setAddress((prev) => ({ ...prev, isDefault: e.target.checked }))
            }
          />
        }
        label="Make this my default address"
      />
      <Stack
        direction={{ xs: "column-reverse", sm: "row" }}
        spacing={1.5}
        justifyContent="flex-end"
        sx={{ mt: 1 }}
      >
        <Button sx={secondaryBtn} variant="outlined" onClick={onCancel}>
          Cancel
        </Button>
        <Button
          sx={primaryBtn}
          variant="contained"
          type="submit"
          disabled={isSaving}
        >
          {isSaving ? "Saving..." : "Save Address"}
        </Button>
      </Stack>
    </form>
  );
};

export default AddressForm;
