// Define your own mock data here:
export const standard = (/* vars, { ctx, req } */) => ({
  tasks: [
    {
      __typename: "Task" as const,
      id: 42,
    },
    {
      __typename: "Task" as const,
      id: 43,
    },
    {
      __typename: "Task" as const,
      id: 44,
    },
  ],
});
