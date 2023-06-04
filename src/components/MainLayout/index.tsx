import Sidebar from '../Sidebar';

const MainLayout = (props: any) => {
  return (
    <>
      <Sidebar />
      {props.children}
    </>
  );
};

export default MainLayout;
