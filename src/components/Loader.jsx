import spinner from '/files/spinner.gif'

function Loader() {
  return (
    <div style={styles.loaderContainer}>
      <img src={spinner} alt="Loading..." style={styles.spinner} />
    </div>
  );
}

const styles = {
  loaderContainer: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    height: "70vh",
    backgroundColor: "#f4f4f4",
  },
  spinner: {
    width: "6.25rem", 
    height: "6.25rem",
  },
};

export default Loader;