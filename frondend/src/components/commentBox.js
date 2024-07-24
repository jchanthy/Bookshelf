


const CommentBox = () => {

return(
<>
<div className='flex flex-row pt-4'>
<div className="avatar gap-4">
  <div className="ring-primary ring-offset-base-100 w-16  rounded-full ring ring-offset-1">
    <img src="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.webp" />
  </div>
  <textarea className="textarea textarea-bordered textarea-xs w-full max-w-xs"  placeholder="write a comment ..."></textarea>
</div>

</div>
</>)
}

export default CommentBox;