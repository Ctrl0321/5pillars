import React, { useState, useEffect } from "react";
import Navbar from "./Navbar";
import { IoIosArrowDown } from "react-icons/io";
import { IoIosArrowUp } from "react-icons/io";
import Footer from "./Footer";
import "../Css/IslamicStudiesEnrol.css";
import { MdStars } from "react-icons/md";
import Loader from "./Loader";

const IslamicStudiesEnrol = () => {
  const [isDropdownVisible, setDropdownVisible] = useState(false);
  const [isLoading, setIsLoading] = useState(true);

  const toggleDropdown = () => {
    setDropdownVisible(!isDropdownVisible);
  };
  useEffect(() => {
    setTimeout(() => {
      setIsLoading(false);
    }, 3000);
  }, []);

  return (
    <>
      {isLoading ? (
        <Loader />
      ) : (
        <>
          {" "}
          <div className="background" />
          <div className="">
            <Navbar />
          </div>
          <div className="blank"></div>
          <div className="islamic-studies">
            <div className="islamic-studies-package">
              <div className="islamic-studies-package-def">
                <h3>ISLAMIC STUDIES</h3>
                <h1>
                  £5/<span>Session</span>
                </h1>
                <p>Billed Monthly</p>
                <div className="islamic-studies-package-button ">
                  <button className="btn-enrol">
                    <span className="cir-btn">
                      <span className="arrow-btn"></span>
                    </span>
                    <span className="text-btn">Coming soon</span>
                  </button>
                </div>
                <h2 className="dropdown-btn" onClick={toggleDropdown}>
                  {isDropdownVisible ? (
                    <IoIosArrowUp size={40} />
                  ) : (
                    <IoIosArrowDown size={40} />
                  )}
                </h2>
              </div>
              {isDropdownVisible && (
                <div className="dropdown-content">
                  <h2> Two sessions per week</h2>
                  <h2>45 min sessions</h2>
                  <h2>Set syllabus</h2>
                  <h2> Highly qualified sholars from the UK</h2>
                </div>
              )}
            </div>
          </div>
          <Footer />
        </>
      )}
    </>
  );
};
export default IslamicStudiesEnrol;
