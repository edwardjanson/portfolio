import styled from 'styled-components';


const About = () => {

    return (
        <Section className="section" id="about">
            <HeadingImage>
                <Heading>About me</Heading>
                <Image src={process.env.PUBLIC_URL + "/media/profile.jpg"}/>
            </HeadingImage>
            <Paragraph>
            I recently completed a full-time 16-week Software Development course at CodeClan. 
            Before starting the course, I grew my expertise in Digital Marketing at an agency (80 DAYS) for seven years where I worked my way up from junior level as a new graduate to Head of Search & Analytics leading a team of six. 
            I thoroughly enjoyed my time there, continuously developing my technical skills surrounded by a great team. 
            Over the years I increased my focus on data, usability and SEO and developed a strong interest in UX, which I believe now helps me develop more user-friendly apps.
            </Paragraph>
            <Paragraph>
            My passion for coding started whilst doing a Python course on Udemy early 2022.  
            The ability to develop ideas and find new solutions to problems are some of the aspects of coding that drove me to take a career step change.
            </Paragraph>
            <Paragraph>
            Listed below are the main projects I've completed up until now. I hope you find them interesting and I welcome any feedback or questions.
            </Paragraph>
        </Section>
    );
};

const Image = styled.img`
    max-width: 10rem;
    max-height: 7rem;
    border-radius: 50%;
    border: 0.1rem solid #2f344a;
`

const Section = styled.div`
    margin-top: 5rem;
`

const Heading = styled.h2`
    display: flex;
    align-items: center;
    font-weight: 900;
    font-size: 2rem;
    width: 15rem;
    height: 2rem;
    width: 100%;
    white-space: nowrap;

    &:after {
        content: "";
        display: inline-block;
        vertical-align: middle;
        margin-right: 1rem;
        border-bottom: 0.1rem solid #2f344a;
        
        @media (min-width: 360px) {
            margin: 0 2rem 0 1.5rem;
            width: 100%;
        }
    }
`

const Paragraph = styled.p`
`

const HeadingImage = styled.div`
    margin-top: -1rem;
    padding-top: 1rem;
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 2rem;
`

export default About;