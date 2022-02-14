import Link from 'next/link';

const CaseStudy = ({ title, descriptions = [], linkPath }) => {
    return (
        <>
            <section key={linkPath}>
                <h2>{title}</h2>
                {descriptions.map((d, i) => (
                    <p key={i}>{d}</p>
                ))}
                {linkPath ? (
                    <Link href={linkPath}>
                        <a href={linkPath}>{`Read case ${
                            descriptions.length > 1 ? 'studies' : 'study'
                        } →`}</a>
                    </Link>
                ) : (
                    ''
                )}
            </section>
        </>
    );
};

export default CaseStudy;
