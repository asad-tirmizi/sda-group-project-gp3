import { useState } from "react";
import { Link } from "react-router-dom";

import DailySettingForm from "./home/DailySettingForm";
import DayBox from "./home_page/DayBox";
import ActivityBox from "./home_page/ActivityBox";

// ========================================================================
// Teacher Home Page / Dashboard
export default function TeacherHomePage() {
  // const [previewChange, setPreviewChange] = useState(<Map />);

  const recentActivity =
    JSON.parse(window.localStorage.getItem("recent-activity")) || [];

  // const onClickPreview = (islandTheme) => {
  //   console.log("change island");
  //   setPreviewChange(<Map key={islandTheme} />);
  // };
  return (
    <div className="body-wrapper">
      <div className="container p-3 my-3">
        {/* <div>
        <LectureCalendar />
      </div> */}
        {/* This container forms the week's display
      The number props soecify the day relative to the current day */}
        <div className="week-container">
          <DayBox day="-1" />
          <DayBox day="0" />
          <DayBox day="1" />
          <DayBox day="2" />
          <DayBox day="3" />
          <DayBox day="4" />
          <DayBox day="5" />
        </div>
        <hr />
        <div className="bottom-container">
          {/* The following div forms the recent activity block on the page
        It needs an independent component to display the task details */}
          <div className="card">
            <div className="card-header">Recent Activity</div>
            {recentActivity
              .reverse()
              .slice(0, 5)
              .map((activity) => (
                <ActivityBox key={activity.unlockTime} activity={activity} />
              ))}
          </div>
          {/* This div only needs some finer CSS touch, otherwise it looks fine */}
          <div className="btn-container">
            <Link
              to="/create-lecture"
              className="btn btn-info btn-lg btn-block mb-5"
            >
              Create New Lecture
            </Link>
            <Link
              to="/create-assignment"
              className="btn btn-warning btn-lg btn-block mb-5"
            >
              Create New Assignment
            </Link>
            <div>
              {/* <Dropdown /> */}
              <DailySettingForm />
            </div>
          </div>
        </div>
        <div>{/* <div>{previewChange}</div> */}</div>
      </div>
    </div>
  );
}
