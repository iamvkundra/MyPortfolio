import { MdArrowOutward } from "react-icons/md";

interface Props {
  image: string;
  alt?: string;
  link?: string;
}

const WorkImage = (props: Props) => {
  const content = (
    <>
      {props.link && (
        <div className="work-link">
          <MdArrowOutward />
        </div>
      )}
      <img src={props.image} alt={props.alt} />
    </>
  );

  return (
    <div className="work-image">
      {props.link ? (
        <a
          className="work-image-in"
          href={props.link}
          target="_blank"
          rel="noreferrer"
          data-cursor={"disable"}
        >
          {content}
        </a>
      ) : (
        <div className="work-image-in">{content}</div>
      )}
    </div>
  );
};

export default WorkImage;
