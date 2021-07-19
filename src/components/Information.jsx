import { getInfoFile } from "../utils/utils";

const Information = () => {
  // Pull the markdown file from assets folder
  const fileDetails = getInfoFile("runLocally.md");
  console.log("fileDetails>>>", fileDetails);

  // Want to add the markdown file here
  return (
    <div>
      <h2>Information</h2>
      <p>
        I have the info in 2 markdown files and want to pull them into this file
      </p>
      <p>Assistance required on pulling the file using axios, fetch or fs</p>
      <p>Tried all 3 and cant get the file in here</p>
    </div>
  );
};

export default Information;
