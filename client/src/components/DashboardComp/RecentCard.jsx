import { Button, Table } from 'flowbite-react';
import React from 'react';
import { Link } from 'react-router-dom';

const RecentCard = ({ title, link, data, dataType }) => {
  return (
    <div className="flex flex-col w-full md:w-96 shadow-md p-2 rounded-md dark:bg-gray-800">
      <div className="flex justify-between p-3 text-sm font-semibold">
        <h1 className="text-center p-2">{title}</h1>
        <Button
          outline
          gradientDuoTone="purpleToPink"
        >
          <Link to={link}>See all</Link>
        </Button>
      </div>
      <Table hoverable>
        <Table.Head>
          <Table.HeadCell>{dataType === 'user' ? 'User image' : dataType === 'comment' ? 'Comment Content' : 'Post image'}</Table.HeadCell>
          <Table.HeadCell>{dataType === 'user' ? 'Username' : dataType === 'likes' ? 'Comment Content' : 'Post Title'}</Table.HeadCell>
        </Table.Head>
        {data &&
          data.map((item) => (
            <Table.Body
              key={item._id}
              className="divide-y"
            >
              <Table.Row className="bg-white dark:border-gray-700 dark:bg-gray-800">
                <Table.Cell>
                  {dataType === 'user' || dataType === 'post' ? (
                    <img
                      src={dataType === 'user' ? item.profilePicture : item.image}
                      alt={dataType === 'user' ? item.username : item.title}
                      className="w-10 h-10 rounded-full bg-gray-500"
                    />
                  ) : (
                    <p className="line-clamp-2">{item.content}</p>
                  )}
                </Table.Cell>

                <Table.Cell>{dataType === 'user' ? item.username : dataType === 'comment' ? item.numberOfLikes : item.title}</Table.Cell>
              </Table.Row>
            </Table.Body>
          ))}
      </Table>
    </div>
  );
};

export default RecentCard;
