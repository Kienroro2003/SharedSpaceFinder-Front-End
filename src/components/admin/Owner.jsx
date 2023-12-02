import { React, useState, useEffect, Fragment } from "react";
import * as spaceService from "../../services/spaces";

const Owner = () => {
  const [owners, setOwners] = useState([]);

  useEffect(() => {
    const fetchOwner = async () => {
      const param = {};

      const responseOwner = await spaceService.getSpace(param);

      if (responseOwner?.status === 200) {
        const listSpace = responseOwner?.data?.listSpaces;
        console.log("🚀 ~ fetchOwner ~ listSpace:", listSpace);
        setOwners(listSpace);
      } else {
        console.log(responseOwner);
      }
    };
    fetchOwner();
  }, []);

  function deleteid(id) {
    // axios({
    //   url: "http://localhost:8080/api/users/delete-user/?userId"+id,
    //   method: "delete",
    //   withCredentials: false,
    //   headers: {
    //     'Authorization': 'Bearer eyJhbGciOiJIUzUxMiJ9.eyJzdWIiOiJsZXh1YW50YW4xMkBnbWFpbC5jb20iLCJyb2xlcyI6WyJBZG1pbiJdLCJpYXQiOjE2OTk3Njg4NzEsImV4cCI6MTY5OTk0MTY3MX0.lNnNDP-mp8od_8RukgHZU-mR3cDAG00w96uZ-aQEPZ0kCnKuU6Lb5WYQZS2vOzdpvNodL0sASDKvEb_GkjCvow',
    //     'Content-Type': 'application/json'
    //   }
    // }).then((response) => {
    //   setPost(response.data.listUsers);
    // });
  }

  return (
    <Fragment>
      <h2 className="my-5 text-2xl font-bold">Management User Account</h2>
      <table class=" w-full table-auto border-separate border-spacing-y-5 rounded-tl-xl rounded-tr-xl">
        <thead className=" w-full  bg-[#ECEFF1]">
          <tr>
            <th className="rounded-l-xl py-3 pl-3 text-left text-base font-medium text-[#1B2432]">
              User Name
            </th>
            <th className="text-left text-base font-medium text-[#1B2432]">
              Visit Id
            </th>
            <th className="text-left text-base font-medium text-[#1B2432]">
              Email
            </th>
            <th className="text-left text-base font-medium text-[#1B2432]">
              Phone
            </th>
            <th className="text-left text-base font-medium text-[#1B2432]">
              Address
            </th>
            <th className="rounded-r-xl text-left text-base font-medium text-[#1B2432]">
              Action
            </th>
          </tr>
        </thead>
        <tbody className="w-full">
          {owners.map((user, index) => {
            return (
              <tr key={index} className=" bg-[#FFF]">
                <td className="py-3 pl-3 rounded-l-xl">
                  <div className="flex items-center gap-2">
                    <img
                      src="https://mighty.tools/mockmind-api/content/human/7.jpg"
                      alt="avatar"
                      className="object-cover rounded-full h-9 w-9"
                    />
                    <span>{user.name}</span>
                  </div>
                </td>
                <td className="py-3 pl-3">
                  <span>{user.id}</span>
                </td>
                <td className="py-3 pl-3">
                  <span> {user.email}</span>
                </td>
                <td className="py-3 pl-3">
                  <span>{user.phone}</span>
                </td>
                <td className="py-3 pl-3">
                  <span>{user.address}</span>
                </td>
                <td className="py-3 pl-3 ml-auto rounded-r-xl">
                  <div className="flex gap-2">
                    <button
                      // onClick={handleEdit}
                      className="rounded-xl bg-[#23A9F9] px-6 py-2 text-white"
                    >
                      Update
                    </button>
                    <button
                      onClick={() => {
                        // setUser(() => user);
                        // setModalRemove(true);
                      }}
                      className="rounded-xl bg-[#FFA900] px-6 py-2 text-white"
                    >
                      Remove
                    </button>
                  </div>
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
      {/* {modalOpen && (
        <div
          class="relative z-10"
          aria-labelledby="modal-title"
          role="dialog"
          aria-modal="true"
        >
          <div class="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity"></div>

          <div class="fixed inset-0 z-10 w-screen overflow-y-auto">
            <div class="flex min-h-full items-end justify-center p-4 text-center sm:items-center sm:p-0">
              <div class="relative transform overflow-hidden rounded-lg bg-white text-left shadow-xl transition-all sm:my-8 sm:w-full sm:max-w-lg">
                <div class="bg-white px-4 pb-4 pt-5 sm:p-6 sm:pb-4">
                  <div class="sm:flex sm:items-start">
                    <div class="mx-auto flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-full bg-red-100 sm:mx-0 sm:h-10 sm:w-10">
                      <svg
                        class="h-6 w-6 text-red-600"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke-width="1.5"
                        stroke="currentColor"
                        aria-hidden="true"
                      >
                        <path
                          stroke-linecap="round"
                          stroke-linejoin="round"
                          d="M12 9v3.75m-9.303 3.376c-.866 1.5.217 3.374 1.948 3.374h14.71c1.73 0 2.813-1.874 1.948-3.374L13.949 3.378c-.866-1.5-3.032-1.5-3.898 0L2.697 16.126zM12 15.75h.007v.008H12v-.008z"
                        />
                      </svg>
                    </div>
                    <div class="mt-3 text-center sm:ml-4 sm:mt-0 sm:text-left">
                      <h3
                        class="text-base font-semibold leading-6 text-gray-900"
                        id="modal-title"
                      >
                        Deactivate account
                      </h3>
                      <div class="mt-2">
                        <p class="text-sm text-gray-500">
                          Are you sure you want to deactivate your account? All
                          of your data will be permanently removed. This action
                          cannot be undone.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
                <div class="bg-gray-50 px-4 py-3 sm:flex sm:flex-row-reverse sm:px-6">
                  <button
                    type="button"
                    class="inline-flex w-full justify-center rounded-md bg-red-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-red-500 sm:ml-3 sm:w-auto"
                  >
                    Deactivate
                  </button>
                  <button
                    // onClick={() => setModalOpen(false)}
                    type="button"
                    class="mt-3 inline-flex w-full justify-center rounded-md bg-white px-3 py-2 text-sm font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50 sm:mt-0 sm:w-auto"
                  >
                    Cancel
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      )} */}
      {/* {modalRemove && (
        <div
          class="relative z-10"
          aria-labelledby="modal-title"
          role="dialog"
          aria-modal="true"
        >
          <div class="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity"></div>

          <div class="fixed inset-0 z-10 w-screen overflow-y-auto">
            <div class="flex min-h-full items-end justify-center p-4 text-center sm:items-center sm:p-0">
              <div class="relative transform overflow-hidden rounded-lg bg-white text-left shadow-xl transition-all sm:my-8 sm:w-full sm:max-w-lg">
                <div class="bg-white px-4 pb-4 pt-5 sm:p-6 sm:pb-4">
                  <div class="sm:flex sm:items-start">
                    <div class="mx-auto flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-full bg-red-100 sm:mx-0 sm:h-10 sm:w-10">
                      <svg
                        class="h-6 w-6 text-red-600"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke-width="1.5"
                        stroke="currentColor"
                        aria-hidden="true"
                      >
                        <path
                          stroke-linecap="round"
                          stroke-linejoin="round"
                          d="M12 9v3.75m-9.303 3.376c-.866 1.5.217 3.374 1.948 3.374h14.71c1.73 0 2.813-1.874 1.948-3.374L13.949 3.378c-.866-1.5-3.032-1.5-3.898 0L2.697 16.126zM12 15.75h.007v.008H12v-.008z"
                        />
                      </svg>
                    </div>
                    <div class="mt-3 text-center sm:ml-4 sm:mt-0 sm:text-left">
                      <h3
                        class="text-base font-semibold leading-6 text-gray-900"
                        id="modal-title"
                      >
                        Deactivate account
                      </h3>
                      <div class="mt-2">
                        <p class="text-sm text-gray-500">
                          Are you sure you want to deactivate your account? All
                          of your data will be permanently removed. This action
                          cannot be undone.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
                <div class="bg-gray-50 px-4 py-3 sm:flex sm:flex-row-reverse sm:px-6">
                  <button
                    // onClick={deleteId}
                    type="button"
                    class="inline-flex w-full justify-center rounded-md bg-red-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-red-500 sm:ml-3 sm:w-auto"
                  >
                    Deactivate
                  </button>
                  <button
                    // onClick={() => setModalRemove(false)}
                    type="button"
                    class="mt-3 inline-flex w-full justify-center rounded-md bg-white px-3 py-2 text-sm font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50 sm:mt-0 sm:w-auto"
                  >
                    Cancel
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      )} */}
    </Fragment>
  );
};

export default Owner;

/**
 * <div>
      <div>
        <h2 className="my-5 text-3xl font-bold">Management Owner Account</h2>
      </div>
      <table className="w-full bg-white table-auto">
        <thead>
          <tr className="flex w-full bg-gray-100">
            <th className="flex-1 p-2 text-black border ">ID</th>
            <th className="flex-1 p-2 text-black border ">Name</th>
            <th className="flex-1 p-2 text-black border ">Email</th>
            <th className="flex-1 p-2 text-black border ">Phone</th>
            <th className="flex-1 p-2 text-black border ">Address</th>
            <th className="flex-1 p-2 text-black border ">Tùy Chọn</th>
          </tr>
        </thead>
        <tbody>
          {owners.map((space, index) => (
            <tr key={index} className="flex items-center h-16">
              <td className="flex items-center justify-center flex-1 h-full px-2 border">
                {space?.ownerId?.id}
              </td>
              <td className="flex items-center justify-center flex-1 h-full px-2 border">
                {space?.ownerId?.name}
              </td>
              <td className="flex items-center justify-center flex-1 h-full px-2 border">
                {space?.ownerId?.email}
              </td>
              <td className="flex items-center justify-center flex-1 h-full px-2 border">
                {space?.ownerId?.phone}
              </td>
              <td className="flex items-center justify-center flex-1 h-full px-2 border">
                {space?.ownerId?.address}
              </td>
              <td className="flex items-center justify-center flex-1 h-full gap-4 px-2 border">
                <button
                  className="px-2 py-1 text-white bg-green-600 rounded-md hover:underline"
                  oncl
                >
                  Sửa
                </button>
                <button
                  className="px-2 py-1 text-white bg-red-600 rounded-md hover:underline"
                  onClick={deleteid}
                >
                  Xóa
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
 * 
 */
