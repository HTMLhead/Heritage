import React from "react";
// css-in-js
import { Snackbar } from "@material-ui/core";

function SnackbarContentWrapper({ open, onClose }) {
  return (
    <Snackbar
      anchorOrigin={{ vertical: "top", horizontal: "right" }}
      open={open}
      onClose={onClose}
      message={<span id="message-id">에러 : 빈 공간은 존재해선 안됩니다.</span>}
    />
  );
}

export default SnackbarContentWrapper;
