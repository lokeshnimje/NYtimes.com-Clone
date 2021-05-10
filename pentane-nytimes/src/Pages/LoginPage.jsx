import React from "react";
import { makeStyles, withStyles } from "@material-ui/core/styles";
import Input from "@material-ui/core/Input";
import InputAdornment from "@material-ui/core/InputAdornment";
import Button from "@material-ui/core/Button";
import { Checkbox, FormControlLabel } from "@material-ui/core";
import styled from "styled-components";
import { Link, Redirect } from "react-router-dom";
import {useDispatch, useSelector} from "react-redux"
import {authentication,loginSuccess,loginFailure} from "../Redux/auth/action"
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
    fontSize:'18px',
    alignItems:"center"
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
    fontSize: "15px",
    fontWeight: "700",
    fontFamily: "Helvetica, arial, sans-serif",
    margin: "5px",
    marginLeft: "0",
  },
}));

function LoginPage() {
  const dispatch = useDispatch()
  const classes = useStyles();
  const response = useSelector(state=> state.auth.data)
  const isAuth = useSelector(state=> state.auth.isAuth)
  // console.log(response)
  const [values, setValues] = React.useState({
    email: "",
    password: "",
    showPassword: false,
  });

  const handleChange = (prop) => (event) => {
    setValues({ ...values, [prop]: event.target.value });
  };

  const handleClickShowPassword = () => {
    setValues({ ...values, showPassword: !showPassword });
  };

  const handleMouseDownPassword = (event) => {
    event.preventDefault();
  };

  const [ wrong, setWrong] = React.useState(false)
  const [userType, setUserType] = React.useState("")

  React.useEffect(()=>{
    dispatch(authentication())
  },[])
    
  const handleSubmit = (event) => {
      event.preventDefault();
      const newData = response.find((item)=>item.email === values.email && item.pass === values.password)    
      // console.log(data[0].email)  
      if(newData){
        dispatch(loginSuccess(newData))
        setUserType(newData.userType)

        setWrong(false)
      } else {
        dispatch(loginFailure())
      setWrong(true)
    }
  };
  // console.log(userType)
  // console.log(isAuth)
  const {email, password,showPassword} = values
  return (
    <>
      {wrong ? <h4 style={{color:"red", margin:"auto"}}>Invalid Credentials, if you have not registered then click on <span style={{color:"black"}}>Create one</span> to register</h4>: null}
      {/* {isLogin && <h3 style={{color:"green", margin:"auto"}}>You are successfully Logged in</h3>} */}
      <div className={classes.root}>
        <form onSubmit={handleSubmit}>
            <label className={classes.lables} htmlFor="">
              <b>Email Address</b>{" "}
            </label>
            <input
              type="email"
              className={classes.input}
              value={email}
              onChange={handleChange("email")}
            />

            <label className={classes.lables} htmlFor="">
              <b>Password</b>
            </label>

            <input
              className={classes.input}
              // type={values.showPassword ? "password" : "text"}
              type="password"
              value={password}
              onChange={handleChange("password")}
              endAdornment={
                <InputAdornment position="end">
                  <Button
                    aria-label="toggle password visibility"
                    onClick={handleClickShowPassword}
                    onMouseDown={handleMouseDownPassword}
                  >
                    {showPassword ? (
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
                    className={classes.checkBox}
                    style={{ alignSelf: "start", height: "14px" }}
                  />
                }
                label={<Lable> Remember me </Lable>}
              />
              <Link className={classes.forgotLink} style={{ alignSelf: "end" }}>
                {" "}
                Forgot your password?
              </Link>
            </div>
            <Input
              className={classes.inputSubmit}
              type="submit"
              value="Log In"
            />
        </form>

        <p>
          Don't have a Times account?{" "}
          <Link to="/Pentane/registration" className={classes.forgotLink}>
            <b>Create one</b>
          </Link>{" "}
        </p>
      </div>
      {/*  */}
      {isAuth && userType==="Admin"?<Redirect to="/Pentane/admin"/>:isAuth?<Redirect to="/Pentane"/>:null}
    </>
  );  
}

export { LoginPage };
