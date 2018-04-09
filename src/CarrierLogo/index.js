// @flow
import * as React from "react";

import { defaultTokens as tokens } from "../constants";

const baseURL = "//images.kiwi.com"; // token or const

const originSizes = {
  // should we declare new tokens ?
  small: 16,
  medium: 32,
  large: 32,
};

const renderSizes = {
  small: parseInt(tokens.heightIconSmall, 10),
  medium: parseInt(tokens.heightIconMedium, 10),
  large: parseInt(tokens.heightIconLarge, 10),
};

const retinaSizes = {
  // should we declare new tokens ?
  small: 32,
  medium: 64,
  large: 64,
};

type Props = {
  size: "small" | "medium" | "large",
  carriers: { code: string, name: string }[],
};
const CarrierLogo = (props: Props) => {
  const { size, carriers } = props;

  let sourceSize = originSizes[size];
  let imageSize = renderSizes[size];
  let srcSetSize = retinaSizes[size];

  if (carriers.length > 1) {
    sourceSize = originSizes.small;
    imageSize = renderSizes.small;
    srcSetSize = retinaSizes.small;
  }

  return (
    <div className="carrierLogo">
      {carriers.map((carrierImage, i) => {
        if (i < 4) {
          return (
            <img
              key={carrierImage.code}
              src={`${baseURL}/airlines/${sourceSize}/${carrierImage.code}.png`}
              srcSet={`${baseURL}/airlines/${srcSetSize}/${carrierImage.code}.png 2x`}
              alt={carrierImage.name}
              title={carrierImage.name}
            />
          );
        }
        return false;
      })}
      <style jsx>{`
        .carrierLogo {
          border-radius: ${tokens.borderRadiusNormal};
          background-color: ${tokens.backgroundCarrierLogo};
          height: ${carriers.length > 1 ? tokens.heightIconLarge : `${renderSizes[size]}px`};
          width: ${carriers.length > 1 ? tokens.heightIconLarge : `${renderSizes[size]}px`};
          display: flex;
          flex-direction: row;
          flex-wrap: wrap;
        }
        img {
          height: ${imageSize}px;
          width: ${imageSize}px;
          border-radius: ${tokens.borderRadiusNormal};
          background-color: ${tokens.backgroundCarrierLogo};
        }
        /* one item */
        .carrierLogo img:first-child:nth-last-child(1) {
          max-width: 100%;
          max-height: 100%;
        }
        /* two items */
        .carrierLogo img:first-child:nth-last-child(2) ~ img:last-child {
          position: relative;
          top: ${renderSizes.small}px;
        }
        /* three items */
        img:first-child:nth-last-child(3),
        img:first-child:nth-last-child(3) ~ img {
          width: ${renderSizes.small - 1}px;
          height: ${renderSizes.small - 1}px;
          padding: 0 1px 1px 0;
        }
        img:first-child:nth-last-child(3) ~ img:nth-child(2) {
          padding: 0 0 1px 1px;
        }
        img:first-child:nth-last-child(3) ~ img:nth-child(3) {
          padding: 1px 1px 0 0;
        }
        /* four items */
        img:first-child:nth-last-child(4),
        img:first-child:nth-last-child(4) ~ img {
          width: ${renderSizes.small - 1}px;
          height: ${renderSizes.small - 1}px;
          padding: 0 1px 1px 0;
        }
        img:first-child:nth-last-child(4) ~ img:nth-child(2) {
          padding: 0 0 1px 1px;
        }
        img:first-child:nth-last-child(4) ~ img:nth-child(3) {
          padding: 1px 1px 0 0;
        }
        img:first-child:nth-last-child(4) ~ img:nth-child(4) {
          padding: 1px 0 0 1px;
        }
      `}</style>
    </div>
  );
};

CarrierLogo.defaultProps = {
  size: "medium",
};

export default CarrierLogo;
