import { db } from "@/lib/db";

export default async function ServerIdPage({
  params,
}: {
  params: { serverId: string };
}) {
  const server = await db.server.findUnique({
    where: {
      id: params.serverId,
    },
  });

  return <pre>{JSON.stringify(server, null, 4)}</pre>;
}
