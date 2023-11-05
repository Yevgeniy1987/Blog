"use client";

import { POSTS } from "@/graphql/queries/POSTS_Q";
import { getClient } from "@/lib/apolloClient";
import { FormEvent, useState } from "react";


export function HeaderSearch() {
  async function getPostInfo(title: string) {
    const { data } = await getClient().query({
      query: POSTS,
      variables: { title },
    });

    const postInfo = data.posts[0];

    return postInfo;
  }

  const searchPost = async (e: FormEvent) => {
    e.preventDefault();
    const form = e.target as typeof e.target & {
      postTitle: HTMLInputElement;
    };
    const postTitle = form.postTitle.value.trim();

    const post = await getPostInfo(postTitle);

    if (!post) {
      return "Post with such title doesn't exist";
    }
  };
  return (
    <form className="flex gap-1" onSubmit={searchPost}>
      <input
        type="search"
        name="postTitle"
        className="text-black"
        placeholder="Filter by sku"
      />
      <button type="submit">&#128269;</button>
    </form>
  );
}
