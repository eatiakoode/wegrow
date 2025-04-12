import Link from "next/link";
import blogs from "../../data/blogs";
import Image from "next/image";

const Blogs = () => {
  return (
    <>
      {blogs.slice(0, 3).map((item) => (
        <div className="col-md-6 col-lg-4 col-xl-4" key={item.id}>
          {/* <div className="for_blog feat_property">
            <div className="thumb">
              <Link href={`/blog-details/${item.id}`}>
                <Image
                  width={343}
                  height={220}
                  className="img-whp w-100 h-100 cover"
                  src={item.img}
                  alt="bh1.jpg"
                />
              </Link>
            </div>
            <div className="details">
              <div className="tc_content">
                <p className="text-thm">{item.postMeta}</p>
                <h4>
                  <Link href={`/blog-details/${item.id}`}>{item.title}</Link>
                </h4>
              </div>
              <div className="fp_footer">
                <ul className="fp_meta float-start mb0">
                  <li className="list-inline-item">
                    <Link href="/agent-v2">
                      <Image
                        width={40}
                        height={40}
                        src={item.posterAvatar}
                        alt="pposter1.png"
                      />
                    </Link>
                  </li>
                  <li className="list-inline-item">
                    <Link href="/agent-v2">{item.posterName}</Link>
                  </li>
                </ul>
                <a className="fp_pdate float-end" href="#">
                  {item.postedDate}
                </a>
              </div>
            </div>
          </div> */}
          <div className="for_blog feat_property">
              <div className="thumb">
                <Link href={`/blog-details/${item.id}`}>
                  <Image
                    width={343}
                    height={220}
                    className="img-whp w-100 cover"
                    src={item.img}
                    alt={item.img}
                  />
                </Link>
                <div className="blog_tag">{item.postMeta}</div>
              </div>
              {/* End .thumb */}

              <div className="details">
                <div className="tc_content">
                  <h4 className="mb15">
                    <Link href={`/blog-details/${item.id}`}>{item.title}</Link>
                  </h4>
                  <ul className="bpg_meta mb10">
                    <li className="list-inline-item">
                      <a href="#">
                        <i className="flaticon-calendar"></i>
                      </a>
                    </li>
                    <li className="list-inline-item">
                      <a href="#">{item.postedDate}</a>
                    </li>
                  </ul>
                  <p>{item.postDescriptions.slice(0, 65)}</p>
                </div>
                {/* End .tc_content */}

                <div className="fp_footer">
                  <ul className="fp_meta float-start mb0">
                    <li className="list-inline-item">
                      <a href="#">
                        <Image
                          width={40}
                          height={40}
                          src={item.posterAvatar}
                          alt={item.posterAvatar}
                        />
                      </a>
                    </li>
                    <li className="list-inline-item">
                      <a href="#">{item.posterName}</a>
                    </li>
                  </ul>
                  <a className="fp_pdate float-end text-thm" href="#">
                    Read More <span className="flaticon-next"></span>
                  </a>
                </div>
                {/* End fb_footer */}
              </div>
              {/* End .thumb */}
            </div>
        </div>
      ))}
    </>
  );
};

export default Blogs;
