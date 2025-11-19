import { Box, Typography } from "@mui/material";
import AddHabitForm from "../components/habits/AddHabitForm";
import HabitList from "../components/habits/HabitList";

const Home: React.FC = () => {
  return (
    <Box sx={{ p: 3 }}>
      <Typography variant="h4" gutterBottom align="center" sx={{ pb: 2 }}>
        ✅ Habit Tracker 🚀
      </Typography>
      <AddHabitForm />
      <HabitList />
    </Box>
  );
};

export default Home;
