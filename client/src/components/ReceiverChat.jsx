import React from "react";

export const ReceiverChat = ({message, username}) => {
  return (
    <div className="flex justify-start">
      <div className="flex flex-col p-2 rounded-lg space-x-4 bg-white">
        <p className="bold text-sm italic font-semibold">{username}</p>
        <p>{message}</p>
      </div>
    </div>
  );
};
