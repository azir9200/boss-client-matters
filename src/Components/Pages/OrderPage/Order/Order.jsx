
import { useState } from "react";
import { useSearchParams } from "react-router-dom";
import useMenu from "../../../../Hook/useMenu";
import Cover from "../../../Shared/Cover/Cover";
import orderCover from '../../../../assets/shop/banner2.jpg'
import { Tab, TabList, TabPanel, Tabs } from "react-tabs";
import 'react-tabs/style/react-tabs.css';
import OrderTab from "../OrderTab/OrderTab";

const Order = () => {
  const categories = ['soup', 'salad', 'pizza', 'dessert', 'drinks'];
  const { category } = useSearchParams();
  const initialIndex = categories.indexOf(category);
  const [tabIndex, setTabIndex] = useState(initialIndex);
  const [menus] = useMenu();



  const dessert = menus.filter(item => item.category === 'dessert');
  const soup = menus.filter(item => item.category === 'soup');
  const salad = menus.filter(item => item.category === 'salad');
  const pizza = menus.filter(item => item.category === 'pizza');
  const drinks = menus.filter(item => item.category === 'drinks');


  return (
    <div>
      <Cover img={orderCover} title={'Order Food'} ></Cover>
      <div>
        <Tabs defaultIndex={tabIndex} onSelect={(index) => setTabIndex(index)}>
          <TabList>
            <Tab>Soup</Tab>
            <Tab>Salad</Tab>
            <Tab>Pizza</Tab>
            <Tab>Desserts</Tab>
            <Tab>Drinks</Tab>
          </TabList>
          <TabPanel>
            <OrderTab items={soup}></OrderTab>
          </TabPanel>
          <TabPanel>
            <OrderTab items={salad}></OrderTab>
          </TabPanel>
          <TabPanel>
            <OrderTab items={pizza}></OrderTab>
          </TabPanel>
          <TabPanel>
            <OrderTab items={dessert}></OrderTab>
          </TabPanel>
          <TabPanel>
            <OrderTab items={drinks}></OrderTab>
          </TabPanel>

        </Tabs>
      </div>
    </div>
  );
};

export default Order;