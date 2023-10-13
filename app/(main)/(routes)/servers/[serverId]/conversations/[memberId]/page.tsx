export default function MemberIdPage({
  params: { serverId, memberId },
}: {
  params: { serverId: string; memberId: string };
}) {
  return (
    <div>
      {serverId}/{memberId}
    </div>
  );
}
