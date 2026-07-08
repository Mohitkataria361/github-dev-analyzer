import { getUser } from "@/services/github";
import Image from "next/image";
interface Props {
    params: Promise<{
        username: string;
    }>;
}

interface GitHubUser {
    avatar_url: string;
    login: string;
    name: string | null;
    bio: string | null;
    followers: number;
    following: number;
    public_repos: number;
    html_url: string;
    location: string | null;
    company: string | null;
}

export default async function ProfilePage({ params }: Props) {
    const { username } = await params;

    const user: GitHubUser = await getUser(username);

    return (
        <main className="mx-auto max-w-7xl px-6 py-10">
            <div className="rounded-xl border bg-white p-8 shadow-sm">
                <div className="flex flex-col gap-8 md:flex-row">
                    {/* Avatar */}
                    <Image
                        src={user.avatar_url}
                        alt={user.login}
                        width={160}
                        height={160}
                        className="rounded-full border object-cover"
                        priority
                    />
                    {/* User Details */}
                    <div className="flex-1">
                        <h1 className="text-4xl font-bold">
                            {user.name ?? user.login}
                        </h1>

                        <p className="text-lg text-gray-500">
                            @{user.login}
                        </p>

                        {user.bio && (
                            <p className="mt-4 text-gray-700">
                                {user.bio}
                            </p>
                        )}

                        <div className="mt-6 flex flex-wrap gap-8">
                            <div>
                                <h2 className="text-2xl font-bold">{user.followers}</h2>
                                <p className="text-gray-500">Followers</p>
                            </div>

                            <div>
                                <h2 className="text-2xl font-bold">{user.following}</h2>
                                <p className="text-gray-500">Following</p>
                            </div>

                            <div>
                                <h2 className="text-2xl font-bold">{user.public_repos}</h2>
                                <p className="text-gray-500">Repositories</p>
                            </div>
                        </div>

                        <div className="mt-6 space-y-2">
                            {user.location && (
                                <p>
                                    <span className="font-semibold">📍 Location:</span>{" "}
                                    {user.location}
                                </p>
                            )}

                            {user.company && (
                                <p>
                                    <span className="font-semibold">🏢 Company:</span>{" "}
                                    {user.company}
                                </p>
                            )}

                            <a
                                href={user.html_url}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="inline-block rounded-md bg-black px-4 py-2 text-white transition hover:bg-neutral-800"
                            >
                                View GitHub Profile
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </main>
    );
}