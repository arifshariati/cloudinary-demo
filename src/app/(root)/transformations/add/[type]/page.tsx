import Header from "@/components/shared/Header";
import TransformationForm from "@/components/shared/TransformationForm";
import { transformationTypes } from "@/constants";
import { getUserById } from "@/lib/actions/user.actions";
import { auth } from "@clerk/nextjs/server";
import { redirect } from "next/navigation";

const AddTransformationTypePage = async ({ params: { type } }: SearchParamProps) => {
  const { title, subTitle, type: tType } = transformationTypes[type];
  const { userId } = auth();

  if (!userId) redirect("/sign-in");

  const user = await getUserById(userId);
  return (
    <>
      <Header title={title} subTitle={subTitle} />
      <section>
        <TransformationForm action="Add" userId={user._id} type={tType as TransformationTypeKey} creditBalance={user.creditBalance} />
      </section>
    </>
  );
};

export default AddTransformationTypePage;
