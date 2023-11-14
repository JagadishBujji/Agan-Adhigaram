import { Stack } from "@mui/material";

const Loading = () => {
  return (
    <>
      <Stack direction="row" justifyContent="center" alignItems="center">
        <dotlottie-player
          src="https://lottie.host/b938ecbd-7528-4cf0-aa01-a4739e0af71d/QeOaEiqgsw.json"
          background="transparent"
          speed="1"
          style={{
            width: "500px",
            height: "500px",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            textAlign: "center",
            "@media (max-width: 768px)": {
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              textAlign: "center",
            },
          }}
          loop
          autoplay
        ></dotlottie-player>
      </Stack>
    </>
  );
};

export default Loading;
