import { useState } from "react";
import { List, Paper, Typography } from "@mui/material";
import { useAppSelector } from "../../app/hooks";
import HabitItem from "./HabitItem";
import { Habit } from "../../features/habits/types";
import EditHabitDialog from "./EditHabitDialog";

const HabitList: React.FC = () => {
  const habits = useAppSelector(state => state.habits.list);

  const [selectedHabit, setSelectedHabit] = useState<Habit | null>(null);

  return (
    <Paper elevation={3} sx={{ p: 2, maxWidth: 600, mx: "auto" }}>
      <Typography variant="h6" gutterBottom>
        Your Habits
      </Typography>

      {habits.length === 0 ? (
        <Typography color="text.secondary" sx={{ textAlign: "center", py: 3 }}>
          No habits added yet
        </Typography>
      ) : (
        <List>
          {habits.map(habit => (
            <HabitItem
              key={habit.id}
              habit={habit}
              onEdit={h => setSelectedHabit(h)}
            />
          ))}
        </List>
      )}

      <EditHabitDialog
        habit={selectedHabit}
        onClose={() => setSelectedHabit(null)}
      />
    </Paper>
  );
};

export default HabitList;
