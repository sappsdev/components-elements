import { ReactNode } from "react";
import Head from 'next/head';
type Props = {
  children: ReactNode;
  title: string;
};
export const NameLayout = ({ children, title }: Props) => {
  return(
    <>
      <Head>
        <title>{title}</title>
      </Head>      
      <div className="">
        <main>{children}</main>
      </div>
    </>
  )
}
