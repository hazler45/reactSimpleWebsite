import React from "react";
import StudentFormComponent from "../../components/studentForm/studentFrom";
import Header from "../../components/Header/Header";
function StudentForm(props) {
  return (
    <>
      <Header />
      <div style={{ maxWidth: 700, margin: "auto" }}>
        <StudentFormComponent />
      </div>
    </>
  );
}

export default StudentForm;
