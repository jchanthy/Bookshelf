
import LikeBtn from "./LikeButton.js";
import CommentBtn from "./CommentButton.js";
import CommentBox from "./commentBox.js";

const SocialCards =() =>{
    return (
        <>

             <div className="overflow-x-auto w-full">
             <h3 className="card-title">Social Cards</h3>
            <table className="table w-full">
            <div className="card card-side items-start  bg-base-100 shadow-xl">
                <figure className="">
                    <img src="https://images-na.ssl-images-amazon.com/images/I/51r6XIPWmoL._SX331_BO1,204,203,200_.jpg" alt="Movie" />
                </figure>
            <div className="card-body">
            <h2 className="card-title">Book name : The Arts of Teaching Children</h2>
            <p>By : By Irannor Jonh</p>

            <div>

  <ul className="menu lg:menu-horizontal bg-base-200 rounded-box">
 
 <ul>

   <li>
     <details open>
       <summary>Want to Read</summary>
       <ul>
         <li><a>Want to Read</a></li>
         <li><a>Current Reading</a></li>
         <li><a>Read</a></li>
       </ul>
     </details>
   </li>
 </ul>
</ul>
  </div>


            <p>Test Your book details can be found in the Book details tab. Book details are sometimes called metadata. Both terms describe what will show your book's Amazon detail page. As most of these fields cannot be changed after you publish, we recommend you double check everything before submitting.</p>
            <div className="flex flex-row gap-3" ><LikeBtn /> <CommentBtn /></div>
            <CommentBox />
  </div>
</div>
        </table>
      </div>

        
        </>
        
    
      );
}



export default SocialCards;