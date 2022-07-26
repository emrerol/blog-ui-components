import "./tags-container.styles.css";
import Title from "../../components/title/title.component";
import TagButton from "../../components/tag-button/tag-button.component";
const DEFAULT_TAGS = [
  {
    id: 1,
    tag: "Blender",
  },
  {
    id: 2,
    tag: "Browser",
  },
  {
    id: 3,
    tag: "cross-platform",
  },
  {
    id: 4,
    tag: "HoloLens",
  },
  {
    id: 5,
    tag: "Microsoft",
  },
  {
    id: 6,
    tag: "Mixed Reality",
  },
  {
    id: 7,
    tag: "modelling",
  },
  {
    id: 8,
    tag: "MR",
  },
  {
    id: 9,
    tag: "nodejs",
  },
  {
    id: 10,
    tag: "streamsocket",
  },
  {
    id: 11,
    tag: "unity",
  },
  {
    id: 12,
    tag: "unity3D",
  },
  {
    id: 13,
    tag: "unreal engine",
  },
  {
    id: 14,
    tag: "VR",
  },
  {
    id: 15,
    tag: "websockets",
  },
];
const TagsContainer = () => {
  return (
    <div className="tag-container">
      <Title titleName={"Tags"} />
      <div className="tag-wrapper">
        {DEFAULT_TAGS.map((tag) => (
          <TagButton tagName={tag.tag} key={tag.id} />
        ))}
      </div>
    </div>
  );
};

export default TagsContainer;
