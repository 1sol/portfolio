import { useEffect, useRef } from "react";
import styled from "styled-components";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";
import Slider from "react-slick";
import { motionVariants, projectData, sliderSetting } from "config/dataConfigs";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const ProjectContainer = styled.div<any>`
  background-color: #6fb8b7;

  .section {
    margin-top: 150px;
  }

  .contents-wrap {
    display: block;
  }

  .sub-title {
    margin-bottom: 50px;
  }

  .sub-title,
  h3,
  p {
    color: ${({ theme }: any) => theme.colors.white};
  }
`;

const Project = () => {
  const [ref, inView] = useInView();
  const control = useAnimation();
  const sliderRef = useRef<any>(null);

  useEffect(() => {
    if (inView) {
      control.start("visible");
    } else {
      control.start("hidden");
    }
  }, [control, inView]);

  return (
    <ProjectContainer id="project" className="project">
      <div className="inner">
        <motion.div
          ref={ref}
          variants={motionVariants}
          initial="hidden"
          animate={control}
        >
          <div className="section">
            <div className="contents-wrap">
              <div className="title-box">
                <h2 className="sub-title">PROJECT</h2>
              </div>
              <div className="slider">
                <Slider {...sliderSetting} ref={sliderRef}>
                  {projectData.map((item, index) => (
                    <div key={index}>
                      <div className="default-item">
                        <h3>{item.title}</h3>
                      </div>
                      <div className="hover-item">
                        <div className="text">
                          <p>
                            {item.description}
                            <br />
                            <span>{item.date}</span>
                          </p>
                        </div>
                      </div>
                    </div>
                  ))}
                </Slider>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </ProjectContainer>
  );
};

export default Project;
