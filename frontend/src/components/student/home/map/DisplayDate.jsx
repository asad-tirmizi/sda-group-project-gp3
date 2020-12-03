import moment from "moment";

export default function DisplayDate() {
  return (
    <div className="student-home-map-date-wrapper">
      <div className="student-home-map-date-text">
        <h5>{moment().format("MM/DD")} Exercise</h5>
      </div>
    </div>
  );
}
