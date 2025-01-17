import { Helmet } from "react-helmet";

const TestChat = () => {
  console.log("TestChat page rendered");
  
  return (
    <>
      <Helmet>
        <title>Test Chat Page</title>
      </Helmet>
      <div className="min-h-screen flex items-center justify-center bg-background">
        <h1 className="text-3xl font-bold">Test Chat Page</h1>
      </div>
    </>
  );
};

export default TestChat;