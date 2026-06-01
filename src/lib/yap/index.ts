import Welcome, { metadata as welcomeMeta } from "$lib/yap/welcome.svx";
import MakingOfPt1, { metadata as makingOfMetaPt1 } from "$lib/yap/making-of-pt1.svx";
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
  {
    component: MakingOfPt1,
    title: makingOfMetaPt1.title,
    date: new Date(makingOfMetaPt1.date),
    posted: new Date(makingOfMetaPt1.posted),
    raw: makingOfMetaPt1.raw,
  },
];

export default posts;
