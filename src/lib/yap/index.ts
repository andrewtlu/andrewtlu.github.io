import Welcome, { metadata as welcomeMeta } from "$lib/yap/welcome.svx";
import type { Component } from "svelte";

export type Post = {
  component: Component;
  title: string;
  date: Date;
  posted: Date;
  raw: string;
};

const posts: Post[] = [
  {
    component: Welcome,
    title: welcomeMeta.title,
    date: new Date(welcomeMeta.date),
    posted: new Date(welcomeMeta.posted),
    raw: welcomeMeta.raw,
  },
];

export default posts;
