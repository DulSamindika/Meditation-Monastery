import React from "react";
import "./EventsSection.css"; // Assuming you have a CSS file for styling

export default function EventsSection() {
  return (
    <>
      <div className="events-section">
        <div className="heading-part">
          <div className="heading-title">
            <div className="tagline-wrapper">
              <span className="tagline-text">Explore</span>
            </div>
            <div className="heading-content">
              <div className="main-heading">
                <span className="main-heading-text">Upcoming Events</span>
              </div>
              <span className="main-heading-desc">
                Discover tranquility with our upcoming meditation events,
              </span>
            </div>
          </div>
          <div className="heading-action">
            <button className="heading-action-btn">
              <span className="heading-action-btn-text">view all</span>
            </button>
          </div>
        </div>

        <div className="main-container">
          <div className="row">
            <div className="card">
              <div className="image">
                <img className="placeholder-image" alt="img" />

                <div className="date">
                  <div className="day">
                    <span>Friday</span>
                  </div>
                  <div className="day-num">
                    <span>09</span>
                  </div>
                  <div className="year">
                    <span>Feb 2024</span>
                  </div>
                </div>
              </div>

              <div className="content-box">
                <div className="content">
                  <div className="event-details">
                    <div className="tag">
                      <span className="text">category</span>
                    </div>
                  </div>

                  <div className="main-box">
                    <div className="title">
                      <div className="heading">
                        <span>Event title heading</span>
                      </div>
                      <div className="location">
                        <span>Location</span>
                      </div>
                    </div>

                    <div className="desc">
                      <span>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                        Suspendisse varius enim in eros.
                      </span>
                    </div>
                  </div>
                </div>

                <div className="action">
                  <button className="btn">view event</button>
                </div>
              </div>
            </div>

            {/*another card */}
            <div className="card">
              <div className="image">
                <img className="placeholder-image" alt="img" />

                <div className="date">
                  <div className="day">
                    <span>Friday</span>
                  </div>
                  <div className="day-num">
                    <span>09</span>
                  </div>
                  <div className="year">
                    <span>Feb 2024</span>
                  </div>
                </div>
              </div>

              <div className="content-box">
                <div className="content">
                  <div className="event-details">
                    <div className="tag">
                      <span className="text">category</span>
                    </div>
                  </div>

                  <div className="main-box">
                    <div className="title">
                      <div className="heading">
                        <span>Event title heading</span>
                      </div>
                      <div className="location">
                        <span>Location</span>
                      </div>
                    </div>

                    <div className="desc">
                      <span>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                        Suspendisse varius enim in eros.
                      </span>
                    </div>
                  </div>
                </div>

                <div className="action">
                  <button className="btn">view event</button>
                </div>
              </div>
            </div>

            {/*another card */}
            <div className="card">
              <div className="image">
                <img className="placeholder-image" alt="img" />

                <div className="date">
                  <div className="day">
                    <span>Friday</span>
                  </div>
                  <div className="day-num">
                    <span>09</span>
                  </div>
                  <div className="year">
                    <span>Feb 2024</span>
                  </div>
                </div>
              </div>

              <div className="content-box">
                <div className="content">
                  <div className="event-details">
                    <div className="tag">
                      <span className="text">category</span>
                    </div>
                  </div>

                  <div className="main-box">
                    <div className="title">
                      <div className="heading">
                        <span>Event title heading</span>
                      </div>
                      <div className="location">
                        <span>Location</span>
                      </div>
                    </div>

                    <div className="desc">
                      <span>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                        Suspendisse varius enim in eros.
                      </span>
                    </div>
                  </div>
                </div>

                <div className="action">
                  <button className="btn">view event</button>
                </div>
              </div>
            </div>

            {/*another card */}
            <div className="card">
              <div className="image">
                <img className="placeholder-image" alt="img" />

                <div className="date">
                  <div className="day">
                    <span>Friday</span>
                  </div>
                  <div className="day-num">
                    <span>09</span>
                  </div>
                  <div className="year">
                    <span>Feb 2024</span>
                  </div>
                </div>
              </div>

              <div className="content-box">
                <div className="content">
                  <div className="event-details">
                    <div className="tag">
                      <span className="text">category</span>
                    </div>
                  </div>

                  <div className="main-box">
                    <div className="title">
                      <div className="heading">
                        <span>Event title heading</span>
                      </div>
                      <div className="location">
                        <span>Location</span>
                      </div>
                    </div>

                    <div className="desc">
                      <span>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                        Suspendisse varius enim in eros.
                      </span>
                    </div>
                  </div>
                </div>

                <div className="action">
                  <button className="btn">view event</button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
