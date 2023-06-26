import { motion } from "framer-motion";

import { styles } from "../styles";
import { SectionWrapper } from "../hoc";
import { fadeIn, textVariant } from "../utils/motion";
import { testimonials } from "../constants/index";

const QuotesCard = ({ index, testimonial, name, designation }) => {
  return (
    <motion.div
      variants={fadeIn("", "spring", index * 0.5, 0.75)}
      className="bg-black-200 p-10 rounded-3xl xs:w-[320px] w-full"
    >
      <p className="text-white font-black text-[48px]">"</p>
      <div className="mt-1 flex flex-col justify-between h-[90%]">
        <p className="text-white tracking-wider text-[20px]">{testimonial}</p>
        <div className=" flex justify-between items-end gap-1">
          <div className="flex-1 flex flex-col">
            <p>
              <span>@</span> {name}
            </p>
            <p>{designation}</p>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

const Quotes = () => {
  return (
    <div className="mt-12 bg-black-100 rouded-[20px]">
      <div
        className={`${styles.padding} bg-tertiary rounded-2xl min-h-[300px]`}
      >
        <motion.div variants={textVariant()}>
          <p className={styles.sectionSubText}>What I follow</p>
          <h2 className={styles.sectionHeadText}>Quotes.</h2>
        </motion.div>
      </div>
      <div className={`${styles.paddingX} -mt-20 pb-14 flex flex-wrap gap-7`}>
        {testimonials.map((testimonial, index) => (
          <QuotesCard key={testimonial.name} index={index} {...testimonial} />
        ))}
      </div>
    </div>
  );
};

export default SectionWrapper(Quotes);
