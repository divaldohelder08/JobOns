import React from "react";

type CommentData = {
  children: React.ReactNode;
  person: string;
};



export default function Comment({ children, person }: CommentData) {
  return (
    <div className="hidden rs:flex flex-1 bg-background relative   h-full flex-col p-10  dark:border-r">
      <div className="relative z-20 mt-auto text-white">
        <blockquote className="space-y-2">
          <p className="text-lg">
            &ldquo;
            {children}.&rdquo;
          </p>
          <footer className="text-sm">{person}</footer>
        </blockquote>
      </div>
    </div>
  );
}
