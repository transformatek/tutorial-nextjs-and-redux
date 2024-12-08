import { createAsyncThunk } from "@reduxjs/toolkit";

export const postContact = createAsyncThunk(
    "contact/postNew",
    async () => {
     return "Message sent with successfully"
     
    }
  );