const unwrapAttributes = (attr) => {
  let stringAttr = "";
  for (const key in attr) {
    if (Object.hasOwnProperty.call(attr, key)) {
      const value = attr[key];
      stringAttr = stringAttr + `${key} = "${value}" `;
    }
  }
  return stringAttr;
};

const unwrapChildren = (children) => {
  if (!children || children[0] === "?") return "";
  return children.reduce((acc, item) => {
    if (typeof item === "string") return acc + item;

    const { attributes, tag, children } = item;
    const stringAttributes = attributes ? unwrapAttributes(attributes) : "";
    const element = `<${tag} ${stringAttributes}>${unwrapChildren(
      children
    )}</${tag}>`;
    return acc + element;
  }, "");
};

const parseAnnotationHtml = (annotation) => {
  if (
    !annotation ||
    !annotation.dom.children ||
    annotation.dom.children.length === 0
  ) {
    return "";
  }
  return annotation.dom.children.reduce((acc, item) => {
    if (typeof item !== "object") return acc;

    const { attributes, tag, children } = item;
    const stringAttributes = attributes ? unwrapAttributes(attributes) : "";
    const stringChildren = unwrapChildren(children);
    const element = stringChildren
      ? `<${tag} ${stringAttributes}>${stringChildren}</${tag}>`
      : "";
    return [...acc, element];
  }, []);
};

export { parseAnnotationHtml };
