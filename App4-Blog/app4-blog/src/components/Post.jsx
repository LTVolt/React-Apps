

const Post = ({postID, postTitle, postAttractText}) => {

    function handleClick() {
        alert(`You clicked on post #${postID}`);
        // Post Page navigation


    }

    return ( 
    <>
        <section onClick={handleClick} className="mt-5 border-2 border-gray-300 rounded-lg p-5 mx-auto w-4/5 hover:bg-gray-100 cursor-pointer active:bg-gray-200">
        <h2 className="font-bold text-2xl mt-1 text-center">Post #{postID}</h2>
        <h3 className="text-center text-gray-500">{postTitle}</h3>
        <p className="mt-2 w-4/5 mx-auto text-center">{postAttractText}</p>
      </section>
    </> );
}
 
export default Post;