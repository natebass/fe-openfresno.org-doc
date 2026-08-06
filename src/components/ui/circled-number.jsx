import { SectionType } from "@/utility/constants/theme";
import { forwardRef } from "react";

/**
 * Renders a themed circular number and forwards its root element ref.
 * @param {object} props - Component props.
 * @param {number} [props.number] - Number displayed in the circle.
 * @param {string} [props.sectionType=SectionType.light] - Theme variant for the circle.
 * @param {React.ForwardedRef<HTMLDivElement>} ref - Ref forwarded to the root div.
 * @returns {React.JSX.Element} The circular number.
 */
const CircledNumber = forwardRef(function CircledNumber(
  { number, sectionType = SectionType.light },
  ref,
) {
  return (
    <div ref={ref} className={`circled-number app-color--${SectionType.toColor(sectionType)}`}>
      {number}
    </div>
  );
});

export default CircledNumber;
