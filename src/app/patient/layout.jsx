import { getSession } from "@/utils/getSessions";

import { redirect } from "next/navigation";
export default async function PatientLayout({ children }) {
   const session = await getSession()
      if (session.isLogin == false || session.role != 'patient') {
          redirect("/local")
      }
  return <div>{children}</div>;
}
