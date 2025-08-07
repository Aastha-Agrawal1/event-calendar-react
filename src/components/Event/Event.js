import React , {useState} from "react";
import "./Event.css";
import { useCalendar } from "../../context/CalendarContext";
import PageDetailsModal from "../PageDetailsModal";

const Event = ({ title, eventData }) => {
  const {  setDetailDialog, detailDialog } = useCalendar();
  const [selectedData, setSelectedData] = useState()

  const handleDetailPage = (data) => {
    setSelectedData(data)
    setDetailDialog(true)
  }

  return (
    <>
      <div className={"eventItem"} onClick={() => handleDetailPage(eventData)}>
        <span className={"eventIcon"}>📅</span>
        {title}
      </div>
{selectedData && 
      <PageDetailsModal
        data={selectedData}
        open={detailDialog}
        onClose={() => setDetailDialog(false)}
      />
}
    </>
  );
};

export default Event;
