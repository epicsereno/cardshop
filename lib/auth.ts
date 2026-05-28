export type SessionUser = {
  id: string;
  email: string;
  role: "admin" | "customer";
};

export async function getCurrentUser(): Promise<SessionUser | null> {
  return null;
}

export async function requireAdmin() {
  const user = await getCurrentUser();

  if (!user || user.role !== "admin") {
    throw new Error("Admin access required");
  }

  return user;
}
