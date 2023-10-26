import Image from "next/image";
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
  const [nav, setNav] = useState();
  const [footer, setFooter] = useState([]);
  const [title, setTitle] = useState("");
  const [menus, setMenus] = useState([]);
  const [dropdownMenus, setDropdownMenus] = useState([]);

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

    const navbar = posts?.nodes?.find((item) => {
      return item.categories.nodes.some((category) => category.slug === "nav");
    });

    const last = posts?.nodes?.find((item) => {
      return item.categories.nodes.some(
        (category) => category.slug === "footer"
      );
    });

    setHeroPost(hero);
    setBlogPost(blogs);
    setNav(navbar);

    setFooter(last);
    setTitle(navbar?.title);

    const matches = navbar?.excerpt.match(/<p>(.*?)\.(.*?)<\/p>/);

    if (matches && matches.length >= 3) {
      const elementsArray = matches[1]
        .trim()
        .split(",")
        .map((item) => item.trim());

      setMenus(elementsArray);

      const actionsArray = matches[2]
        .trim()
        .split(",")
        .map((item) => item.trim());

      setDropdownMenus(actionsArray);
    }
  }, [posts?.nodes]);

  return (
    <>
      <Head>
        <title key="pagetitle">Welcome To HomePage</title>
        <meta
          name="description"
          content="homepage - jumbotron bootstrap"
          key="metadescription"
        />
      </Head>
      <div>
        <Navbar title={title} menus={menus} dropdownMenus={dropdownMenus} />
        <Hero heroPost={heroPost} />
        <div className="">
          <div className="md:w-[720px] lg:w-[960px] xl:w-[1140px] mx-auto px-[15px] py-6 flex flex-wrap gap-4 items-start justify-start">
            {blogPost?.map((post) => (
              <Card key={post.id} post={post} />
            ))}
          </div>
        </div>
        <Footer footer={footer} />
      </div>
    </>
  );
};

export default Home;
