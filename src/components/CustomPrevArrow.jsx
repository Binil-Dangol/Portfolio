import { IoIosArrowDropleft } from "react-icons/io";

function CustomPrevArrow(props) {
  const { className, style, onClick } = props;
  return (
    <div
      className={className}
      onClick={onClick}
      style={{
        ...style,
        display: "flex",          
        alignItems: "center",
        justifyContent: "center",
        width: "40px",            
        height: "40px",
        background: "transparent", 
        borderRadius: "50%",
        position: "absolute",
        left: "-2.2rem",
        //boxShadow: "0px 0px 4px 4px rgba(0, 0, 0, 0.5)", 
        zIndex: 1
      }}
      title="Previous Screenshot"
    >
      <IoIosArrowDropleft style={{ color: "#333333", fontSize: "24px", filter: "drop-shadow(2px 2px 2px rgba(0,0,0,1))"}} />
    </div>
  );
}

export default CustomPrevArrow;