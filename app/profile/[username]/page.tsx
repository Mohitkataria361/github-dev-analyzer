interface ProfilePageProps {
  params: Promise<{
    username: string;
  }>;
}

export default async function ProfilePage({
  params,
}: ProfilePageProps) {
  const { username } = await params;

  return (
    <main className="mx-auto max-w-7xl px-6 py-10">
      <h1 className="text-4xl font-bold">
        {username}
      </h1>

      <p className="mt-3 text-gray-500">
        GitHub profile analytics will appear here.
      </p>
    </main>
  );
}