import { redirect } from "next/navigation";
import { checkUser } from "@/actions/check-user";

export default async function DashboardPage() {
  const user = await checkUser();
  if (!user) redirect("/sign-in");
  return (
    <div>
      <h1>welcome,{user.name ?? user.email}</h1>
      <p>{user.id}</p>
    </div>
  );
}
