export const SenderChat = ({username, message}) => {


  return (


    <div className="flex justify-end">
      <div className="flex flex-col bg-blue-500 p-2 rounded-lg mx-5">
        <p className="bold text-sm italic font-semibold">{username}</p>
        <p>{message}</p>

      </div>
    </div>
  );
};
