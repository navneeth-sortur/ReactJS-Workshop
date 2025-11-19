import { useState } from "react";
import {
  Box,
  Button,
  MenuItem,
  Paper,
  Select,
  SelectChangeEvent,
  TextField,
  Typography,
  FormControl,
  InputLabel
} from "@mui/material";
import { useAppDispatch } from "../../app/hooks";
import { addHabit } from "../../features/habits/habitsSlice";
import { HabitFrequency } from "../../features/habits/types";

const AddHabitForm: React.FC = () => {
  const dispatch = useAppDispatch();

  const [name, setName] = useState("");
  const [frequency, setFrequency] = useState<HabitFrequency>("daily");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    if (!name.trim()) return;

    dispatch(addHabit({ name: name.trim(), frequency }));

    setName("");
    setFrequency("daily");
  };

  return (
    <Paper
      elevation={3}
      sx={{
        p: 3,
        mb: 4,
        maxWidth: 500,
        mx: "auto"
      }}
    >
      <Typography variant="h6" gutterBottom>
        Add New Habit
      </Typography>

      <Box component="form" onSubmit={handleSubmit} noValidate>
        <TextField
          fullWidth
          label="Habit name"
          value={name}
          onChange={e => setName(e.target.value)}
          sx={{ mb: 2 }}
        />

        <FormControl fullWidth sx={{ mb: 2 }}>
          <InputLabel>Frequency</InputLabel>
          <Select
            label="Frequency"
            value={frequency}
            onChange={(e: SelectChangeEvent) =>
              setFrequency(e.target.value as HabitFrequency)
            }
          >
            <MenuItem value="daily">Daily</MenuItem>
            <MenuItem value="weekly">Weekly</MenuItem>
            <MenuItem value="monthly">Monthly</MenuItem>
          </Select>
        </FormControl>

        <Button variant="contained" color="primary" fullWidth type="submit">
          Add Habit
        </Button>
      </Box>
    </Paper>
  );
};

export default AddHabitForm;
