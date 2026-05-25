import { useState } from "react";
import { FaBookmark, FaRegBookmark } from "react-icons/fa6";

function Bookmark({color}) {
  const [bookmarked, setBookmarked] = useState(false);
  return (
    <div className="cursor-pointer" onClick={() => setBookmarked((prev) => !prev)}>
      {bookmarked ? (
        <FaBookmark height={18} width={14} fill={color} />
      ) : (
        <FaRegBookmark height={18} width={14} fill={color} />
      )}
    </div>
  );
}

export default Bookmark;
