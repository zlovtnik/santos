import type { Metadata } from "next";
import { Body } from "../components/page/style";
import "../../css/global.css";
import { i18n } from '@/i18n.config'

export const metadata: Metadata = {
  title: "Rafael Cardoso",
  description: "Senior Software Engineer from Portland, Maine",
};

export async function generateStaticParams() {
  return i18n.locales.map((locale) => ({ lang: locale }))
}

export default async function RootLayout({
  children,
  params: { locale },
}: {
  children: React.ReactNode;
  params: { locale: any };
}) {

  return (
    <html lang={locale}>
      <Body>{children}</Body>
    </html>
  );
}
