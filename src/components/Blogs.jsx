import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Calendar, Clock } from 'lucide-react';
import axios from 'axios';

const HASHNODE_API = 'https://gql.hashnode.com';
const HASHNODE_USERNAME = 'jay-ahirrao';

const Blogs = () => {
  const [blogs, setBlogs] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);

  useEffect(() => {
    const fetchBlogs = async () => {
      try {
        const query = `
          query UserPosts {
            user(username: "${HASHNODE_USERNAME}") {
              posts(page: 1, pageSize: 6) {
                nodes {
                  id
                  title
                  brief
                  url
                  publishedAt
                  readTimeInMinutes
                  coverImage {
                    url
                  }
                }
              }
            }
          }
        `;

        const response = await fetch(HASHNODE_API, {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({ query }),
        });

        const result = await response.json();
        const postNodes = result.data?.user?.posts?.nodes;
        
        if (postNodes && postNodes.length > 0) {
          const posts = postNodes
            .map(post => ({
              id: post.id,
              title: post.title,
              excerpt: post.brief,
              timestamp: post.publishedAt ? new Date(post.publishedAt).getTime() : 0,
              date: post.publishedAt ? new Date(post.publishedAt).toLocaleDateString('en-US', {
                month: 'short',
                day: 'numeric',
                year: 'numeric'
              }) : 'Recent',
              readTime: post.readTimeInMinutes ? `${post.readTimeInMinutes} min read` : '5 min read',
              link: post.url,
              image: post.coverImage?.url
            }))
            .sort((a, b) => b.timestamp - a.timestamp);
            
          setBlogs(posts);
        } else {
          setError(true);
          console.warn("No posts found for user:", HASHNODE_USERNAME);
        }
        setLoading(false);
      } catch (err) {
        console.error("Error fetching blogs:", err);
        setError(true);
        setLoading(false);
      }
    };

    fetchBlogs();
  }, []);

  return (
    <section id="blogs" className="py-24 relative overflow-hidden">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="max-w-6xl mx-auto"
        >
          <div className="text-center mb-16 relative z-20">
            <h5 className="font-mono text-xs tracking-[0.2em] text-neutral-400 uppercase mb-4">
              My Writings
            </h5>
            <h2 
              className="text-5xl md:text-6xl lg:text-7xl font-medium leading-[1.1] mb-4 text-white tracking-tight"
              style={{ fontFamily: '"Playfair Display", serif' }}
            >
              Latest{' '}
              <span 
                className="italic animate-gradient-text font-medium" 
                style={{ paddingRight: '10px' }}
              >
                Articles
              </span>
            </h2>
            <p className="text-neutral-400 max-w-lg mx-auto">Thoughts, deep dives, and technical guides from my personal blog.</p>
          </div>

          {loading ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {[1, 2, 3].map((n) => (
                <div key={n} className="h-[400px] rounded-2xl bg-neutral-900 animate-pulse border border-white/5" />
              ))}
            </div>
          ) : error || blogs.length === 0 ? (
            <div className="text-center py-20 bg-neutral-900/50 rounded-3xl border border-white/5">
                <p className="text-neutral-500 font-mono text-sm mb-4 italic">Unable to fetch latest articles directly at the moment.</p>
                <a 
                    href={`https://hashnode.com/@${HASHNODE_USERNAME}`} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-white/5 border border-white/10 text-white hover:bg-white hover:text-black transition-all group"
                >
                    Visit My Hashnode Profile <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
                </a>
            </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {blogs.map((blog, index) => (
                <motion.a
                  href={blog.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  key={blog.id}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  whileHover={{ y: -8 }}
                  viewport={{ once: true, margin: '-40px' }}
                  transition={{ delay: Math.min(index * 0.08, 0.24), duration: 0.4, ease: 'easeOut' }}
                  className="group flex flex-col rounded-2xl bg-neutral-900 border border-white/5 hover:border-white/20 transition-[border-color,box-shadow] duration-1200 overflow-hidden hover:shadow-[0_0_35px_rgba(255,255,255,0.09)]"
                >
                  {/* Blog Image */}
                  <div className="aspect-video w-full overflow-hidden relative">
                    {blog.image ? (
                        <img 
                            src={blog.image} 
                            alt={blog.title} 
                            loading="lazy"
                            decoding="async"
                            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                        />
                    ) : (
                        <div className="w-full h-full bg-neutral-800 flex items-center justify-center">
                            <span className="text-neutral-600 font-mono text-xs italic tracking-widest">No Cover Image</span>
                        </div>
                    )}
                    <div className="absolute inset-0 bg-black/20 group-hover:bg-transparent transition-colors" />
                  </div>

                  <div className="p-8 flex-1 flex flex-col">
                    <div className="flex items-center gap-4 text-xs text-neutral-500 mb-4 font-mono">
                      <span className="flex items-center gap-1.5"><Calendar size={14} /> {blog.date}</span>
                      <span className="flex items-center gap-1.5"><Clock size={14} /> {blog.readTime}</span>
                    </div>
                    
                    <h3 className="text-xl font-bold text-white mb-4 group-hover:text-white transition-colors line-clamp-2">
                      {blog.title}
                    </h3>
                    
                    <p className="text-neutral-400 mb-6 flex-1 text-sm leading-relaxed line-clamp-3">
                      {blog.excerpt}
                    </p>
                    
                    <div className="flex items-center text-xs font-mono font-bold tracking-widest text-neutral-500 group-hover:text-white transition-colors mt-auto uppercase">
                      Read Full Article <ArrowRight size={14} className="ml-2 group-hover:translate-x-1 transition-transform" />
                    </div>
                  </div>
                </motion.a>
              ))}
            </div>
          )}
        </motion.div>
      </div>
    </section>
  );
};

export default Blogs;
