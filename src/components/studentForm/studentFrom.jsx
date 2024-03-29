import React from "react";
import styles from "./studentFrom.module.css";
import createUser from "../../apis/users";
import { Snackbar } from "@mui/material";
import { Alert, Button, CircularProgress } from "@mui/material";

function StudentFormComponent(props) {
  const [student, setStudent] = React.useState({
    name: "",
    email: "",
  });
  const [showSnackbar, setShowSnackbar] = React.useState(false);
  const [adding, setAdding] = React.useState(false);
  const [snackSeverity, setSnackSeverity] = React.useState("success");
  const [snackMsg, setSnackMsg] = React.useState("");

  const handleSubmit = () => {
    createUser(student)
      .then((res) => {
        setAdding(true);
        setShowSnackbar(true);
        setSnackMsg("user added successfully");
      })
      .catch((err) => {
        setShowSnackbar(true);
        setSnackSeverity("error");
        setSnackMsg("Failed to  add user!");
      });
  };
  return (
    <>
      <div className={styles.wrapper}>
        <div>
          <h2>Contact Us</h2>
          <span style={{ fontSize: "14px" }}>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit.
            Repellendus laboriosam ipsum nisi minima aut id enim sapiente quasi
            magnam voluptate asperiores, neque fugiat deleniti.
          </span>
        </div>

        <div className={styles.contactFrom}>
          <form
            onSubmit={(e) => {
              e.preventDefault();
              handleSubmit();
            }}
            style={{ display: "grid", gap: "2rem" }}
          >
            <div style={{ display: "grid" }}>
              <label htmlFor="">Name</label>
              {/* <input
                onChange={(e) => {
                  student.name = e.target.value;
                  setStudent({ ...student });
                }}
                required
                value={student.name}
                placeholder={"Name"}
              /> */}
              <input
                onChange={(e) => {
                  const updatedStudent = { ...student, name: e.target.value };
                  setStudent(updatedStudent);
                }}
                required
                value={student.name}
                placeholder={"Name"}
              />
            </div>

            <div style={{ display: "grid" }}>
              <label>Email</label>
              {/* <input
                onChange={(e) => {
                  student.email = e.target.value;
                  setStudent({ ...student });
                }}
                required
                value={student.email}
                placeholder={"Email"}
              /> */}
              <input
                onChange={(e) => {
                  const updatedStudent = { ...student, name: e.target.value };
                  setStudent(updatedStudent);
                }}
                required
                value={student.email}
                placeholder={"Email"}
              />
            </div>

            <Button
              variant="contained"
              endIcon={
                adding ? <CircularProgress color="black" size={20} /> : " "
              }
              type={"submit"}
            >
              Submit
            </Button>
          </form>
          <Snackbar
            open={showSnackbar}
            autoHideDuration={6000}
            onClose={() => {
              setShowSnackbar(false);
            }}
          >
            <Alert
              onClose={() => {
                setShowSnackbar(false);
              }}
              severity={snackSeverity}
              sx={{ width: "100%" }}
            >
              {snackMsg}
            </Alert>
          </Snackbar>
        </div>

        {/* <img className={styles.contactImg}
            src="https://www.thecocktaildb.com/images/media/drink/tx8ne41582475326.jpg"
            alt="contact us "
          /> */}
      </div>
    </>
  );
}

export default StudentFormComponent;
