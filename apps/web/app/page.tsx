import { prisma } from "@repo/database";
import { Appbar } from "@repo/ui/appbar";

export default async function IndexPage() {
  const users = await prisma.user.findMany();

  return (
    <div>
      <Appbar />
      <h1 className="bg-red-100">Hello World</h1>
      <pre>{JSON.stringify(users, null, 2)}</pre>
    </div>
  );
}
