import React from "react";
import "./GuidedMeditation.css"; // Import the CSS file for styling

export default function GuidedMeditation() {
  return (
    <div>
      <h1>Guided Meditation Sessions</h1>
      <div className="main-container">
        {/*main-header-container*/}
        <div className="main-header-container">
          <div className="tagline-wrapper">
            <div className="tagline">
              <span>Explore our</span>
            </div>
          </div>
          <div className="header-content">
            <div className="title">
              <span className="title-text">Guided Meditation Sessions</span>
            </div>
            <div className="sub-title">
              <span className="sub-title-text">
                Find your peace, one breath at a time.
              </span>
            </div>
          </div>
        </div>

        {/*main-videos-container*/}
        <div className="main-videos-container">
          {/* main card container  */}
          <div className="main-card-container">
            <div className="main-placeholder-lightbox"></div>
            <div className="main-lightbox-content">
              <div className="frame">
                <div className="frame-tag">
                  <div className="frame-tag-icon">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="16"
                      height="17"
                      viewBox="0 0 16 17"
                      fill="none"
                    >
                      <path
                        d="M2 4.50004V13.8334C2 14.187 2.14048 14.5261 2.39052 14.7762C2.64057 15.0262 2.97971 15.1667 3.33333 15.1667H12.6667C13.0203 15.1667 13.3594 15.0262 13.6095 14.7762C13.8595 14.5261 14 14.187 14 13.8334V4.50004C14 4.14642 13.8595 3.80728 13.6095 3.55723C13.3594 3.30718 13.0203 3.16671 12.6667 3.16671H11.3333V1.83337H10V3.16671H6V1.83337H4.66667V3.16671H3.33333C2.97971 3.16671 2.64057 3.30718 2.39052 3.55723C2.14048 3.80728 2 4.14642 2 4.50004ZM12.6667 13.8334H3.33333V5.83337H12.6667V13.8334Z"
                        fill="black"
                      />
                    </svg>
                  </div>
                  <div className="frame-tag-icon-date">
                    <span className="frame-tag-icon-date-text">
                      Sat 10 Feb 2024
                    </span>
                  </div>
                </div>
              </div>
              <div className="play-button-small">
                <div className="vector">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="64"
                    height="65"
                    viewBox="0 0 64 65"
                    fill="none"
                  >
                    <path
                      fill-rule="evenodd"
                      clip-rule="evenodd"
                      d="M5.33301 32.1924C5.33301 17.4648 17.2721 5.52576 31.9997 5.52576C39.0721 5.52576 45.8549 8.33528 50.8559 13.3362C55.8568 18.3372 58.6663 25.12 58.6663 32.1924C58.6663 46.92 46.7273 58.8591 31.9997 58.8591C17.2721 58.8591 5.33301 46.92 5.33301 32.1924ZM27.1198 43.6058L42.6664 33.8991C43.2482 33.5265 43.6001 32.8833 43.6001 32.1924C43.6001 31.5016 43.2482 30.8583 42.6664 30.4858L27.0664 20.7791C26.452 20.3917 25.6758 20.3679 25.0388 20.7168C24.4018 21.0658 24.004 21.7327 23.9998 22.4591V41.9258C23.9912 42.6698 24.3963 43.3571 25.0514 43.7098C25.7065 44.0626 26.5033 44.0225 27.1198 43.6058Z"
                      fill="white"
                    />
                  </svg>
                </div>
              </div>
              <div className="play-button-large">
                <div className="vector">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="202"
                    height="162"
                    viewBox="0 0 202 162"
                    fill="none"
                  >
                    <path
                      fill-rule="evenodd"
                      clip-rule="evenodd"
                      d="M20.9998 1.19214H181C192.046 1.19214 201 10.1461 201 21.1921V141.192C201 152.238 192.046 161.191 181 161.191H20.9998C9.95376 161.191 0.999756 152.238 0.999756 141.192V21.1921C0.999756 10.1461 9.95376 1.19214 20.9998 1.19214ZM92.6998 113.392L131.6 87.3918C133.696 86.0258 134.96 83.6938 134.96 81.1918C134.96 78.6898 133.696 76.3578 131.6 74.9918L92.6998 48.9919C90.4028 47.4399 87.4378 47.2809 84.9878 48.5789C82.5388 49.8769 81.0048 52.4199 80.9998 55.1919V107.192C81.0048 109.964 82.5388 112.507 84.9878 113.805C87.4378 115.103 90.4028 114.944 92.6998 113.392Z"
                      fill="black"
                      fill-opacity="0.15"
                    />
                  </svg>
                </div>
              </div>
            </div>
          </div>

          {/* sub cards container  */}
          <div className="sub-cards-container"></div>
        </div>
      </div>
    </div>
  );
}
