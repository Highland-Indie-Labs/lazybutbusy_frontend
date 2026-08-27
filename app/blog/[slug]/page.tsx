import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Chip } from "@/components/ui/chip";
import { POSTS } from "@/lib/constants";

export function generateStaticParams() {
  return POSTS.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  const post = POSTS.find((p) => p.slug === slug);
  return { title: post?.title ?? "Post" };
}

export default async function PostPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const post = POSTS.find((p) => p.slug === slug);
  if (!post) notFound();

  return (
    <article className="container-lbb flex max-w-[840px] flex-col items-start gap-6 py-20">
      <Chip variant="tag">{post.tag}</Chip>
      <h1 className="m-0 font-display text-headline-lg font-bold uppercase text-ink">{post.title}</h1>
      <span className="font-mono text-xs leading-4 font-medium uppercase text-ghost">
        {post.date} · {post.read}
      </span>
      <p className="m-0 font-body text-[18px] leading-7 text-body-text">{post.excerpt}</p>
      <p className="m-0 font-body text-[18px] leading-7 text-body-text">
        Body copy pending. Drop the real post in here (MDX or a CMS) and this layout takes it as-is.
      </p>
      <Link href="/blog"><Button variant="secondary">Back to Blog</Button></Link>
    </article>
  );
}
