// @flow

import * as React from "react";
import { storiesOf, setAddon } from "@storybook/react";
import styles from "@sambego/storybook-styles";
import chaptersAddon from "react-storybook-addon-chapters";
import { withKnobs, object, select } from "@storybook/addon-knobs/react";

import CarrierLogo from "./index";

setAddon(chaptersAddon);

const options = {
  showSource: true,
  allowSourceToggling: false,
  showPropTables: false,
  allowPropTablesToggling: false,
};

const carriersLabel = "Carriers";

storiesOf("CarrierLogo", module)
  .addDecorator(withKnobs)
  .addDecorator(
    styles({
      padding: "20px",
    }),
  )
  .addWithChapters("One carrier", () => {
    const size = select(
      "Size",
      {
        small: "small",
        medium: "medium",
        large: "large",
      },
      "medium",
    );

    const carrier = [{ code: "FR", name: "Ryanair" }];

    const carriersObject = object(carriersLabel, carrier);

    return {
      info: "Some description about this CarrierLogo component with one img.",
      chapters: [
        {
          info: "You can choose between three sizes: small, medium which is default and large.",
          sections: [
            {
              title: `CarrierLogo ${size}`,
              sectionFn: () => <CarrierLogo size={size} carriers={carriersObject} />,
              options,
            },
          ],
        },
      ],
    };
  })
  .addWithChapters("Two carriers", () => {
    const carrier = [{ code: "FR", name: "Ryanair" }, { code: "TO", name: "Transavia France" }];

    const carriersObject = object(carriersLabel, carrier);

    return {
      info: "Some description about this CarrierLogo component with more than one img.",
      chapters: [
        {
          info: "You can pass object with maximum of 4 logos.",
          sections: [
            {
              title: `Two carriers`,
              sectionFn: () => <CarrierLogo carriers={carriersObject} />,
              options,
            },
          ],
        },
      ],
    };
  })
  .addWithChapters("Three carriers", () => {
    const carrier = [
      { code: "FR", name: "Ryanair" },
      { code: "TO", name: "Transavia France" },
      { code: "VY", name: "Vueling" },
    ];

    const carriersObject = object(carriersLabel, carrier);

    return {
      info: "Some description about this CarrierLogo component with more than one img.",
      chapters: [
        {
          info: "You can pass object with maximum of 4 logos.",
          sections: [
            {
              title: `Three carriers`,
              sectionFn: () => <CarrierLogo carriers={carriersObject} />,
              options,
            },
          ],
        },
      ],
    };
  })
  .addWithChapters("Four carriers", () => {
    const carrier = [
      { code: "FR", name: "Ryanair" },
      { code: "TO", name: "Transavia France" },
      { code: "VY", name: "Vueling" },
      { code: "OK", name: "Czech Airlines" },
    ];

    const carriersObject = object(carriersLabel, carrier);

    return {
      info: "Some description about this CarrierLogo component with more than one img.",
      chapters: [
        {
          info: "You can pass object with maximum of 4 logos.",
          sections: [
            {
              title: `Four carriers`,
              sectionFn: () => <CarrierLogo carriers={carriersObject} />,
              options,
            },
          ],
        },
      ],
    };
  });
