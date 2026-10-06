import {
  Box,
  Button,
  Dialog,
  Drawer,
  IconButton,
  Stack,
  Typography,
  useMediaQuery,
} from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";
import AddressManager from "./AddressManager";
import { primaryBtn } from "./styles";

// Choose the delivery address - bottom sheet in mobile, dialog in bigger screens
const AddressSheet = ({ open, onClose, selectedId, onSelect }) => {
  const isMobile = useMediaQuery("(max-width:600px)");

  const content = (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        maxHeight: isMobile ? "88vh" : "80vh",
      }}
    >
      <Stack
        direction="row"
        alignItems="center"
        justifyContent="space-between"
        sx={{ px: 2, py: 1.5, borderBottom: "1px solid #eee" }}
      >
        <Typography id="address-sheet-title" variant="h6" component="h2">
          Delivery Address
        </Typography>
        <IconButton aria-label="Close" onClick={onClose}>
          <CloseIcon />
        </IconButton>
      </Stack>
      <Box sx={{ p: 2, overflowY: "auto", flexGrow: 1 }}>
        <AddressManager
          selectable
          selectedId={selectedId}
          onSelect={onSelect}
        />
      </Box>
      <Box sx={{ p: 2, borderTop: "1px solid #eee" }}>
        <Button
          fullWidth
          sx={primaryBtn}
          variant="contained"
          disabled={!selectedId}
          onClick={onClose}
        >
          Deliver Here
        </Button>
      </Box>
    </Box>
  );

  return isMobile ? (
    <Drawer
      anchor="bottom"
      open={open}
      onClose={onClose}
      PaperProps={{
        "aria-labelledby": "address-sheet-title",
        sx: { borderTopLeftRadius: 16, borderTopRightRadius: 16 },
      }}
    >
      {content}
    </Drawer>
  ) : (
    <Dialog
      open={open}
      onClose={onClose}
      fullWidth
      maxWidth="sm"
      aria-labelledby="address-sheet-title"
    >
      {content}
    </Dialog>
  );
};

export default AddressSheet;
