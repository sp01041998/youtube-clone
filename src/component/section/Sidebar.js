import React from "react";
import { menuOptions, sidebarLogo, sidebarMenu } from "../constant";
import { BsNewspaper } from "react-icons/bs";
import { useSelector } from "react-redux";


const Sidebar = () => {
const isSidebarOpen = useSelector(store => store.user.isSidebarOpen)

  if(!isSidebarOpen){
    return (
      <div className="px-8 mt-4 flex flex-col col-span-1 gap-10 transition-all ease-in-out duration-800 py-3 shadow-lg">
        {
          sidebarLogo.map((component, index) => (
            <div key = {index}>
              {
              component
            }
             </div> 
          ))
        }
      </div>
    )
  }

  return (
    <div className="px-6 mt-4 flex flex-col gap-6 col-span-2  transition-all ease-in-out duration-800 py-3 h-full overflow-auto shadow-lg">
      <div className="flex flex-col gap-4">
        <div className="flex items-center">
          <img
            className="h-6"
            src="https://cdn-icons-png.flaticon.com/512/25/25694.png"
            alt="Home"
          />
          <h1 className="font-bold text-base ml-6">Home</h1>
        </div>

        <div className="flex items-center">
          <img
            className="h-6"
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSmDm19Dr7kiDZnqgGxLvhf3zbUwryzHL2yEbgXxB-PyYclwwGaNvntCfxmc6wtwHyMEUA&usqp=CAU"
            alt="Home"
          />
          <h1 className="font-bold text-base ml-6">Shorts</h1>
        </div>

        <div className="flex items-center">
          <img
            className="h-6"
            src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAOEAAADhCAMAAAAJbSJIAAAAb1BMVEX///8AAADPz89hYWHMzMz09PSWlpZTU1P6+vr8/Pzv7+9aWlrc3Nxqamrr6+s8PDwdHR00NDRJSUmKioq/v7+mpqYlJSW1tbXl5eWvr68qKiqfn5+FhYV3d3ctLS3f3983NzcSEhIYGBiamppGRkb9MlNRAAADc0lEQVR4nO2di5LaMAxF1fAKITxDoEBblrb//41Nh+0MnS7UD1mSk3s+wNaZJMJRbEEEAAAAAAAAAACAQVMXstTihrNPsszEDUfChiMYwhCGMIQhDGEIQxjCEIYwhKFJw4Ww4ULc8DSV5SRuCAAAAAAAAAAAgAw5LUb2WHAWNqbCZSc3pjCEIQzVgSEMYagPDGEIQ31gCEMY6gNDH8qJRUpGQwAAAAAAAAAAYAhci7FNiiuDXdGctcsxLzk3RYxe2R60DRw4XIILNvsc/H5zOIYJLrUD92AZ4FflcgHvHCpfwZXtBPMv55WfYLnWjtibtV++yekZ/IPXs7jXjjaIvcc9utEONoiN+33aascaSOsqON9qhxrIdu5oWGhHGozrGrXRDjSYxtFwpx1oMDs3wVI7zgjcsmmlHWYEbqvTWjvMCNz6R+abSl2TKQwtA0MY2geG7IZr6W7D4oYzGv/kG80BBUOio2TVTsWQygvfgP9Dx7Bz/MI35Gu0DIlWX/kGfYWeYffGItLCTtOQaPyNb+Bn6BoS7ZPXYbUNaX658Q3+EeqGRJO0hTwDhl1aTfnVx4Qh0TVdWjViSOlWq2YMu9XqjW+WBwwZEiVZrZoyTJJWbRkSfWZfrVoz7NIqcxHAnmGXVll3fVg07NIq44rcpiGVfPsGjBp2jlxp1awhWxHAsCFTEcC0YZdW36InNG7IUAQwb0jUfo+aMAPDyNVqDoZxaTUPw25FHvwHKLkYXoNLOXkY9v0ujVvA2TeM/RJn3jD6Rcq4IcPLsGnDmmNbq2FDpqKUWcMJ12dwq4Y/2Ca0aXjkm8+k4b7n1USWBPqANcPwd4hn2DKsEuwjsmRYJulUaMjwdOOb5QEzhsnOwRsxLNIdrDJheE35L7QGDKu0mxTVDSepW70qG87bG9/QH6NryPmt9xmahoWAn6ahzA5hPUOpXd5qpxHEdurrGDJutHBA3HBBR9lGPuKGb7KnnnA6D4Y5AEMY2geGd/rf+aP/3Vv634GHpJdafDh2URpAJ6x8k6lrN7P+d6Trf1dBmmfaGdL5Eg6gu+cAOrRSGX8wQBr3NHOnEilRM3L2bgZd5fWTsfUW7BJqTs/i0vMWfSd9GwsmNl5Z9K/L2OaQcLaXsAv47lg0tvu17poixu9OWdWFTeoKf9QJAAAAAAAAAAAMhl+j43xZiEaB7gAAAABJRU5ErkJggg=="
            alt="Home"
          />
          <h1 className="font-bold text-base ml-6">Subscription</h1>
        </div>
      </div>

      {sidebarMenu.map((menu, index) => (
        <div key={index}>
          <p className="border border-gray-500 mb-4"></p>
          <h1 key={index} className="font-bold text-base mb-2">
            {menu}
          </h1>
          <div className="flex flex-col gap-4 cursor-pointer">
            {menuOptions[menu].map((data, index) => (
              // <div className="hover:bg-gray-400 hover:p-2 hover:rounded-md hover:font-medium">
                <div className="flex items-center h-8 hover:bg-gray-400 hover:p-2 hover:rounded-md hover:font-medium" key={index}>
                {/* <img className="h-6" src={data.img} alt="Home" /> */}
                {data.img}
                <h1 className="ml-6 text-base">{data.label}</h1>
              </div>
            //  </div>
              
            ))}
          </div>
        </div>
      ))}
    </div>
  );
};

export default Sidebar;
