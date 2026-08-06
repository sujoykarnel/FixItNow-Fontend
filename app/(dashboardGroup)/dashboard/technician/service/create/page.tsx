import React from "react";
import { CreateServiceForm } from "../../_components/CreateServiceForm";
import { getCategories } from "../../_actions/getCategories";

const CreateServicePage = async () => {
  const catetories = await getCategories();

  return (
    <>
      <div className="flex min-h-screen items-center justify-center">
        <div className=" w-full max-w-md spacy-y-6 rounded-lg border p-8 shadow-lg">
          <div className="space-y-2 text-center">
            <h1 className="text-3xl font-bold mb-2">Create Service</h1>
          </div>

          <CreateServiceForm categories={catetories.data} />
        </div>
      </div>
    </>
  );
};

export default CreateServicePage;
