import { BlogService } from "@/services/blog";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import { useBlog } from "../../components/blog-context";
import { HELPER } from "@/utils/helper";
import { useRouter } from "next/navigation";

interface BlogPostProps {
  _id: string;
  title: string;
  thumbnail: string;
  content: string;
  facebook: string;
  twitter: string;
  instagram: string;
  author_id: string;
  author_name: string;
  created_at: string;
}

interface AuthorProps {
  _id: string;
  name: string;
  avt: string;
  introduction: string;
  facebook: string;
  twitter: string;
  linkedin: string;
  instagram: string;
}

export const Sidebar = ({ data }: { data: any }) => {
  // const [post, setPost] = useState<BlogPostProps | null>(null);
  const [author, setAuthor] = useState<AuthorProps | null>(null);
  const [iPo, setIPo] = useState<string | null>(null);
  const pathParams = new URLSearchParams(location.search);
  const blogId = pathParams.get("blog");
  const [isLoading, setIsLoading] = useState(true);

  const init = async () => {
    if (blogId) {
      setIPo(blogId);
      const res = await BlogService.getBlogById(blogId || "");
      if (res) {
        const auth = await BlogService.getAuthorById(res.author_id || "");
        setAuthor(auth);
      }
    } else {
      const storeId = localStorage.getItem("selectedBlogId");
      setIPo(storeId);
      const res = await BlogService.getBlogById(storeId || "");
      if (res) {
        const auth = await BlogService.getAuthorById(res.author_id || "");
        setAuthor(auth);
      }
    }
  };

  useEffect(() => {
    init();
  }, []);

  const { setSelectedBlogId } = useBlog();
  const router = useRouter();

  const handleClick = (id: string, title: string) => {
    setSelectedBlogId(id);
    localStorage.setItem("selectedBlogId", id);
    router.push(`/bai-viet/${HELPER.convertSpacesToDash(title)}`);
  };

  return (
    <aside className="space-y-4 lg:space-y-8">
      <div className="hidden lg:flex flex-col bg-gray-100 p-6 rounded-lg text-center">
        <Image
          src="http://res.cloudinary.com/farmcode/image/upload/v1744523469/ielts-viet/cwqwxrumxhdml5y1cfzh_jfq7wn.jpg"
          alt="Jenny Alexandra"
          width={120}
          height={120}
          className="rounded-full mx-auto mb-4"
        />
        <h3 className="font-bold mb-1">{author?.name}</h3>
        <p className="text-gray-600 text-sm">{author?.introduction}</p>
        <div className="flex justify-center space-x-4 mt-4">
          <Link href="#" className="text-gray-400 hover:text-gray-600">
            <span className="sr-only">Facebook</span>
            <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
              <path d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z" />
            </svg>
          </Link>
          <Link href="#" className="text-gray-400 hover:text-gray-600">
            <span className="sr-only">Twitter</span>
            <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
              <path d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84" />
            </svg>
          </Link>
          <Link href="#" className="text-gray-400 hover:text-gray-600">
            <span className="sr-only">LinkedIn</span>
            <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
              <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
            </svg>
          </Link>
          <Link href="#" className="text-gray-400 hover:text-gray-600">
            <span className="sr-only">Instagram</span>
            <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
              <path d="M12 0C8.74 0 8.333.015 7.053.072 5.775.132 4.905.333 4.14.63c-.789.306-1.459.717-2.126 1.384S.935 3.35.63 4.14C.333 4.905.131 5.775.072 7.053.012 8.333 0 8.74 0 12s.015 3.667.072 4.947c.06 1.277.261 2.148.558 2.913.306.788.717 1.459 1.384 2.126.667.666 1.336 1.079 2.126 1.384.766.296 1.636.499 2.913.558C8.333 23.988 8.74 24 12 24s3.667-.015 4.947-.072c1.277-.06 2.148-.262 2.913-.558.788-.306 1.459-.718 2.126-1.384.666-.667 1.079-1.335 1.384-2.126.296-.765.499-1.636.558-2.913.06-1.28.072-1.687.072-4.947s-.015-3.667-.072-4.947c-.06-1.277-.262-2.149-.558-2.913-.306-.789-.718-1.459-1.384-2.126C21.319 1.347 20.651.935 19.86.63c-.765-.297-1.636-.499-2.913-.558C15.667.012 15.26 0 12 0zm0 2.16c3.203 0 3.585.016 4.85.071 1.17.055 1.805.249 2.227.415.562.217.96.477 1.382.896.419.42.679.819.896 1.381.164.422.36 1.057.413 2.227.057 1.266.07 1.646.07 4.85s-.015 3.585-.074 4.85c-.061 1.17-.256 1.805-.421 2.227-.224.562-.479.96-.899 1.382-.419.419-.824.679-1.38.896-.42.164-1.065.36-2.235.413-1.274.057-1.649.07-4.859.07-3.211 0-3.586-.015-4.859-.074-1.171-.061-1.816-.256-2.236-.421-.569-.224-.96-.479-1.379-.899-.421-.419-.69-.824-.9-1.38-.165-.42-.359-1.065-.42-2.235-.045-1.26-.061-1.649-.061-4.844 0-3.196.016-3.586.061-4.861.061-1.17.255-1.814.42-2.234.21-.57.479-.96.9-1.381.419-.419.81-.689 1.379-.898.42-.166 1.051-.361 2.221-.421 1.275-.045 1.65-.06 4.859-.06l.045.03zm0 3.678c-3.405 0-6.162 2.76-6.162 6.162 0 3.405 2.76 6.162 6.162 6.162 3.405 0 6.162-2.76 6.162-6.162 0-3.405-2.76-6.162-6.162-6.162zM12 16c-2.21 0-4-1.79-4-4s1.79-4 4-4 4 1.79 4 4-1.79 4-4 4zm7.846-10.405c0 .795-.646 1.44-1.44 1.44-.795 0-1.44-.646-1.44-1.44 0-.794.646-1.439 1.44-1.439.793-.001 1.44.645 1.44 1.439z" />
            </svg>
          </Link>
        </div>
      </div>
      <div className="space-y-4">
        <h3 className="font-bold text-lg mb-4">Bài viết liên quan</h3>
        <div className="grid gap-4">
          {data
            ?.filter((po: any) => {
              if (Array.isArray(iPo)) return false;
              return po?._id !== iPo;
            })
            ?.slice(0, 4)
            ?.map((post: any, index: number) => (
              <Link
                key={index}
                href={`/bai-viet/${HELPER.convertSpacesToDash(post.title)}`}
              >
                <div
                  onClick={() => {
                    handleClick(post._id, post.title);
                  }}
                  className="cursor-pointer flex items-start space-x-4 group"
                >
                  <div className="flex-shrink-0 w-20 h-20 relative">
                    <Image
                      src={post?.thumbnail || "/"}
                      alt={post?.title}
                      fill
                      className="rounded-lg object-cover"
                    />
                  </div>
                  <div className="flex-1 min-w-0">
                    <h3 className="text-gray-900 font-medium group-hover:text-blue-600 transition-colors text-sm md:text-base line-clamp-2">
                      {post?.title}
                    </h3>
                    <p className="text-xs md:text-sm text-gray-500 mt-1">
                      {HELPER.formatDate(post?.created_at)}
                    </p>
                  </div>
                </div>
              </Link>
            ))}
        </div>
      </div>
    </aside>
  );
};
