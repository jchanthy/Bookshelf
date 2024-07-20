
const Dashboard =() =>{
    return (
        <>
     
        <div>Search my bookshelf</div>
        <input type="text" placeholder="Type here" className="input input-bordered w-full max-w-xs" />
             <div className="overflow-x-auto w-full">
        <table className="table w-96">
          {/* head */}
          <thead>
            <tr>
              <th>
                <label>
                  <input type="checkbox" className="checkbox" />
                </label>
              </th>
              <th>B_Code</th>
              <th>Title</th>
              <th>Author</th>
              <th>Average Rating</th>
              <th>Thumbnail</th>
            </tr>
          </thead>
          <tbody>
            {/* row 1 */}
            <tr>
              <th>
                <label>
                  <input type="checkbox" className="checkbox" />
                </label>
              </th>
              <td>Purple</td>
              <td>Purple</td>
              <td><span className="badge badge-ghost badge-sm">Desktop </span></td>
              <td><span className="badge badge-ghost badge-sm">High </span></td>
              <td>
                <div className="flex items-center gap-3">
                  <div className="avatar">
                    <div className="mask mask-squircle h-12 w-12">
                      <img role="button" 
                        src="https://img.daisyui.com/images/profile/demo/2@94.webp"
                        alt="Avatar Tailwind CSS Component" />
                    </div>
                  </div>
                </div>
              </td>
            </tr>
            {/* row 2 */}
            <tr>
              <th>
                <label>
                  <input type="checkbox" className="checkbox" />
                </label>
              </th>
              <td>Purple</td>
              <td>Purple</td>
              <td><span className="badge badge-ghost badge-sm">Desktop </span></td>
              <td><span className="badge badge-ghost badge-sm">High </span></td>
              <td>
                <div className="flex items-center gap-3">
                  <div className="avatar">
                    <div className="mask mask-squircle h-12 w-12">
                      <img role="button" 
                        src="https://img.daisyui.com/images/profile/demo/2@94.webp"
                        alt="Avatar Tailwind CSS Component" />
                    </div>
                  </div>
                </div>
              </td>
            </tr>
            {/* row 3 */}
            <tr>
              <th>
                <label>
                  <input type="checkbox" className="checkbox" />
                </label>
              </th>
              <td>Purple</td>
              <td>Purple</td>
              <td><span className="badge badge-ghost badge-sm">Desktop </span></td>
              <td><span className="badge badge-ghost badge-sm">High </span></td>
              <td>
                <div className="flex items-center gap-3">
                  <div className="avatar">
                    <div className="mask mask-squircle h-12 w-12">
                      <img role="button" 
                        src="https://img.daisyui.com/images/profile/demo/2@94.webp"
                        alt="Avatar Tailwind CSS Component" />
                    </div>
                  </div>
                </div>
              </td>
            </tr>
            {/* row 4 */}
            <tr>
              <th>
                <label>
                  <input type="checkbox" className="checkbox" />
                </label>
              </th>
              <td>Purple</td>
              <td>Purple</td>
              <td><span className="badge badge-ghost badge-sm">Desktop </span></td>
              <td><span className="badge badge-ghost badge-sm">High </span></td>
              <td>
                <div className="flex items-center gap-3">
                  <div className="avatar">
                    <div className="mask mask-squircle h-12 w-12">
                      <img role="button" 
                        src="https://img.daisyui.com/images/profile/demo/2@94.webp"
                        alt="Avatar Tailwind CSS Component" />
                    </div>
                  </div>
                </div>
              </td>
            </tr>
            </tbody>
          {/* foot */}
        </table>
      </div>

        </>
    
      );
}

export default Dashboard;