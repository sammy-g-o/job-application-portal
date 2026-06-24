import { getFromLocalStorage } from "../helper";


function Bookmarked() {
    console.log(getFromLocalStorage('bookmarks')) 
  return (
    <div>bookmarked</div>
  )
}

export default Bookmarked