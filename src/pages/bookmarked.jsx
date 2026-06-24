import Job from "../components/job";
import { useBookmarks } from "../contexts";
// import {} from "../helper";

function Bookmarked({ jobs }) {
  const { bookmarkIds } = useBookmarks();
  const bookmarks = jobs.filter((job) => bookmarkIds.includes(job.jobId));
  console.log(bookmarks);
  return (
    <main>
      <ul>
        {bookmarks.map((bookmark) => (
          <Job key={bookmark.jobId} job={bookmark} />
        ))}
      </ul>
    </main>
  );
}

export default Bookmarked;
