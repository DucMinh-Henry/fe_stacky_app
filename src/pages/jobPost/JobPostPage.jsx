import React from "react";
import { Form } from "@/components/ui/form";
import Panel from "@/components/panel/Panel";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import Button from "@/components/button/Button";
import NavbarEmployer from "@/components/navbarEmployer/NavbarEmployer";
import FormBasicInfo from "./FormBasicInfo";
import { postJobSchema } from "@/constants/validationFormPostJob";
import FormRequirement from "./FormRequirement";
import FormLanguageAbility from "./FormLanguageAbility";
import FormBenefit from "./FormBenefit";
import FormJobDescription from "./FormJobDescription";
import FormApllyDeadline from "./FormApllyDeadline";

const JobPostPage = () => {
  const form = useForm({
    resolver: zodResolver(postJobSchema),
    defaultValues: {
      jobImage: null,
      jobTitle: "",
      typeOfWork: "",
      location: "",
      jobSalary: "",
      candidatesLimit: 0,
      educationLevel: "",
      workExperience: "",
      requiredIndustry: "",
      certificateRequired: "",
      professionalSkills: "",
      languages: [{ language: "", proficiency: "" }],
      jobBenefit: "",
      leavePolicy: "",
      jobDescription: "",
      workEnvironment: "",
      applicationDeadline: null,
      jobSchedule: null,
    },
  });

  const onSubmit = (data) => {
    postJobSchema.parse(data); // Validate the form data
    const { jobImage, ...restData } = data;

    console.log("Form Data:", data);
  };
  return (
    <div>
      <div className="page-container relative mt-5">
        {/* Panel section */}
        <Panel
          title={"Tạo tin tuyển dụng"}
          children={
            "Điền thông tin vị trí tuyển dụng và các yêu cầu công việc cần thiết."
          }
          className={"sticky top-[84px] z-50"}
        />
        <div className="custom-panel"></div>
        <div className="grid grid-cols-12 gap-5">
          <div className="sticky top-[208px] left-0 h-[calc(100vh-208px)] overflow-y-auto grid col-start-1 col-end-4 border bg-secondary rounded-xl scrollbar fixed-navbar">
            <NavbarEmployer />
          </div>
          {/* Form section */}
          <div className="grid col-start-4 col-end-13 w-full gap-5">
            <Form {...form}>
              <form
                className="space-y-5 my-10 w-full"
                onSubmit={form.handleSubmit(onSubmit)}
              >
                <FormBasicInfo form={form} />
                <FormRequirement form={form} />
                <FormLanguageAbility form={form} />
                <FormBenefit form={form} />
                <FormJobDescription form={form} />
                <FormApllyDeadline form={form} />
                <div className="flex justify-center">
                  <Button
                    kind="primary"
                    className="w-fit px-10 disabled:opacity-50"
                    type="submit"
                  >
                    Lưu CV
                  </Button>
                </div>
              </form>
            </Form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default JobPostPage;
