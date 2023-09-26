import "./Navbar.css";

export default function Navbar() {
  return (
    <>
      <div className="navbar">
        <img src="logo.svg" className="logo" style={{ paddingLeft: "5px" }} />
        <div className="flex" style={{ justifyContent: "center" }}>
          <button>1</button>
          <button>2</button>
          <button>3</button>
        </div>
        <div
          className="flex"
          style={{ justifyContent: "flex-end", paddingRight: "20px" }}
        >
          save
          testtest
        </div>
      </div>
    </>
  );
}
