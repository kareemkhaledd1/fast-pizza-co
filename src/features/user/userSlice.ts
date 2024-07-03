import { getAddress } from '../../services/apiGeocoding';
import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { Position, UserinitialState, userState } from '../../utils/types';

function getPosition() {
  return new Promise(function (resolve, reject) {
    navigator.geolocation.getCurrentPosition(resolve, reject);
  });
}

export const fetchAddress: any = createAsyncThunk(
  'user/fetchAddress',
  async () => {
    // 1) We get the user's geolocation position
    const positionObj = await getPosition();
    const position: Position = {
      latitude: (positionObj as GeolocationPosition).coords.latitude,
      longitude: (positionObj as GeolocationPosition).coords.longitude,
    };

    // 2) Then we use a reverse geocoding API to get a description of the user's address, so we can display it the order form, so that the user can correct it if wrong
    const addressObj = await getAddress(position);
    const address = `${addressObj?.locality}, ${addressObj?.city} ${addressObj?.postcode}, ${addressObj?.countryName}`;

    // 3) Then we return an object with the data that we are interested in
    return { position, address };
  },
);

const initialState: UserinitialState = {
  username: '',
  status: 'idle',
  position: {},
  address: '',
  error: '',
};

const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    updateName(state, action) {
      state.username = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchAddress.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(fetchAddress.fulfilled, (state, action) => {
        state.status = 'idle';
        state.position = action.payload.position;
        state.address = action.payload.address;
      })
      .addCase(fetchAddress.rejected, (state) => {
        state.status = 'failed';
        state.error =
          'there was an problem getting your address address. Make sure to fill this field manually';
      });
  },
});

export const { updateName } = userSlice.actions;

export const getUsername = (state: userState) => state.user.username;

export default userSlice.reducer;
