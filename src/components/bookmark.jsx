import { useState } from "react";
import { FaBookmark, FaRegBookmark } from "react-icons/fa6";

function Bookmark() {
  const [bookmarked, setBookmarked] = useState(false);
  return (
    <div className="" onClick={() => setBookmarked((prev) => !prev)}>
      {bookmarked ? (
        <FaBookmark height={18} width={14} fill="#80BEA6" />
      ) : (
        <FaRegBookmark height={18} width={14} fill="#80BEA6" />
      )}
    </div>
  );
}

export default Bookmark;
