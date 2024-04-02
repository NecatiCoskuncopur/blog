import { useEffect, useState } from 'react';
import { Table } from 'flowbite-react';
import { useSelector } from 'react-redux';

import { fetchData, handleDelete, showMoreHandle } from 'utils';
import DeleteModal from './DeleteModal';

const DashComments = () => {
  const { currentUser } = useSelector((state) => state.user);

  const [comments, setComments] = useState([]);
  const [showMore, setShowMore] = useState(true);
  const [showModal, setShowModal] = useState(false);
  const [commentIdToDelete, setCommentIdToDelete] = useState('');

  useEffect(() => {
    if (currentUser.isAdmin) {
      fetchData('comment/getComments', setComments, setShowMore);
    }
  }, [currentUser._id]);

  const handleDeleteComment = () => {
    handleDelete(commentIdToDelete, setComments, 'comment', 'comment/deleteComment', setShowModal);
  };

  const handleShowMore = () => {
    showMoreHandle('comments', setComments, comments.length, 'comment/getComments', setShowMore);
  };

  return (
    <div className="table-auto overflow-x-scroll w-full md:mx-auto p-3 scrollbar scrollbar-track-slate-100 scrollbar-thumb-slate-300 dark:scrollbar-track-slate-700 dark:scrollbar-thumb-slate-500">
      {currentUser.isAdmin && comments.length > 0 ? (
        <>
          <Table
            hoverable
            className="shadow-md"
          >
            <Table.Head>
              <Table.HeadCell>Date updated</Table.HeadCell>
              <Table.HeadCell>Comment content</Table.HeadCell>
              <Table.HeadCell>Number of likes</Table.HeadCell>
              <Table.HeadCell>PostId</Table.HeadCell>
              <Table.HeadCell>UserId</Table.HeadCell>
              <Table.HeadCell>Delete</Table.HeadCell>
            </Table.Head>
            {comments.map((comment) => (
              <Table.Body
                className="divide-y"
                key={comment._id}
              >
                <Table.Row className="bg-white dark:border-gray-700 dark:bg-gray-800">
                  <Table.Cell>{new Date(comment.updatedAt).toLocaleDateString()}</Table.Cell>
                  <Table.Cell>{comment.content}</Table.Cell>
                  <Table.Cell>{comment.numberOfLikes}</Table.Cell>
                  <Table.Cell>{comment.postId}</Table.Cell>
                  <Table.Cell>{comment.userId}</Table.Cell>
                  <Table.Cell>
                    <span
                      onClick={() => {
                        setShowModal(true);
                        setCommentIdToDelete(comment._id);
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
        <p>You have no comments yet!</p>
      )}
      <DeleteModal
        showModal={showModal}
        setShowModal={setShowModal}
        handleDelete={handleDeleteComment}
        text="Are you sure you want to delete this comment?"
      />
    </div>
  );
};

export default DashComments;
