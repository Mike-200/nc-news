import ReactMd from "react-md-file";
import readme from "../assets/txt/README.md";

const Information = () => {
  return (
    <div>
      <h2 className="TitleCard">Information</h2>
      <ReactMd fileName={readme} />
    </div>
  );
};

export default Information;
