import Layout from '../layout/Layout';
import Commodities from '../components/commodities/commodities';
import FullItem from "@/components/fullItem/FullItem";
import {useState} from "react";
import commodity from "@/components/commodities/commodity.prop";

export default function Home() {
  return (
    <Layout>
      <Commodities/>
    </Layout>
  )
}
