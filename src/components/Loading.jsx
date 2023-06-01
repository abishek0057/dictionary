import React from "react";

const Loading = () => {
  return (
    <div className='fixed top-0 left-0 right-0 bottom-0 flex items-center justify-center'>
      <div className='animate-spin rounded-full h-48 w-48 border-t-8 border-fuchsia-800'></div>
    </div>
  );
};

export default Loading;
