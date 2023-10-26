import { useState } from "react";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import IconButton from "@mui/material/IconButton";
import InputAdornment from "@mui/material/InputAdornment";
import { Visibility, VisibilityOff } from "@mui/icons-material";

const RegisterPage = () => {
  const [username, setUsername] = useState<string>("");
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [showPassword, setShowPassword] = useState(false);
  const [retypedPassword, setRetypedPassword] = useState<string>("");
  const [emptyError, setEmptyError] = useState<null | string>("");
  const [passwordError, setPasswordError] = useState<null | string>("");

  const handleRegister = () => {
    // Handle registration functionality here
    if (!username || !email || !password || !retypedPassword) {
      setEmptyError("Please fill out all fields");
      return;
    } else if (passwordError) {
      return;
    } else {
      setEmptyError(null);
      console.log("Success!");
    }
  };

  const checkPassword = (pass: string) => {
    setRetypedPassword(pass);
    if (password !== pass) {
      setPasswordError("passwords do not match");
    } else {
      setPasswordError(null);
    }
  };

  const handleClickShowPassword = () => {
    setShowPassword(!showPassword);
  };

  const handleMouseDownPassword = (
    event: React.MouseEvent<HTMLButtonElement>
  ) => {
    event.preventDefault();
  };

  return (
    <Box
      sx={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        height: "100vh",
      }}
    >
      <Box
        component="form"
        sx={{
          display: "flex",
          flexDirection: "column",
          width: 300,
          gap: 20,
        }}
      >
        <Typography variant="h5" sx={{ textAlign: "center" }}>
          Register
        </Typography>
        <TextField
          label="Username"
          variant="outlined"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        />
        <TextField
          label="Email"
          type="email"
          variant="outlined"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <TextField
          label="Password"
          type={showPassword ? "text" : "password"}
          variant="outlined"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          InputProps={{
            endAdornment: (
              <InputAdornment position="end">
                <IconButton
                  aria-label="toggle password visibility"
                  onClick={handleClickShowPassword}
                  onMouseDown={handleMouseDownPassword}
                  edge="end"
                >
                  {showPassword ? <VisibilityOff /> : <Visibility />}
                </IconButton>
              </InputAdornment>
            ),
          }}
        />
        <TextField
          label="Retype Password"
          type={showPassword ? "text" : "password"}
          variant="outlined"
          onBlur={(e) => checkPassword(e.target.value)}
          InputProps={{
            endAdornment: (
              <InputAdornment position="end">
                <IconButton
                  aria-label="toggle password visibility"
                  onClick={handleClickShowPassword}
                  onMouseDown={handleMouseDownPassword}
                  edge="end"
                >
                  {showPassword ? <VisibilityOff /> : <Visibility />}
                </IconButton>
              </InputAdornment>
            ),
          }}
        />
        {passwordError && (
          <Typography color="error" sx={{ textAlign: "center" }}>
            {passwordError}
          </Typography>
        )}
        {emptyError && (
          <Typography color="error" sx={{ textAlign: "center" }}>
            {emptyError}
          </Typography>
        )}
        <Button variant="contained" onClick={handleRegister}>
          Register
        </Button>
      </Box>
    </Box>
  );
};

export default RegisterPage;
/*
Space shuttle Background
Astronaut above login box
Transition will be background scaling down to 0 then scaling back up
inputs will also scale to 0 then scale back up
Connect to Firebase to allow Google Sign in
*/
