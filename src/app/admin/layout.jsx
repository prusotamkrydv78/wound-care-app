import { getSession } from "@/utils/getSessions";
import { redirect } from "next/navigation";


export default async function AdminLayout({ children }) {
  const session = await getSession()
  if (session.isLogin == false || session.role != 'admin') {
    redirect("/local")
  }
  return <div>{children}</div>;
}
