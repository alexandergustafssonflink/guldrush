import client from "../../util/contentful.js";
import { useRouter } from "next/router";
import styles from "./index.module.css";
import Link from "next/link";
import Layout from "../../components/Layout/Layout.js";
import Footer from "../../components/Footer/Footer.js";
import { documentToReactComponents } from "@contentful/rich-text-react-renderer";

export default function Blog(props) {
  let sortedPosts = props.posts.items.sort(function (a, b) {
    return new Date(b.fields.datumOchTid) - new Date(a.fields.datumOchTid);
  });
  return (
    <>
      <div className={styles.main}>
        <Layout />
        <div className={styles.blogDiv}>
          <h1 className={styles.header}>Blogg</h1>
          {sortedPosts.map((p, i) => {
            let date = p.fields.datumOchTid.split("T");
            let newDate = date[0];

            return (
              <div key={i} className={styles.blogPost}>
                <div className={styles.imgDiv}>
                  <img
                    className={styles.blogImage}
                    src={p.fields.image.fields.file.url}
                  />
                </div>
                <h1 className={styles.blogTitle}> {p.fields.titel} </h1>
                <h3 className={styles.dateTime}> {newDate}</h3>
                <div className={styles.textContent}>
                  {documentToReactComponents(p.fields.textContent)}
                </div>
              </div>
            );
          })}
        </div>
      </div>
      <Footer />
    </>
  );
}

export async function getServerSideProps() {
  const posts = await client.getEntries({
    content_type: "blogPost",
  });

  return {
    props: {
      posts: posts,
    },
  };
}

// React.useEffect(() => {
//   client
//     .getEntries({
//       content_type: "food",
//     })
//     .then((entries) => {
//       setPosts(entries.items);
//     });
// }, []);
