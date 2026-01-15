"use client";
import { useKeenSlider } from "keen-slider/react";

// import from 'keen-slider/react.es' for to get an ES module

export default function KeenSlider({
  className,
  children,
  currentSlide,
  setCurrentSlide,
  setLoaded,
  loaded,
}) {
  const [sliderRef, instanceRef] = useKeenSlider({
    initial: currentSlide,
    slideChanged(slider) {
      setCurrentSlide(slider.track.details.rel);
    },
    created() {
      setLoaded(true);
    },
  });
  return (
    <div className={className}>
      <div ref={sliderRef} className="keen-slider">
        {children}
      </div>
      {loaded && instanceRef.current && (
        <div className="dots mx-auto flex flex-row justify-center gap-4 p-4">
          {[
            ...Array(instanceRef.current.track.details.slides.length).keys(),
          ].map((idx) => {
            return (
              <button
                key={idx}
                onClick={() => {
                  instanceRef.current?.moveToIdx(idx);
                }}
                className={`h-4 w-4 cursor-pointer rounded-[2rem] ${currentSlide === idx ? "bg-(--primary-400)" : "bg-(--primary-600)"}`}
              ></button>
            );
          })}
        </div>
      )}
    </div>
  );
}
