import React from 'react'
import Navbar from '../../Components/Navbar/Navbar';
import PageCard from '../../Components/PageCard/PageCard';

const Contact = () => {
  return (
    <div>
      <Navbar />
      <PageCard
        title={"Contact Page"}
        desc={
          "Contact page."
        }
      />
    </div>
  );
}

export default Contact