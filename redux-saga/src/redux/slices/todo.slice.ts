import { createSelector, createSlice, PayloadAction } from "@reduxjs/toolkit";

interface note {
  id: string;
  title: string;
}

interface todoInterFace {
  notes: Record<string, note>;
  loading: boolean;
  error: string;
}

const initialState: todoInterFace = {
  notes: {
    v: {
      title: "dsad",
      id: "v",
    },
  },
  loading: false,
  error: "",
};

export const todoSlice = createSlice({
  name: "Todo",
  initialState,
  reducers: {
    addItemTodo: (state, action: PayloadAction<{ title: string }>) => {
      const id = crypto.randomUUID();
      state.notes[id] = {
        id,
        title: action.payload.title,
      };
    },
    clear: (state) => {
      state.notes = {};
    },
  },
  selectors: {
    selectNotes: (state) => state.notes,
    selectLoading: (state) => state.loading,
    selectError: (state) => state.error,
  },
});

export const makeSelectNoteById = (id: number) =>
  createSelector([selectNotes], (notes) => notes[id]);

export const { addItemTodo, clear } = todoSlice.actions;
export const { selectError, selectLoading, selectNotes } = todoSlice.selectors;
