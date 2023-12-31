"use client";

import Link from "next/link";
import { BsArrowRight } from "react-icons/bs";
import { MotionProvider } from "../MotionProvider";

interface PostListProps {
  posts: {
    id: number;
    date: string;
    title: string;
    description: string;
  }[];
}

export function PostList({ posts }: PostListProps) {
  const firstThreePosts = posts.slice(0, 3);

  return (
    <MotionProvider
      delay={0.4}
      amount={0.3}
      className="flex flex-col items-center"
    >
      <div className="flex flex-col xl:flex-row justify-between gap-12 py-10 xl:pt-16 xl:pb-24 border-t border-white/10 xs:max-w-sm">
        {firstThreePosts.map((post) => {
          const { id, date, title, description } = post;
          return (
            <div className="flex-1" key={id}>
              <div className="text-accent-default font-bold mb-1">{date}</div>

              <div className="text-xl font-medium mb-4">{title}</div>

              <p className="text-white/30 mb-6 font-light text-justify">
                {description}
              </p>

              <Link href={"#"} className="flex items-center gap-x-2 group hover:font-medium">
                Read more
                <BsArrowRight className="text-xl group-hover:ml-1 transition-all" />
              </Link>
            </div>
          );
        })}
      </div>
      <button className="btn btn-lg btn-accent">View all posts</button>
    </MotionProvider>
  );
}
