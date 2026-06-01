import Welcome, { metadata as welcomeMeta } from "$lib/yap/welcome.svx";
import MakingOf, { metadata as makingOfMeta } from "$lib/yap/making-of.svx";
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
    component: MakingOf,
    title: makingOfMeta.title,
    date: new Date(makingOfMeta.date),
    posted: new Date(makingOfMeta.posted),
    raw: makingOfMeta.raw,
  },
];

export default posts;
