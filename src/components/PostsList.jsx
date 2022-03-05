import { useSelector } from "react-redux"
import { PostItem } from "./PostItem"

const PostsList = ({ renderItem, children }) => {
  let {posts, loadingPosts} = useSelector(state => state.PostReducer)
  
  return (
    <div>
      { loadingPosts && <p>Cargando...</p> }
      { !loadingPosts && Boolean(posts.length) && (
        <>
          {renderItem ? <div>{posts.map(p => renderItem( p ))}</div> : children(posts) }
        </> 
      )}
    </div>
  )
}
PostsList.Item = PostItem
export default PostsList