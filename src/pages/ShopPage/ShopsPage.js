import React from "react";
import Navigation from "../../components/Header/Navigation";
import ShopsList from "../../components/Shop/ShopsList";
import ProductsList from "../../components/Shop/ProductsList";

export default function ShopsPage(){
    return (
      <>
        <Navigation />

        <div>
          <ShopsList></ShopsList>
        </div>
        <div>
          <ProductsList></ProductsList>
        </div>

        <div className="wrapper">Shops page component</div>
      </>
    );
}

