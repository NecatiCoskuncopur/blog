const About = () => {
  return (
    <div className="min-h-screen flex items-center justify-center">
      <div className="max-w-2xl mx-auto p-3 text-center">
        <div>
          <h1 className="text-3xl font font-semibold text-center my-7">About Blog</h1>
          <div className="text-md text-gray-500 flex flex-col gap-6">
            <p>
              Welcome to our blog! Here, we share our passion for [Your Blog Topic], offering a unique blend of insights, stories, and tips that cater to
              enthusiasts and newcomers alike.
            </p>
            <p>
              <span className="font-semibold text-gray-900 dark:text-white">Our Mission: </span>To inspire and empower our readers by providing top-notch
              content that educates, entertains, and engages.
            </p>

            <p>
              <span className="font-semibold text-gray-900 dark:text-white">Our Vision:</span> To be your go-to source for [Your Blog Topic], where every
              article leaves you informed, inspired, and eager for more.
            </p>
            <p>
              We encourage you to leave comments on our posts and engage with other readers. You can like other people's comments and reply to them as well. We
              believe that a community of learners can help each other grow and improve.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
