import { FaBookmark, FaRegBookmark } from "react-icons/fa6";

function Bookmark({ color, id, bookmarks, setBookmarks }) {
  const bookmarked = bookmarks?.includes(id);

  const addBookmark = function () {
    // setBookmarked((prev) => !prev);
    setBookmarks([...bookmarks, id]);
    console.log(id);
  };
  const removeBookmark = function () {
    // setBookmarked((prev) => !prev);
    setBookmarks(bookmarks.filter((bookmark) => bookmark !== id));
  };
  console.log(bookmarks);
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
