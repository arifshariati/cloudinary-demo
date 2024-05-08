import { UserButton } from "@clerk/nextjs";

const HomePage = () => {
  return (
    <>
      <section className="home">
        <h1>Home Page</h1>
        <UserButton afterSignOutUrl="/" />
      </section>
    </>
  );
};

export default HomePage;
