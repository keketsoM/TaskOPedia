import logo from "../Images/logo192.png";
function Header(){
    return(
      <div>
           <MainHeader></MainHeader>
           <SubHeading></SubHeading>
      </div>

    );
  }
  function MainHeader(){
    return(
      <div className="pt-3 py-1 pl-2" style={{backgroundColor:"black",}}>
      <img src={logo} alt="React" style={{height:"35px", verticalAlign:"top"}}></img>
      <span className="h2 pt-4 text-white-50">React Course - TaskOPedia</span>
      </div>
    );
  }
  function SubHeading(){
    return(
      <p style={headerStyle}>This will be an exciting course.</p>
    );
  }
  const headerStyle={
  color:'red', 
  backgroundColor:'pink'
  }
  export default Header;