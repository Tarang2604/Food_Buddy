// const Shimmer= ()=>{
//  return (
//     <div className="shimmer-container">
//       <div className="shimmer-card">Loading...</div>
//        <div className="shimmer-card">Loading...</div>
//         <div className="shimmer-card">Loading...</div>
//         <div className="shimmer-card">Loading...</div>
//        <div className="shimmer-card">Loading...</div>
//         <div className="shimmer-card">Loading...</div>
//         <div className="shimmer-card">Loading...</div>
//        <div className="shimmer-card">Loading...</div>
//         <div className="shimmer-card">Loading...</div>
//         <div className="shimmer-card">Loading...</div>
//        <div className="shimmer-card">Loading...</div>
//         <div className="shimmer-card">Loading...</div>
//     </div>
//  );
// };

// export default Shimmer;




const Shimmer = () => {
  return (
    <div className="flex flex-wrap gap-4 p-4">
      {Array(12)
        .fill("")
        .map((_, index) => (
          <div
            key={index}
            className="w-[200px] h-[300px] rounded-xl bg-gray-200 animate-pulse"
          >
            {/* Image */}
            <div className="h-[120px] bg-gray-300 rounded-t-xl"></div>

            {/* Content */}
            <div className="p-3 space-y-3">
              <div className="h-4 bg-gray-300 rounded w-3/4"></div>
              <div className="h-4 bg-gray-300 rounded w-1/2"></div>
              <div className="h-4 bg-gray-300 rounded w-1/3"></div>
            </div>
          </div>
        ))}
    </div>
  );
};

export default Shimmer;