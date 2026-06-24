import { FaBookmark, FaRegBookmark } from "react-icons/fa6";
import { useBookmarks } from "../contexts";

function Bookmark({ color, id }) {
  const { bookmarkIds, setBookmarkIds } = useBookmarks();
  const bookmarked = bookmarkIds.includes(id);

  const addBookmark = function () {
    setBookmarkIds([...bookmarkIds, id]);
  };
  const removeBookmark = function () {
    setBookmarkIds(bookmarkIds.filter((bookmark) => bookmark !== id));
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
