const Shimmer = () => {
  return (
    <div className="restaurent-card-List">
      {Array(15)
        .fill("")
        .map((e) => (
          <div className="shimmer"></div>
        ))}
    </div>
  );
};
export default Shimmer;
