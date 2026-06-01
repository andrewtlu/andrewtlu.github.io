declare module "*.svx" {
  import type { Component } from "svelte";

  const component: Component;
  export default component;

  export const metadata: {
    title: string;
    date: string;
    posted: string;
    raw: string;
  };
}

/*
Example svx post:

```svx
---
title: testing
date: !!str 2026-05-30T18:06:00Z
posted: !!str 2026-06-01T11:30:00Z;
raw: >
    # foo

    bar
---

# foo

bar
```

title: string display title for the post
date: iso 8601 format string date of the post -- !!str forces parser to parse as string, otherwise default wipes timezone!
posted: actual posting time -- see above note
raw: indented content for the search functionality
*/
