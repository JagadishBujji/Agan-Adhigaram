import { useState } from "react";
import { useSelector } from "react-redux";
import {
  Box,
  Button,
  Chip,
  Radio,
  Stack,
  Typography,
} from "@mui/material";
import AddIcon from "@mui/icons-material/Add";
import { selectUser } from "../../store/userSlice";
import {
  MAX_ADDRESSES,
  emptyAddress,
  formatAddress,
} from "../../utils/addresses";
import AddressForm from "./AddressForm";
import useAddresses from "./useAddresses";
import { secondaryBtn } from "./styles";

// List of shipping addresses with add, edit, delete and default.
// selectable - used in checkout to choose the delivery address (selectedId, onSelect)
const AddressManager = ({ selectable = false, selectedId, onSelect }) => {
  const { userDetail } = useSelector(selectUser);
  const { addresses, isSaving, save, remove, makeDefault } = useAddresses();
  // null - list is shown, address - form is shown
  const [editing, setEditing] = useState(null);

  const handleSave = async (address) => {
    const saved = await save(address);
    if (saved) {
      setEditing(null);
      if (selectable && onSelect) {
        onSelect(saved.id);
      }
    }
  };

  const handleDelete = (address) => {
    if (window.confirm(`Remove the ${address.label} address?`)) {
      remove(address.id);
    }
  };

  if (editing) {
    return (
      <AddressForm
        initialAddress={editing}
        isSaving={isSaving}
        onSave={handleSave}
        onCancel={() => setEditing(null)}
      />
    );
  }

  return (
    <Stack spacing={1.5}>
      {addresses.length === 0 && (
        <Typography color="text.secondary">
          No address added yet. Add an address to deliver your books.
        </Typography>
      )}
      {addresses.map((address) => {
        const isSelected = selectable && selectedId === address.id;
        return (
          <Box
            key={address.id}
            onClick={selectable ? () => onSelect(address.id) : undefined}
            sx={{
              display: "flex",
              alignItems: "flex-start",
              gap: 1,
              p: 1.5,
              borderRadius: 2,
              border: isSelected ? "2px solid #f19e38" : "1px solid #ddd",
              background: "#fff",
              cursor: selectable ? "pointer" : "default",
            }}
          >
            {selectable && (
              <Radio
                checked={isSelected}
                onChange={() => onSelect(address.id)}
                inputProps={{
                  "aria-label": `Deliver to ${address.label} - ${address.name}`,
                }}
                sx={{ p: 0.5, "&.Mui-checked": { color: "#f19e38" } }}
              />
            )}
            <Box sx={{ flexGrow: 1, minWidth: 0 }}>
              <Stack direction="row" spacing={1} alignItems="center">
                <Typography fontWeight={600}>{address.label}</Typography>
                {address.isDefault && <Chip size="small" label="Default" />}
              </Stack>
              <Typography sx={{ wordBreak: "break-word" }}>
                {address.name}, {address.phone}
              </Typography>
              <Typography
                color="text.secondary"
                sx={{ wordBreak: "break-word" }}
              >
                {formatAddress(address)}
              </Typography>
              <Stack
                direction="row"
                flexWrap="wrap"
                sx={{ mt: 0.5, ml: -1 }}
                onClick={(e) => e.stopPropagation()}
              >
                <Button
                  size="small"
                  sx={{ color: "#f19e38" }}
                  onClick={() => setEditing(address)}
                >
                  Edit
                </Button>
                <Button
                  size="small"
                  color="error"
                  disabled={isSaving}
                  onClick={() => handleDelete(address)}
                >
                  Delete
                </Button>
                {!address.isDefault && (
                  <Button
                    size="small"
                    sx={{ color: "#555" }}
                    disabled={isSaving}
                    onClick={() => makeDefault(address.id)}
                  >
                    Set as default
                  </Button>
                )}
              </Stack>
            </Box>
          </Box>
        );
      })}
      {addresses.length < MAX_ADDRESSES ? (
        <Button
          sx={{ ...secondaryBtn, alignSelf: { xs: "stretch", sm: "flex-start" } }}
          variant="outlined"
          startIcon={<AddIcon />}
          onClick={() => setEditing(emptyAddress(userDetail))}
        >
          Add new address
        </Button>
      ) : (
        <Typography variant="body2" color="text.secondary">
          You can save up to {MAX_ADDRESSES} addresses. Remove one to add a new
          address.
        </Typography>
      )}
    </Stack>
  );
};

export default AddressManager;
