import { Appbar } from "../components/Appbar";
import { BlogCard } from "../components/BlogCard";
import { BlogSkeleton } from "../components/BlogSkeleton";
import { useBlogs } from "../hooks";

export const Blogs = () => {
  const { loading, blogs } = useBlogs();
  if (loading) {
    return (
      <div>
        <Appbar />
        <div className="flex justify-center">
          <BlogSkeleton />;
          <BlogSkeleton />;
          <BlogSkeleton />;
          <BlogSkeleton />;
          <BlogSkeleton />;
        </div>
      </div>
    );
  }
  return (
    <div>
      <Appbar />
      <div className="flex justify-center">
        <div>
          {blogs.map((blog) => (
            <BlogCard
              id={blog.id}
              authorName={blog.author.name || "Anonymous"}
              title={blog.title}
              content={blog.content}
              publishedDate={"12 April 2024"}
            />
          ))}
          {/* 
          <BlogCard
            authorName={"Alex Johnson"}
            title={"Exploring the Wonders of the Ocean"}
            content={
              "Dive deep into the unknown and discover the fascinating world beneath the surface. In this blog, we take you on an underwater adventure to see coral reefs, marine life, and the mysteries of the sea."
            }
            publishedDate={"12 April 2024"}
          />

          <BlogCard
            authorName={"Samantha Lee"}
            title={"Top 10 Books to Read This Summer"}
            content={
              "Get ready for a summer of adventure, mystery, and romance with these top 10 books. From thrillers to heartwarming tales, there's something for everyone on this list."
            }
            publishedDate={"1 June 2024"}
          />

          <BlogCard
            authorName={"David Perez"}
            title={"A Guide to Sustainable Living"}
            content={
              "Living sustainably doesn't have to be difficult. In this blog, learn practical tips and tricks to reduce your carbon footprint, save energy, and embrace a greener lifestyle."
            }
            publishedDate={"15 March 2024"}
          />

          <BlogCard
            authorName={"Megan Wright"}
            title={"The Art of Mindfulness"}
            content={
              "Discover the transformative power of mindfulness and how it can improve your mental health and overall well-being. This blog provides techniques and practices to help you live in the present moment."
            }
            publishedDate={"20 April 2024"}
          />

          <BlogCard
            authorName={"John Smith"}
            title={"The Rise of Electric Vehicles"}
            content={
              "Electric vehicles are changing the automotive industry. Learn about the latest advancements in EV technology and what the future holds for eco-friendly transportation."
            }
            publishedDate={"5 May 2024"}
          /> */}
        </div>
      </div>
    </div>
  );
};
