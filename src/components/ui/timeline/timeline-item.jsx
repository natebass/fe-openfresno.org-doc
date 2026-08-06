"use client";
import Button from "../button/button.jsx";
import CircledNumber from "@/components/ui/circled-number.jsx";
import { SectionType } from "@/utility/constants/theme";
import React, { useEffect, useRef } from "react";

/**
 * Describes a link button displayed by a timeline item.
 */
export class SimpleButton {
  constructor(text = "", href = "") {
    this.text = text;
    this.href = href;
  }
}

/**
 * Renders one numbered opportunity within a timeline.
 * @param {object} props - Component props.
 * @param {number} [props.number=0] - Number displayed in the timeline marker.
 * @param {React.ReactNode} props.heading - Opportunity heading.
 * @param {SimpleButton[]} [props.buttons=[]] - Link buttons displayed below the description.
 * @param {(number: number, bounds: DOMRect) => void} props.updateTimelineNumbers - Receives the marker's bounds.
 * @param {string} [props.sectionType=SectionType.light] - Theme variant for the marker.
 * @param {React.ReactNode} [props.children] - Opportunity description.
 * @returns {React.JSX.Element} The timeline item.
 */
export function TimelineItem({
  number = 0,
  heading,
  buttons = [],
  updateTimelineNumbers,
  sectionType = SectionType.light,
  children = <></>,
}) {
  const refContainer = useRef();
  useEffect(() => {
    const updateContainerRect = () => {
      if (refContainer.current) {
        updateTimelineNumbers(number, refContainer.current.getBoundingClientRect());
      }
    };
    window.addEventListener("resize", updateContainerRect);
    updateContainerRect();
    return () => {
      window.removeEventListener("resize", updateContainerRect);
    };
  }, [number, updateTimelineNumbers]);
  return (
    <div className="timeline-item">
      <CircledNumber number={number} sectionType={sectionType} ref={refContainer} />
      <div className="timeline-item-content">
        <h2 className="heading-small">{heading}</h2>
        <p>{children}</p>
        {buttons.length === 0 ? (
          <Button className="btn btn--grow mx-auto mt-2 lg:mx-0" href={buttons[0].href}>
            {buttons[0].text}
          </Button>
        ) : buttons.length >= 1 ? (
          <div className="mt-2 flex flex-wrap justify-center gap-4 lg:justify-start">
            {buttons.map((button, index) => {
              return (
                <Button className="btn btn--grow" href={button.href} key={index}>
                  {button.text}
                </Button>
              );
            })}
          </div>
        ) : (
          ""
        )}
      </div>
    </div>
  );
}
