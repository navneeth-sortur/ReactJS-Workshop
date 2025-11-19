export type HabitFrequency = "daily" | "weekly" | "monthly";

export interface Habit {
  id: string;
  name: string;
  frequency: HabitFrequency;
  completed: boolean;
}

export interface HabitsState {
  list: Habit[];
}
