import React from "react";
import { makeStyles, withStyles } from "@material-ui/core/styles";
import Input from "@material-ui/core/Input";
import OutlinedInput from "@material-ui/core/OutlinedInput";
import InputAdornment from "@material-ui/core/InputAdornment";
import FormControl from "@material-ui/core/FormControl";
import Button from "@material-ui/core/Button";
import { Checkbox, FormControlLabel } from "@material-ui/core";
import styled from "styled-components";
import { Link } from "react-router-dom";
import { LoginBottom } from "../Components/LoginBottom";
import { LoginNavbar } from "../Components/LoginNavbar";

//Lable Remember me for checkbox
const Lable = styled.p`
  font-size: 14px;
  margin-top: 7px;
`;

const BlackCheckbox = withStyles({
  root: {
    "&$checked": {
      color: "black",
    },
    width: "14px",
    height: "14px",
  },
  checked: {},
})((props) => <Checkbox size="small" color="default" {...props} />);

const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
    flexWrap: "wrap",
    justifyContent: "center",
    padding: "0 16px 0 16px",
    width: "400px",
    position: "relative",
    margin: " 100px auto",
  },

  input: {
    width: "400px",
    height: "40px",
    marginBottom: "10px",
    borderRadius: "5px",
  },
  inputSubmit: {
    backgroundColor: "black",
    color: "white",
    width: "400px",
    height: "40px",
    marginTop: "10px",
    marginBottom: "10px",
    borderRadius: "5px",
    "&:hover": {
      opacity: ".5",
    },
  },
  formBox: {
    display: "flex",
    flexDirection: "column",
    justifyItems: "flex-start",
    alignItems: "start",
  },

  divOfCheckBoxForgot: {
    display: "flex",
    justifyContent: "space-between",
    padding: "5px",
  },

  forgotLink: {
    marginTop: "10px",
    color: "black",
    cursor: "pointer",
  },
  lables: {
    fontSize: "12px",
    fontWeight: "700",
    fontFamily: "Helvetica, arial, sans-serif",
    margin: "5px",
    marginLeft: "0",
  },
}));

function LoginPage() {
  const classes = useStyles();
  const [values, setValues] = React.useState({
    email: "",
    password: "",
    showPassword: false,
  });

  const handleChange = (prop) => (event) => {
    setValues({ ...values, [prop]: event.target.value });
  };

  const handleClickShowPassword = () => {
    setValues({ ...values, showPassword: !values.showPassword });
  };

  const handleMouseDownPassword = (event) => {
    event.preventDefault();
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    alert("hi");
  };

  return (
    <>
      {/* Log in Navabar */}
      <LoginNavbar />
      {/*  */}
      <div className={classes.root}>
        <form onSubmit={handleSubmit}>
          <FormControl
            fullWidth
            variant="outlined"
            classname={classes.formBox}
            onSubmit={handleSubmit}
          >
            <label className={classes.lables} htmlFor="">
              <b>Email Address</b>{" "}
            </label>
            <OutlinedInput
              type="email"
              className={classes.input}
              value={values.email}
              onChange={handleChange("email")}
            />

            <label className={classes.lables} htmlFor="">
              <b>Password</b>
            </label>

            <OutlinedInput
              className={classes.input}
              type={values.showPassword ? "text" : "password"}
              value={values.password}
              onChange={handleChange("password")}
              endAdornment={
                <InputAdornment position="end">
                  <Button
                    aria-label="toggle password visibility"
                    onClick={handleClickShowPassword}
                    onMouseDown={handleMouseDownPassword}
                  >
                    {values.showPassword ? (
                      <label className={classes.lables}>show</label>
                    ) : (
                      <label className={classes.lables}>Hide</label>
                    )}
                  </Button>
                </InputAdornment>
              }
            />

            <div className={classes.divOfCheckBoxForgot}>
              <FormControlLabel
                control={
                  <BlackCheckbox
                    color="black"
                    className={classes.checkBox}
                    style={{ alignSelf: "start", height: "14px" }}
                  />
                }
                label={<Lable> Remember me </Lable>}
              />
              <Link className={classes.forgotLink} style={{ alignSelf: "end" }}>
                {" "}
                Forgot your passeword?
              </Link>
            </div>
            <Input
              className={classes.inputSubmit}
              type="submit"
              value="Log In"
            />
          </FormControl>
        </form>

        <p>
          Don'nt have a Times account?{" "}
          <Link className={classes.forgotLink}>
            <b>Create one</b>
          </Link>{" "}
        </p>
      </div>
      {/*  */}
      <LoginBottom />
    </>
  );
}

export { LoginPage };
