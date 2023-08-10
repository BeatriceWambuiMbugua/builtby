"use client";
import { SessionInterface } from "@/common.types";
import Image from "next/image";
import { ChangeEvent } from "react";
import FormField from "./FormField";

type Props = {
  type: string;
  session: SessionInterface;
};

const ProjectForm = ({ type, session }: Props) => {
  const handleFormSubmit = (e: React.FormEvent) => {};
  const handleChangeImage = (e: ChangeEvent<HTMLInputElement>) => {};
  const handleStateChange = (fieldName: string, value: string) => {};
  const form = {
    image: "",
    title: "",
  };
  return (
    <form onSubmit={handleFormSubmit} className="flexStart form">
      <div className="flexStart form_image-container">
        <label className="flexCenter form_image-label" htmlFor="poster">
          {!form.image && "Choose a poster for your image"}
        </label>
        <input
          className="form_image-input"
          id="image"
          type="file"
          accept="image/*"
          required={type === "create"}
          onChange={handleChangeImage}
        />
        {form.image && (
          <Image
            src={form?.image}
            className="sm:p-10 z-10 object-contain"
            alt="Project Poster"
            fill
          />
        )}
      </div>

      <FormField
        title="Title"
        state={form.title}
        placeholder="BuiltBy"
        setState={(value) => handleStateChange("title", value)}
      />
    </form>
  );
};

export default ProjectForm;
