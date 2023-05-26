import { Button } from "@heathmont/moon-core-tw";
import Head from "next/head";
import Image from "next/image";
import { useRouter } from "next/router";
import { Header } from "../components/layout/Header";
import styles from "./Home.module.scss";
import section2Image from "/public/home/section-2-img.jpg";
import section1Image from "/public/home/section-1-img.jpg";

declare let window: any;
export default function Welcome() {
  const router = useRouter();
  function letstartCLICK() {
    if (typeof window.ethereum === "undefined") {
      window.open(
        "https://chrome.google.com/webstore/detail/metamask/nkbihfbeogaeaoehlefnkodbefgpgknn",
        "_blank"
      );
    } else  if (window.ethereum.selectedAddress.toString()  == null || window.localStorage.getItem("login-type") === "metamask") {
      router.push("/login?[/daos]");
    } else {
      router.push("/daos");
    }
  }

  return (
    <>
      <Head>
        <title>GreenDAO</title>
        <meta name="description" content="GreenDAO" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Header></Header>
      <div className={styles.section}>
        <div className={styles.text}>
          <div className={`${styles.logo} pb-4`}>
            <Image width={256} height={256} src="/favicon.png" alt="" />
          </div>
          <h1 className="text-moon-32 font-bold pt-2 pb-4">
          A green world with Evmos
          </h1>
          <p className="py-4">
            GreenDAO is a platform that empowers your community to take more
            control over the issues that affect you. Join GreenDAO and read
            about the goals for your community and the funds that are available
            to reach these goals. You can add your own ideas or vote on the
            ideas of your neighbors. The most popular solutions will be implemented,
            benefitting the whole community. GreenDAO gives everybody a vote and a voice.
          </p>
          <div className="pt-4">
            <Button onClick={letstartCLICK}>Let’s make decisions</Button>
          </div>
        </div>
        <div className={styles.image}>
          <Image src={section1Image} objectFit="cover" layout="fill" alt="" />
        </div>
      </div>
      <div className={`${styles.section} ${styles["section-dark"]}`}>
        <div className={styles.image}>
          <Image src={section2Image} objectFit="cover" layout="fill" alt="" />
        </div>
        <div className={styles.text}>
          <div className={`${styles.logo} pb-4`}>
            <Image width={256} height={256} src="/favicon.png" alt="" />
          </div>
          <h1 className="text-moon-32 font-bold pb-4">A green world with Evmos</h1>
          <p className="py-4">
          GreenDAO is a platform that empowers your community to take more
            control over the issues that affect you. Join GreenDAO and read
            about the goals for your community and the funds that are available
            to reach these goals. You can add your own ideas or vote on the
            ideas of your neighbors. The most popular solutions will be implemented,
            benefitting the whole community. GreenDAO gives everybody a vote and a voice.
          </p>
          <div className="pt-4">
            <Button onClick={letstartCLICK}>Let’s make decisions</Button>
          </div>
        </div>
      </div>
    </>
  );
}
