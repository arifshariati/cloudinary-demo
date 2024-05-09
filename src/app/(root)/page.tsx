import { Collection } from "@/components/shared/Collection";
import { navLinks } from "@/constants";
import { getAllImages } from "@/lib/actions/image.actions";
import Image from "next/image";
import Link from "next/link";

const HomePage = async ({ searchParams }: SearchParamProps) => {
  const page = Number(searchParams?.page || 1);
  const searchQuery = (searchParams?.query as string) || "";
  const images = await getAllImages({ page, searchQuery });
  return (
    <>
      <section className="home">
        <h1 className="home-heading">Are you ready to test cloudinary 🚀</h1>
        <ul className="flex-center w-full gap-20">
          {navLinks.slice(1, 5).map(({ icon, route, label }) => (
            <Link key={route} href={route} className="flex-center flex-col gap-2">
              <li className="flex-center w-fit rounded-full bg-white border-solid border-dark-600/10 border-2  p-4">
                <Image src={icon} alt={`${label} icon`} width={24} height={24} />
              </li>
              <p className="p-14-medium text-center text-dark-600">{label}</p>
            </Link>
          ))}
        </ul>
      </section>
      <section className="sm:mt-12">
        <Collection hasSearch={true} images={images?.data} totalPages={images?.totalPage} page={page} />
      </section>
    </>
  );
};

export default HomePage;
