import { useForm, Controller } from "react-hook-form";
import { Editor } from "@tinymce/tinymce-react";
import { ID } from "appwrite";
import { databases } from "../appwrite/Auth";
import Config from "../Config/Config";
import { useSelector } from "react-redux";
import { category } from "./subComponents/category";

export default function Create_Edit_Post() {
  const { control, register, handleSubmit } = useForm();
  const{databaseID,postcollectionID}=Config;
  const {user} =useSelector((state)=>state.auth)
  const onSubmit = async (data) => {
    try{
        const create_post_res =await databases.createDocument(
        databaseID,
        postcollectionID,
        ID.unique(),
        {
          Title: data.title,
          Content: data.content,
          Ispublished: !!data.ispublished,
          Userid:user.userId
        });
        console.log("create Post",create_post_res);
        }
    catch(error){
      console.log("Error While create Post",error)
    }
  };


  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <div className="flex flex-col w-10/12 shadow-2xl p-7">
        {/* Title */}
        <div className="flex flex-col my-2">
          <label htmlFor="title" className="text-xl font-bold">Title</label>
          <input
            id="title"
            className="border-2 rounded py-2"
            {...register("title", { required: true })}
          />
        </div>

        {/* Thumbnail */}
        <div className="flex flex-col my-2">
          <label htmlFor="thumbnail" className="text-xl font-bold">Thumbnail</label>
          <input
            type="file"
            id="thumbnail"
            {...register("thumbnail")}
            className="border-2 rounded py-2"
          />
        </div>

        {/* Category */}
          <div className="flex flex-col my-2">
            <label htmlFor="category" className="text-xl font-bold">Category</label>
            <select id="category" {...register("category")}>
            {
              category.map((item)=>(
                <option value={item} key={item}>{item}</option>
              ))
            }
            </select>
          </div>

        {/* Content with TinyMCE via Controller */}
        <div className="flex flex-col my-2">
          <label className="text-xl font-bold">Content</label>
            <Controller
  name="content"
  control={control}
  defaultValue=""
  rules={{ required: true }}
  render={({ field }) => (
    <Editor
      apiKey="6bb29fcbwbh5tmxgv3wm7wgvjm3mjl4cp30s28zkaescuaw7"
      init={{
        plugins: 'anchor autolink charmap codesample emoticons image link lists media searchreplace table visualblocks wordcount',
        toolbar: 'undo redo | blocks fontfamily fontsize | bold italic underline strikethrough | link image media table | align lineheight | numlist bullist indent outdent | emoticons charmap | removeformat',
      }}
      value={field.value}
      onEditorChange={field.onChange}
    />
  )}
/>

        </div>

        {/* Published Toggle */}
        <div className="flex items-center mt-4">
          <input
            type="checkbox"
            id="ispublished"
            {...register("ispublished")}
          />
          <label htmlFor="ispublished" className="ml-2">
            Do You Want To Publish Your Blog?
          </label>
        </div>

        {/* Submit */}
        <button
          type="submit"
          className="border-2 py-2 px-3 rounded border-gray-500 mt-4"
        >
          Submit
        </button>
      </div>
    </form>
  );
}
