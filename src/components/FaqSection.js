import styled from "styled-components";
import { About } from "../styles";
import Toggle from "./Toggle";
import useScroll from "./useScroll";
import { AnimateSharedLayout } from "framer-motion";
import { scrollReveal } from "../animation";

const FaqSection = () => {
  const [element, controls] = useScroll();
  return (
    <Faq
      variants={scrollReveal}
      ref={element}
      animate={controls}
      initial="hidden"
    >
      <h2>
        Any Questions <span>FAQ</span>
      </h2>
      <AnimateSharedLayout>
        <Toggle title={"How Do I Start?"}>
          <div className="answer">
            <p>scelerisque ut, porta vel metus.</p>
            <p>
              Proin velit quam, imperdiet vitae euismod in, suscipit in libero.
              Nunc congue lectus sit amet diam efficitur efficitur.
            </p>
          </div>
        </Toggle>
        <Toggle title={"Daily Schedule"}>
          <div className="answer">
            <p>
              scelerisque ut, porta vel metus. Proin velit quam, imperdiet vitae
              euismod in, suscipit in libero. Nunc congue lectus sit amet diam
              efficitur efficitur.
            </p>
          </div>
        </Toggle>
        <Toggle title={"Diferrent Payment Methods"}>
          <div className="answer">
            <p>
              scelerisque ut, porta vel metus. Proin velit quam, imperdiet vitae
              euismod in, suscipit in libero. Nunc congue lectus sit amet diam
              efficitur efficitur.
            </p>
          </div>
        </Toggle>
        <Toggle title={"What Products do you offer"}>
          <div className="answer">
            <p>
              scelerisque ut, porta vel metus. Proin velit quam, imperdiet vitae
              euismod in, suscipit in libero. Nunc congue lectus sit amet diam
              efficitur efficitur.
            </p>
          </div>
        </Toggle>
      </AnimateSharedLayout>
    </Faq>
  );
};

export default FaqSection;

const Faq = styled(About)`
  display: block;
  span {
    display: block;
  }
  h2 {
    padding-bottom: 2rem;
    font-weight: lighter;
  }
  .faq-line {
    background: #cccccc;
    height: 0.2rem;
    margin: 2rem 0rem;
    width: 100%;
  }
  .question {
    padding: 3rem 0rem;
    cursor: pointer;
  }
  .answer {
    padding: 2rem 0rem;
    p {
      padding: 1rem 0rem;
    }
  }
`;
