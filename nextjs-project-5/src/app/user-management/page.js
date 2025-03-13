import { fetchUserActions } from "@/actions";
import AddNewUser from "@/components/add-new-user";
import SingleUserCard from "@/components/single-user-card";

async function UserManagement() {
  const ListOfUser = await fetchUserActions();
  console.log(ListOfUser);

  return (
    <div className="p-20 max-w-6xl">
      <div className="flex justify-between">
        <h1>User Management</h1>
        <AddNewUser />
      </div>
      <div className="mt-6">
        {ListOfUser?.data?.length > 0 ? (
          ListOfUser.data.map((userItem,index) => (
            <SingleUserCard key={userItem.id || index} user={userItem} />
          ))
        ) : (
          <h3>No Users Found! Please Create One</h3>
        )}
      </div>
    </div>
  );
}

export default UserManagement;
