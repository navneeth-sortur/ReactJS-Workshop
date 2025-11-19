import {
  Checkbox,
  IconButton,
  ListItem,
  ListItemText,
  Chip,
  Stack
} from "@mui/material";
import EditIcon from "@mui/icons-material/Edit";
import DeleteIcon from "@mui/icons-material/Delete";

import { Habit } from "../../features/habits/types";
import { useAppDispatch } from "../../app/hooks";
import {
  deleteHabit,
  toggleHabitCompleted
} from "../../features/habits/habitsSlice";

interface HabitItemProps {
  habit: Habit;
  onEdit: (habit: Habit) => void;
}

const HabitItem: React.FC<HabitItemProps> = ({ habit, onEdit }) => {
  const dispatch = useAppDispatch();

  return (
    <ListItem
      divider
      alignItems="center"
      secondaryAction={
        <Stack direction="row" spacing={1}>
          <IconButton edge="end" onClick={() => onEdit(habit)}>
            <EditIcon />
          </IconButton>
          <IconButton
            edge="end"
            onClick={() => dispatch(deleteHabit(habit.id))}
          >
            <DeleteIcon color="error" />
          </IconButton>
        </Stack>
      }
    >
      <Checkbox
        edge="start"
        checked={habit.completed}
        onChange={() => dispatch(toggleHabitCompleted(habit.id))}
      />

      <ListItemText
        primary={habit.name}
        secondary={
          <Chip
            label={habit.frequency.toUpperCase()}
            size="small"
            color="primary"
            sx={{ mt: 0.5 }}
          />
        }
        primaryTypographyProps={{
          component: "span"
        }}
        secondaryTypographyProps={{
          component: "span"
        }}
        sx={{
          textDecoration: habit.completed ? "line-through" : "none",
          opacity: habit.completed ? 0.6 : 1
        }}
      />
    </ListItem>
  );
};

export default HabitItem;
