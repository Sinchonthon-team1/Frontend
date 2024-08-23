import React, { useState, useRef } from "react";
import Calendar from "react-calendar";
import "react-calendar/dist/Calendar.css";
import moment from "moment";
import "moment/locale/ko"; // 한국어 로케일 설정
import "../Calendar/Calendar.css";

const HomeCalendar = () => {
  const [selectedDate, setSelectedDate] = useState(null); // 선택된 날짜 상태

  const [hours, setHours] = useState("00"); // 사용자가 설정한 시간 (시)
  const [minutes, setMinutes] = useState("00"); // 사용자가 설정한 시간 (분)
  const selectedDateRef = useRef(null); // 스크롤 이동을 위한 참조
  const today = new Date(); // 오늘 날짜

  // 날짜 선택 시 호출되는 함수
  const handleDateChange = (date) => {
    setSelectedDate(date);

    // 선택된 날짜 정보로 스크롤 이동
    setTimeout(() => {
      selectedDateRef.current?.scrollIntoView({ behavior: "smooth" });
    }, 100);
  };

  // 사용자가 시간을 설정했을 때 호출되는 함수
  const handleTimeChange = (event) => {
    const { name, value } = event.target;
    if (name === "hours") {
      setHours(value.padStart(2, "0")); // 두 자리로 맞춤
    } else if (name === "minutes") {
      setMinutes(value.padStart(2, "0")); // 두 자리로 맞춤
    }
  };

  return (
    <div className="CalendarContainer">
      <div className="CalendarWrapper">
        <Calendar
          value={selectedDate}
          onChange={handleDateChange}
          formatDay={(locale, date) => moment(date).format("D")}
          formatMonthYear={(locale, date) => moment(date).format("YYYY. MM")}
          calendarType="gregory"
          next2Label={null}
          prev2Label={null}
          minDetail="month"
          locale="ko-KR" // 한국어 로케일 설정
          tileContent={({ date, view }) =>
            view === "month" && moment(date).isSame(today, "day") ? (
              <div className="today">오늘</div>
            ) : null
          }
        />
      </div>

      <div className="SelectedDateWrapper" ref={selectedDateRef}>
        <div className="DateSection">
          <div className="DateElement">
            <span className="SelectedDateLabel">MONTH</span>
            <div className="SelectedDateBox">
              {selectedDate
                ? moment(selectedDate)
                    .format("MM")
                    .split("")
                    .map((digit, index) => (
                      <div key={index} className="DateBox">
                        {digit}
                      </div>
                    ))
                : ["0", "0"].map((digit, index) => (
                    <div key={index} className="DateBox">
                      {digit}
                    </div>
                  ))}
              월
            </div>
          </div>
          <div className="DateElement">
            <span className="SelectedDateLabel">DAY</span>
            <div className="SelectedDateBox">
              {selectedDate
                ? moment(selectedDate)
                    .format("DD")
                    .split("")
                    .map((digit, index) => (
                      <div key={index} className="DateBox">
                        {digit}
                      </div>
                    ))
                : ["0", "0"].map((digit, index) => (
                    <div key={index} className="DateBox">
                      {digit}
                    </div>
                  ))}
              일
            </div>
          </div>
        </div>
        <div className="TimeSection">
          <div className="TimeElement">
            <span className="SelectedDateLabel">HOURS</span>
            <input
              type="number"
              name="hours"
              value={hours}
              onChange={handleTimeChange}
              className="TimeInput"
              min="00"
              max="23"
            />
          </div>
          <span className="dash">:</span>
          <div className="TimeElement">
            <span className="SelectedDateLabel">MINUTES</span>
            <input
              type="number"
              name="minutes"
              value={minutes}
              onChange={handleTimeChange}
              className="TimeInput"
              min="00"
              max="59"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomeCalendar;
