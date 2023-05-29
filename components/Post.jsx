import Image from "next/image";
import React from "react";

const Post = ({ data }) => {
  return (
    <div className="w-full first:border-t border-b last:border-b-0 px-8 py-4">
      <div className="post__container flex gap-4 ">
        <Image
          src="/Images/user1.jpg"
          height={50}
          width={50}
          alt="user profile picture"
          className="rounded-full object-cover object-top max-h-[50px]"
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
              <Image
                src={data.image}
                height={300}
                width={300}
                alt="user profile picture"
                className=" rounded-3xl w-full max-h-[300px] object-cover object-top"
              />
            )}

            <div className="post__action flex items-center list-none gap-4">
              <li className="cursor-pointer">comment</li>{" "}
              <li className="cursor-pointer">like</li>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Post;
