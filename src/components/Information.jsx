import ReactMd from "react-md-file";

const Information = () => {
  return (
    <div>
      <h2>Information</h2>
      {/* <ReactMd markdown="# hello" /> */}
      <ReactMd fileName="../assets/txt/runLocally.md" />
      <p>
        I have the info in 2 markdown files and want to pull them into this file
      </p>
      <p>Assistance required on pulling the file using axios, fetch or fs</p>
      <p>Tried all 3 and cant get the file in here</p>
      {/* <p>{fileDetails}</p> */}
    </div>
  );
};

export default Information;
