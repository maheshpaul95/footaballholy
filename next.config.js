module.exports = {
  async redirects() {
    return [
      {
        source: "/",
        destination: "https://www.footaballholy.xyz/",
        permanent: true,
      },
      // {
      //   source: "/:slug",
      //   destination: "https://wwww.footaballholy.xyz/:slug",
      //   permanent: true,
      // },
    ];
  },
};
