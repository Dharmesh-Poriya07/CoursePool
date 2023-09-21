"use client";
import React, { FC, useState } from "react";
import Heading from "./utils/Heading";
import Header from "./components/Header";
import Hero from "./components/Route/Hero.tsx";

interface props {}

const Page: FC<props> = (props) => {
  const [open, setOpen] = useState(false);
  const [activeItem, setActiveItem] = useState(0);
  return (
    <div>
      <Heading
        title="CoursePool"
        description="CoursePool is a dynamic online e-learning platform that offers a wide range of courses to students of all ages and backgrounds"
        keywords="Programming, App Development, Web Development, DevOps, Engineering, Machine Learning, UPSC, Cyber Security, Maths, Gate, Jee, Neet"
      />
      <Header open={open} setOpen={setOpen} activeItem={activeItem} />
      <Hero />
    </div>
  );
};

export default Page;
