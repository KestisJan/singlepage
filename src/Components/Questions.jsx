import React, { useEffect, useState, useRef } from 'react'
import { FiPlus } from "react-icons/fi";
import './questions.css';



function Questions() {

    const [active, setActive] = useState(false);

    const contentRef = useRef(null);

  useEffect(() => {
    contentRef.current.style.maxHeight = active
      ? `${contentRef.current.scrollHeight}px`
      : "0px";
  }, [contentRef, active]);

  const toggleAccordion = () => {
    setActive(!active);
  };

  return (
    <>
      <div className="App">
        <div>
          <button
            className={`question-section ${active}`}
            onClick={toggleAccordion}
          >
            <div>
              <div className="question-align">
                <h4 className="question-style">
                  Can you change subscription plan?
                </h4>
                <FiPlus
                  className={active ? `question-icon rotate` : `question-icon`}
                />
              </div>
              <div
                ref={contentRef}
                className={active ? `answer answer-divider` : `answer`}
              >
                <p>Yes you can!</p>
              </div>
            </div>
          </button>
        </div>
      </div>  
    </>
  )
}

export default Questions

