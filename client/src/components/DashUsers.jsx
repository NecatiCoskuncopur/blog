import { useEffect, useState } from 'react';
import { Table } from 'flowbite-react';
import { useSelector } from 'react-redux';
import { FaCheck, FaTimes } from 'react-icons/fa';

import { fetchData, handleDelete, showMoreHandle } from 'utils';
import DeleteModal from './DeleteModal';

const DashUsers = () => {
  const { currentUser } = useSelector((state) => state.user);

  const [users, setUsers] = useState([]);
  const [showMore, setShowMore] = useState(true);
  const [showModal, setShowModal] = useState(false);
  const [userIdToDelete, setUserIdToDelete] = useState('');

  useEffect(() => {
    if (currentUser.isAdmin) {
      fetchData('user/getUsers', setUsers, setShowMore);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [currentUser._id]);

  const handleDeleteUser = () => {
    handleDelete(userIdToDelete, setUsers, 'user', 'user/deleteUser', setShowModal);
  };

  const handleShowMore = () => {
    showMoreHandle('users', setUsers, users.length, 'user/getUsers', setShowMore);
  };

  return (
    <div className="table-auto overflow-x-scroll w-full md:mx-auto p-3 scrollbar scrollbar-track-slate-100 scrollbar-thumb-slate-300 dark:scrollbar-track-slate-700 dark:scrollbar-thumb-slate-500">
      {currentUser.isAdmin && users.length > 0 ? (
        <>
          <Table
            hoverable
            className="shadow-md"
          >
            <Table.Head>
              <Table.HeadCell>Date created</Table.HeadCell>
              <Table.HeadCell>User image</Table.HeadCell>
              <Table.HeadCell>Username</Table.HeadCell>
              <Table.HeadCell>Email</Table.HeadCell>
              <Table.HeadCell>Admin</Table.HeadCell>
              <Table.HeadCell>Delete</Table.HeadCell>
            </Table.Head>
            {users.map((user) => (
              <Table.Body
                className="divide-y"
                key={user._id}
              >
                <Table.Row className="bg-white dark:border-gray-700 dark:bg-gray-800">
                  <Table.Cell>{new Date(user.createdAt).toLocaleDateString()}</Table.Cell>
                  <Table.Cell>
                    <img
                      src={user.profilePicture}
                      alt={user.username}
                      className="w-10 h-10 object-cover bg-gray-500 rounded-full"
                    />
                  </Table.Cell>
                  <Table.Cell>{user.username}</Table.Cell>
                  <Table.Cell>{user.email}</Table.Cell>
                  <Table.Cell>{user.isAdmin ? <FaCheck className="text-green-500" /> : <FaTimes className="text-red-500" />}</Table.Cell>
                  <Table.Cell>
                    <span
                      onClick={() => {
                        setShowModal(true);
                        setUserIdToDelete(user._id);
                      }}
                      className="font-medium text-red-500 hover:underline cursor-pointer"
                    >
                      Delete
                    </span>
                  </Table.Cell>
                </Table.Row>
              </Table.Body>
            ))}
          </Table>
          {showMore && (
            <button
              onClick={handleShowMore}
              className="w-full text-teal-500 self-center text-sm py-7"
            >
              Show more
            </button>
          )}
        </>
      ) : (
        <p>You have no users yet!</p>
      )}
      <DeleteModal
        showModal={showModal}
        setShowModal={setShowModal}
        handleDelete={handleDeleteUser}
        text="Are you sure you want to delete this user?"
      />
    </div>
  );
};

export default DashUsers;
