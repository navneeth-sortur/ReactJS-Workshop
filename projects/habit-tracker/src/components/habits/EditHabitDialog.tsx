import { useEffect, useState } from "react";
import {
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
  Button,
  TextField,
  Select,
  MenuItem,
  FormControl,
  InputLabel,
  Box
} from "@mui/material";

import { Habit, HabitFrequency } from "../../features/habits/types";
import { useAppDispatch } from "../../app/hooks";
import { editHabit } from "../../features/habits/habitsSlice";

interface EditHabitDialogProps {
  habit: Habit | null;
  onClose: () => void;
}

const EditHabitDialog: React.FC<EditHabitDialogProps> = ({
  habit,
  onClose
}) => {
  const dispatch = useAppDispatch();

  const [name, setName] = useState("");
  const [frequency, setFrequency] = useState<HabitFrequency>("daily");

  useEffect(() => {
    if (habit) {
      setName(habit.name);
      setFrequency(habit.frequency);
    }
  }, [habit]);

  if (!habit) return null;

  const handleSave = () => {
    if (!name.trim()) return;

    dispatch(
      editHabit({
        id: habit.id,
        name: name.trim(),
        frequency
      })
    );

    onClose();
  };

  return (
    <Dialog open={!!habit} onClose={onClose} fullWidth maxWidth="xs">
      <DialogTitle>Edit Habit</DialogTitle>

      <DialogContent>
        <Box sx={{ mt: 1 }}>
          <TextField
            fullWidth
            label="Habit name"
            value={name}
            onChange={e => setName(e.target.value)}
            sx={{ mb: 2 }}
          />

          <FormControl fullWidth>
            <InputLabel>Frequency</InputLabel>
            <Select
              value={frequency}
              label="Frequency"
              onChange={e => setFrequency(e.target.value as HabitFrequency)}
            >
              <MenuItem value="daily">Daily</MenuItem>
              <MenuItem value="weekly">Weekly</MenuItem>
              <MenuItem value="monthly">Monthly</MenuItem>
            </Select>
          </FormControl>
        </Box>
      </DialogContent>

      <DialogActions sx={{ px: 3, pb: 2 }}>
        <Button onClick={onClose} color="inherit">
          Cancel
        </Button>

        <Button onClick={handleSave} variant="contained">
          Save
        </Button>
      </DialogActions>
    </Dialog>
  );
};

export default EditHabitDialog;
