import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { Habit, HabitsState, HabitFrequency } from "./types";

const initialState: HabitsState = {
  list: []
};

interface AddHabitPayload {
  name: string;
  frequency: HabitFrequency;
}

interface EditHabitPayload {
  id: string;
  name: string;
  frequency: HabitFrequency;
}

const habitsSlice = createSlice({
  name: "habits",
  initialState,
  reducers: {
    addHabit: (state, action: PayloadAction<AddHabitPayload>) => {
      const { name, frequency } = action.payload;
      const newHabit: Habit = {
        id: crypto.randomUUID(),
        name,
        frequency,
        completed: false
      };
      state.list.push(newHabit);
    },

    editHabit: (state, action: PayloadAction<EditHabitPayload>) => {
      const { id, name, frequency } = action.payload;
      const habit = state.list.find(h => h.id === id);
      if (habit) {
        habit.name = name;
        habit.frequency = frequency;
      }
    },

    deleteHabit: (state, action: PayloadAction<string>) => {
      state.list = state.list.filter(h => h.id !== action.payload);
    },

    toggleHabitCompleted: (state, action: PayloadAction<string>) => {
      const habit = state.list.find(h => h.id === action.payload);
      if (habit) {
        habit.completed = !habit.completed;
      }
    }
  }
});

export const { addHabit, editHabit, deleteHabit, toggleHabitCompleted } =
  habitsSlice.actions;

export default habitsSlice.reducer;
