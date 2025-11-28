import type { TasksQuery, TasksQueryVariables } from "types/graphql";

import type {
  CellSuccessProps,
  CellFailureProps,
  TypedDocumentNode,
} from "@cedarjs/web";

export const QUERY: TypedDocumentNode<TasksQuery, TasksQueryVariables> = gql`
  query TasksQuery {
    tasks {
      id
    }
  }
`;

export const Loading = () => <div>Loading...</div>;

export const Empty = () => <div>Empty</div>;

export const Failure = ({ error }: CellFailureProps<TasksQueryVariables>) => (
  <div style={{ color: "red" }}>Error: {error?.message}</div>
);

export const Success = ({
  tasks,
}: CellSuccessProps<TasksQuery, TasksQueryVariables>) => {
  return (
    <ul>
      {tasks.map((item) => {
        return <li key={item.id}>{JSON.stringify(item)}</li>;
      })}
    </ul>
  );
};
