"use client";

import { useRouter } from "next/navigation";
import Box from "@mui/material/Box";
import Stepper from "@mui/material/Stepper";
import Step from "@mui/material/Step";
import StepButton from "@mui/material/StepButton";

type StepItem = {
  slug: string;
  title: string;
};

type LearningPathStepperProps = {
  course: string;
  steps: StepItem[];
  activeSlug: string;
};

export default function LearningPathStepper({
  course,
  steps,
  activeSlug,
}: LearningPathStepperProps) {
  const router = useRouter();
  const activeStep = Math.max(
    0,
    steps.findIndex((step) => step.slug === activeSlug)
  );

  return (
    <Box sx={{ width: "100%", overflowX: "auto", pb: 1 }}>
      <Stepper nonLinear activeStep={activeStep} alternativeLabel>
        {steps.map((step) => (
          <Step key={step.slug}>
            <StepButton
              color="inherit"
              onClick={() => router.push(`/learn/${course}/${step.slug}`)}
            >
              {step.title}
            </StepButton>
          </Step>
        ))}
      </Stepper>
    </Box>
  );
}
