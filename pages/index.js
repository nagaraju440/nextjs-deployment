import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import Link from "next/link"
import Router, { withRouter,useRouter } from 'next/router'
import CssGrid from './cssGrid'
// import Hero from './Hero'
export default function Home() {
  // fetch('http://localhost:4000/babay')
  // .then(response =>response.json())
  // .then(data => console.log(data,"hehehehhe "))
  // .catch(e=>{
  //   // alert("some error",e)
  //   console.log("errir is",e)
  // })
  // ;

  return (
    // <div>
      <CssGrid/>
      // {/* </div> */}
      // {/* <Hero/> */}
      // {/* <div>hello broooo</div>
      
      // <div>
      // <Link href="/contact">
      //   <a>My second pageeee</a>
      // </Link> */}
      // {/* <Link href={{
      //   pathname: "/about",
      //   data:"hello world"
      // }}>
      //   <div onClick={
      //     ()=>{
      //       Router.push({
      //         pathname: '/about',
      //         query: { name: 'Someone' }
      //       //  state:{
      //       //    a:1,b:2
      //       //  }
      //     })
      //     }
      //   }><a>My third page</a></div>
      // </Link> */}
    // </div>
    // </div>
    // <div className={styles.container}>
    //   <Head>
    //     <title>Create Next App</title>
    //     <meta name="description" content="Generated by create next app" />
    //     <link rel="icon" href="/favicon.ico" />
    //   </Head>

    //   <main className={styles.main}>
    //     <h1 className={styles.title}>
    //       Welcome to <a href="https://nextjs.org">Next.js!</a>
    //     </h1>

    //     <p className={styles.description}>
    //       Get started by editing{' '}
    //       <code className={styles.code}>pages/index.js</code>
    //     </p>

    //     <div className={styles.grid}>
    //       <a href="https://nextjs.org/docs" className={styles.card}>
    //         <h2>Documentation &rarr;</h2>
    //         <p>Find in-depth information about Next.js features and API.</p>
    //       </a>

    //       <a href="https://nextjs.org/learn" className={styles.card}>
    //         <h2>Learn &rarr;</h2>
    //         <p>Learn about Next.js in an interactive course with quizzes!</p>
    //       </a>

    //       <a
    //         href="https://github.com/vercel/next.js/tree/master/examples"
    //         className={styles.card}
    //       >
    //         <h2>Examples &rarr;</h2>
    //         <p>Discover and deploy boilerplate example Next.js projects.</p>
    //       </a>

    //       <a
    //         href="https://vercel.com/new?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
    //         className={styles.card}
    //       >
    //         <h2>Deploy &rarr;</h2>
    //         <p>
    //           Instantly deploy your Next.js site to a public URL with Vercel.
    //         </p>
    //       </a>
    //     </div>
    //   </main>

    //   <footer className={styles.footer}>
    //     <a
    //       href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
    //       target="_blank"
    //       rel="noopener noreferrer"
    //     >
    //       Powered by{' '}
    //       <span className={styles.logo}>
    //         <Image src="/vercel.svg" alt="Vercel Logo" width={72} height={16} />
    //       </span>
    //     </a>
    //   </footer>
    // </div>
  )
}
// Home.getInitialProps = async (ctx) => {
//   const res = await fetch('http://localhost:4000/babay')
//   // const json = await res.json()
//   return { stars: res }
// }

// export async  function getStaticProps(context){
//   const res=await fetch('https://dummy.restapiexample.com/api/v1/employees');
//     const data=res.json();
//     // console.log("data is ",data)
//     if (!data) {
//       return {
//         notFound: true,
//       }
//     }
  
//     return {
//       props: { data }, // will be passed to the page component as props
//     }
// }
