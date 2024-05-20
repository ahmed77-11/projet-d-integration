// src/Calendar.jsx
import { useState, useEffect } from "react";
import PropTypes from "prop-types";
import {
  startOfMonth,
  endOfMonth,
  eachDayOfInterval,
  format,
  isWithinInterval,
  parseISO,
  startOfWeek,
  endOfWeek,
  addMonths,
  subMonths,
} from "date-fns";
import "../../assets/Calender.css";

const Calendar = ({ reservations }) => {
  const [currentMonth, setCurrentMonth] = useState(new Date());

  // Log reservations prop to debug the issue
  useEffect(() => {
    console.log("Reservations prop:", reservations);
  }, [reservations]);

  // Ensure reservations is an array
  if (!Array.isArray(reservations)) {
    console.error("Reservations is not an array:", reservations);
    reservations = [];
  }

  // Function to check if a day is within any reservation
  const getReservationStatus = (day) => {
    const reservation = reservations.find((reservation) =>
      isWithinInterval(day, {
        start: parseISO(reservation.startDate),
        end: parseISO(reservation.endDate),
      })
    );
    return reservation ? reservation.status : null;
  };

  const monthStart = startOfMonth(currentMonth);
  const monthEnd = endOfMonth(currentMonth);
  const startDate = startOfWeek(monthStart, { weekStartsOn: 1 });
  const endDate = endOfWeek(monthEnd, { weekStartsOn: 1 });

  const days = eachDayOfInterval({ start: startDate, end: endDate });

  const handlePrevMonth = () => {
    setCurrentMonth(subMonths(currentMonth, 1));
  };

  const handleNextMonth = () => {
    setCurrentMonth(addMonths(currentMonth, 1));
  };

  return (
    <div className="calendar-container">
      <div className="calendar-header flex justify-between items-center mb-4">
        <button onClick={handlePrevMonth} className="bg-gray-300 p-2 rounded">
          Prev
        </button>
        <h2 className="text-xl font-bold">
          {format(currentMonth, "MMMM yyyy")}
        </h2>
        <button onClick={handleNextMonth} className="bg-gray-300 p-2 rounded">
          Next
        </button>
      </div>
      <div className="calendar grid grid-cols-7 gap-1">
        {["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"].map((day) => (
          <div key={day} className="calendar-day-name font-bold">
            {day}
          </div>
        ))}
        {days.map((day) => {
          const formattedDay = format(day, "yyyy-MM-dd");
          const reservationStatus = getReservationStatus(day);
          const isCurrentMonth = day.getMonth() === currentMonth.getMonth();

          let dayClass = "bg-gray-200";
          if (reservationStatus === "accepted") {
            dayClass = "bg-green-500 text-white";
          } else if (reservationStatus === "pending") {
            dayClass = "bg-yellow-500 text-white";
          }

          return (
            <div
              key={formattedDay}
              className={`calendar-day p-2 text-center ${dayClass} ${
                isCurrentMonth ? "" : "text-gray-400"
              }`}
            >
              {format(day, "d")}
            </div>
          );
        })}
      </div>
    </div>
  );
};

Calendar.propTypes = {
  reservations: PropTypes.arrayOf(
    PropTypes.shape({
      startDate: PropTypes.string.isRequired,
      endDate: PropTypes.string.isRequired,
      status: PropTypes.string.isRequired,
    })
  ),
};

Calendar.defaultProps = {
  reservations: [],
};

export default Calendar;
