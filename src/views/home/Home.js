import React from "react";
import ViewWrapper from "../../shared/components/ViewWrapper";

const Widgets = () => {
  return <span>This is a widget</span>;
};

const Home = (props) => {
  return (
    <ViewWrapper
      titleText="Ramalho Ortigão"
      widgets={<Widgets />}
    ></ViewWrapper>
  );
};

export default Home;
