import Image from "next/image";
import Link from "next/link";
import veevaLogo from '../public/images/veeva/veeva-short-logo.jpeg'
import styles from "./styles/CaseStudy.module.css";

const image = (
  <div className={styles.image} style={{ width: "10%" }}>
    <Image
      src={veevaLogo}
      width="50px"
      height="50px"
      layout="responsive"
      alt={"Veeva Logo"}
    />
  </div>
);
const CaseStudy = ({ title, descriptions = [], linkPath, isRight = true }) => {
  const description = (
    <section className={styles.description}>
      <h2>{title}</h2>
      {descriptions.map((d, i) => (
        <p key={i}>{d}</p>
      ))}
      {linkPath ? (
        <Link href={linkPath}>
          {`Read case ${descriptions.length > 1 ? "studies" : "study"} ⇢`}
        </Link>
      ) : (
        ""
      )}
    </section>
  );

  return (
    <>
      <div className={styles.caseStudy} key={linkPath}>
        {isRight ? (
          <>
            {description}
             {image}
          </>
        ) : (
          <>
             {image}
            {description}
          </>
        )}
      </div>
    </>
  );
};

export default CaseStudy;
