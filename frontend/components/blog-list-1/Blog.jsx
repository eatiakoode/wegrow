'use client'
import Link from "next/link";
// import blogContent from "../../data/blogs";
import Image from "next/image";
import { getBlogTableData } from "@/api/frontend/blog";
import { useState, useEffect } from "react";

import { useRouter } from "next/navigation";

const Blog = () => {
   const router = useRouter();
    const [blogs, setBlog] = useState([]);
          
    const fetchBlog = async () => {
      const data = await getBlogTableData();
      console.log("blogdata")
      console.log(data)
      setBlog(data);
    };
    useEffect(() => {
      fetchBlog();
    }, []); 
  return (
    <>
      {blogs.slice(0, 3).map((item,index) => (
        <div className="for_blog feat_property" key={item._id}>
          <div className="thumb">
            <Link href={`/blog-details/${item.slug}`}>
              <Image
                width={731}
                height={438}
                priority
                className="img-whp cover w-100"
                src={
                  item.logoimage
                    ? `${process.env.NEXT_PUBLIC_API_URL}${item.logoimage}`
                    : "/default-placeholder.jpg"
                }
                alt= {`${item.title}${index + 1}`}
                unoptimized 
              />
            </Link>
            <div className="blog_tag">{item.postMeta}</div>
          </div>
          {/* End .thumb */}

          <div className="details">
            <div className="tc_content">
              <h4 className="mb15">
                <Link href={`/blog-details/${item.slug}`}>{item.title}</Link>
              </h4>
              <ul className="bpg_meta mb10">
                    <li className="list-inline-item">
                      <a href="#">
                        <i className="flaticon-calendar"></i>
                      </a>
                    </li>
                    <li className="list-inline-item">
                      <a href="#">{new Date(item.createdAt).toLocaleDateString('en-US', {
    month: 'short',
    day: '2-digit',
    year: 'numeric',
  })}</a>
                    </li>
                  </ul>
                  <p>{item.description.slice(0, 65)}</p>
            </div>
            {/* End .tc_content */}

            <div className="fp_footer">
              <ul className="fp_meta float-start mb0">
                {/* <li className="list-inline-item">
                  <a href="#">
                    <Image
                      width={40}
                      height={40}
                      src={item.posterAvatar}
                      alt={item.posterAvatar}
                    />
                  </a>
                </li> */}
                {/* <li className="list-inline-item">
                  <a href="#">{item.posterName}</a>
                </li> */}
                {/* <li className="list-inline-item">
                  <a href="#">
                    <span className="flaticon-calendar pr10"></span>{" "}
                    {item.postedDate}
                  </a>
                </li> */}
              </ul>
              <a className="fp_pdate float-end text-thm"  href={`/blog-detail/${item._id}`}>
                    Read More <span className="flaticon-next"></span>
                  </a>
            </div>
            {/* End fb_footer */}
          </div>
          {/* End .thumb */}
        </div>
      ))}
    </>
  );
};

export default Blog;
