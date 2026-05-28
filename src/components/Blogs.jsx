import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Calendar, Clock } from 'lucide-react';

const HASHNODE_API = 'https://gql.hashnode.com/';
const HASHNODE_USERNAME = 'jay-ahirrao';

// Robust fallback data using the user's actual published articles, titles, dates,
// and cover images scraped from their Hashnode profile. This ensures articles
// are ALWAYS visible and active even if the user has an adblocker blocking Stellate/Hashnode GQL CDNs,
// or if they hit CORS/rate-limiting/API authorization gates on localhost.
const FALLBACK_POSTS = [
  {
    id: "post-1",
    title: "Mastering the Blueprint: A Deep Dive into JavaScript's Object-Oriented Heart",
    excerpt: "Demystifying prototypes, constructor functions, classes, and inheritance patterns in modern JavaScript with practical, real-world examples.",
    date: "May 10, 2026",
    readTime: "8 min read",
    link: "https://oop-js-101.hashnode.dev/mastering-the-blueprint-a-deep-dive-into-javascript-s-object-oriented-heart",
    image: "https://cdn.hashnode.com/uploads/covers/68a21ffcfc85d060ea762924/cf5991da-f225-4f67-9230-11a096aa0b49.png"
  },
  {
    id: "post-2",
    title: "Object Fundamentals and Deep Dive",
    excerpt: "An in-depth look at JavaScript objects, properties, descriptors, memory management, and advanced object manipulation techniques.",
    date: "Apr 28, 2026",
    readTime: "6 min read",
    link: "https://object-js-101.hashnode.dev/object-fundamentals-and-deepdive",
    image: "https://cdn.hashnode.com/uploads/covers/68a21ffcfc85d060ea762924/8fb672e0-5bbb-480d-aec9-ab30070f0dc1.jpg"
  },
  {
    id: "post-3",
    title: "Mission Briefing: Mastering JavaScript Variables",
    excerpt: "Understanding variable scope, hoisting, closures, and the critical differences between var, let, and const in JavaScript execution contexts.",
    date: "Mar 15, 2026",
    readTime: "5 min read",
    link: "https://varsandtypes-js-101.hashnode.dev/mission-briefing-mastering-javascript-variables",
    image: "https://cdn.hashnode.com/res/hashnode/image/upload/v1759600059327/0a1f9687-8b1f-4b94-bc0c-d4f6a32211ca.png"
  },
  {
    id: "post-4",
    title: "Navigating Logic: A Guide to Control Flow in JavaScript (Admin Edition)",
    excerpt: "Mastering conditional logic, loops, switch statements, and error handling patterns for writing highly clean and maintainable control flows.",
    date: "Feb 22, 2026",
    readTime: "7 min read",
    link: "https://controlflow-js-101.hashnode.dev/navigating-logic-a-guide-to-control-flow-in-javascript-admin-edition",
    image: "https://cdn.hashnode.com/res/hashnode/image/upload/v1767065462032/cdf9b7da-d8bb-4b61-a911-47de3fb5070c.png"
  },
  {
    id: "post-5",
    title: "Arrow Functions vs. Regular Functions: When to Use Which",
    excerpt: "Analyzing the scoping of the 'this' keyword, arguments object behavior, constructor capabilities, and performance differences.",
    date: "Jan 12, 2026",
    readTime: "4 min read",
    link: "https://arrowfunctions-js-101.hashnode.dev/arrow-functions-vs-regular-functions-when-to-use-which",
    image: "https://cdn.hashnode.com/res/hashnode/image/upload/v1768620419343/8d23c2da-24ff-4f16-9faa-63e9d4a49dd6.png"
  }
];

const Blogs = () => {
  const [blogs, setBlogs] = useState(FALLBACK_POSTS);

  useEffect(() => {
    const fetchBlogs = async () => {
      try {
        const query = `
          query UserPosts {
            user(username: "${HASHNODE_USERNAME}") {
              publications(first: 3) {
                edges {
                  node {
                    posts(first: 6) {
                      edges {
                        node {
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
        
        if (result.errors && result.errors.length > 0) {
          throw new Error(result.errors[0].message);
        }

        // Extract posts from all publications associated with the user
        const publications = result.data?.user?.publications?.edges || [];
        const allPosts = [];

        publications.forEach(pubEdge => {
          const postsList = pubEdge.node?.posts?.edges || [];
          postsList.forEach(postEdge => {
            const post = postEdge.node;
            if (post) {
              allPosts.push({
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
              });
            }
          });
        });
        
        if (allPosts.length > 0) {
          // Sort aggregated posts by publication date descending and take top 6
          const sortedPosts = allPosts
            .sort((a, b) => b.timestamp - a.timestamp)
            .slice(0, 6);
            
          setBlogs(sortedPosts);
        }
      } catch (err) {
        // Fallback data is already loaded in state, so we log a warning and let the fallback render cleanly.
        console.warn("Unable to fetch fresh blogs from Hashnode API, using fallback portfolio data:", err);
      }
    };

    fetchBlogs();
  }, []);

  return (
    <section id="blogs" className="py-24 relative overflow-hidden">
      <div className="container mx-auto px-6 xl:px-12">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="max-w-7xl mx-auto"
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

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {blogs.map((blog, index) => (
              <motion.a
                href={blog.link}
                target="_blank"
                rel="noopener noreferrer"
                key={blog.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-40px' }}
                transition={{ delay: Math.min(index * 0.08, 0.24), duration: 0.4, ease: 'easeOut' }}
                className="group flex flex-col rounded-3xl bg-[#0d0d0d] border border-white/[0.04] p-4 transition-all duration-300 hover:border-white/25 hover:shadow-[0_0_40px_rgba(255,255,255,0.02)]"
              >
                {/* Blog Image - Padded inside the card with rounded corners */}
                <div className="aspect-[16/10] w-full overflow-hidden rounded-[1.25rem] relative shrink-0 bg-neutral-800">
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
                </div>

                <div className="px-2 pt-5 pb-2 flex-1 flex flex-col justify-between">
                  <div>
                    {/* Meta info: uppercase, mono, dot separator */}
                    <div className="font-mono text-[10px] tracking-wider text-neutral-500 uppercase mb-3 flex items-center gap-1.5">
                      <span>{blog.readTime}</span>
                      <span>·</span>
                      <span>{blog.date}</span>
                    </div>
                    
                    {/* Title */}
                    <h3 className="text-lg font-bold text-white mb-3 group-hover:text-neutral-200 transition-colors line-clamp-2 leading-snug">
                      {blog.title}
                    </h3>
                    
                    {/* Excerpt */}
                    <p className="text-neutral-400 text-[13px] leading-relaxed mb-6 line-clamp-3">
                      {blog.excerpt}
                    </p>
                  </div>
                  
                  {/* Read blog post link (Bottom Right) */}
                  <div className="flex justify-end items-center mt-auto">
                    <div className="flex items-center gap-2 group/btn cursor-pointer">
                      <span className="text-[11px] font-mono font-medium text-neutral-400 group-hover:text-white transition-colors duration-300">
                        Read blog post
                      </span>
                      <div className="w-8 h-8 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-neutral-400 group-hover:bg-white group-hover:text-black group-hover:border-white transition-all duration-300">
                        <ArrowRight size={14} />
                      </div>
                    </div>
                  </div>
                </div>
              </motion.a>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Blogs;
