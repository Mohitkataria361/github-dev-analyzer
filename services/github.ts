const BASE_URL = "https://api.github.com";

export async function getUser(username: string) {
  const response = await fetch(`${BASE_URL}/users/${username}`, {
    next: {
      revalidate: 3600,
    },
  });

  if (!response.ok) {
    throw new Error("GitHub user not found");
  }

  return response.json();
}