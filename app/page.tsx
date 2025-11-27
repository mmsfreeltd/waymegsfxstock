import { SITE_NAME } from "@/global/constants";
import { Metadata } from "next";
import { redirect } from "next/navigation";
export const metadata: Metadata = {
  title: `${SITE_NAME}`,
};
export default function HomePage() {

  return redirect("/login");
}
