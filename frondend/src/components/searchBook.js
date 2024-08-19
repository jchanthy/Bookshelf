

const SearchBook = (props) => {

    return(
        <>
        <div className="text-2xl font-bold">
          Search my bookshelf
        </div>
        <input type="text" placeholder="Search ..." className="input input-bordered w-full max-w-xs" onChange={(event) => props.onSearch(event.target.value)}/>
        <p className="text-sm text-gray-500">Type a book title, author or ISBN to search</p>
    </>
    )


}
export default SearchBook;