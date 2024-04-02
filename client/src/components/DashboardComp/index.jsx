import { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { HiAnnotation, HiDocumentText, HiOutlineUserGroup } from 'react-icons/hi';

import { fetchData } from 'utils';
import TotalCard from './TotalCard';
import RecentCard from './RecentCard';

const DashboardComp = () => {
  const { currentUser } = useSelector((state) => state.user);

  const [users, setUsers] = useState({});
  const [posts, setPosts] = useState({});
  const [comments, setComments] = useState({});

  useEffect(() => {
    const fetchUsers = () => {
      fetchData('user/getUsers?limit=5', setUsers);
    };

    const fetchPosts = () => {
      fetchData('post/getPosts?limit=5', setPosts);
    };

    const fetchComments = () => {
      fetchData('comment/getComments?limit=5', setComments);
    };

    if (currentUser.isAdmin) {
      fetchUsers();
      fetchPosts();
      fetchComments();
    }
  }, [currentUser]);

  const cardData = [
    {
      title: 'Total Users',
      total: users.totalUsers,
      lastMonth: users.lastMonthUsers,
      icon: <HiOutlineUserGroup className="bg-teal-600 text-white rounded-full text-5xl p-3 shadow-lg" />,
    },
    {
      title: 'Total Comments',
      total: comments.totalComments,
      lastMonth: comments.lastMonthComment,
      icon: <HiAnnotation className="bg-indigo-600 text-white rounded-full text-5xl p-3 shadow-lg" />,
    },
    {
      title: 'Total Posts',
      total: comments.totalComments,
      lastMonth: comments.lastMonthComment,
      icon: <HiDocumentText className="bg-lime-600 text-white rounded-full text-5xl p-3 shadow-lg" />,
    },
  ];

  return (
    <div className="p-3 md:mx-auto">
      <div className="flex flex-wrap gap-4 justify-center">
        {cardData.map((item, index) => (
          <TotalCard
            key={index}
            item={item}
          />
        ))}
      </div>

      <div className="flex flex-wrap  gap-4 py-3 mx-auto justify-center">
        <RecentCard
          title="Recent users"
          link="/dashboard?tab=users"
          data={users.users}
          dataType="user"
        />
        <RecentCard
          title="Recent comments"
          link="/dashboard?tab=comments"
          data={comments.comments}
          dataType="comment"
        />
        <RecentCard
          title="Recent posts"
          link="/dashboard?tab=posts"
          data={posts.posts}
          dataType="post"
        />
      </div>
    </div>
  );
};

export default DashboardComp;
