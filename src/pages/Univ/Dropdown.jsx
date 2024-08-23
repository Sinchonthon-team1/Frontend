import React, { useState } from "react";

const SortDropdown = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedOption, setSelectedOption] = useState("정렬 기준 선택");

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  const handleOptionClick = (option) => {
    setSelectedOption(option);
    setIsOpen(false);
    // Add your sorting logic here based on the selected option
    console.log(`Selected option: ${option}`);
  };

  return (
    <div className="dropdown">
      <button className="dropbtn" onClick={toggleDropdown}>
        {selectedOption}
        <span className="arrow">&#9660;</span> {/* Unicode arrow character */}
      </button>
      {isOpen && (
        <div className="dropdown-content">
          <a href="#!" onClick={() => handleOptionClick("최근 리그 진행 순")}>
            최근 리그 진행 순
          </a>
          <a href="#!" onClick={() => handleOptionClick("리그 순위 순")}>
            리그 순위 순
          </a>
        </div>
      )}
      <style jsx>{`
        .dropdown {
          position: relative;
          display: inline-block;
          margin-right: 20px;
        }

        .dropbtn {
          color: black;
          cursor: pointer;
          width: 238px;
          height: 52px;
          border-radius: 8px;
          border: 1px solid #6b7276;
          background: #fafafb;
          display: flex;
          align-items: center;
          justify-content: space-between;
          padding: 0 16px;
          font-size: 16px;
          ${(props) => props.theme.fontStyles.subHead3Med};
        }

        .arrow {
          margin-left: 8px;
          font-size: 12px; /* Adjust size of the arrow */
        }

        .dropdown-content {
          display: block;
          position: absolute;
          background-color: #f9f9f9;
          min-width: 160px;
          box-shadow: 0px 8px 16px 0px rgba(0, 0, 0, 0.2);
          z-index: 1;
        }

        .dropdown-content a {
          color: black;
          padding: 12px 16px;
          text-decoration: none;
          display: block;
        }

        .dropdown-content a:hover {
          background-color: #f1f1f1;
        }
      `}</style>
    </div>
  );
};

export default SortDropdown;
