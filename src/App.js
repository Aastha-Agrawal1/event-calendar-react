import logo from "./logo.svg";
import "./App.css";
import Calendar from "./components/Calendar/Calendar";
import CalendarHeader from "./components/CalendarHeader/CalendarHeader";
import Controls from "./components/Controls/Controls";
import * as XLSX from "xlsx";
import { useCalendar } from "../src/context/CalendarContext";
import AddDialog from "./components/AddDialog";

function App() {
  const { events, setShowDialog, showDialog } = useCalendar();

 const handleExport = () => {
  const filteredData = events.map(event => ({
    "Date": event.date,
    "Student Name": event.student_name,
    "Class": event.class_name,
    "Age": event.age,
    "Meeting Link": event.mettingLink,
    "Attendance": event.Attendance,
  }));

  const ws = XLSX.utils.json_to_sheet(filteredData);
  const wb = XLSX.utils.book_new();
  XLSX.utils.book_append_sheet(wb, ws, "Meeting Data");

  XLSX.writeFile(wb, "StudentMeetings.xlsx");
};


  const handleAddDialog = () => {
    setShowDialog(true);
  };

  return (
    <div className="app-container">
      <div className="top-bar">
        <div className="top-right-controls">
          <button onClick={handleAddDialog}>Add</button>
          <button onClick={handleExport}>Excel export</button>
        </div>
      </div>
      <div className="calendar-controls-and-view">
        <Controls />
        <CalendarHeader />
      </div>
      <Calendar />
      <AddDialog open={showDialog} onClose={() => setShowDialog(false)} />
    </div>
  );
}

export default App;
