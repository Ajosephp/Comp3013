import { db } from "@/db";
import { cookies } from "next/headers";
import Link from "next/link";
import { redirect } from "next/navigation";

export default async function Home() {
  const userId = cookies().get("user_id")?.value;
  if (!userId) {
    redirect("/login");
  }
  const blocks = await db.block.findMany({
    where: {
      userId: Number(userId),
    },
  });
  const renderedBlocks = blocks.map((block) => (
    <Link
      key={block.id}
      href={`/blocks/${block.id}`}
      className="flex justify-between items-center p-2 border rounded"
    >
      {block.title}
      <div>View</div>
    </Link>
  ));
  return (
    <div>
      <div className="flex m-2 justify-between items-center">
        <h1 className="text-xl font-bold">Blocks</h1>
        <Link href="/blocks/new" className="border p-2 rounded">
          New
        </Link>
      </div>
      <div className="flex flex-col gap-2">{renderedBlocks}</div>
    </div>
  );
}
