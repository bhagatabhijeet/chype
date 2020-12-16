import TextField from "@material-ui/core/TextField";
import IconButton from "@material-ui/core/IconButton";
import InputAdornment from "@material-ui/core/InputAdornment";
import SearchIcon from "@material-ui/icons/Search";

export default function UsersBox() {
  return (
    <div
      style={{
        position: "fixed",
        top: 100,
        height:'80vh',
        display: "flex",
        flexDirection: "column",
        // flexWrap: "wrap",
        overflowY: 'auto',
        width:200
      }}
    >
      <TextField
        label="Search Users"
        InputProps={{
          startAdornment: (
            <InputAdornment>
              <IconButton>
                <SearchIcon />
              </IconButton>
            </InputAdornment>
          ),
        }}
      />
      <div style={{width:'100%'}}>User Card 1</div>
      <div>User Card 2</div>
      <div>User Card 3</div>
      <div>User Card 4</div>
      <div>User Card 5</div>
      <div>User Card 6</div>
      <div>User Card 7</div>
      <div>User Card 8</div>
      <div>User Card 9</div>
      <div>User Card 10</div>
      <div>User Card 11</div>
      <div>User Card 12</div>
      <div>User Card 13</div>
      <div>User Card 14</div>
      <div>User Card 15</div>
      <div>User Card 16</div>
      <div>User Card 17</div>
      <div>User Card 18</div>
      <div>User Card 4</div>
      <div>User Card 5</div>
      <div>User Card 6</div>
      <div>User Card 7</div>
      <div>User Card 8</div>
      <div>User Card 9</div>
      <div>User Card 10</div>
      <div>User Card 11</div>
      <div>User Card 12</div>
      <div>User Card 13</div>
      <div>User Card 14</div>
      <div>User Card 15</div>
    </div>
  );
}
