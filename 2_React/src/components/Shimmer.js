const Shimmer = () => {
  return (
    <div className="restaurent-card-List">
      {Array(15)
        .fill("")
        .map((e, index) => (
          <div className="shimmer" key={index}></div>
        ))}
    </div>
  );
};
export default Shimmer;
