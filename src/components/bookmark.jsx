import { FaBookmark, FaRegBookmark } from "react-icons/fa6";
import { useBookmarks } from "../contexts";

function Bookmark({ color, id }) {
  const { bookmarks, setBookmarks } = useBookmarks();
  const bookmarked = bookmarks.includes(id);

  const addBookmark = function () {
    setBookmarks([...bookmarks, id]);
  };
  const removeBookmark = function () {
    setBookmarks(bookmarks.filter((bookmark) => bookmark !== id));
  };
  return (
    <div
      className="cursor-pointer"
      onClick={bookmarked ? removeBookmark : addBookmark}
    >
      {bookmarked ? (
        <FaBookmark height={18} width={14} fill={color} />
      ) : (
        <FaRegBookmark height={18} width={14} fill={color} />
      )}
    </div>
  );
}

export default Bookmark;
