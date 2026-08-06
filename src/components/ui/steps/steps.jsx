import CircledNumber from "@/components/ui/circled-number.jsx";
import { SectionType } from "@/utility/constants/theme";

/**
 * Renders a vertical sequence of numbered steps.
 * @param {object} props - Component props.
 * @param {string} [props.sectionType=SectionType.light] - Theme variant for step numbers.
 * @param {Array<{id: string|number, title: React.ReactNode, body: React.ReactNode}>} props.steps - Step content.
 * @returns {React.JSX.Element} The numbered steps.
 */
export default function Steps({ sectionType = SectionType.light, steps }) {
  return (
    <div className="flex flex-col gap-8">
      {steps.map((step, index) => (
        <div key={index} className="flex gap-4 sm:gap-8">
          <CircledNumber number={step.id} sectionType={sectionType} />
          <div className="flex flex-col gap-4">
            <h3 className="text-2xl font-semibold">{step.title}</h3>
            <div>{step.body}</div>
          </div>
        </div>
      ))}
    </div>
  );
}
