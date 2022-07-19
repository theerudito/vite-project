import React, { useEffect, useState } from "react";
import { POST } from "../helper/post";
import { Menu } from "./Menu";

export const Home = () => {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    setPosts(POST);
  }, []);

  return (
    <>
      <nav>
        <Menu />
      </nav>

      <main className="containerPrincipal">
        {posts.map((post) => (
          <div key={post.id} className="containerCard">
            <div className="card">
              <div className="containerTitle">
                <h1>{post.title}</h1>
              </div>

              <div className="containerImage">
                <img src={post.pic} alt={post.title} className="image" />
              </div>

              <div className="containerPost">
                <p>{post.content}</p>
              </div>
            </div>
          </div>
        ))}
      </main>

      <footer>
        <p>Sitio Web Desarrollado prueba 2022</p>
      </footer>
    </>
  );
};
