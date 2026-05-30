import Test1, { metadata as test1Metadata } from "$lib/yap/test1.svx";
import Test2, { metadata as test2Metadata } from "$lib/yap/test2.svx";
import type { Component } from "svelte";

export type Post = {
  component: Component;
  title: string;
  date: Date;
  raw: string;
};

const posts: Post[] = [
  {
    component: Test1,
    title: test1Metadata.title,
    date: new Date(test1Metadata.date),
    raw: test1Metadata.raw,
  },
  {
    component: Test2,
    title: test2Metadata.title,
    date: new Date(test2Metadata.date),
    raw: test2Metadata.raw,
  },
];

export default posts;
