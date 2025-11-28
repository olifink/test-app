import { Link, routes } from '@cedarjs/router'
import { Metadata } from "@cedarjs/web";
import TasksCell from 'src/components/TasksCell';

const HomePage = () => {
  return (
    <>
      <Metadata title="Home" description="Home page" />

      <h1>HomePage</h1>
      <TasksCell/>
      <Link to={routes.logout()}>logout</Link>
    </>
  );
};

export default HomePage;
