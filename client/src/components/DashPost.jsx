import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { Table } from 'flowbite-react';
import { useSelector } from 'react-redux';

import { fetchData, handleDelete, showMoreHandle } from 'utils';
import DeleteModal from './DeleteModal';

const DashPost = () => {
  const { currentUser } = useSelector((state) => state.user);

  const [userPosts, setUserPosts] = useState([]);
  const [showMore, setShowMore] = useState(true);
  const [showModal, setShowModal] = useState(false);
  const [postIdToDelete, setPostIdToDelete] = useState('');

  useEffect(() => {
    if (currentUser.isAdmin) {
      fetchData('post/getPosts', setUserPosts, setShowMore, `?userId=${currentUser._id}`);
    }
  }, [currentUser._id]);

  const handleDeletePost = () => {
    handleDelete(postIdToDelete, setUserPosts, 'post', `post/deletePost`, setShowModal, currentUser._id);
  };

  const handleShowMore = () => {
    showMoreHandle('posts', setUserPosts, userPosts.length, 'post/getPosts', setShowMore, `&userId=${currentUser._id}`);
  };

  return (
    <div className="table-auto overflow-x-scroll w-full md:mx-auto p-3 scrollbar scrollbar-track-slate-100 scrollbar-thumb-slate-300 dark:scrollbar-track-slate-700 dark:scrollbar-thumb-slate-500">
      {currentUser.isAdmin && userPosts.length > 0 ? (
        <>
          <Table
            hoverable
            className="shadow-md"
          >
            <Table.Head>
              <Table.HeadCell>Date updated</Table.HeadCell>
              <Table.HeadCell>Post image</Table.HeadCell>
              <Table.HeadCell>Post title</Table.HeadCell>
              <Table.HeadCell>Category</Table.HeadCell>
              <Table.HeadCell>Delete</Table.HeadCell>
              <Table.HeadCell>Edit</Table.HeadCell>
            </Table.Head>
            {userPosts.map((post) => (
              <Table.Body
                key={post._id}
                className="divide-y"
              >
                <Table.Row className="bg-white dark:border-gray-700 dark:bg-gray-800">
                  <Table.Cell>{new Date(post.updatedAt).toLocaleDateString()}</Table.Cell>
                  <Table.Cell>
                    <Link to={`/post/${post.slug}`}>
                      <img
                        src={post.image}
                        alt={post.title}
                        className="w-20 h-10 object-cover bg-gray-500"
                      />
                    </Link>
                  </Table.Cell>
                  <Table.Cell>
                    <Link
                      className="font-medium text-gray-900 dark:text-white"
                      to={`/post/${post.slug}`}
                    >
                      {post.title}
                    </Link>
                  </Table.Cell>
                  <Table.Cell>{post.category}</Table.Cell>
                  <Table.Cell>
                    <span
                      onClick={() => {
                        setShowModal(true);
                        setPostIdToDelete(post._id);
                      }}
                      className="font-medium text-red-500 hover:underline cursor-pointer"
                    >
                      Delete
                    </span>
                  </Table.Cell>
                  <Table.Cell>
                    <Link
                      className="text-teal-500 hover:underline"
                      to={`/update-post/${post._id}`}
                    >
                      <span>Edit</span>
                    </Link>
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
        <p>You have no posts yet!</p>
      )}
      <DeleteModal
        showModal={showModal}
        setShowModal={setShowModal}
        handleDelete={handleDeletePost}
        text="Are you sure you want to delete this post?"
      />
    </div>
  );
};

export default DashPost;
