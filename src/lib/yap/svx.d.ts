declare module "*.svx" {
  import type { Component } from "svelte";

  const component: Component;
  export default component;

  export const metadata: {
    title: string;
    date: string;
    raw: string;
  };
}

/*
Example svx post:

```svx
---
title: testing
date: 2026-05-30T18:06:00Z
raw: >
    # foo

    bar
---

# foo

bar
```

title: string display title for the post
date: iso 8601 format string date of the post
raw: indented content for the search functionality
*/
