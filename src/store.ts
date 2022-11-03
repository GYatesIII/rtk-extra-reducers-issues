import { combineReducers, configureStore, createSlice } from "@reduxjs/toolkit";

interface SliceState {
  fakeProp: boolean;
}
const initialState: SliceState = {
  fakeProp: false,
};

const sliceWithExtraReducersAfterSlice = createSlice({
  name: "sliceWithExtraReducersAfter",
  initialState,
  reducers: {
    fakeReducer: (state) => {},
  },
  extraReducers: (builder) => {},
});

const sliceWithExtraReducersBeforeSlice = createSlice({
  name: "sliceWithExtraReducersBefore",
  initialState,
  extraReducers: (builder) => {},
  reducers: {
    fakeReducer: (state) => {},
  },
});

const sliceWithReducerNoStateAccessSlice = createSlice({
  name: "sliceWithReducerNoStateAccess",
  initialState,
  reducers: {
    fakeReducer: () => {},
  },
  extraReducers: (buidler) => {},
})

const sliceWithoutExtraReducersSlice = createSlice({
  name: "sliceWithoutExtraReducers",
  initialState,
  reducers: {
    fakeReducer: (state) => {},
  },
});

const rootReducer = combineReducers({
  sliceWithExtraReducersAfter: sliceWithExtraReducersAfterSlice.reducer,
  sliceWithExtraReducersBefore: sliceWithExtraReducersBeforeSlice.reducer,
  sliceWithReducerNoStateAccess: sliceWithReducerNoStateAccessSlice.reducer,
  sliceWithoutExtraReducers: sliceWithoutExtraReducersSlice.reducer,
});

const store = configureStore({
  reducer: rootReducer,
});

type RootState = ReturnType<typeof rootReducer>;
