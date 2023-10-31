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

const Home = () => {
  const [posts, setPosts] = useState([]);
  const [heroPost, setHeroPost] = useState([]);
  const [blogPost, setBlogPost] = useState([]);
  const [footer, setFooter] = useState([]);
  const [load, setLoad] = useState(false);

  useEffect(() => {
    const fetchPosts = async () => {
      const allPosts = await getAllPosts();
      setPosts(allPosts);
    };
    fetchPosts();
  }, []);

  useEffect(() => {
    const hero = posts?.nodes?.find((item) => {
      return item.categories.nodes.some((category) => category.slug === "hero");
    });

    const blogs = posts?.nodes?.filter((item) => {
      return item.categories.nodes.some((category) => category.slug === "blog");
    });

    const last = posts?.nodes?.find((item) => {
      return item.categories.nodes.some(
        (category) => category.slug === "footer"
      );
    });

    setHeroPost(hero);
    setBlogPost(blogs);
    setFooter(last);
    setLoad(true);
  }, [posts?.nodes]);

  return (
    <>
      <Head>
        <link rel="preconnect" href="https://arifultest.csoft.ca/" />
        {/* <link rel="manifest" href="manifest.json" /> */}
        <title key="pagetitle">Welcome To HomePage</title>
        <meta
          name="description"
          content="homepage - jumbotron bootstrap"
          key="metadescription"
        />
      </Head>
      <div>
        <Navbar />
        <Hero heroPost={heroPost} />
        <div
          className={` ${
            blogPost?.length < 7 &&
            blogPost?.length > 3 &&
            "h-[1600px] md:h-[820px] lg:h-[660px]"
          } h-[850px] md:h-[410px] lg:h-[330px]`}
        >
          <div className="md:w-[720px] lg:w-[960px] xl:w-[1140px] mx-auto px-[15px] py-6 flex flex-wrap gap-4 items-start justify-start">
            {blogPost?.map((post) => (
              <Card key={post.id} post={post} />
            ))}
          </div>
        </div>
        {/* <div
          className={`${
            blogPost?.length === 0 && "mt-[850px] md:mt-[410px] lg:mt-[330px]"
          }`}
        >
          <Footer footer={footer} />
        </div> */}
        <Footer footer={footer} />
      </div>
    </>
  );
};

export default Home;
