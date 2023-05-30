import { CustomizeImage } from "@components";
import React from "react";
import { BiComment, BiHeart } from "react-icons/bi";

const Post = ({ data }) => {
  return (
    <div className="w-full first:border-t border-b last:border-b-0 px-8 py-4">
      <div className="post__container flex gap-4 ">
        <CustomizeImage
          src="/Images/user1.jpg"
          height={40}
          width={40}
          alt="user profile picture"
          className="rounded-full object-cover object-top max-h-[40px]"
        />
        <div className="post__data">
          <div className="userdata">
            <p className="flex items-center gap-2">
              {data.name}
              <span className="text-gray-400">@{data.username}</span>{" "}
              <i className="text-gray-400">.</i>
              <span className="text-gray-400">1 min</span>
            </p>
          </div>
          <div className="post__content flex flex-col gap-4">
            <p className="text-gray-600">{data.text}</p>
            {data.image && (
              <CustomizeImage
                src={data.image}
                height={300}
                width={300}
                alt="user profile picture"
                className="rounded-3xl w-full max-h-[300px] object-cover object-top"
              />
            )}

            <div className="post__action flex items-center list-none gap-4">
              <li className="cursor-pointer">
                <BiComment />
              </li>
              <li className="cursor-pointer">
                <BiHeart />
              </li>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Post;
