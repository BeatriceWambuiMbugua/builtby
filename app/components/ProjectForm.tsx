"use client";
import { SessionInterface } from "@/common.types";
import Image from "next/image";
import { ChangeEvent, useState } from "react";
import FormField from "./FormField";
import CustomMenu from "./CustomMenu";
import { categoryFilters } from "@/constants";

type Props = {
  type: string;
  session: SessionInterface;
};

const ProjectForm = ({ type, session }: Props) => {
  const handleFormSubmit = (e: React.FormEvent) => {};
  const handleChangeImage = (e: ChangeEvent<HTMLInputElement>) => {
    e.preventDefault(); // to prevent browser's reloading
    const file = e.target.files?.[0];
    if (!file) return;
    if (!file.type.includes("image")) {
      return alert("Please upload an image file");
    }

    const reader = new FileReader(); 

    reader.readAsDataURL(file);

    reader.onload= () =>{
      const result = reader.result as string;
      handleStateChange("image", result)
    }
  };
  const handleStateChange = (fieldName: string, value: string) => {
    setForm((prevState) => ({
      ...prevState,
      [fieldName]: value,
    }));
  };
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [form, setForm] = useState({
    image: "",
    title: "",
    description: "",
    githubUrl: "",
    liveSiteUrl: "",
    category: "",
  });
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
      <FormField
        title="Description"
        state={form.description}
        placeholder="Showcase and discover remarkable developer projects."
        setState={(value) => handleStateChange("description", value)}
      />
      <FormField
        type="url"
        title="Website URL"
        state={form.liveSiteUrl}
        placeholder="https://beatricewambuimbugua.vercel.app/"
        setState={(value) => handleStateChange("liveSiteUrl", value)}
      />
      <FormField
        type="url"
        title="Github URL"
        state={form.githubUrl}
        placeholder="https://github.com/BeatriceWambuiMbugua"
        setState={(value) => handleStateChange("githubUrl", value)}
      />

      {/* custom menu */}
      <CustomMenu
        title="Category"
        state={form.category}
        filters={categoryFilters}
        setState={(value) => handleStateChange("category", value)}
      />
      <div className="flexStart w-full">
        <button>Create</button>
      </div>
    </form>
  );
};

export default ProjectForm;
