'use client'

import React, { useState } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

export default function AppointmentCalendar({ onDateChange }) {
  const [startDate, setStartDate] = useState(null);

  const handleChange = (date) => {
    setStartDate(date);
    onDateChange(date);
  };

  return (
    <DatePicker
      selected={startDate}
      onChange={handleChange}
      dateFormat="MMMM d, yyyy"
      placeholderText="Select a date"
      minDate={new Date()} // disables past dates
      className="border p-2 rounded"
    />
  );
}
