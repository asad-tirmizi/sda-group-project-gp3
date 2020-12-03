import { useState, useEffect } from 'react';
import AssignmentApi from '../../../../api/AssignmentApi';

import LockIcon from "../../../icons/map-icon";
import SpaceHolder from "../../../../assets/img/components/student/home/islands/island-spaceholder.gif";
import "../../../../css/student/islands/island-green.css";

export default function Island() {

    const [ assignments, setAssignments ] = useState([{
        id: 1, release_date: new Date()
    }]); // Default assignment, avoid erros if time lag
    const fakesDates = [ // Waiting for release_dates coming directly with assignment
          new Date(2020, 10, 29, 12, 30, 45),
          new Date(2020, 10, 29, 12, 30, 45),
          new Date(2020, 10, 29, 12, 30, 45),
          new Date(2020, 11, 29, 12, 30, 45),
          new Date(2020, 12, 1, 12, 30, 45),
          new Date(2020, 12, 1, 12, 30, 45),
      ]; // No more than 6 assignment for tests

    useEffect(() => {
        AssignmentApi.getAllAssignments()
            .then((res) => {
                const assignmentsPlusDate = [...res.data];
                for (let i = 0; i < assignmentsPlusDate.length; i += 1) {
                    assignmentsPlusDate[i].release_date = fakesDates[i];
                }
                setAssignments(assignmentsPlusDate);
            })
    }, [])

  return (
    <div className="student-home-map-island">
      <div className="student-home-map-island-spaceholder">
        <img src={SpaceHolder} alt="island" />
      </div>

      {assignments.map((assignment, index) => {
        const className = "island-icon-position island-lock-" + index;
        const linkUrl = "/student/assignments/" + assignment.id;

        return (
          <div className={className}>
            <LockIcon
              key={index}
              linkUrl={linkUrl}
              type={
                assignment.release_date.getTime() < new Date().getTime()
                  ? "unlock"
                  : "lock"
              }
            />
          </div>
        );
      })}
    </div>
  );
}
