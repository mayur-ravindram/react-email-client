export const routes = [
    {
      path: "/inbox",
      exact: true,
      sidebar: () => <h1>inbox</h1>,
      main: () => <h2>Inbox</h2>
    },
    {
      path: "/outbox",
      sidebar: () => <div>outbox</div>,
      main: () => <h2>Outbox</h2>
    },
    {
      path: "/sent",
      sidebar: () => <div>sent</div>,
      main: () => <h2>Sent</h2>
    },
    {
      path: "/trash",
      sidebar: () => <div>trash</div>,
      main: () => <h2>Trash</h2>
    }
  ];