import { getInfoFile } from "../utils/utils";
// import test from "../assets/txt/runLocally.md";

const Information = () => {
  const fileDetails = getInfoFile("runLocally.md");
  console.log("fileDetails>>>", fileDetails);

  //   console.log("test>>>", test);

  return (
    <div>
      <h2>Information</h2>
      <p></p>
    </div>
  );
};

export default Information;
