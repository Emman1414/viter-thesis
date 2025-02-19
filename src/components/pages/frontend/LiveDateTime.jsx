import { useState, useEffect } from "react";

const LiveDateTime = () => {
  const [currentTime, setCurrentTime] = useState(new Date());

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentTime(new Date());
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  // Format the date as "Jun 10, 2025"
  const formattedDate = currentTime.toLocaleDateString("en-US", {
    month: "short",
    day: "numeric",
    year: "numeric",
  });

  // Format the time as "09:14AM"
  // We use toLocaleTimeString with options and then remove the space between minutes and AM/PM.
  const formattedTime = currentTime
    .toLocaleTimeString("en-US", {
      hour: "2-digit",
      minute: "2-digit",
      hour12: true,
    })
    .replace(" ", "");

  return (
    <ul className="flex gap-3">
      <li className="border border-white text-blue-500 rounded-md p-1 px-2 bg-gray-200">
        <small>{formattedDate}</small>
      </li>
      <li className="border border-white text-blue-500 rounded-md p-1 px-2 bg-gray-200">
        <small>{formattedTime}</small>
      </li>
    </ul>
  );
};

export default LiveDateTime;
