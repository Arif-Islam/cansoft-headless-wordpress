import { Inter } from "next/font/google";
import Head from "next/head";
import Navbar from "../components/Navbar";
import Hero from "@/components/Hero";
import Card from "@/components/Card";
import Footer from "@/components/Footer";
import { useEffect, useState } from "react";
import { getAllPosts } from "@/lib/posts";

const inter = Inter({ subsets: ["latin"] });

import React from "react";
import { getMenu } from "@/lib/menu";

export async function getStaticProps() {
  const allPosts = await getAllPosts();
  const menuItems = await getMenu();
  return {
    props: {
      posts: allPosts,
      menuItems: menuItems,
    },
    revalidate: 60,
  };
}

export default function Home({ posts, menuItems }) {
  const heroPost = posts?.nodes?.find((item) => {
    return item.categories.nodes.some((category) => category.slug === "hero");
  });

  const blogPost = posts?.nodes?.filter((item) => {
    return item.categories.nodes.some((category) => category.slug === "blog");
  });

  const footer = posts?.nodes?.find((item) => {
    return item.categories.nodes.some((category) => category.slug === "footer");
  });

  return (
    <>
      <Head>
        <link rel="preconnect" href="https://arifultest.csoft.ca/" />
        <title key="pagetitle">Welcome To HomePage</title>
        <meta
          name="description"
          content="homepage - jumbotron bootstrap"
          key="metadescription"
        />
      </Head>
      <div>
        <Navbar menuItems={menuItems} />
        <Hero heroPost={heroPost} />
        <div
          className={` ${
            blogPost?.length < 7 && blogPost?.length > 3
              ? "h-[1600px] md:h-[820px] lg:h-[660px]"
              : "h-[850px] md:h-[410px] lg:h-[330px]"
          } `}
        >
          <div className="w-auto md:w-[720px] lg:w-[960px] xl:w-[1140px] mx-auto px-[15px] py-6 flex flex-wrap gap-4 items-start justify-start">
            {blogPost?.map((post) => (
              <Card key={post.id} post={post} />
            ))}
          </div>
        </div>

        <Footer footer={footer} />
      </div>
    </>
  );
}
