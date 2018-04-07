// @flow
import * as React from "react";
import { darken } from "polished";

import { defaultTokens as tokens } from "../constants";

type Props = {
  title: string,
  url: string,
  onClick: (e: SyntheticEvent<HTMLButtonElement>) => void,
  newTab?: boolean,
  type: "primary" | "secondary",
  size: "small" | "normal" | "large",
};

const colorTextLink = {
  primary: tokens.colorLinkPrimary,
  secondary: tokens.colorLinkSecondary,
};
const fontSizeTextLink = {
  small: tokens.fontSizeTextSmall,
  normal: tokens.fontSizeTextNormal,
  large: tokens.fontSizeTextLarge,
};

const TextLink = (props: Props) => {
  const { type, url, size, title, newTab, onClick } = props;
  let targetCondition;

  if (newTab) {
    targetCondition = "_blank";
  }

  return (
    <a href={url} target={targetCondition} onClick={onClick}>
      {title}
      <style jsx>{`
        a {
          font-size: ${fontSizeTextLink[size]}
          color: ${colorTextLink[type]}
          font-weight: ${tokens.fontWeightLinks}
          text-decoration: ${type === "secondary" ? "underline" : "none"}
          cursor: pointer;
        }
        a:hover {
          text-decoration: underline;
          color: ${darken(tokens.modifierDarkenHover, tokens.colorLinkPrimary)}
        }
        // visited and focus state will change in the future
        a:visited {
          //nothing needs to be declared, but this state will be used
        }
        a:focus {
          outline-width: 3px;
        }
      `}</style>
    </a>
  );
};

TextLink.defaultProps = {
  type: "primary",
  size: "normal",
  newTab: false,
};

export default TextLink;
