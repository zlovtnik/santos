import { getDictionary } from "@/lib/dictionary";
import { Header } from "../components/header";
import { About } from "../components/about";
import { Contact } from "../components/contact";
import { Index } from "../components/home";
import { Container } from "../components/page/style";
import { useTranslations } from "next-intl";

export default async function Home({
  params: { locale },
}: {
  params: { locale: any };
}) {
  const { about, contact, header, skills, projects, home } = await getDictionary(locale);

  const translationsObj = {
    header: {
      role: header.Role,
      location: header.Location,
    },
    home: {
      tag: home.Tag,
      greetings: home.Greetings,
      role: home.Role,
    },
    about: {
      Cards: {
        Tag: about.Tag,
        1: about.c1,
        2: about.c2,
        3:about.c3,
      },
      Skills: {
        Tag: skills.Tag,
        title: skills.Title,
        1: skills.l1,
        2: skills.l2,
        3: skills.l3,
        4: skills.l4,
        5: skills.l5,
        6: skills.l6,
        7: skills.l7,
        oracle: skills.oracle,
        docker: skills.docker,
        kubernetes: skills.kubernetes,
        spring: skills.spring,
        java: skills.java,
        react: skills.react,
        camel: skills.camel,
        oci: skills.oci,
      },
      Projects: {
        Tag: projects.Tag,
        Title: projects.Title,
        p2009: projects.p2009,
        p2010: projects.p2011,
        p2014: projects.p2014,
        p2018: projects.p2018,
        p2020: projects.p2020,
        p2022: projects.p2022,
      }
    },
    contact: {
      Tag: contact.Tag,
      ContactPhrase: contact.ContactPhrase,
      LabelTitles: {
        1: contact.Label1,
        2: contact.Label2,
        3: contact.Label3,
      },
      TextAreaPlaceholder: contact.TextAreaPlaceholder,
      ButtonText: contact.ButtonText,
    },
  };

  return (
    <>
      <Header props={translationsObj.header} />
      <Container>
        <>
          <Index props={translationsObj.home} />
          <About props={translationsObj.about} />
          <Contact props={translationsObj.contact} />
        </>
      </Container>
    </>
  );
}
