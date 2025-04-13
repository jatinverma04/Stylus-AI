import React, { useContext } from "react";
import "./MainBody.css";
import { assets } from "../../assets/assets";
import { Context } from "../../context/Context";

const MainBody = () => {
  const {
    onSent,
    input,
    setInput,
    prevPrompts,
    setPrevPrompts,
    recentPrompt,
    setRecentPrompt,
    showResult,
    setShowResult,
    loading,
    setLoading,
    resultData,
    setResultData,
  } = useContext(Context);

  return (
    <div className="main">
      <div className="nav">
        <div>Sylus AI</div>
        <img src={assets.user_icon} alt="User Icon" />
      </div>
      <div className="mainContainer">
        {!showResult ? (
          <>
            <div className="greet">
              <div>
                <div className="span">Hello There</div>
              </div>
              <div>How can I help you today?</div>
            </div>
            <div className="cards">
              <div className="card">
                <div className="cardParagraph">
                  Suggest beautiful places to see on an upcoming road trip
                </div>
                <img src={assets.compass_icon} alt="Compass Icon" />
              </div>
              <div className="card">
                <div className="cardParagraph">
                  Briefly summarize this concept: urban planning
                </div>
                <img src={assets.bulb_icon} alt="Bulb Icon" />
              </div>
              <div className="card">
                <div className="cardParagraph">
                  Brainstorm team bonding activities for our work retreat
                </div>
                <img src={assets.message_icon} alt="Message Icon" />
              </div>
              <div className="card">
                <div className="cardParagraph">
                  Tell me about ReactJS and React Native
                </div>
                <img src={assets.code_icon} alt="Code Icon" />
              </div>
            </div>
          </>
        ) : (
          <div className="result">
            <div className="resultTitle">
              <img src={assets.user_icon} alt="User Icon" />
              <div>{recentPrompt}</div>
            </div>
            <div className="resultData">
              <img src={assets.gemini_icon} alt="Sylus AI" />
              {loading 
              ? 
              <div className="loader">
                <hr />
                <hr />
                <hr />
              </div>
              :
              <p dangerouslySetInnerHTML={{ __html: resultData }}></p>
              }
            </div>
          </div>
        )}

        <div className="mainBottom">
          <div className="searchBox">
            <input
              onChange={(e) => setInput(e.target.value)}
              value={input}
              type="text"
              placeholder="Enter a promt here ..."
            />
            <div>
              {/* <img src={assets.gallery_icon} alt="Gallery Icon" />
              <img src={assets.mic_icon} alt="Mic Icon" /> */}
              <img
                onClick={() => onSent()}
                src={assets.send_icon}
                alt="Send Icon"
              />
            </div>
          </div>
          <div className="bottomInfo">
            Sylus AI may display inaccurate info, including about people, so
            double-check its responses.
          </div>
        </div>
      </div>
    </div>
  );
};

export default MainBody;
